import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a1a] via-[#2d3a2e] to-[#1a1a1a]">
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage: `url('/0-2.png')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'grayscale(20%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60" />
      </div>

      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
        <div className="animate-fadeIn">
          <h1 className="font-serif text-6xl md:text-8xl text-[#F5EFE0] mb-8 tracking-tight leading-none">
            Crafting Timeless
            <br />
            <span className="italic text-[#D4AF37]">Celebrations</span>
          </h1>

          <p className="text-xl md:text-2xl text-[#E8DCC4] mb-12 max-w-3xl mx-auto leading-relaxed font-light tracking-wide">
            OCB Events curates old-money inspired gatherings defined by elegance, intention, and unforgettable detail.
          </p>

          <button
            onClick={() => {
              document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative px-12 py-5 bg-gradient-to-r from-[#D4AF37] to-[#C5A028] text-[#1a1a1a] text-lg tracking-widest uppercase font-light overflow-hidden transition-all duration-500 hover:shadow-2xl hover:shadow-[#D4AF37]/50"
          >
            <span className="relative z-10">Book a Consultation</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#F5EFE0] to-[#D4AF37] translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZGVmcz48cGF0dGVybiBpZD0iZ29sZCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSIgd2lkdGg9IjQiIGhlaWdodD0iNCI+PHBhdGggZD0iTTAgMGg0djRIMHoiIGZpbGw9Im5vbmUiLz48cGF0aCBkPSJNMCAyaDJWMEgyeiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjEpIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dvbGQpIi8+PC9zdmc+')] bg-repeat" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="text-[#D4AF37] w-8 h-8 opacity-70" strokeWidth={1} />
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1.5s ease-out;
        }
      `}</style>
    </section>
  );
}
