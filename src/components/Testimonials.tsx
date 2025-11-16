import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "My son's first birthday with OCB events was perfect, every detail. The cake, animals, decor and all absolutely magical. A perfectly beautiful day that I will never forget, rain and all…",
    author: "Petunia Mosoue",
    event: "First Birthday Celebration",
    rating: 5,
  },
  {
    quote: "The owner was professional and helpful. I got everything I needed minutes before my event, I really recommend this company.",
    author: "Martin Kekana",
    event: "Corporate Event",
    rating: 5,
  },
  {
    quote: "The job was so amazing and everything was done on time.",
    author: "Ashely Mingate",
    event: "Special Event",
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-[#F5EFE0] to-[#FAF8F3]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-6 mx-auto" />
            <h2 className="font-serif text-5xl md:text-6xl text-[#1a1a1a] tracking-tight mb-4">
              <span className="italic text-[#2d3a2e]">Cherished</span> Memories
            </h2>
            <p className="text-[#4a4a4a] text-lg font-light mt-4">
              Words from those who trusted us with their most important moments
            </p>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mt-6 mx-auto" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white/60 backdrop-blur-sm p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
            >
              <div className="absolute inset-0 border border-[#D4AF37]/30 group-hover:border-[#D4AF37]/60 transition-colors duration-500" />
              <div className="absolute top-0 left-8 w-12 h-px bg-[#D4AF37] -translate-y-1/2" />

              <div className="relative">
                <div className="flex justify-center gap-1 mb-6">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      size={18}
                      className="fill-[#D4AF37] text-[#D4AF37]"
                    />
                  ))}
                </div>

                <blockquote className="text-[#4a4a4a] text-base leading-relaxed mb-6 italic font-light">
                  "{testimonial.quote}"
                </blockquote>

                <div className="text-center">
                  <p className="font-serif text-lg text-[#1a1a1a] mb-1">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-[#D4AF37] tracking-widest uppercase">
                    {testimonial.event}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
