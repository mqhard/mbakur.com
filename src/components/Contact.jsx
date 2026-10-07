import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import '../styles/portal.css';

export default function Contact() {
  const { i18n, t } = useTranslation(); const ar=i18n.language==='ar';
  return <section id="contact" className="section" style={{background:'#080808'}}><div className="container"><div className="ui-card portal-panel" style={{maxWidth:800,margin:'0 auto'}}>
    <h2 style={{fontSize:'clamp(2rem,5vw,3.5rem)',lineHeight:1.4}}>{t('contact.title')}</h2>
    <p className="portal-muted">{ar?'ابدأ بطلب مشروع من حسابك. نحتفظ بتفاصيله ورقمه ومراسلاته في مكان واحد لتتابع معنا بسهولة.':'Start a project request from your account. Keep the details, reference and conversation together so you can follow up easily.'}</p>
    <div className="portal-actions"><Link className="ui-button ui-button--primary" to="/dashboard">{ar?'فتح حسابي وطلب مشروع':'My account and project requests'}</Link><a className="ui-button" href="mailto:art@mbakur.com">art@mbakur.com</a></div>
  </div></div></section>;
}
