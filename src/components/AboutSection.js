import {
  ShoppingCart,
  Stethoscope,
  Smartphone,
  HeartPulse,
} from "lucide-react";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="overflow-hidden border-y border-line bg-white py-20 lg:py-24"
    >
      {/* No max-width */}
      <div className="w-full px-6 lg:px-8">

      {/* CENTER HEADER */}
<div className="mx-auto text-center mb-16">
  <h2 className="text-3xl font-light leading-relaxed text-gray-400 lg:text-5xl lg:leading-[1.65] font-display">

    We&apos;re{" "}

    <span className="font-semibold text-ink">
      revolutionizing healthcare
    </span>

    <HeartPulse
      size={36}
      strokeWidth={2}
      className="inline-block align-middle text-sky mx-2"
    />

    delivery by bringing{" "}

    <span className="font-semibold text-ink">
      expertise
    </span>

    <Stethoscope
      size={36}
      strokeWidth={2}
      className="inline-block align-middle text-sky mx-2"
    />

    to your doorstep

    <br />

    through our{" "}

    <span className="font-semibold text-ink">
      advanced
    </span>

    <Smartphone
      size={36}
      strokeWidth={2}
      className="inline-block align-middle text-sky mx-2"
    />

    <span className="font-semibold text-ink">
      telehealth
    </span>{" "}

    platform.

  </h2>
</div>

        {/* CARDS - FIXED SIZE AND CENTERED */}
        <div className="flex flex-wrap items-center justify-center gap-6 lg:flex-nowrap">

          {/* CARD 1 */}
          <div className="flex h-[380px] w-[290px] shrink-0 flex-col rounded-[2rem] border border-line bg-paper-soft p-8 transition-all duration-300 hover:border-sky/50">

            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky text-white">
              <ShoppingCart size={22} strokeWidth={2} />
            </div>

            <div className="flex flex-1 flex-col justify-center">
              <h3 className="text-xl font-bold text-ink font-display">
                Online Pharmacy
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-charcoal/70 font-body">
                Order your prescribed medicines from verified partnered local
                pharmacies and get them delivered directly to your doorstep
                swiftly and safely.
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="group relative h-[380px] w-[290px] shrink-0 overflow-hidden rounded-[2rem] border border-line">
            <img
              src="/about_waving_doctor.png"
              alt="Medicine reminder"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute bottom-4 left-4 rounded-full border border-gray-100 bg-white/95 px-5 py-2 shadow-sm transition-all duration-300 group-hover:bg-white group-hover:shadow-md">
              <span className="text-xs font-semibold text-ink">
                Never miss a dose
              </span>
            </div>
          </div>

          {/* CARD 3 - HEALTH FEED */}
          <div className="group relative h-[380px] w-[290px] shrink-0 overflow-hidden rounded-[2rem] bg-ink p-7 text-white transition-all duration-500 hover:bg-[#1a2c5a]">

            <div className="relative z-10">
              <h3 className="text-xl font-bold font-display">
                Health Feed
              </h3>

              <p className="mt-4 text-sm leading-relaxed text-white/70 font-body">
                Stay informed with trusted health tips, wellness updates, and
                medical content shared by verified doctors on Dr. Jiva.
              </p>
            </div>

            {/* FEED VISUAL */}
            <div className="absolute bottom-[-45px] right-[-35px] w-[270px] rotate-[-4deg] transition-transform duration-500 group-hover:scale-105 group-hover:rotate-0">

              <div className="rounded-[1.5rem] bg-white p-4 shadow-2xl">

                {/* DOCTOR HEADER */}
                <div className="flex items-center gap-3">
                  <div className="h-9 w-9 overflow-hidden rounded-full">
                    <img
                      src="/about_inset_doctor.png"
                      alt="Verified doctor"
                      className="h-full w-full object-cover object-[20%_30%]"
                    />
                  </div>

                  <div>
                    <p className="text-xs font-bold text-ink">
                      Verified Doctor
                    </p>

                    <p className="text-[10px] text-gray-400">
                      Health Feed
                    </p>
                  </div>

                  <span className="ml-auto rounded-full bg-sky/10 px-2 py-1 text-[9px] font-semibold text-sky">
                    ✓ Verified
                  </span>
                </div>

                {/* FEED IMAGE */}
                <div className="mt-3 h-20 overflow-hidden rounded-xl bg-sky/10">
                  <img
                    src="/about_waving_doctor.png"
                    alt="Doctor sharing health information"
                    className="h-full w-full object-cover"
                  />
                </div>

                <p className="mt-3 text-xs font-semibold leading-relaxed text-ink">
                  Simple health tips from trusted doctors.
                </p>

                <div className="mt-3 flex items-center justify-between text-[9px] text-gray-400">
                  <span>♡ 124</span>
                  <span>💬 18</span>
                  <span>Share</span>
                </div>
              </div>
            </div>

            {/* LABEL */}
            <div className="absolute bottom-5 left-5 z-20 rounded-full bg-sky px-4 py-2 text-[10px] font-semibold text-white shadow-md">
              Doctor-verified content
            </div>
          </div>

          {/* CARD 4 */}
          <div className="group relative h-[380px] w-[290px] shrink-0 overflow-hidden rounded-[2rem] border border-line">
            <img
              src="/about 1.png"
              alt="Digital Health Records"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute bottom-4 left-4 rounded-full border border-gray-100 bg-white/95 px-5 py-2 shadow-sm transition-all duration-300 group-hover:bg-white group-hover:shadow-md">
              <span className="text-xs font-semibold text-ink">
                Your Health, One Platform
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}