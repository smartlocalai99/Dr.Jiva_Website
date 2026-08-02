export default function GovernmentPartners() {
  return (
    <section className="bg-white border-t border-gray-200 py-16">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-[#2F5E9F]">
            Trusted Government Partners
          </h2>

          <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
            Our healthcare platform follows India's digital health ecosystem
            and government healthcare initiatives.
          </p>
        </div>

        {/* Scrollable Logos */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex items-center justify-between gap-12 min-w-max px-2">

            <img
              src="/nha.png"
              alt="National Health Authority"
              className="h-34 w-auto object-contain flex-shrink-0 transition duration-300 hover:scale-105"
            />

            <img
              src="/mohfw.png"
              alt="Ministry of Health & Family Welfare"
              className="h-16 w-auto object-contain flex-shrink-0 transition duration-300 hover:scale-105"
            />

            <img
              src="/meity.png"
              alt="Ministry of Electronics & Information Technology"
              className="h-36 w-auto object-contain flex-shrink-0 transition duration-300 hover:scale-105"
            />

            <img
              src="/india-gov.png"
              alt="India.gov.in"
              className="h-19 w-auto object-contain flex-shrink-0 transition duration-300 hover:scale-105"
            />

            <img
              src="/digital-india.png"
              alt="Digital India"
              className="h-20 w-auto object-contain flex-shrink-0 transition duration-300 hover:scale-105"
            />

          </div>
        </div>

      </div>
    </section>
  );
}