const whatsappNumber = "212656089067";
const whatsappMessage = encodeURIComponent("Hello Atlas Estates, I’d like to enquire about a property in Morocco.");

export default function WhatsAppButton() {
  return <a
    className="whatsapp-button"
    href={`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`}
    target="_blank"
    rel="noopener noreferrer"
    aria-label="Contact Atlas Estates on WhatsApp"
  >
    <svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M16.04 3A12.9 12.9 0 0 0 4.86 22.35L3 29l6.82-1.79A12.96 12.96 0 1 0 16.04 3Zm0 23.72a10.7 10.7 0 0 1-5.46-1.49l-.39-.23-4.05 1.06 1.08-3.94-.25-.4A10.7 10.7 0 1 1 16.04 26.72Zm5.87-8.02c-.32-.16-1.9-.94-2.2-1.05-.29-.11-.5-.16-.72.16-.21.32-.82 1.05-1 1.27-.19.21-.38.24-.7.08-.32-.16-1.36-.5-2.59-1.6a9.7 9.7 0 0 1-1.79-2.23c-.18-.32-.02-.49.14-.65.14-.14.32-.37.48-.56.16-.18.21-.32.32-.53.11-.22.06-.4-.02-.57-.08-.16-.72-1.73-.98-2.37-.26-.62-.52-.54-.72-.55h-.61c-.21 0-.56.08-.85.4-.3.33-1.12 1.1-1.12 2.67 0 1.57 1.15 3.09 1.31 3.3.16.22 2.26 3.45 5.48 4.84.77.33 1.36.53 1.83.68.77.24 1.47.21 2.02.13.62-.09 1.9-.78 2.17-1.53.27-.75.27-1.4.19-1.53-.08-.14-.29-.22-.61-.38Z"/></svg>
    <span>WhatsApp</span>
  </a>;
}
