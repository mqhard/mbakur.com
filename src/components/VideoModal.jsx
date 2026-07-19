import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const VideoModal = ({ isOpen, onClose, youtubeId, isVertical, titleKey, descKey }) => {
  const { t } = useTranslation();
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Handle Escape key to close
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && youtubeId && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          style={{
            position: 'fixed',
            top: 0, left: 0, width: '100vw', height: '100vh',
            backgroundColor: 'rgba(0,0,0,0.92)',
            backdropFilter: 'blur(15px)',
            WebkitBackdropFilter: 'blur(15px)',
            zIndex: 9999,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
          onClick={onClose}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '30px',
              right: '30px',
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '50%',
              width: '50px', height: '50px',
              display: 'flex', justifyContent: 'center', alignItems: 'center',
              cursor: 'pointer',
              color: '#fff',
              zIndex: 10000,
              transition: 'all 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(255,0,127,0.3)';
              e.currentTarget.style.borderColor = 'rgba(255,0,127,0.8)';
              e.currentTarget.style.transform = 'scale(1.1)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
              e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <X size={24} />
          </button>

          {/* Video & Content Container */}
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300, delay: 0.1 }}
            style={{
              width: isVertical ? 'min(450px, 90vw)' : 'min(1200px, 90vw)',
              maxHeight: '90vh',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
            }}
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the video
          >
            {/* Video Frame */}
            <div style={{
              width: '100%',
              aspectRatio: isVertical ? '9/16' : '16/9',
              backgroundColor: '#050505',
              borderRadius: '16px',
              overflow: 'hidden',
              boxShadow: '0 30px 60px -12px rgba(0, 0, 0, 0.8), 0 0 40px rgba(255, 0, 127, 0.15)',
              border: '1px solid rgba(255,255,255,0.05)',
              flexShrink: 0
            }}>
              <iframe
                width="100%"
                height="100%"
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1&color=white`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>

            {/* Description Area */}
            {descKey && (
              <div style={{
                background: 'rgba(0,0,0,0.6)',
                backdropFilter: 'blur(10px)',
                borderRadius: '16px',
                padding: '1.5rem 2rem',
                border: '1px solid rgba(255,255,255,0.05)',
                color: '#fff',
                overflowY: 'auto'
              }}>
                {titleKey && (
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--color-magenta)' }}>
                    {t(titleKey)}
                  </h3>
                )}
                <p style={{ fontSize: '1.1rem', lineHeight: 1.8, whiteSpace: 'pre-wrap', color: 'rgba(255,255,255,0.9)' }}>
                  {t(descKey)}
                </p>
              </div>
            )}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default VideoModal;
