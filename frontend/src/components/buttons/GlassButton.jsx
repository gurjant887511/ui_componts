import React from 'react';
import styled from 'styled-components';

const GlassButton = styled.button`
  background: rgba(255, 255, 255, 0.2);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 12px;
  padding: ${({ size }) => (size === 'large' ? '16px 32px' : size === 'small' ? '8px 16px' : '12px 24px')};
  color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : '#333333')};
  font-size: ${({ size }) => (size === 'large' ? '18px' : size === 'small' ? '12px' : '14px')};
  font-weight: 600;
  cursor: pointer;
  backdrop-filter: blur(10px);
  box-shadow: 
    0 8px 32px rgba(0, 0, 0, 0.1),
    inset 0 1px 0 rgba(255, 255, 255, 0.2);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
    transform: translateY(-2px);
    box-shadow: 
      0 12px 40px rgba(0, 0, 0, 0.15),
      inset 0 1px 0 rgba(255, 255, 255, 0.3);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 
      0 4px 16px rgba(0, 0, 0, 0.1),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 0;
    height: 0;
    background: rgba(255, 255, 255, 0.5);
    border-radius: 50%;
    transform: translate(-50%, -50%);
    transition: width 0.6s, height 0.6s;
  }

  &:active::before {
    width: 300px;
    height: 300px;
  }

  ${({ color }) => color && `
    background: rgba(${color}, 0.2);
    border-color: rgba(${color}, 0.3);
    &:hover {
      background: rgba(${color}, 0.3);
    }
  `}
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