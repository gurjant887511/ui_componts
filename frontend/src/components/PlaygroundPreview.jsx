import React, { useMemo } from 'react';
import { usePlaygroundStore } from '../store/usePlaygroundStore';
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live';

function PlaygroundPreview() {
  const {
    componentCode,
    primaryColor,
    secondaryColor,
    bgColor,
    textColor,
    spacing,
    borderRadius,
    layoutMode,
  } = usePlaygroundStore();

  const spacingMap = {
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
  };

  const borderRadiusMap = {
    sm: '0.375rem',
    md: '0.5rem',
    lg: '1rem',
    full: '9999px',
  };

  // Build preview style
  const previewStyle = {
    backgroundColor: bgColor,
    color: textColor,
    padding: spacingMap[spacing],
    borderRadius: borderRadiusMap[borderRadius],
    '--tw-primary': primaryColor,
    '--tw-secondary': secondaryColor,
  };

  // Prepare scope with utilities
  const scope = {
    React: React,
    // Theme colors available in component
    themeColors: {
      primary: primaryColor,
      secondary: secondaryColor,
      bg: bgColor,
      text: textColor,
    },
  };

  // Clean code by removing trailing export statements
  const cleanCode = useMemo(() => {
    let code = componentCode.trim();
    // Remove "export default" if present
    code = code.replace(/export\s+default\s+/g, '');
    return code;
  }, [componentCode]);

  return (
    <div className="bg-black/30 backdrop-blur border border-purple-500/20 rounded-lg overflow-hidden">
      <div className="bg-black/50 px-6 py-4 border-b border-gray-700">
        <h3 className="text-lg font-bold text-white flex items-center gap-2">
          <span className="text-xl">👁️</span> Live Preview
        </h3>
      </div>

      <div className="p-6">
        <LiveProvider code={cleanCode} scope={scope} noInline={false}>
          <div className="space-y-4">
            {/* Preview Container */}
            <div
              className="rounded-lg border border-gray-700 overflow-hidden min-h-64 flex items-center justify-center"
              style={previewStyle}
            >
              <div className="w-full h-full flex items-center justify-center">
                <LivePreview />
              </div>
            </div>

            {/* Error Display */}
            <div className="min-h-8">
              <LiveError className="bg-red-900/30 border border-red-500/30 text-red-400 p-4 rounded-lg text-sm font-mono" />
            </div>

            {/* Settings Info */}
            <div className="bg-gray-800/30 border border-gray-700 rounded-lg p-4 text-xs text-gray-300">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-400 font-semibold mb-2">🎨 Current Theme</p>
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-4 h-4 rounded"
                        style={{ backgroundColor: primaryColor }}
                      />
                      <span>Primary: {primaryColor}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div
                        className="w-4 h-4 rounded"
                        style={{ backgroundColor: secondaryColor }}
                      />
                      <span>Secondary: {secondaryColor}</span>
                    </div>
                  </div>
                </div>
                <div>
                  <p className="text-gray-400 font-semibold mb-2">📐 Layout Settings</p>
                  <div className="space-y-1">
                    <p>Layout: {layoutMode}</p>
                    <p>Spacing: {spacing}</p>
                    <p>Radius: {borderRadius}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Template Suggestions */}
            <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4 text-xs text-gray-300">
              <p className="font-semibold text-purple-300 mb-2">💡 Quick Templates</p>
              <p className="mb-3">Access theme colors with:</p>
              <code className="bg-black/50 block p-2 rounded mb-2 text-xs text-cyan-400 overflow-x-auto">
                {`// Use theme colors in your code
primaryColor: '${primaryColor}'
secondary: '${secondaryColor}'`}
              </code>
              <p className="text-xs text-gray-400">
                Use Tailwind classes like <code className="bg-black/50 px-1 rounded text-yellow-400">bg-gradient-to-r</code> for gradients!
              </p>
            </div>
          </div>
        </LiveProvider>
      </div>
    </div>
  );
}

export default PlaygroundPreview;
