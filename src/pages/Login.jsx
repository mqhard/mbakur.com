import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { User, Briefcase, Mail, Lock, LogIn, UserPlus } from 'lucide-react';
import '../index.css';

export default function Login() {
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
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0f0f15 0%, #1a1a2e 100%)',
      padding: '2rem'
    }}>
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
                  border: `1px solid ${role === 'client' ? 'var(--color-magenta)' : 'var(--color-glass-border)'}`,
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
                <Briefcase size={24} color={role === 'client' ? 'var(--color-magenta)' : '#888'} />
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
              onFocus={(e) => e.target.style.borderColor = 'var(--color-magenta)'}
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
              onFocus={(e) => e.target.style.borderColor = 'var(--color-magenta)'}
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

        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <p style={{ color: '#888', margin: 0 }}>
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <button 
              onClick={() => setIsLogin(!isLogin)}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--color-magenta)',
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
