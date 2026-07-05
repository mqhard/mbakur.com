import React from 'react';
import { motion } from 'framer-motion';

const GlassFrame = ({ children, style }) => {
  return (
    <div style={{ padding: '2rem 5%', position: 'relative', zIndex: 1, ...style }}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'relative',
          width: '100%',
          borderRadius: '50px',
          padding: '2px', // space for the neon border
          background: 'linear-gradient(135deg, rgba(0, 255, 255, 0.2), rgba(255, 0, 127, 0.2), rgba(0, 255, 0, 0.1))',
          boxShadow: '0 30px 100px rgba(0,0,0,0.8), 0 0 40px rgba(0, 255, 255, 0.1), inset 0 0 20px rgba(255,255,255,0.05)',
          overflow: 'hidden'
        }}
        className="futuristic-glass-frame"
      >
        {/* Inner Glass Background */}
        <div style={{
          position: 'relative',
          width: '100%',
          height: '100%',
          borderRadius: '48px',
          background: 'rgba(10, 10, 12, 0.6)', // 5-10% opacity equivalent visually against dark bg
          backdropFilter: 'blur(30px)',
          WebkitBackdropFilter: 'blur(30px)',
          overflow: 'hidden',
          boxShadow: 'inset 0 0 30px rgba(0,0,0,0.8)'
        }}>
          
          {/* Chromatic Aberration & Edge Highlights */}
          <div style={{
            position: 'absolute', inset: 0, pointerEvents: 'none',
            border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: '48px',
            boxShadow: 'inset 2px 0 10px rgba(0, 255, 255, 0.1), inset -2px 0 10px rgba(255, 0, 127, 0.1)'
          }} />

          {/* Dynamic Lighting Surface Reflections */}
          <motion.div
            animate={{ 
              backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'],
            }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            style={{
              position: 'absolute', inset: 0, pointerEvents: 'none', opacity: 0.15,
              background: 'radial-gradient(circle at center, rgba(255,255,255,0.8) 0%, transparent 20%)',
              backgroundSize: '200% 200%'
            }}
          />

          {children}

        </div>

        {/* Global style for hover effect on the frame */}
        <style>{`
          .futuristic-glass-frame:hover {
            box-shadow: 0 40px 120px rgba(0,0,0,0.9), 0 0 60px rgba(0, 255, 255, 0.2), 0 0 80px rgba(255, 0, 127, 0.2), inset 0 0 30px rgba(255,255,255,0.1) !important;
          }
          .futuristic-glass-frame {
            transition: box-shadow 0.5s cubic-bezier(0.22, 1, 0.36, 1);
          }
        `}</style>
      </motion.div>
    </div>
  );
};

export default GlassFrame;
