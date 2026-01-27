export default function ContactPage() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      <div className="w-full max-w-3xl">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-light tracking-wide text-[#d4af37]">
            Custom Design Enquiry
          </h1>
          <p className="mt-4 text-gray-400 text-sm md:text-base">
            Tell us about your vision. We’ll craft something exceptional.
          </p>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <input
            type="text"
            placeholder="Your Name"
            className="col-span-1 md:col-span-2 bg-transparent border border-gray-700 px-4 py-3 focus:outline-none focus:border-[#d4af37]"
          />

          {/* Email */}
          <input
            type="email"
            placeholder="Email Address"
            className="bg-transparent border border-gray-700 px-4 py-3 focus:outline-none focus:border-[#d4af37]"
          />

          {/* Phone */}
          <input
            type="tel"
            placeholder="Phone Number"
            className="bg-transparent border border-gray-700 px-4 py-3 focus:outline-none focus:border-[#d4af37]"
          />

          {/* Design Type */}
          <select
            className="col-span-1 md:col-span-2 bg-black border border-gray-700 px-4 py-3 text-gray-400 focus:outline-none focus:border-[#d4af37]"
          >
            <option>Type of Jewellery</option>
            <option>Ring</option>
            <option>Necklace</option>
            <option>Bracelet</option>
            <option>Earrings</option>
            <option>Other</option>
          </select>

          {/* Message */}
          <textarea
            rows={5}
            placeholder="Describe your design idea..."
            className="col-span-1 md:col-span-2 bg-transparent border border-gray-700 px-4 py-3 focus:outline-none focus:border-[#d4af37]"
          />

          {/* Submit */}
          <button
            type="submit"
            className="col-span-1 md:col-span-2 mt-4 bg-[#d4af37] text-black py-3 tracking-wide hover:opacity-90 transition"
          >
            Submit Enquiry
          </button>
        </form>
      </div>
    </section>
  );
}
