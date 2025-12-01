import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'small' | 'medium' | 'large';
  onClick?: () => void;
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
}) => {
  return (
    <>
      <button
        className={`btn btn-${variant} btn-${size}`}
        onClick={onClick}
        disabled={disabled}
      >
        {children}
      </button>
      <style jsx>{`
        .btn {
          display: inline-block;
          padding: 12px 24px;
          border: none;
          border-radius: 4px;
          font-weight: bold;
          cursor: pointer;
          transition: all 0.3s ease;
          text-align: center;
        }
        .btn:disabled {
          opacity: 0.5;
          cursor: not-allowed;
        }
        .btn-small {
          padding: 8px 16px;
          font-size: 12px;
        }
        .btn-medium {
          padding: 12px 24px;
          font-size: 14px;
        }
        .btn-large {
          padding: 16px 32px;
          font-size: 16px;
        }
        .btn-primary {
          background: #bf0000;
          color: white;
        }
        .btn-primary:hover:not(:disabled) {
          background: #a00000;
        }
        .btn-secondary {
          background: #666;
          color: white;
        }
        .btn-secondary:hover:not(:disabled) {
          background: #555;
        }
        .btn-outline {
          background: transparent;
          color: #bf0000;
          border: 2px solid #bf0000;
        }
        .btn-outline:hover:not(:disabled) {
          background: #bf0000;
          color: white;
        }
      `}</style>
    </>
  );
};

export default Button;
