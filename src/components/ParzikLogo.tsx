import React from 'react';

export function ParzikLogo({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 500 500"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect x="100" y="100" width="300" height="60" />
      <rect x="100" y="220" width="300" height="60" />
      <path d="M100 340 L400 340 L300 400 L100 400 Z" />
    </svg>
  );
}