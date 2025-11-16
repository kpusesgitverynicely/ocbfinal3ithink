import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

interface FormData {
  fullName: string;
  phoneNumber: string;
  email: string;
  contactMethod: string;
  eventType: string;
  eventDate: string;
  dateNotFinal: boolean;
  eventLocation: string;
  venueNotBooked: boolean;
  guestCount: string;
  services: string[];
  themeAndStyle: string;
  inspirationUrl: string;
  budgetRange: string;
  additionalNotes: string;
}

const SERVICES = [
  'Full Event Planning',
  'Decor Only',
  'Catering',
  'Venue Sourcing',
  'Entertainment',
  'Photography / Videography',
  'On-the-Day Coordination',
  'Other',
];

export default function ConsultationForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    phoneNumber: '',
    email: '',
    contactMethod: 'Email',
    eventType: 'Wedding',
    eventDate: '',
    dateNotFinal: false,
    eventLocation: '',
    venueNotBooked: false,
    guestCount: '50-100',
    services: [],
    themeAndStyle: '',
    inspirationUrl: '',
    budgetRange: 'R15k–R30k',
    additionalNotes: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({
        ...prev,
        [name]: checked,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleServiceChange = (service: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const { error: submitError } = await supabase
        .from('consultation_forms')
        .insert([
          {
            full_name: formData.fullName,
            phone_number: formData.phoneNumber,
            email: formData.email,
            contact_method: formData.contactMethod,
            event_type: formData.eventType,
            event_date: formData.dateNotFinal ? null : formData.eventDate,
            date_not_final: formData.dateNotFinal,
            event_location: formData.venueNotBooked
              ? 'Venue not booked yet'
              : formData.eventLocation,
            venue_not_booked: formData.venueNotBooked,
            guest_count: formData.guestCount,
            services: formData.services,
            theme_and_style: formData.themeAndStyle,
            inspiration_url: formData.inspirationUrl,
            budget_range: formData.budgetRange,
            additional_notes: formData.additionalNotes,
          },
        ]);

      if (submitError) {
        throw submitError;
      }

      setSubmitted(true);
      setFormData({
        fullName: '',
        phoneNumber: '',
        email: '',
        contactMethod: 'Email',
        eventType: 'Wedding',
        eventDate: '',
        dateNotFinal: false,
        eventLocation: '',
        venueNotBooked: false,
        guestCount: '50-100',
        services: [],
        themeAndStyle: '',
        inspirationUrl: '',
        budgetRange: 'R15k–R30k',
        additionalNotes: '',
      });

      setTimeout(() => setSubmitted(false), 5000);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : 'Failed to submit form. Please try again.'
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {error && (
        <div className="p-4 bg-red-50 border border-red-200 rounded-sm text-red-700 text-sm">
          {error}
        </div>
      )}

      {submitted && (
        <div className="p-4 bg-green-50 border border-green-200 rounded-sm text-green-700 text-sm">
          Thank you for your consultation request. We will be in touch shortly!
        </div>
      )}

      <div className="grid md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm tracking-widest uppercase text-[#2d3a2e] mb-2 font-light">
            Full Name *
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-[#D4AF37]/30 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50 bg-white text-[#1a1a1a] placeholder-[#a89f8c] transition-all duration-300"
            placeholder="Your full name"
          />
        </div>

        <div>
          <label className="block text-sm tracking-widest uppercase text-[#2d3a2e] mb-2 font-light">
            Phone Number *
          </label>
          <input
            type="tel"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-[#D4AF37]/30 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50 bg-white text-[#1a1a1a] placeholder-[#a89f8c] transition-all duration-300"
            placeholder="Your phone number"
          />
        </div>

        <div>
          <label className="block text-sm tracking-widest uppercase text-[#2d3a2e] mb-2 font-light">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-[#D4AF37]/30 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50 bg-white text-[#1a1a1a] placeholder-[#a89f8c] transition-all duration-300"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-sm tracking-widest uppercase text-[#2d3a2e] mb-2 font-light">
            Preferred Contact Method *
          </label>
          <select
            name="contactMethod"
            value={formData.contactMethod}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-[#D4AF37]/30 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50 bg-white text-[#1a1a1a] transition-all duration-300"
          >
            <option value="Email">Email</option>
            <option value="Phone">Phone</option>
            <option value="WhatsApp">WhatsApp</option>
          </select>
        </div>
      </div>

      <div className="border-t border-[#D4AF37]/20 pt-8">
        <h3 className="text-sm tracking-widest uppercase text-[#D4AF37] mb-6 font-light">
          Event Details
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm tracking-widest uppercase text-[#2d3a2e] mb-2 font-light">
              Event Type *
            </label>
            <select
              name="eventType"
              value={formData.eventType}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#D4AF37]/30 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50 bg-white text-[#1a1a1a] transition-all duration-300"
            >
              <option value="Wedding">Wedding</option>
              <option value="Birthday">Birthday</option>
              <option value="Baby Shower">Baby Shower</option>
              <option value="Corporate Function">Corporate Function</option>
              <option value="Anniversary">Anniversary</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label className="block text-sm tracking-widest uppercase text-[#2d3a2e] mb-2 font-light">
              Event Date
            </label>
            <input
              type="date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              disabled={formData.dateNotFinal}
              className="w-full px-4 py-3 border border-[#D4AF37]/30 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50 bg-white text-[#1a1a1a] disabled:bg-[#f0f0f0] disabled:opacity-50 transition-all duration-300"
            />
            <label className="flex items-center mt-2 text-sm text-[#2d3a2e] font-light cursor-pointer">
              <input
                type="checkbox"
                name="dateNotFinal"
                checked={formData.dateNotFinal}
                onChange={handleChange}
                className="w-4 h-4 border border-[#D4AF37]/30 rounded accent-[#D4AF37] cursor-pointer"
              />
              <span className="ml-2">Date not final yet</span>
            </label>
          </div>

          <div>
            <label className="block text-sm tracking-widest uppercase text-[#2d3a2e] mb-2 font-light">
              Event Location / Venue
            </label>
            <input
              type="text"
              name="eventLocation"
              value={formData.eventLocation}
              onChange={handleChange}
              disabled={formData.venueNotBooked}
              className="w-full px-4 py-3 border border-[#D4AF37]/30 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50 bg-white text-[#1a1a1a] placeholder-[#a89f8c] disabled:bg-[#f0f0f0] disabled:opacity-50 transition-all duration-300"
              placeholder="Venue name or location"
            />
            <label className="flex items-center mt-2 text-sm text-[#2d3a2e] font-light cursor-pointer">
              <input
                type="checkbox"
                name="venueNotBooked"
                checked={formData.venueNotBooked}
                onChange={handleChange}
                className="w-4 h-4 border border-[#D4AF37]/30 rounded accent-[#D4AF37] cursor-pointer"
              />
              <span className="ml-2">Venue not booked yet</span>
            </label>
          </div>

          <div>
            <label className="block text-sm tracking-widest uppercase text-[#2d3a2e] mb-2 font-light">
              Estimated Guest Count *
            </label>
            <select
              name="guestCount"
              value={formData.guestCount}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#D4AF37]/30 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50 bg-white text-[#1a1a1a] transition-all duration-300"
            >
              <option value="0-50">0–50 guests</option>
              <option value="50-100">50–100 guests</option>
              <option value="100-200">100–200 guests</option>
              <option value="200+">200+ guests</option>
            </select>
          </div>
        </div>
      </div>

      <div className="border-t border-[#D4AF37]/20 pt-8">
        <h3 className="text-sm tracking-widest uppercase text-[#D4AF37] mb-6 font-light">
          Services Needed
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          {SERVICES.map((service) => (
            <label
              key={service}
              className="flex items-center text-sm text-[#2d3a2e] font-light cursor-pointer"
            >
              <input
                type="checkbox"
                checked={formData.services.includes(service)}
                onChange={() => handleServiceChange(service)}
                className="w-4 h-4 border border-[#D4AF37]/30 rounded accent-[#D4AF37] cursor-pointer"
              />
              <span className="ml-2">{service}</span>
            </label>
          ))}
        </div>

        {formData.services.includes('Other') && (
          <div className="mt-4">
            <input
              type="text"
              placeholder="Please specify other services"
              className="w-full px-4 py-3 border border-[#D4AF37]/30 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50 bg-white text-[#1a1a1a] placeholder-[#a89f8c] transition-all duration-300"
            />
          </div>
        )}
      </div>

      <div className="border-t border-[#D4AF37]/20 pt-8">
        <h3 className="text-sm tracking-widest uppercase text-[#D4AF37] mb-6 font-light">
          Style & Vision
        </h3>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm tracking-widest uppercase text-[#2d3a2e] mb-2 font-light">
              Theme / Colours / Style
            </label>
            <input
              type="text"
              name="themeAndStyle"
              value={formData.themeAndStyle}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#D4AF37]/30 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50 bg-white text-[#1a1a1a] placeholder-[#a89f8c] transition-all duration-300"
              placeholder="e.g., Elegant gold and black, minimalist chic..."
            />
          </div>

          <div>
            <label className="block text-sm tracking-widest uppercase text-[#2d3a2e] mb-2 font-light">
              Inspiration Link or Pinterest URL
            </label>
            <input
              type="url"
              name="inspirationUrl"
              value={formData.inspirationUrl}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-[#D4AF37]/30 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50 bg-white text-[#1a1a1a] placeholder-[#a89f8c] transition-all duration-300"
              placeholder="https://pinterest.com/..."
            />
          </div>
        </div>
      </div>

      <div className="border-t border-[#D4AF37]/20 pt-8">
        <h3 className="text-sm tracking-widest uppercase text-[#D4AF37] mb-6 font-light">
          Budget
        </h3>

        <div>
          <label className="block text-sm tracking-widest uppercase text-[#2d3a2e] mb-2 font-light">
            Estimated Budget Range *
          </label>
          <select
            name="budgetRange"
            value={formData.budgetRange}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-[#D4AF37]/30 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50 bg-white text-[#1a1a1a] transition-all duration-300"
          >
            <option value="R5k–R15k">R5,000 – R15,000</option>
            <option value="R15k–R30k">R15,000 – R30,000</option>
            <option value="R30k–R50k">R30,000 – R50,000</option>
            <option value="R50k+">R50,000+</option>
          </select>
        </div>
      </div>

      <div className="border-t border-[#D4AF37]/20 pt-8">
        <h3 className="text-sm tracking-widest uppercase text-[#D4AF37] mb-6 font-light">
          Additional Notes
        </h3>

        <div>
          <label className="block text-sm tracking-widest uppercase text-[#2d3a2e] mb-2 font-light">
            Tell us more about your vision
          </label>
          <textarea
            name="additionalNotes"
            value={formData.additionalNotes}
            onChange={handleChange}
            rows={5}
            className="w-full px-4 py-3 border border-[#D4AF37]/30 focus:border-[#D4AF37] focus:outline-none focus:ring-1 focus:ring-[#D4AF37]/50 bg-white text-[#1a1a1a] placeholder-[#a89f8c] transition-all duration-300 resize-none"
            placeholder="Share any additional details, preferences, or requirements..."
          />
        </div>
      </div>

      <div className="border-t border-[#D4AF37]/20 pt-8">
        <button
          type="submit"
          disabled={loading}
          className="group relative w-full px-12 py-4 bg-transparent border-2 border-[#D4AF37] text-[#D4AF37] text-base tracking-widest uppercase font-light overflow-hidden transition-all duration-500 hover:text-[#1a1a1a] hover:border-[#1a1a1a] disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <span className="relative z-10">
            {loading ? 'Submitting...' : 'Submit Consultation Request'}
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] to-[#C5A028] translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />
        </button>
      </div>
    </form>
  );
}
