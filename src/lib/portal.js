import { supabase } from './supabase';
export const statuses = {
  new: ['جديد', 'New'], reviewing: ['قيد المراجعة', 'In review'], awaiting_client: ['بانتظار العميل', 'Awaiting client'],
  proposal_sent: ['عرض مُرسل', 'Proposal sent'], agreed: ['تم الاتفاق', 'Agreed'], closed: ['مغلق', 'Closed'],
};
export const services = { branding: ['هوية بصرية','Brand identity'], website: ['موقع إلكتروني','Website'], video: ['إنتاج مرئي','Video production'], creative_direction: ['إدارة إبداعية','Creative direction'], other: ['خدمة أخرى','Other'] };
export async function result(query) { const { data, error } = await query; if (error) throw error; return data; }
export function portalError(error, ar) {
  if (error?.message?.includes('RATE_LIMIT')) return ar ? 'وصلت إلى حد الطلبات المؤقت. حاول لاحقًا.' : 'Temporary submission limit reached. Please try later.';
  if (error?.message?.includes('EMAIL_CONFIRMATION')) return ar ? 'أكّد بريدك الإلكتروني قبل إرسال الطلب.' : 'Confirm your email before submitting a request.';
  if (['PGRST202','42P01','PGRST205'].includes(error?.code)) return ar ? 'خدمة الطلبات قيد التجهيز. لم يتم حفظ بيانات؛ حاول لاحقًا أو تواصل عبر art@mbakur.com.' : 'The request service is being configured. No data was saved; try later or contact art@mbakur.com.';
  return ar ? 'تعذر إتمام العملية. بيانات النموذج باقية؛ تحقق من اتصالك وحاول مجددًا.' : 'Unable to complete the action. Your form is preserved; check your connection and retry.';
}
export async function loadPortal() {
  const { data: { session }, error } = await supabase.auth.getSession();
  if (error) throw error;
  if (!session) return null;
  const admin = await result(supabase.rpc('crm_is_admin'));
  const [requests, profiles, drafts, jobs] = await Promise.all([
    result(supabase.from('crm_requests').select('*').order('created_at', {ascending:false}).limit(200)),
    result(supabase.from('crm_profiles').select('*').limit(500)),
    admin ? result(supabase.from('crm_drafts').select('*').order('created_at',{ascending:false}).limit(100)) : [],
    admin ? result(supabase.from('crm_jobs').select('id,status,kind,error,created_at').order('created_at',{ascending:false}).limit(100)) : [],
  ]);
  return {user:session.user,admin:!!admin,requests,profiles,drafts,jobs};
}
