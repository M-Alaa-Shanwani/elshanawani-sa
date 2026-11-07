// Contact Configuration
// WhatsApp expects international format without '+' or leading '0':
// Egypt (01093299050) -> 201093299050
// Saudi Arabia (0571325956) -> 966571325956

export const CONTACT_CONFIG = {
  // Saudi Arabia mobile: 0571325956 -> WhatsApp international format: 966571325956
  whatsappNumber: import.meta.env.VITE_WHATSAPP_NUMBER || '966571325956',
  displayPhoneNumber: import.meta.env.VITE_DISPLAY_PHONE || '0571325956',
};
