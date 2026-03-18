import React from 'react';
import { motion } from 'framer-motion';

const BackgroundAnimation = () => {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1, overflow: 'hidden' }}>
      <div className="bg-blob bg-blob-1" />
      <div className="bg-blob bg-blob-2" />
      <svg width="100%" height="100%" style={{ position: 'absolute', opacity: 0.1 }}>
         <defs>
          <pattern id="hexagons" width="40" height="69.282" patternUnits="userSpaceOnUse" patternTransform="scale(1.5)">
            <path d="M 40 0 L 20 11.547 L 0 0 L 0 23.094 L 20 34.641 L 40 23.094 Z M 0 34.641 L 20 46.188 L 0 57.735 L 0 80.829 L 20 92.376 L 40 80.829 L 40 57.735 L 20 46.188 Z" fill="none" stroke="var(--accent-cyan)" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>
    </div>
  );
};

export default BackgroundAnimation;
