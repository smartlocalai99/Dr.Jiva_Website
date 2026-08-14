import {
  Stethoscope,
  HeartPulse,
  Pill,
  ShoppingCart,
  Phone,
} from "lucide-react";

export default function Hero() {
  const hospitals = [
    {
      src: "/asian (2).png",
      alt: "Asian Hospital",
    },
    {
      src: "/holistics.png",
      alt: "Holistics Hospital",
    },
    {
      src: "/prime.png",
      alt: "Prime Hospital",
    },
    {
      src: "/pulse.png",
      alt: "Pulse Hospital",
    },
    {
      src: "/dhruva.png",
      alt: "Dhruva Hospital",
    },
    {
      src: "/palla.png",
      alt: "Pallas Hospital",
    },

    // ADD NEW HOSPITALS HERE
    // {
    //   src: "/newhospital.png",
    //   alt: "New Hospital",
    // },
  ];

  return (
    <section
      id="home"
      className="relative overflow-x-clip bg-white pt-12 pb-3 lg:pt-16 lg:pb-0 border-b border-line"
    >
      {/* Background soft brand gradient glows */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,_rgba(47,127,219,0.08)_0%,_rgba(255,255,255,0)_70%)] blur-3xl" />

        <div className="absolute top-0 right-0 w-[700px] h-[650px] rounded-full bg-[radial-gradient(circle,_rgba(20,34,74,0.03)_0%,_rgba(255,255,255,0)_80%)] blur-2xl" />

        <div className="absolute top-10 right-24 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,_rgba(47,127,219,0.05)_0%,_rgba(255,255,255,0)_70%)] blur-3xl" />
      </div>

      {/* MAIN CONTENT */}
      <div className="w-full px-6 lg:px-8 text-center">
        {/* Tagline */}
        <span className="font-eyebrow inline-block text-xs font-semibold uppercase text-sky">
          Digital healthcare, made for India
        </span>

        {/* Heading */}
        <h1 className="mt-8 text-5xl font-extrabold leading-[1.08] tracking-tight text-ink lg:text-7xl font-display mx-auto">
          Never{" "}
          <span className="inline-flex align-middle items-center justify-center mx-1">
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="hero-star-sparkle w-10 h-10 text-sky lg:w-[52px] lg:h-[52px]"
            >
              <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
            </svg>
          </span>{" "}
          miss a{" "}
          <span className="block sm:inline">
            dose{" "}
            <span className="inline-flex align-middle items-center justify-center mx-1">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="hero-play-pulse w-8 h-8 text-sky lg:w-[44px] lg:h-[44px]"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>{" "}
            again
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-8 mx-auto text-lg leading-relaxed text-charcoal/70 font-body">
          Track medicines, order refills, manage prescriptions, and keep every
          medical record secure in one intelligent platform built for your life.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button className="rounded-full bg-ink px-8 py-3.5 text-sm font-semibold text-white hover:bg-ink-soft shadow-md transition-all duration-200">
            Get the App
          </button>

          <button className="rounded-full border border-ink/20 bg-white px-8 py-3.5 text-sm font-semibold text-ink hover:border-ink/40 shadow-sm transition-all duration-200">
            See How It Works
          </button>
        </div>

        {/* PHONE SECTION */}
        <div className="hero-phone-group relative mt-25 flex items-center justify-center overflow-x-clip w-full mx-auto pb-6">
          
          {/* ORBIT BACKGROUND */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
            <div className="absolute w-[520px] h-[520px] rounded-full bg-sky/5 blur-3xl" />

            {/* Circle 1 */}
            <div className="absolute w-[360px] h-[360px] rounded-full border border-sky/20">
              <div className="orbit-ring orbit-clockwise-1 absolute inset-0 rounded-full">
                <div className="absolute left-1/2 -top-7 -translate-x-1/2">
                  <div className="orbit-icon-counter-1 flex h-14 w-14 items-center justify-center rounded-full bg-white border border-sky/20 text-sky shadow-[0_0_20px_rgba(47,127,219,0.25)]">
                    <Stethoscope size={25} strokeWidth={2.2} />
                  </div>
                </div>
              </div>
            </div>

            {/* Circle 2 */}
            <div className="absolute w-[450px] h-[450px] rounded-full border border-sky/20">
              <div className="orbit-ring orbit-counter-1 absolute inset-0 rounded-full">
                <div className="absolute left-1/2 -top-7 -translate-x-1/2">
                  <div className="orbit-icon-counter-2 flex h-14 w-14 items-center justify-center rounded-full bg-white border border-sky/20 text-sky shadow-[0_0_22px_rgba(47,127,219,0.30)]">
                    <HeartPulse size={25} strokeWidth={2.2} />
                  </div>
                </div>
              </div>
            </div>

            {/* Circle 3 */}
            <div className="absolute w-[540px] h-[540px] rounded-full border border-sky/20">
              <div className="orbit-ring orbit-clockwise-2 absolute inset-0 rounded-full">
                <div className="absolute left-1/2 -top-7 -translate-x-1/2">
                  <div className="orbit-icon-counter-3 flex h-14 w-14 items-center justify-center rounded-full bg-white border border-sky/20 text-sky shadow-[0_0_24px_rgba(47,127,219,0.30)]">
                    <Pill size={25} strokeWidth={2.2} />
                  </div>
                </div>
              </div>
            </div>

            {/* Circle 4 */}
            <div className="absolute w-[630px] h-[630px] rounded-full border border-sky/15">
              <div className="orbit-ring orbit-counter-2 absolute inset-0 rounded-full">
                <div className="absolute left-1/2 -top-7 -translate-x-1/2">
                  <div className="orbit-icon-counter-4 flex h-14 w-14 items-center justify-center rounded-full bg-white border border-sky/20 text-sky shadow-[0_0_26px_rgba(47,127,219,0.35)]">
                    <ShoppingCart size={25} strokeWidth={2.2} />
                  </div>
                </div>
              </div>
            </div>

            {/* Circle 5 */}
            <div className="absolute w-[720px] h-[720px] rounded-full border border-sky/15">
              <div className="orbit-ring orbit-clockwise-3 absolute inset-0 rounded-full">
                <div className="absolute left-1/2 -top-7 -translate-x-1/2">
                  <div className="orbit-icon-counter-5 flex h-14 w-14 items-center justify-center rounded-full bg-white border border-sky/20 text-sky shadow-[0_0_28px_rgba(47,127,219,0.35)]">
                    <Phone size={25} strokeWidth={2.2} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* LEFT CARD */}
          <div className="hero-card card-3 w-48 h-[310px] rounded-[1.8rem] overflow-hidden shrink-0 bg-ink text-white p-5 flex flex-col justify-between border border-[#ffffff15] shadow-lg z-10 text-left">
            <p className="text-lg font-bold font-display leading-tight tracking-tight">
              We bring doctors and patients closer
            </p>

            <div className="w-full h-[60%] rounded-2xl overflow-hidden mt-3 relative">
              <img
                src="/about.png"
                alt="Doctor reviewing digital records with patient"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* CENTER PHONE */}
          <div className="main-phone relative w-[250px] sm:w-[280px] aspect-[9/18.5] rounded-[3rem] bg-black border-[10px] border-black shadow-2xl shrink-0 z-30 flex flex-col justify-between overflow-hidden p-4 pb-6 select-none bg-[#f0f4f9]">
            
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-30" />

            <div className="flex flex-col h-full justify-between pt-6 text-left relative">
              <div>
                <h3 className="text-2xl font-black text-ink leading-[1.1] tracking-tight font-display">
                  Smart Reminder

                  <span className="block text-sky mt-1 text-sm font-semibold">
                    Next Dose: 08:00 AM
                  </span>
                </h3>

                <div className="mt-4 bg-white rounded-2xl p-3 shadow-md border border-gray-100 flex flex-col gap-1 relative z-10">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-extrabold text-ink">
                      96%
                    </span>

                    <span className="text-[10px] font-bold text-green-500 bg-green-50 px-1.5 py-0.5 rounded-full flex items-center">
                      ▲ 5%
                    </span>
                  </div>

                  <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                    Monthly Adherence
                  </span>

                  <svg
                    className="w-full h-10 text-sky mt-1"
                    viewBox="0 0 100 30"
                    fill="none"
                  >
                    <path
                      d="M0 20 Q 20 5, 40 22 T 80 8 T 100 12"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>

                  <div className="mt-2 bg-sky/10 rounded-lg py-1 px-2.5 text-[10px] font-bold text-sky w-fit">
                    On Track
                  </div>
                </div>
              </div>

              <div className="absolute bottom-[-16px] inset-x-[-16px] h-[50%] overflow-hidden">
                <img
                  src="/about_waving_doctor.png"
                  alt="Doctor waving inside phone app"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* RIGHT CARD */}
          <div className="hero-card card-5 w-48 h-[310px] rounded-[1.8rem] overflow-hidden shrink-0 bg-paper-soft text-ink p-5 flex flex-col justify-between border border-[#e2e8f0] shadow-lg z-10 text-left">
            <p className="text-base font-extrabold font-display leading-tight">
              Real-time updates to manage health
            </p>

            <div className="relative w-full h-[60%] flex items-center justify-center mt-2">
              <div className="absolute w-28 h-28 rounded-full border border-sky-100 bg-sky-50/20" />

              <img
                src="/about_inset_doctor.png"
                alt="Analytics doctor avatar"
                className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-md relative z-10"
              />

              <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-sky text-white flex items-center justify-center shadow z-20 text-[9px] font-bold">
                🩺
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ============================================ */}
      {/* HOSPITAL LOGO CONTINUOUS INFINITE TICKER */}
      {/* ============================================ */}

      <div className="mt-25 w-full overflow-hidden bg-white py-1">
        <div className="hospital-ticker-wrapper">

          {/* GROUP 1 */}
          <div className="hospital-ticker-track">
            {hospitals.map((hospital, index) => (
              <div
                className="hospital-logo-item"
                key={`first-${index}`}
              >
                <img
                  src={hospital.src}
                  alt={hospital.alt}
                />
              </div>
            ))}
          </div>

          {/* GROUP 2 */}
          <div className="hospital-ticker-track">
            {hospitals.map((hospital, index) => (
              <div
                className="hospital-logo-item"
                key={`second-${index}`}
              >
                <img
                  src={hospital.src}
                  alt={hospital.alt}
                />
              </div>
            ))}
          </div>

          {/* GROUP 3 */}
          <div className="hospital-ticker-track">
            {hospitals.map((hospital, index) => (
              <div
                className="hospital-logo-item"
                key={`third-${index}`}
              >
                <img
                  src={hospital.src}
                  alt={hospital.alt}
                />
              </div>
            ))}
          </div>

          {/* GROUP 4 */}
          <div className="hospital-ticker-track">
            {hospitals.map((hospital, index) => (
              <div
                className="hospital-logo-item"
                key={`fourth-${index}`}
              >
                <img
                  src={hospital.src}
                  alt={hospital.alt}
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}