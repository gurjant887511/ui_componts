import React, { useState, useEffect } from 'react';
import { LiveProvider, LiveEditor, LivePreview, LiveError } from "react-live";
import { motion, AnimatePresence } from "framer-motion";

export default function ComponentLivePreview({ code }) {
  const processCode = (code) => {
    let src = code;

    // Remove trailing export default statements like: export default Name;
    const exportIdentMatch = src.match(/export\s+default\s+([A-Za-z_$][\w$]*)\s*;?/);
    if (exportIdentMatch) {
      // If exported identifier, remove that export line (component already defined earlier)
      src = src.replace(exportIdentMatch[0], '');
    } else if (/\bexport\s+default\b/.test(src)) {
      // If export default is an expression (arrow / function / class), convert to a const
      src = src.replace(/export\s+default\s+/, 'const __DefaultExport = ');
    }

    // Remove any other trailing export default lines like "export default () => {}"
    src = src.replace(/export\s+default\s*;?/g, '');

    // Try to detect component name:
    const nameMatchers = [
      src.match(/const\s+([A-Za-z_$][\w$]*)\s*=\s*\(/),              // const X = (
      src.match(/const\s+([A-Za-z_$][\w$]*)\s*=\s*async\s*\(/),      // const X = async (
      src.match(/const\s+([A-Za-z_$][\w$]*)\s*=\s*[\w$.]*=>/),       // const X = () => or const X = some=> 
      src.match(/function\s+([A-Za-z_$][\w$]*)\s*\(/),               // function X(
      src.match(/class\s+([A-Za-z_$][\w$]*)\s+/),                    // class X
      src.match(/const\s+([A-Za-z_$][\w$]*)\s*=/),                   // fallback const X =
    ];

    let componentName = null;
    for (const m of nameMatchers) {
      if (m && m[1]) {
        componentName = m[1];
        break;
      }
    }

    // If we found earlier exported identifier, prefer it
    if (!componentName && exportIdentMatch) componentName = exportIdentMatch[1];

    // If still not found but we defined __DefaultExport, use that
    if (!componentName && /const\s+__DefaultExport\b/.test(src)) componentName = '__DefaultExport';

    // Final fallback
    if (!componentName) componentName = 'PreviewComponent';

    // Build final wrapped code ensuring the component exists before render
    return `
${src}

// Ensure the component exists and render it
function __LiveWrapper() {
  try {
    const C = typeof ${componentName} !== 'undefined' ? ${componentName} : typeof __DefaultExport !== 'undefined' ? __DefaultExport : null;
    return C ? <C /> : null;
  } catch (e) {
    return null;
  }
}

render(<__LiveWrapper />);
    `;
  };

  const scope = {
    React,
    useState: React.useState,
    useEffect: React.useEffect,
    motion,
    AnimatePresence,
    render: (element) => element
  };

  return (
    <LiveProvider 
      code={processCode(code)} 
      scope={scope} 
      noInline={true}
    >
      <div className="space-y-4">
        <div className="relative p-4 bg-gradient-to-br from-slate-950 via-purple-900 to-slate-900 rounded-lg min-h-[600px]">
          <style>{`
            @import url('https://cdn.tailwindcss.com');
            
            .backdrop-blur-xl {
              backdrop-filter: blur(24px);
            }
            
            .perspective {
              perspective: 1000px;
            }
            
            [class*='bg-[conic-gradient'] {
              background-image: var(--tw-gradient-stops);
              background-size: var(--tw-gradient-size, 100%);
              background-position: var(--tw-gradient-position, center);
            }
          `}</style>
          <div className="perspective">
            <LivePreview />
          </div>
          <LiveError className="text-red-500 mt-2 p-4 rounded-lg" />
        </div>
        <LiveEditor 
          className="rounded-lg overflow-hidden"
          style={{ 
            backgroundColor: '#1a1a1a',
            fontSize: '14px',
            fontFamily: 'monospace'
          }}
        />
      </div>
    </LiveProvider>
  );
}