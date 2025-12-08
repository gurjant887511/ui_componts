import React from 'react';
import GlassButton from './GlassButton';
import CyberGlowInfoCard from './CyberGlowInfoCard';

// NOTE: copy-paste the real source if you have different content.
// These strings are examples — replace with actual file text if you want exact source to show.
const glassButtonCode = `import React from 'react';
import styled from 'styled-components';

const GlassButton = styled.button\`
  background: rgba(255,255,255,0.2);
  padding: 10px 20px;
  border-radius: 8px;
  border: 1px solid rgba(255,255,255,0.3);
  color: white;
  font-size: 16px;
  backdrop-filter: blur(5px);
  transition: all 0.3s;
  
  &:hover {
    background: rgba(255,255,255,0.3);
    transform: translateY(-2px);
  }
\`;

export default function Button({children, onClick}) {
  return <GlassButton onClick={onClick}>{children}</GlassButton>;
}
`;

const cyberGlowCode = `/* CyberGlowInfoCard example */
import React from 'react';
import './CyberGlowInfoCard.css';

export default function CyberGlowInfoCard({title, desc}) {
  return (
    <div className="cyber-card">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}
`;

// Ensure filenames match the files present in src/imports (e.g. AccordionDemo.jsx, GlassButton.jsx, Card.jsx)
const AllImports = [
  { id: 'glass-button', name: 'Glass Button', file: 'GlassButton.jsx' },
  { id: 'card', name: 'Card', file: 'Card.jsx' },
  { id: 'cyber-glow', name: 'Cyber Glow Info Card', file: 'CyberGlowInfoCard.jsx' },

  // Added: Modal demo (your IC components)
  {
    id: 'modal-demo',
    name: 'Modal Demo',
    file: 'ModalDemo.jsx'
  },
];

export default AllImports;