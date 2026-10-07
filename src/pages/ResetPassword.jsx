import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { supabase } from '../lib/supabase';
import '../styles/portal.css';
export default function ResetPassword() {
  const { i18n } = useTranslation(); const ar=i18n.language==='ar'; const t=(a,e)=>ar?a:e;
  const [ready,setReady]=useState(false),[password,setPassword]=useState(''),[busy,setBusy]=useState(false),[message,setMessage]=useState(''),[done,setDone]=useState(false);
  useEffect(()=>{let live=true; supabase.auth.getSession().then(({data})=>{if(live)setReady(!!data.session);}); const {data}=supabase.auth.onAuthStateChange((_event,session)=>setReady(!!session));return()=>{live=false;data.subscription.unsubscribe();};},[]);
  async function submit(e){e.preventDefault();setBusy(true); const {error}=await supabase.auth.updateUser({password});setBusy(false);if(error)setMessage(t('تعذر التحديث. اطلب رابط استعادة جديدًا وحاول مجددًا.','Unable to update. Request a new reset link and try again.'));else{setPassword('');setDone(true);setMessage(t('تم تغيير كلمة المرور.','Password updated.'));}}
  return <div className="portal-shell portal-auth-shell"><section className="ui-card portal-auth"><h1>{t('كلمة مرور جديدة','New password')}</h1>{message&&<p role="status" className="portal-notice">{message}</p>}{ready&&!done?<form className="portal-form" onSubmit={submit}><label>{t('كلمة المرور — 12 حرفًا على الأقل','Password — at least 12 characters')}<input type="password" autoComplete="new-password" minLength={12} required value={password} onChange={e=>setPassword(e.target.value)}/></label><button className="ui-button ui-button--primary" disabled={busy}>{t('حفظ كلمة المرور','Save password')}</button></form>:<p className="portal-muted">{!done&&t('افتح رابط الاستعادة الذي وصلك بالبريد.','Open the recovery link from your email.')}</p>}<Link className="ui-button" to={done?'/dashboard':'/login'}>{t('متابعة','Continue')}</Link></section></div>;
}
