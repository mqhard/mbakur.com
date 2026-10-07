import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowRight, Menu, X, User } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function SiteHeader({ onLogin }) {
  const { i18n, t } = useTranslation();
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const [signedIn, setSignedIn] = useState(false);
  useEffect(() => {
    let live = true;
    supabase.auth.getSession().then(({ data }) => { if (live) setSignedIn(!!data.session); });
    const { data } = supabase.auth.onAuthStateChange((_event, session) => setSignedIn(!!session));
    return () => { live = false; data.subscription.unsubscribe(); };
  }, []);
  const toggle = useRef(null);
  const ar = i18n.language === 'ar';
  const Back = ar ? ArrowRight : ArrowLeft;
  const links = [
    ['/expertise', ar ? 'الخبرات' : 'Expertise'],
    ['/brand-gallery', ar ? 'الهويات' : 'Brands'],
    ['/creative-direction', ar ? 'الإدارة الإبداعية' : 'Creative direction'],
    ['/legacy', ar ? 'الأعمال' : 'Projects'],
  ];
  return (
    <header className="site-header" onKeyDown={e => {
      if (e.key === 'Escape' && open) { setOpen(false); toggle.current?.focus(); }
    }}>
      <div className="site-header__row">
        <Link className="site-header__brand" to="/" onClick={() => setOpen(false)}>
          {t('hero.title1')} <span>{t('hero.title2')}</span>
        </Link>
        <nav className="site-header__desktop" aria-label={ar ? 'التنقل الرئيسي' : 'Main navigation'}>
          {links.map(([to, label]) => <NavLink key={to} to={to}>{label}</NavLink>)}
        </nav>
        <div className="site-header__actions">
          {pathname !== '/' && <Link className="ui-icon-button" to={pathname.startsWith('/brand-project/') ? '/brand-gallery' : '/'} aria-label={ar ? 'العودة' : 'Back'}><Back size={20} /></Link>}
          <button className="ui-button ui-button--quiet site-header__language" lang={ar ? 'en' : 'ar'} onClick={() => i18n.changeLanguage(ar ? 'en' : 'ar')}>{ar ? 'English' : 'عربي'}</button>
          {signedIn ? <Link className="ui-icon-button" to="/dashboard" aria-label={ar ? 'حسابي' : 'My account'}><User size={20} /></Link> : <button className="ui-icon-button" onClick={onLogin} aria-label={ar ? 'تسجيل الدخول' : 'Sign in'}><User size={20} /></button>}
          <button ref={toggle} className="ui-icon-button site-header__menu" aria-expanded={open} aria-controls="site-navigation" aria-label={ar ? (open ? 'إغلاق القائمة' : 'فتح القائمة') : (open ? 'Close menu' : 'Open menu')} onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <Menu size={20} />}</button>
        </div>
      </div>
      <nav id="site-navigation" className="site-header__mobile" hidden={!open} aria-label={ar ? 'قائمة الصفحات' : 'Page navigation'}>
        {links.map(([to, label]) => <NavLink key={to} to={to} onClick={() => setOpen(false)}>{label}</NavLink>)}
      </nav>
    </header>
  );
}
