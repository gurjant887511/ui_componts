import React from 'react';
import styled from 'styled-components';

const ComponentShowcase = () => {
  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <GlassCard>
        <h3>Glass Card Component</h3>
        <p>This is a beautiful glass-morphic card with blur effect.</p>
      </GlassCard>

      <div>
        <NeonButton>Neon Button</NeonButton>
      </div>

      <MorphIcon>✨</MorphIcon>

      <FloatingTag>Floating Tag</FloatingTag>

      <TimelineStepper>
        <div className="step active">1</div>
        <div className="line"></div>
        <div className="step">2</div>
        <div className="line"></div>
        <div className="step">3</div>
      </TimelineStepper>
    </div>
  );
};

export default ComponentShowcase;
