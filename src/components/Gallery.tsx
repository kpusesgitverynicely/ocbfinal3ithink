const images = [
  {
    url: '/0-6.png',
    caption: 'Elegant Table Setting',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    url: '/0-8.png',
    caption: 'Fine Dining Details',
    span: 'md:col-span-1 md:row-span-1',
  },
  {
    url: '/0-5.png',
    caption: 'Sophisticated Celebration',
    span: 'md:col-span-1 md:row-span-1',
  },
];

export default function Gallery() {
  return (
    <section className="py-32 px-6 bg-[#2d3a2e]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <div className="inline-block">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mb-6 mx-auto" />
            <h2 className="font-serif text-5xl md:text-6xl text-[#F5EFE0] tracking-tight mb-4">
              Our <span className="italic text-[#D4AF37]">Portfolio</span>
            </h2>
            <p className="text-[#E8DCC4] text-lg font-light mt-4">
              A glimpse into moments we've had the privilege to create
            </p>
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent mt-6 mx-auto" />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-4 auto-rows-[300px]">
          {images.map((image, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden ${image.span}`}
            >
              <img
                src={image.url}
                alt={image.caption}
                className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute inset-0 border border-[#D4AF37]/0 group-hover:border-[#D4AF37]/50 transition-all duration-500" />

              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <p className="font-serif text-xl text-[#F5EFE0] tracking-wide">
                  {image.caption}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
