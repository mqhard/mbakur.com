import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { LogOut, User, Briefcase, Settings } from 'lucide-react';
import '../index.css';

export default function Dashboard() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSession = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        navigate('/login');
      } else {
        setUser(session.user);
      }
      setLoading(false);
    };

    fetchSession();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) navigate('/login');
      else setUser(session.user);
    });

    return () => subscription.unsubscribe();
  }, [navigate]);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/');
  };

  if (loading) {
    return (
      <div style={{ height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#0f0f15' }}>
        <div style={{ color: '#fff' }}>Loading secure dashboard...</div>
      </div>
    );
  }

  const role = user?.user_metadata?.role || 'user';
  const isClient = role === 'client';

  return (
    <div style={{
      minHeight: '100vh',
      background: '#0f0f15',
      color: '#fff',
      padding: '2rem'
    }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <header style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          paddingBottom: '1rem',
          marginBottom: '2rem'
        }}>
          <div>
            <h1 style={{ margin: 0, fontSize: '1.8rem', display: 'flex', alignItems: 'center', gap: '10px' }}>
              {isClient ? <Briefcase color="var(--color-magenta)" /> : <User color="var(--color-cyan)" />}
              {isClient ? 'Client Portal' : 'Freelancer Hub'}
            </h1>
            <p style={{ margin: '5px 0 0 0', color: '#888' }}>{user?.email}</p>
          </div>

          <div style={{ display: 'flex', gap: '1rem' }}>
            <button className="btn-secondary" style={{ padding: '8px 15px', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <Settings size={18} /> Settings
            </button>
            <button 
              onClick={handleLogout}
              style={{
                background: 'rgba(255, 50, 50, 0.1)',
                border: '1px solid rgba(255, 50, 50, 0.3)',
                color: '#ff4444',
                padding: '8px 15px',
                borderRadius: '8px',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: '5px'
              }}
            >
              <LogOut size={18} /> Logout
            </button>
          </div>
        </header>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {/* Welcome Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel"
            style={{ padding: '2rem', borderRadius: '15px' }}
          >
            <h2 style={{ marginTop: 0, color: 'var(--color-magenta)' }}>Welcome Back!</h2>
            <p style={{ color: '#aaa', lineHeight: 1.6 }}>
              {isClient 
                ? 'Manage your active projects, view invoices, and communicate directly with freelancers.' 
                : 'Browse available projects, manage your portfolio, and track your earnings.'}
            </p>
          </motion.div>

          {/* Stats Card */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="glass-panel"
            style={{ padding: '2rem', borderRadius: '15px' }}
          >
            <h2 style={{ marginTop: 0, color: 'var(--color-cyan)' }}>Activity</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '1.5rem' }}>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>0</div>
                <div style={{ color: '#888', fontSize: '0.9rem' }}>{isClient ? 'Active Projects' : 'Current Jobs'}</div>
              </div>
              <div style={{ textAlign: 'center' }}>
                <div style={{ fontSize: '2rem', fontWeight: 'bold' }}>0</div>
                <div style={{ color: '#888', fontSize: '0.9rem' }}>Messages</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div style={{ marginTop: '3rem' }}>
          <h2 style={{ borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '1rem' }}>
            {isClient ? 'Recent Projects' : 'Available Opportunities'}
          </h2>
          <div style={{ 
            background: 'rgba(255,255,255,0.02)', 
            border: '1px dashed rgba(255,255,255,0.1)', 
            padding: '3rem', 
            textAlign: 'center', 
            borderRadius: '15px',
            color: '#666'
          }}>
            No items to display yet.
          </div>
        </div>
      </div>
    </div>
  );
}
