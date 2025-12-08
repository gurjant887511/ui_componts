import React, { useState } from 'react';
import MainLayout from '../layouts/MainLayout';
import { Sandpack } from "@codesandbox/sandpack-react";

export default function ImportsPage({ importedComponents = [] }) {
  const [selectedImportedId, setSelectedImportedId] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);
  const [activeCategory, setActiveCategory] = useState(null);

  // Built-in components (minimal preview code strings)
  const builtInComponents = {
    "builtin:HeroCard": {
      name: "HeroCard (builtin)",
      code: `import React from 'react';\nexport default function HeroCard(){ return <div style={{padding:20}}>HeroCard preview</div>; }`
    },
    "builtin:Lens": {
      name: "Lens (builtin)",
      code: `import React from 'react';\nexport default function Lens(){ return <div style={{padding:20}}>Lens preview</div>; }`
    }
  };

  const categories = ["Buttons", "Cards", "Forms", "Text Effects"];

  const selectorOptions = [
    ...importedComponents.map((c) => ({ 
      id: c._id || c.id || c.name, 
      label: c.name || c.packageName || c._id || c.id, 
      item: c 
    })),
    { id: "builtin:HeroCard", label: builtInComponents["builtin:HeroCard"].name, item: "builtin:HeroCard" },
    { id: "builtin:Lens", label: builtInComponents["builtin:Lens"].name, item: "builtin:Lens" }
  ];

  const getOptionsForCategory = (cat) => {
    const keyword = cat.toLowerCase();
    return selectorOptions.filter((opt) => {
      const label = (opt.label || "").toLowerCase();
      if (keyword === "buttons") return label.includes("button") || label.includes("glass");
      if (keyword === "cards") return label.includes("card") || label.includes("hero");
      if (keyword === "forms") return label.includes("form");
      if (keyword === "text effects") return label.includes("text") || label.includes("hover");
      return false;
    });
  };

  const createSandpackForImported = (compOrId) => {
    if (typeof compOrId === "string" && compOrId.startsWith("builtin:")) {
      const builtin = builtInComponents[compOrId];
      return {
        template: "react",
        files: {
          "/Component.js": builtin.code,
          "/App.js": `import React from "react";
import Component from "./Component";

export default function App() {
  return (
    <div style={{ padding: 40 }}>
      <Component />
    </div>
  );
}`
        },
        options: { showLineNumbers: true, showInlineErrors: true }
      };
    }

    const comp = compOrId;
    const files = {};
    
    if (comp?.code) {
      files["/Component.js"] = comp.code;
    }
    
    files["/App.js"] = `import React from "react";
${comp?.code ? 'import Component from "./Component";' : ''}

export default function App() {
  return (
    <div style={{ padding: 40 }}>
      ${comp?.code ? '<Component />' : '<div>Select a component to preview</div>'}
    </div>
  );
}`;

    return {
      template: "react",
      files,
      options: { showLineNumbers: true, showInlineErrors: true }
    };
  };

  return (
    <MainLayout>
      <div className="space-y-6">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold">Imported Components</h1>
          <button
            onClick={() => setShowSidebar(prev => !prev)}
            className="px-4 py-2 bg-slate-800 text-white rounded hover:bg-slate-700"
          >
            Browse Components
          </button>
        </div>

        {showSidebar && (
          <div className="fixed left-0 top-16 w-64 h-[80vh] bg-white dark:bg-slate-900 border-r shadow-lg z-50 p-4">
            <h4 className="font-semibold mb-2">Categories</h4>
            <ul className="space-y-2 mb-4">
              {categories.map((cat) => (
                <li key={cat}>
                  <button
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full text-left px-2 py-1 rounded ${
                      activeCategory === cat ? "bg-slate-200 dark:bg-slate-700" : "hover:bg-slate-100 dark:hover:bg-slate-800"
                    }`}
                  >
                    {cat}
                  </button>
                </li>
              ))}
            </ul>

            <div className="space-y-2">
              <h5 className="text-sm font-medium">Components</h5>
              <div className="max-h-[50vh] overflow-y-auto space-y-1">
                {activeCategory ? (
                  getOptionsForCategory(activeCategory).map((opt) => (
                    <button
                      key={opt.id}
                      onClick={() => {
                        setSelectedImportedId(opt.id);
                        setShowSidebar(false);
                      }}
                      className="w-full text-left px-2 py-1 text-sm rounded hover:bg-slate-100 dark:hover:bg-slate-800"
                    >
                      {opt.label}
                    </button>
                  ))
                ) : (
                  <p className="text-sm text-slate-500">Select a category</p>
                )}
              </div>
            </div>

            <button
              onClick={() => setShowSidebar(false)}
              className="mt-4 px-2 py-1 text-sm text-slate-600"
            >
              Close
            </button>
          </div>
        )}

        <div className="rounded-lg border overflow-hidden">
          <Sandpack {...createSandpackForImported(
            selectedImportedId?.startsWith?.("builtin:")
              ? selectedImportedId
              : importedComponents.find(c => (c._id || c.id || c.name) === selectedImportedId)
          )} />
        </div>
      </div>
    </MainLayout>
  );
}