import React, { useEffect, useMemo, useState, Suspense } from 'react';
import styled from 'styled-components';
import AllImports from '../imports/AllImports';
import ComponentLivePreview from './LivePreview';

const Layout = styled.div`
  display: flex;
  gap: 16px;
  align-items: flex-start;
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
  max-width: 1200px;    /* <-- center + constrain overall width */
  margin: 0 auto;

  @media (max-width: 900px) {
    flex-direction: column;
    padding: 6px;
    gap: 12px;
    max-width: 100%;
  }
`;

/* Sidebar */
const Sidebar = styled.div`
  width: 260px;         /* <-- fixed sidebar width */
  min-width: 220px;
  max-width: 320px;
  background: #0f1724;
  color: #cbd5e1;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 1px 4px rgba(2,6,23,0.3);
  box-sizing: border-box;
  flex-shrink: 0;
  max-height: calc(100vh - 160px);
  overflow: auto;

  @media (max-width: 900px) {
    width: 100%;
    display: flex;
    overflow-x: auto;
    max-height: none;
    padding: 8px;
  }
`;

const SideItem = styled.button`
  display: block;
  width: 100%;
  text-align: left;
  background: transparent;
  color: inherit;
  border: none;
  padding: 10px 8px;
  margin-bottom: 6px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: 600;
  transition: background .12s ease;
  &:hover { background: rgba(255,255,255,0.02); }
  &:focus { outline: 2px solid rgba(66,153,225,0.3); }
  ${({ active }) => active && `background: rgba(66,153,225,0.12); color: white;`}

  @media (max-width: 900px) {
    display: inline-flex;
    min-width: 140px;
    margin-right: 8px;
    margin-bottom: 0;
    white-space: nowrap;
    align-items: center;
    justify-content: center;
  }
`;

/* Panel & Content */
const Panel = styled.div`
  flex: 1;
  background: white;
  border-radius: 8px;
  padding: 16px;
  min-height: 320px;
  box-shadow: 0 1px 6px rgba(2,6,23,0.06);
  box-sizing: border-box;
  /* keep panel from growing beyond layout */
  max-width: calc(100% - 260px);
`;

const ContentGrid = styled.div`
  display: grid;
  gap: 12px;
  grid-template-columns: 520px 1fr; /* <-- set preview column width */
  align-items: start;

  @media (max-width: 1200px) {
    grid-template-columns: 480px 1fr;
  }

  @media (max-width: 1100px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const PreviewBox = styled.div`
  background: #f8fafc;
  border-radius: 8px;
  padding: 12px;
  min-height: 220px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  width: 100%; /* ensure it uses the grid column width */
`;

const SourceBlock = styled.pre`
  margin-top: 0;
  background: #0f1724;
  color: #e6eef8;
  padding: 12px;
  border-radius: 6px;
  max-height: 60vh;
  overflow: auto;
  white-space: pre-wrap;
  box-sizing: border-box;
`;

/* Small controls */
const ControlsRow = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 12px;
  margin-bottom: 12px;
  align-items: center;
`;

const ToggleBtn = styled.button`
  background: transparent;
  color: #94a3b8;
  border: 1px solid rgba(255,255,255,0.04);
  padding: 6px 8px;
  border-radius: 6px;
  cursor: pointer;
  &:hover { color: white; }
`;

export default function ImportsComponents({ importedComponents }) {
  const registry = Array.isArray(AllImports) && AllImports.length ? AllImports : (Array.isArray(importedComponents) ? importedComponents : []);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const selected = registry[selectedIndex] || null;
  const [sourceText, setSourceText] = useState(null);
  const [loadError, setLoadError] = useState(null);

  // lazy component for file entries
  const LazyComponent = useMemo(() => {
    setLoadError(null);
    setSourceText(null);
    if (!selected) return null;

    if (selected.Component) {
      return selected.Component;
    }

    if (selected.file && typeof selected.file === 'string') {
      const fileName = selected.file;
      return React.lazy(() =>
        import(/* @vite-ignore */ `../imports/${fileName}`)
          .then((mod) => ({ default: mod.default || mod }))
          .catch((err) => {
            setLoadError(`Failed to load ${fileName}: ${err.message || err}`);
            return { default: () => <div style={{ padding: 12 }}>Unable to load component.</div> };
          })
      );
    }

    return null;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIndex, registry]);

  useEffect(() => {
    let mounted = true;
    async function fetchSource() {
      if (!selected) {
        setSourceText(null);
        return;
      }
      if (!selected.file) {
        setSourceText(selected.code || null);
        return;
      }

      const file = selected.file;
      const candidates = [
        `/src/imports/${file}`,
        `/imports/${file}`,
        `${window.location.origin}/src/imports/${file}`,
      ];

      for (const url of candidates) {
        try {
          const res = await fetch(url);
          if (!res.ok) continue;
          const txt = await res.text();
          if (mounted) setSourceText(txt);
          return;
        } catch {
          // try next
        }
      }

      if (mounted) setSourceText(selected.code || 'Source not available');
    }

    fetchSource();
    return () => { mounted = false; };
  }, [selected]);

  if (!registry || !registry.length) {
    return (
      <div style={{ padding: 24, background: '#f8fafc', borderRadius: 8 }}>
        <h3>No imports found</h3>
        <p>Ensure src/imports/AllImports.jsx exports an array of entries with {`{ name, file }`} or inline {`{ name, code }`}.</p>
      </div>
    );
  }

  return (
    <Layout>
      {!sidebarCollapsed && (
        <Sidebar aria-label="Imported components">
          {registry.map((it, i) => (
            <SideItem
              key={it.id || it.name || i}
              active={i === selectedIndex}
              onClick={() => { setSelectedIndex(i); if (window.innerWidth <= 900) setSidebarCollapsed(true); }}
            >
              {it.name || it.file || `Import ${i + 1}`}
            </SideItem>
          ))}
        </Sidebar>
      )}

      <Panel>
        <ControlsRow>
          <div>
            <h2 style={{ margin: 0 }}>{selected?.name || selected?.file || 'Preview'}</h2>
            <div style={{ color: '#6b7280', fontSize: 13 }}>{selected?.id || ''}</div>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <ToggleBtn onClick={() => setSidebarCollapsed((s) => !s)} aria-pressed={sidebarCollapsed}>
              {sidebarCollapsed ? 'Show list' : 'Hide list'}
            </ToggleBtn>
          </div>
        </ControlsRow>

        <ContentGrid>
          <PreviewBox>
            {selected?.code ? (
              <ComponentLivePreview code={selected.code} height={Math.max(240, Math.min(520, window.innerHeight * 0.45))} />
            ) : (selected?.file && sourceText) ? (
              <ComponentLivePreview code={sourceText} height={Math.max(240, Math.min(520, window.innerHeight * 0.45))} />
            ) : selected?.Component ? (
              <Suspense fallback={<div>Loading preview...</div>}>
                <selected.Component />
              </Suspense>
            ) : LazyComponent ? (
              <Suspense fallback={<div>Loading preview...</div>}>
                {typeof LazyComponent === 'function' ? <LazyComponent /> : <div>Unable to render preview</div>}
              </Suspense>
            ) : (
              <div style={{ padding: 12, color: '#475569' }}>No preview available for this item</div>
            )}
          </PreviewBox>

          <div>
            <h4 style={{ marginTop: 0 }}>Source</h4>
            <SourceBlock>
              <code>{loadError ? loadError : (sourceText || 'Source not available')}</code>
            </SourceBlock>
          </div>
        </ContentGrid>
      </Panel>
    </Layout>
  );
}