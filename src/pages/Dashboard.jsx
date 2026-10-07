import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { supabase } from '../lib/supabase';
import { loadPortal, portalError, result, services, statuses } from '../lib/portal';
import '../styles/portal.css';

function RequestForm({user,profile,ar,onSaved}) {
  const t=(a,e)=>ar?a:e;
  const [name,setName]=useState(profile?.name||''),[company,setCompany]=useState(profile?.company||'');
  const [service,setService]=useState('branding'),[title,setTitle]=useState(''),[description,setDescription]=useState('');
  const [consent,setConsent]=useState(false),[busy,setBusy]=useState(false),[error,setError]=useState('');
  const key=useRef(crypto.randomUUID());
  async function submit(e) {
    e.preventDefault(); if(busy||!consent)return;setBusy(true);setError('');
    try {
      await result(supabase.from('crm_profiles').upsert({user_id:user.id,name:name.trim(),company:company.trim(),language:ar?'ar':'en'}));
      const saved=await result(supabase.rpc('crm_create_request',{p_key:key.current,p_service:service,p_title:title.trim(),p_description:description.trim(),p_language:ar?'ar':'en'}));
      key.current=crypto.randomUUID();setTitle('');setDescription('');onSaved(saved);
    } catch(err){setError(portalError(err,ar));} finally{setBusy(false);}
  }
  return <section className="ui-card portal-panel"><h2>{t('طلب مشروع جديد','New project request')}</h2><form className="portal-form" onSubmit={submit}>
    <label>{t('الاسم','Name')}<input autoComplete="name" maxLength={120} required value={name} onChange={e=>setName(e.target.value)}/></label>
    <label>{t('الشركة (اختياري)','Company (optional)')}<input autoComplete="organization" maxLength={160} value={company} onChange={e=>setCompany(e.target.value)}/></label>
    <label>{t('الخدمة','Service')}<select value={service} onChange={e=>setService(e.target.value)}>{Object.entries(services).map(([key,label])=><option key={key} value={key}>{label[ar?0:1]}</option>)}</select></label>
    <label>{t('عنوان الطلب','Request title')}<input minLength={3} maxLength={160} required value={title} onChange={e=>setTitle(e.target.value)}/></label>
    <label>{t('تفاصيل المشروع','Project details')}<textarea minLength={20} maxLength={10000} required value={description} onChange={e=>setDescription(e.target.value)}/><small>{t('20 حرفًا على الأقل. اذكر الهدف والمتطلبات والموعد المقترح؛ لا تُدخل كلمات مرور أو بيانات مالية حساسة.','At least 20 characters. Include goals, requirements and a preferred timeline; do not include passwords or sensitive financial data.')}</small></label>
    <label className="portal-check"><input type="checkbox" required checked={consent} onChange={e=>setConsent(e.target.checked)}/><span>{t('أوافق على استخدام بيانات طلبي للتواصل وتجهيز مقترحات بمساعدة Gemini، مع مراجعتها بشريًا.','I agree to use my request details for communication and Gemini-assisted proposals reviewed by a person.')}</span></label>
    <Link to="/privacy">{t('تفاصيل استخدام البيانات','Data use details')}</Link>
    {error&&<p role="alert" className="portal-notice portal-error">{error}</p>}
    <button className="ui-button ui-button--primary" disabled={busy}>{busy?t('جارٍ حفظ الطلب…','Saving request…'):t('إرسال الطلب','Submit request')}</button>
  </form></section>;
}

function RequestDetail({request,admin,ar,onUpdated}) {
  const t=(a,e)=>ar?a:e;const [messages,setMessages]=useState([]),[loading,setLoading]=useState(true),[body,setBody]=useState(''),[internal,setInternal]=useState(false),[error,setError]=useState(''),[busy,setBusy]=useState(false);
  const [status,setStatus]=useState(request.status),[followUp,setFollowUp]=useState(request.follow_up_at?new Date(request.follow_up_at).toISOString().slice(0,10):'');
  const refresh=useCallback(async()=>{setLoading(true);try{setMessages(await result(supabase.from('crm_messages').select('*').eq('request_id',request.id).order('created_at')));}catch(err){setError(portalError(err,ar));}finally{setLoading(false);}},[request.id,ar]);
  useEffect(()=>{let live=true;result(supabase.from('crm_messages').select('*').eq('request_id',request.id).order('created_at')).then(rows=>{if(live)setMessages(rows);}).catch(err=>{if(live)setError(portalError(err,ar));}).finally(()=>{if(live)setLoading(false);});return()=>{live=false;};},[request.id,ar]);
  async function send(e){e.preventDefault();setBusy(true);setError('');try{await result(supabase.rpc('crm_add_message',{p_request:request.id,p_body:body.trim(),p_internal:admin&&internal}));setBody('');await refresh();}catch(err){setError(portalError(err,ar));}finally{setBusy(false);}}
  async function saveStatus(e){e.preventDefault();setBusy(true);setError('');try{await result(supabase.rpc('crm_update_request',{p_request:request.id,p_status:status,p_follow_up:followUp?`${followUp}T09:00:00+03:00`:null}));await onUpdated();}catch(err){setError(portalError(err,ar));}finally{setBusy(false);}}
  return <section className="ui-card portal-panel"><p className="portal-meta">MB-{request.reference} · {statuses[request.status]?.[ar?0:1]}</p><h2>{request.title}</h2><p className="portal-body">{request.description}</p>
    {admin&&<form className="portal-form" onSubmit={saveStatus}><label>{t('حالة الطلب','Request status')}<select value={status} onChange={e=>setStatus(e.target.value)}>{Object.entries(statuses).map(([k,v])=><option key={k} value={k}>{v[ar?0:1]}</option>)}</select></label><label>{t('موعد المتابعة (بتوقيت الرياض)','Follow-up date (Riyadh time)')}<input type="date" value={followUp} onChange={e=>setFollowUp(e.target.value)}/></label><button className="ui-button" disabled={busy}>{t('حفظ الحالة','Save status')}</button></form>}
    <h2 style={{marginTop:24}}>{t('المراسلات','Messages')}</h2>
    {loading?<p role="status">{t('جارٍ تحميل المراسلات…','Loading messages…')}</p>:messages.length?messages.map(m=><article className={`portal-message ${m.internal?'portal-message--internal':''}`} key={m.id}><span className="portal-meta">{m.internal?t('ملاحظة داخلية — لا يراها العميل','Internal note — hidden from client'):t('رسالة في الطلب','Request message')} · {new Date(m.created_at).toLocaleString(ar?'ar-SA':'en-GB')}</span><p className="portal-body">{m.body}</p></article>):<p className="portal-empty">{t('لا توجد مراسلات بعد.','No messages yet.')}</p>}
    <form className="portal-form" onSubmit={send}><label>{t('نص الرسالة','Message')}<textarea required maxLength={10000} value={body} onChange={e=>setBody(e.target.value)}/></label>{admin&&<label className="portal-check"><input type="checkbox" checked={internal} onChange={e=>setInternal(e.target.checked)}/>{t('ملاحظة داخلية فقط','Internal note only')}</label>}
      {error&&<p role="alert" className="portal-notice portal-error">{error}</p>}<button className="ui-button ui-button--primary" disabled={busy||!body.trim()}>{admin&&internal?t('حفظ الملاحظة','Save note'):t('إرسال إلى محادثة الطلب','Send to request conversation')}</button><small>{t('تُحفظ الرسالة في البوابة؛ هذا الزر لا يرسل بريدًا إلكترونيًا.','Messages are saved in the portal; this button does not send an email.')}</small>
    </form></section>;
}

export default function Dashboard() {
  const {i18n}=useTranslation();const ar=i18n.language==='ar';const t=(a,e)=>ar?a:e;
  const [data,setData]=useState(null),[loading,setLoading]=useState(true),[error,setError]=useState(''),[selected,setSelected]=useState(null),[tab,setTab]=useState('requests'),[search,setSearch]=useState(''),[statusFilter,setStatusFilter]=useState(''),[notice,setNotice]=useState('');
  const generation=useRef(0);
  const invalidate=useCallback(()=>{generation.current++;},[]);
  const refresh=useCallback(async()=>{const version=++generation.current;setLoading(true);setError('');try{const next=await loadPortal();if(version===generation.current)setData(next);}catch(err){if(version===generation.current)setError(portalError(err,ar));}finally{if(version===generation.current)setLoading(false);}},[ar]);
  useEffect(()=>{let live=true;const version=++generation.current;loadPortal().then(value=>{if(live&&version===generation.current)setData(value);}).catch(err=>{if(live&&version===generation.current)setError(portalError(err,ar));}).finally(()=>{if(live&&version===generation.current)setLoading(false);});const {data:listener}=supabase.auth.onAuthStateChange(event=>{if(event==='SIGNED_OUT'){invalidate();setData(null);setLoading(false);setError('');setNotice('');setSelected(null);setTab('requests');}if(event==='SIGNED_IN')setTimeout(()=>{if(live)refresh();},0);});return()=>{live=false;invalidate();listener.subscription.unsubscribe();};},[ar,refresh,invalidate]);
  async function logout(){const {error:err}=await supabase.auth.signOut();if(err)setError(portalError(err,ar));else setData(null);}
  if(loading&&!data)return <div className="portal-shell"><p role="status">{t('جارٍ تحميل حسابك…','Loading your account…')}</p></div>;
  if(error&&!data)return <div className="portal-shell"><p role="alert" className="portal-notice portal-error">{error}</p><button className="ui-button" onClick={refresh}>{t('إعادة المحاولة','Retry')}</button></div>;
  if(!data)return <div className="portal-shell"><h1>{t('بوابة العملاء','Client portal')}</h1><p>{t('سجّل دخولك لعرض طلباتك أو إرسال طلب جديد.','Sign in to view your requests or submit a new one.')}</p><Link className="ui-button ui-button--primary" to="/login">{t('الدخول أو إنشاء حساب','Sign in or create an account')}</Link></div>;
  const request=data.requests.find(r=>r.id===selected);
  const profile=data.profiles.find(p=>p.user_id===data.user.id);
  const requests=data.requests.filter(r=>(!statusFilter||r.status===statusFilter)&&`${r.title} ${r.reference} ${data.profiles.find(p=>p.user_id===r.user_id)?.name||''}`.toLowerCase().includes(search.toLowerCase()));
  async function saved(r){setNotice(t(`تم حفظ طلبك برقم MB-${r.reference}.`,`Your request MB-${r.reference} was saved.`));setSelected(r.id);setTab('requests');await refresh();}
  async function reviewDraft(d){try{await result(supabase.from('crm_drafts').update({status:'reviewed'}).eq('id',d.id));await refresh();}catch(err){setError(portalError(err,ar));}}
  return <div className="portal-shell"><div className="portal-toolbar"><div><h1>{data.admin?t('لوحة الإدارة','Administration'):t('طلباتي','My requests')}</h1><p className="portal-muted" dir="ltr">{data.user.email}</p></div><div className="portal-actions"><button className="ui-button" disabled={loading} onClick={refresh}>{t('تحديث','Refresh')}</button><button className="ui-button" onClick={logout}>{t('تسجيل الخروج','Sign out')}</button></div></div>
    {error&&<p role="alert" className="portal-notice portal-error">{error}</p>}{notice&&<p role="status" className="portal-notice">{notice}</p>}
    <div className="portal-actions portal-tabs" aria-label={t('أقسام الحساب','Account sections')}>
      <button className="ui-button" aria-pressed={tab==='requests'} onClick={()=>setTab('requests')}>{t('الطلبات','Requests')}</button>
      {!data.admin&&<button className="ui-button ui-button--primary" aria-pressed={tab==='new'} onClick={()=>setTab('new')}>{t('طلب جديد','New request')}</button>}
      {data.admin&&<><button className="ui-button" aria-pressed={tab==='customers'} onClick={()=>setTab('customers')}>{t('العملاء','Customers')}</button><button className="ui-button" aria-pressed={tab==='drafts'} onClick={()=>setTab('drafts')}>{t('المقترحات والمسودات','Suggestions and drafts')}</button><button className="ui-button" aria-pressed={tab==='activity'} onClick={()=>setTab('activity')}>{t('المتابعة والتقارير','Activity and reports')}</button></>}
    </div>
    {tab==='new'&&<RequestForm user={data.user} profile={profile} ar={ar} onSaved={saved}/>}
    {tab==='requests'&&<div className="portal-grid"><section><div className="portal-form"><label>{t('البحث في الطلبات المعروضة','Search loaded requests')}<input type="search" value={search} onChange={e=>setSearch(e.target.value)}/></label><label>{t('الحالة','Status')}<select value={statusFilter} onChange={e=>setStatusFilter(e.target.value)}><option value="">{t('كل الحالات','All statuses')}</option>{Object.entries(statuses).map(([k,v])=><option key={k} value={k}>{v[ar?0:1]}</option>)}</select></label></div><div className="portal-list">{requests.map(r=><button className="ui-card portal-request" aria-pressed={selected===r.id} onClick={()=>setSelected(r.id)} key={r.id}><strong>{r.title}</strong><span className="portal-meta">MB-{r.reference} · {statuses[r.status]?.[ar?0:1]}</span>{data.admin&&<span>{data.profiles.find(p=>p.user_id===r.user_id)?.name||t('عميل','Client')}</span>}</button>)}</div>{!requests.length&&<p className="portal-empty">{t('لا توجد طلبات مطابقة.','No matching requests.')}</p>}<small className="portal-muted">{t('تُعرض أحدث 200 طلب.','Showing the latest 200 requests.')}</small></section>{request?<RequestDetail key={request.id} request={request} admin={data.admin} ar={ar} onUpdated={refresh}/>:<section className="ui-card portal-panel"><p className="portal-empty">{t('اختر طلبًا لعرض تفاصيله ومراسلاته.','Select a request to view its details and messages.')}</p></section>}</div>}
    {tab==='customers'&&data.admin&&<section className="portal-list">{data.profiles.length?data.profiles.map(p=><article className="ui-card portal-panel" key={p.user_id}><h2>{p.name}</h2><p>{p.company}</p><p className="portal-muted">{t('الطلبات المعروضة لهذا العميل: ','Loaded requests for this client: ')}{data.requests.filter(r=>r.user_id===p.user_id).length}</p></article>):<p className="portal-empty">{t('تظهر بيانات العميل بعد إكمال طلبه الأول.','Customer details appear after their first request.')}</p>}</section>}
    {tab==='drafts'&&data.admin&&<section className="portal-list"><p className="portal-muted">{t('مقترحات داخلية للمراجعة. لا تُرسل تلقائيًا للعميل.','Internal suggestions for review. Never automatically sent to the client.')}</p>{data.drafts.length?data.drafts.map(d=><article className="ui-card portal-panel" key={d.id}><h2>{d.title}</h2><p className="portal-body">{d.body}</p><p className="portal-meta">{d.status==='reviewed'?t('تمت المراجعة','Reviewed'):t('بانتظار المراجعة','Awaiting review')}</p><div className="portal-actions">{d.request_id&&<button className="ui-button" onClick={()=>{setSelected(d.request_id);setTab('requests');}}>{t('فتح الطلب','Open request')}</button>}<button className="ui-button" disabled={d.status==='reviewed'} onClick={()=>reviewDraft(d)}>{t('تحديد كمُراجع','Mark reviewed')}</button></div></article>):<p className="portal-empty">{t('لا توجد مقترحات محفوظة بعد.','No saved suggestions yet.')}</p>}</section>}
    {tab==='activity'&&data.admin&&<section><div className="portal-stats">{[[t('طلبات معروضة','Loaded requests'),data.requests.length],[t('مهام بانتظار التنفيذ','Pending jobs'),data.jobs.filter(j=>j.status==='pending').length],[t('مهام فاشلة','Failed jobs'),data.jobs.filter(j=>j.status==='failed').length]].map(([label,value])=><div key={label} className="ui-card portal-stat"><strong>{value}</strong><span>{label}</span></div>)}</div><p className="portal-muted">{t('هذه إحصاءات الطلبات والمهام المعروضة وليست عدد زوار الموقع. تقارير الأتمتة تظهر في المقترحات والمسودات.','These are counts of loaded requests and jobs, not website visitors. Automation reports appear in Suggestions and drafts.')}</p>{data.jobs.filter(j=>j.status==='failed').map(j=><p className="portal-notice portal-error" key={j.id}>{t('تعذرت معالجة مهمة. أعد مراجعة سجل n8n: ','A job failed. Review the n8n execution log: ')}{j.id}</p>)}</section>}
  </div>;
}
