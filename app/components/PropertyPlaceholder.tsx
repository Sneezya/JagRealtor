'use client';

import React from 'react';

interface PropertyPlaceholderProps {
  text: string;
  width?: number;
  height?: number;
}

const PropertyPlaceholder: React.FC<PropertyPlaceholderProps> = ({ 
  text, 
  width = 1920, 
  height = 1080 
}) => {
  return (
    <div 
      style={{ 
        width: '100%', 
        height: '100%', 
        backgroundColor: '#f3f4f6',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#6b7280',
        fontSize: '1.5rem',
        fontWeight: '500',
        textAlign: 'center',
        padding: '1rem'
      }}
    >
      {text}
    </div>
  );
};

export default PropertyPlaceholder; 