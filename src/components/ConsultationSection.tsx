import ConsultationForm from './ConsultationForm';

export default function ConsultationSection() {
  return (
    <section
      id="consultation"
      className="py-32 px-6 bg-[#FAF8F3]"
    >
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="w-16 h-px bg-gradient-to-r from-[#D4AF37] to-transparent mb-8" />
          <h2 className="font-serif text-5xl md:text-6xl text-[#1a1a1a] tracking-tight leading-tight mb-4">
            Begin Your
            <br />
            <span className="italic text-[#2d3a2e]">Journey</span>
          </h2>
          <p className="text-lg text-[#4a4a4a] font-light leading-relaxed max-w-3xl">
            We'd love to hear about your vision. Share the details of your celebration, and let's discuss how we can bring your dream event to life with elegance and precision.
          </p>
        </div>

        <div className="bg-white border border-[#D4AF37]/20 p-8 md:p-12">
          <ConsultationForm />
        </div>
      </div>
    </section>
  );
}
