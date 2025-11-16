import { Heart, Users, Sparkles, Palette } from 'lucide-react';

const services = [
  {
    icon: Heart,
    title: 'Weddings & Private Ceremonies',
    description: 'Intimate celebrations of love, crafted with reverence and adorned with timeless beauty.',
  },
  {
    icon: Users,
    title: 'Corporate Galas & VIP Events',
    description: 'Sophisticated gatherings that elevate your brand with distinction and lasting impression.',
  },
  {
    icon: Sparkles,
    title: 'Luxury Parties & Social Gatherings',
    description: 'Refined soirées where elegance meets celebration in perfect, effortless harmony.',
  },
  {
    icon: Palette,
    title: 'Full-Service Event Design',
    description: 'Comprehensive orchestration from concept to completion, executed with precision and grace.',
  },
];

export default function Services() {
  return (
    <section className="py-32 px-6 bg-gradient-to-b from-[#FAF8F3] to-[#F5EFE0]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-6 mx-auto" />
            <h2 className="font-serif text-5xl md:text-6xl text-[#1a1a1a] tracking-tight mb-4">
              Our <span className="italic text-[#2d3a2e]">Services</span>
            </h2>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mt-6 mx-auto" />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group relative bg-white/40 backdrop-blur-sm p-10 transition-all duration-500 hover:shadow-2xl hover:shadow-[#D4AF37]/10 hover:-translate-y-2"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23D4AF37' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            >
              <div className="absolute inset-0 border border-[#D4AF37]/20 group-hover:border-[#D4AF37]/50 transition-colors duration-500" />

              <div className="relative">
                <div className="mb-6 inline-block p-4 bg-gradient-to-br from-[#D4AF37]/10 to-transparent">
                  <service.icon className="w-10 h-10 text-[#D4AF37]" strokeWidth={1} />
                </div>

                <h3 className="font-serif text-2xl text-[#1a1a1a] mb-4 tracking-tight">
                  {service.title}
                </h3>

                <p className="text-[#4a4a4a] leading-relaxed font-light">
                  {service.description}
                </p>

                <div className="mt-6 w-12 h-px bg-gradient-to-r from-[#D4AF37] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
