import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, useNavigate } from 'react-router-dom';
import { supabase } from '../lib/supabase';
import { X } from 'lucide-react';
import '../styles/portal.css';

export default function Login({ isModal = false, onClose }) {
  const { i18n } = useTranslation();
  const ar = i18n.language === 'ar';
  const text = (a, e) => ar ? a : e;
  const navigate = useNavigate();
  const [mode, setMode] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [busy, setBusy] = useState(false);
  const [notice, setNotice] = useState(null);
  const dialog = useRef(null);
  useEffect(() => {
    if (!isModal) return;
    const previous = document.activeElement;
    dialog.current?.querySelector('input')?.focus();
    return () => previous?.focus();
  }, [isModal]);
  function keydown(event) {
    if (!isModal) return;
    if (event.key === 'Escape') onClose?.();
    if (event.key !== 'Tab') return;
    const nodes = [...dialog.current.querySelectorAll('a[href],button:not([disabled]),input:not([disabled])')];
    const first = nodes[0], last = nodes[nodes.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
  async function submit(event) {
    event.preventDefault(); setBusy(true); setNotice(null);
    try {
      let result;
      if (mode === 'reset') result = await supabase.auth.resetPasswordForEmail(email.trim(), { redirectTo: `${window.location.origin}/reset-password` });
      else if (mode === 'signup') result = await supabase.auth.signUp({ email: email.trim(), password, options: { emailRedirectTo: `${window.location.origin}/dashboard` } });
      else result = await supabase.auth.signInWithPassword({ email: email.trim(), password });
      if (result.error) throw result.error;
      if (mode === 'login' || (mode === 'signup' && result.data?.session)) { navigate('/dashboard'); onClose?.(); }
      else setNotice({ ok: true, text: text('إذا كان البريد صالحًا لهذا الإجراء، سيصلك رابط. راجع الوارد والبريد غير المرغوب.', 'If this email is eligible, you will receive a link. Check your inbox and spam folder.') });
    } catch (error) {
      const invalid = error.code === 'invalid_credentials';
      const unconfirmed = error.code === 'email_not_confirmed';
      setNotice({ ok: false, text: invalid ? text('البريد أو كلمة المرور غير صحيحة.', 'Incorrect email or password.') : unconfirmed ? text('يرجى تأكيد بريدك أولًا.', 'Please confirm your email first.') : text('تعذر إتمام العملية. تحقق من الاتصال وحاول مجددًا؛ قد تكون خدمة بريد التأكيد غير جاهزة.', 'Unable to complete this action. Check your connection and try again; confirmation email may be unavailable.') });
    } finally { setBusy(false); }
  }
  function switchMode(next) { setMode(next); setNotice(null); setPassword(''); }
  return <div className={isModal ? 'portal-overlay' : 'portal-shell portal-auth-shell'} onKeyDown={keydown}>
    <section ref={dialog} className="ui-card portal-auth" role={isModal ? 'dialog' : undefined} aria-modal={isModal || undefined} aria-labelledby="auth-title">
      {isModal && <button className="ui-icon-button portal-close" onClick={onClose} aria-label={text('إغلاق', 'Close')}><X size={20} /></button>}
      <h1 id="auth-title">{mode === 'signup' ? text('إنشاء حساب عميل', 'Create a client account') : mode === 'reset' ? text('استعادة كلمة المرور', 'Reset your password') : text('دخول حسابك', 'Sign in')}</h1>
      <p className="portal-muted">{text('تابع طلباتك وتواصل معنا من مكان واحد.', 'Track your requests and communicate with us in one place.')}</p>
      {notice && <p role={notice.ok ? 'status' : 'alert'} className={`portal-notice ${notice.ok ? '' : 'portal-error'}`}>{notice.text}</p>}
      <form className="portal-form" onSubmit={submit}>
        <label>{text('البريد الإلكتروني', 'Email')}<input type="email" dir="ltr" autoComplete="email" required value={email} maxLength={254} onChange={e => setEmail(e.target.value)} /></label>
        {mode !== 'reset' && <label>{text('كلمة المرور', 'Password')}<input type="password" autoComplete={mode === 'signup' ? 'new-password' : 'current-password'} minLength={mode === 'signup' ? 12 : undefined} required value={password} onChange={e => setPassword(e.target.value)} />{mode === 'signup' && <small>{text('12 حرفًا على الأقل. ستؤكد البريد قبل إرسال طلبك.', 'At least 12 characters. Confirm your email before submitting a request.')}</small>}</label>}
        <button className="ui-button ui-button--primary" disabled={busy}>{busy ? text('جارٍ التنفيذ…', 'Please wait…') : mode === 'signup' ? text('إنشاء الحساب', 'Create account') : mode === 'reset' ? text('إرسال رابط الاستعادة', 'Send reset link') : text('تسجيل الدخول', 'Sign in')}</button>
      </form>
      <div className="portal-actions">
        <button className="ui-button ui-button--quiet" disabled={busy} onClick={() => switchMode(mode === 'login' ? 'signup' : 'login')}>{mode === 'login' ? text('ليس لديك حساب؟ سجّل الآن', 'New here? Create an account') : text('العودة إلى الدخول', 'Back to sign in')}</button>
        {mode === 'login' && <button className="ui-button ui-button--quiet" disabled={busy} onClick={() => switchMode('reset')}>{text('نسيت كلمة المرور؟', 'Forgot password?')}</button>}
      </div>
      <p className="portal-muted"><Link to="/privacy" onClick={onClose}>{text('كيف نستخدم بياناتك', 'How we use your data')}</Link></p>
    </section>
  </div>;
}
