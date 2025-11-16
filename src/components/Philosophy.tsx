export default function Philosophy() {
  return (
    <section className="py-32 px-6 bg-[#FAF8F3]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#D4AF37]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative overflow-hidden">
              <img
                src="/0-9.png"
                alt="Elegant event setting"
                className="w-full h-[600px] object-cover grayscale-[30%] group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 border border-[#D4AF37]/30" />
            </div>
          </div>

          <div className="space-y-8">
            <div className="space-y-2">
              <div className="w-16 h-px bg-gradient-to-r from-[#D4AF37] to-transparent" />
              <h2 className="font-serif text-5xl md:text-6xl text-[#1a1a1a] tracking-tight leading-tight">
                The OCB
                <br />
                <span className="italic text-[#2d3a2e]">Philosophy</span>
              </h2>
            </div>

            <div className="space-y-6 text-[#4a4a4a] text-lg leading-relaxed">
              <p className="font-light">
                At OCB Events, we believe that the most memorable celebrations are those rooted in authenticity, refinement, and timeless grace. Our approach draws from the golden age of sophistication—where every detail mattered, and elegance was never an afterthought.
              </p>

              <p className="font-light">
                We specialize in creating bespoke experiences that honor tradition while embracing your unique vision. From intimate gatherings to grand affairs, each event is crafted with meticulous attention to detail and an unwavering commitment to excellence.
              </p>

              <blockquote className="border-l-2 border-[#D4AF37] pl-6 italic text-2xl font-serif text-[#2d3a2e] my-8">
                "Luxury is in the detail."
              </blockquote>

              <p className="font-light">
                Our philosophy is simple: true luxury lies not in extravagance, but in the thoughtful curation of moments that resonate for a lifetime. We orchestrate experiences that feel both familiar and extraordinary—celebrations that become cherished memories passed down through generations.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
