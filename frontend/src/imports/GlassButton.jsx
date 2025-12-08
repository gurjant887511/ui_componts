import React from 'react';
import styled from 'styled-components';

const GlassButton = styled.button`
  // ...existing code stays the same...
`;

const Button = ({ 
  children, 
  size = 'medium', 
  theme = 'light', 
  color = null,
  onClick,
  ...props 
}) => {
  return (
    <GlassButton
      size={size}
      theme={theme}
      color={color}
      onClick={onClick}
      {...props}
    >
      {children}
    </GlassButton>
  );
};

export default Button;