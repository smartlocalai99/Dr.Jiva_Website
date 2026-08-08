export default function GovernmentPartners() {
  return (
    <section className="border-t border-line bg-paper py-16">
      <div className="mx-auto px-6">
        {/* Heading */}
        <div className="mb-12 text-center">
          <span className="font-eyebrow inline-block text-xs font-semibold uppercase text-sky">
            Aligned with
          </span>
          <h2 className="mt-3 text-3xl font-extrabold text-ink">
            Trusted government partners
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-charcoal/70">
            Our healthcare platform follows India&apos;s digital health
            ecosystem and government healthcare initiatives.
          </p>
        </div>

        {/* Scrollable Logos */}
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex min-w-max items-center justify-between gap-12 px-2 grayscale">
            <img src="/nha.png" alt="National Health Authority" className="h-34 w-auto flex-shrink-0 object-contain" />
            <img src="/mohfw.png" alt="Ministry of Health & Family Welfare" className="h-16 w-auto flex-shrink-0 object-contain" />
            <img src="/meity.png" alt="Ministry of Electronics & Information Technology" className="h-36 w-auto flex-shrink-0 object-contain" />
            <img src="/india-gov.png" alt="India.gov.in" className="h-19 w-auto flex-shrink-0 object-contain" />
            <img src="/digital-india.png" alt="Digital India" className="h-20 w-auto flex-shrink-0 object-contain" />
          </div>
        </div>
      </div>
    </section>
  );
}
