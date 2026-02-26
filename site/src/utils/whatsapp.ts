export function buildWhatsAppUrl(
  phone: string,
  message: string,
  source?: 'header' | 'hero' | 'servicios' | 'final' | 'flotante',
): string {
  const cleanedPhone = phone.replace(/\D/g, '');
  const sourceSuffix = source ? `\nOrigen de contacto: ${source}` : '';
  const text = encodeURIComponent(`${message.trim()}${sourceSuffix}`);
  return `https://wa.me/${cleanedPhone}?text=${text}`;
}
