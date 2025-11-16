import { Instagram, Facebook, Mail, Phone } from 'lucide-react';

const TikTokIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-5 h-5"
  >
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"/>
  </svg>
);

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-[#E8DCC4] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div className="md:col-span-1">
            <div className="mb-6">
              <h3 className="font-serif text-4xl text-[#D4AF37] tracking-tight italic mb-2">
                OCB events
              </h3>
              <div className="w-24 h-px bg-gradient-to-r from-[#D4AF37] to-transparent" />
            </div>
            <p className="text-[#a89f8c] leading-relaxed font-light">
              Curating timeless celebrations with elegance, sophistication, and unparalleled attention to detail.
            </p>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-[#D4AF37] text-sm tracking-widest uppercase mb-6 font-light">
              Contact
            </h4>
            <div className="space-y-4">
              <a
                href="mailto:1modisemichelle@gmail.com"
                className="flex items-center gap-3 text-[#a89f8c] hover:text-[#D4AF37] transition-colors duration-300"
              >
                <Mail className="w-5 h-5" strokeWidth={1} />
                <span className="font-light">1modisemichelle@gmail.com</span>
              </a>
              <a
                href="tel:0823107911"
                className="flex items-center gap-3 text-[#a89f8c] hover:text-[#D4AF37] transition-colors duration-300"
              >
                <Phone className="w-5 h-5" strokeWidth={1} />
                <span className="font-light">082 310 7911</span>
              </a>
            </div>
          </div>

          <div className="md:col-span-1">
            <h4 className="text-[#D4AF37] text-sm tracking-widest uppercase mb-6 font-light">
              Follow Us
            </h4>
            <div className="flex gap-6">
              <a
                href="https://www.instagram.com/ocbevents/?hl=en"
                className="p-3 border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300"
                aria-label="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram className="w-5 h-5 text-[#D4AF37]" strokeWidth={1} />
              </a>
              <a
                href="https://www.facebook.com/ocbevents/"
                className="p-3 border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300"
                aria-label="Facebook"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook className="w-5 h-5 text-[#D4AF37]" strokeWidth={1} />
              </a>
              <a
                href="https://www.tiktok.com/@ocbevents"
                className="p-3 border border-[#D4AF37]/30 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 transition-all duration-300"
                aria-label="TikTok"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="text-[#D4AF37]">
                  <TikTokIcon />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-[#D4AF37]/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#a89f8c] text-sm font-light">
              © {new Date().getFullYear()} OCB Events — Crafted With Elegance.
            </p>
            <div className="flex gap-8 text-sm">
              <a href="#" className="text-[#a89f8c] hover:text-[#D4AF37] transition-colors duration-300 font-light">
                Privacy Policy
              </a>
              <a href="#" className="text-[#a89f8c] hover:text-[#D4AF37] transition-colors duration-300 font-light">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
