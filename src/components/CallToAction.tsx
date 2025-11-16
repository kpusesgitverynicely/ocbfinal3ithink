export default function CallToAction() {
  return (
    <section className="relative py-40 px-6 overflow-hidden">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.08'%3E%3Cpath d='M50 50c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10s-10-4.477-10-10 4.477-10 10-10zM10 10c0-5.523 4.477-10 10-10s10 4.477 10 10-4.477 10-10 10c0 5.523-4.477 10-10 10S0 25.523 0 20s4.477-10 10-10zm10 8c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8zm40 40c4.418 0 8-3.582 8-8s-3.582-8-8-8-8 3.582-8 8 3.582 8 8 8z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundColor: '#1a1a1a',
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#2d3a2e] via-[#1a1a1a] to-[#2d3a2e] opacity-90" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <div className="mb-12">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-8 mx-auto" />
          <h2 className="font-serif text-6xl md:text-7xl text-[#F5EFE0] tracking-tight mb-6 leading-tight">
            Your Vision.
            <br />
            <span className="italic text-[#D4AF37]">Our Masterpiece.</span>
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mt-8 mx-auto" />
        </div>

        <p className="text-xl text-[#E8DCC4] mb-12 max-w-2xl mx-auto leading-relaxed font-light">
          Let us craft an experience that transcends the ordinary. Your celebration deserves nothing less than perfection.
        </p>

        <button
          onClick={() => {
            document.getElementById('consultation')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="group relative px-14 py-6 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] text-lg tracking-widest uppercase font-light overflow-hidden transition-all duration-500 hover:text-[#1a1a1a] hover:border-[#F5EFE0]"
        >
          <span className="relative z-10">Schedule a Private Consultation</span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#F5EFE0] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
          <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500">
            <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white to-transparent" />
          </div>
        </button>
      </div>

      <style>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
}
