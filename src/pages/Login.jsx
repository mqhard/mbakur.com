import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { X, User, Briefcase, Mail, Lock, LogIn, UserPlus } from 'lucide-react';
import '../index.css';

export default function Login({ isModal, onClose }) {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const isRtl = i18n.language === 'ar';

  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('client'); // 'client' or 'freelancer'
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrorMsg('');

    try {
      if (isLogin) {
        const { error } = await supabase.auth.signInWithPassword({ email, password });
        if (error) throw error;
        navigate('/dashboard');
        if (isModal && onClose) onClose();
      } else {
        const { data, error } = await supabase.auth.signUp({ 
          email, 
          password,
          options: {
            data: { role } // Store the user role in their metadata
          }
        });
        if (error) throw error;
        
        if (data?.user?.identities?.length === 0) {
           setErrorMsg('This email is already registered. Try logging in.');
        } else {
           setErrorMsg('Check your email for the confirmation link!');
        }
      }
    } catch (err) {
      setErrorMsg(err.message || 'An error occurred during authentication.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={
      isModal ? {
        position: 'fixed',
        top: 0, left: 0, width: '100vw', height: '100vh',
        zIndex: 9999,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        background: 'rgba(0, 0, 0, 0.7)',
        backdropFilter: 'blur(10px)',
        padding: '1rem'
      } : {
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #0f0f15 0%, #1a1a2e 100%)',
        padding: '2rem'
      }
    }>
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="glass-panel"
        style={{
          width: '100%',
          maxWidth: '500px',
          padding: '3rem',
          borderRadius: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '2rem',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {isModal && onClose && (
          <button 
            onClick={onClose}
            style={{
              position: 'absolute',
              top: '20px',
              right: isRtl ? 'auto' : '20px',
              left: isRtl ? '20px' : 'auto',
              background: 'transparent',
              border: 'none',
              color: '#888',
              cursor: 'pointer',
              zIndex: 10
            }}
          >
            <X size={24} />
          </button>
        )}
        <div style={{ textAlign: 'center' }}>
          <h1 style={{ 
            fontSize: '2rem', 
            margin: '0 0 0.5rem 0',
            fontFamily: 'var(--font-primary)'
          }}>
            {isLogin ? 'Welcome Back' : 'Join Our Community'}
          </h1>
          <p style={{ color: 'var(--color-text-dim)', margin: 0 }}>
            {isLogin ? 'Enter your credentials to access your account' : 'Create an account to start your journey'}
          </p>
        </div>

        {errorMsg && (
          <div style={{
            background: 'rgba(255, 50, 50, 0.1)',
            border: '1px solid rgba(255, 50, 50, 0.3)',
            padding: '1rem',
            borderRadius: '10px',
            color: '#ff4444',
            textAlign: 'center',
            fontSize: '0.9rem'
          }}>
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleAuth} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          
          {!isLogin && (
            <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem' }}>
              <button
                type="button"
                onClick={() => setRole('client')}
                style={{
                  flex: 1,
                  padding: '1rem',
                  background: role === 'client' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                  border: `1px solid ${role === 'client' ? 'var(--color-accent)' : 'var(--color-glass-border)'}`,
                  borderRadius: '12px',
                  color: '#fff',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease'
                }}
              >
                <Briefcase size={24} color={role === 'client' ? 'var(--color-accent)' : '#888'} />
                <span style={{ fontSize: '0.9rem' }}>I am a Client</span>
              </button>
              
              <button
                type="button"
                onClick={() => setRole('freelancer')}
                style={{
                  flex: 1,
                  padding: '1rem',
                  background: role === 'freelancer' ? 'rgba(255, 255, 255, 0.1)' : 'transparent',
                  border: `1px solid ${role === 'freelancer' ? 'var(--color-cyan)' : 'var(--color-glass-border)'}`,
                  borderRadius: '12px',
                  color: '#fff',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '0.5rem',
                  transition: 'all 0.3s ease'
                }}
              >
                <User size={24} color={role === 'freelancer' ? 'var(--color-cyan)' : '#888'} />
                <span style={{ fontSize: '0.9rem' }}>I am a Freelancer</span>
              </button>
            </div>
          )}

          <div style={{ position: 'relative' }}>
            <Mail size={20} style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', [isRtl ? 'right' : 'left']: '15px', color: '#888' }} />
            <input 
              type="email" 
              placeholder="Email Address" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '15px',
                paddingLeft: isRtl ? '15px' : '45px',
                paddingRight: isRtl ? '45px' : '15px',
                background: 'rgba(0, 0, 0, 0.3)',
                border: '1px solid var(--color-glass-border)',
                borderRadius: '12px',
                color: '#fff',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border-color 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--color-accent)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--color-glass-border)'}
            />
          </div>

          <div style={{ position: 'relative' }}>
            <Lock size={20} style={{ position: 'absolute', top: '50%', transform: 'translateY(-50%)', [isRtl ? 'right' : 'left']: '15px', color: '#888' }} />
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '15px',
                paddingLeft: isRtl ? '15px' : '45px',
                paddingRight: isRtl ? '45px' : '15px',
                background: 'rgba(0, 0, 0, 0.3)',
                border: '1px solid var(--color-glass-border)',
                borderRadius: '12px',
                color: '#fff',
                fontSize: '1rem',
                outline: 'none',
                transition: 'border-color 0.3s ease'
              }}
              onFocus={(e) => e.target.style.borderColor = 'var(--color-accent)'}
              onBlur={(e) => e.target.style.borderColor = 'var(--color-glass-border)'}
            />
          </div>

          <button 
            type="submit" 
            disabled={loading}
            className="btn-primary"
            style={{ 
              width: '100%', 
              padding: '15px', 
              marginTop: '1rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            {loading ? (
              <span style={{ opacity: 0.7 }}>Processing...</span>
            ) : (
              <>
                {isLogin ? <LogIn size={20} /> : <UserPlus size={20} />}
                {isLogin ? 'Sign In' : 'Create Account'}
              </>
            )}
          </button>
        </form>

        <div style={{ display: 'flex', alignItems: 'center', margin: '1rem 0' }}>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
          <span style={{ margin: '0 15px', color: '#888', fontSize: '0.9rem' }}>OR CONTINUE WITH</span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <button
            type="button"
            onClick={() => setErrorMsg('Google login requires configuration in Supabase Dashboard first.')}
            style={{
              width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid var(--color-glass-border)',
              background: 'rgba(255,255,255,0.05)', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', transition: 'background 0.3s'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
          >
            <svg width="20" height="20" viewBox="0 0 24 24"><path fill="#fff" d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z"/></svg>
            Google
          </button>
          
          <button
            type="button"
            onClick={() => setErrorMsg('Phone verification requires Twilio/MessageBird configuration in Supabase.')}
            style={{
              width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid var(--color-glass-border)',
              background: 'rgba(255,255,255,0.05)', color: '#fff', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', transition: 'background 0.3s'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
            Phone Number (SMS)
          </button>

          <button
            type="button"
            onClick={() => setErrorMsg('WhatsApp login requires provider configuration in Supabase.')}
            style={{
              width: '100%', padding: '12px', borderRadius: '12px', border: '1px solid var(--color-glass-border)',
              background: 'rgba(37,211,102,0.1)', color: '#25D366', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', transition: 'background 0.3s'
            }}
            onMouseOver={(e) => e.currentTarget.style.background = 'rgba(37,211,102,0.2)'}
            onMouseOut={(e) => e.currentTarget.style.background = 'rgba(37,211,102,0.1)'}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.665.592 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z"/></svg>
            WhatsApp
          </button>
        </div>

        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <p style={{ color: '#888', margin: 0 }}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--color-accent)',
                cursor: 'pointer',
                fontWeight: 'bold',
                marginLeft: '5px',
                textDecoration: 'underline'
              }}
            >
              {isLogin ? 'Sign Up' : 'Log In'}
            </button>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
