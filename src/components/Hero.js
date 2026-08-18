import {
  Stethoscope,
  HeartPulse,
  Pill,
  ShoppingCart,
  Phone,
} from "lucide-react";
import Image from "next/image";

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
  ];

  return (
    <section
      id="home"
      className="relative overflow-x-clip bg-white pt-4 pb-3 lg:pt-6 lg:pb-0 border-b border-line"
    >
      {/* ====================================================== */}
      {/* BACKGROUND SOFT BRAND GRADIENT GLOWS */}
      {/* ====================================================== */}

      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,_rgba(47,127,219,0.08)_0%,_rgba(255,255,255,0)_70%)] blur-3xl" />

        <div className="absolute top-0 right-0 w-[700px] h-[650px] rounded-full bg-[radial-gradient(circle,_rgba(20,34,74,0.03)_0%,_rgba(255,255,255,0)_80%)] blur-2xl" />

        <div className="absolute top-10 right-24 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,_rgba(47,127,219,0.05)_0%,_rgba(255,255,255,0)_70%)] blur-3xl" />
      </div>

      {/* ====================================================== */}
      {/* MAIN HERO */}
      {/* ====================================================== */}

      <div className="w-full px-6 lg:px-10 xl:px-14">
        <div className="mx-auto grid max-w-[1500px] items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] xl:gap-4">

          {/* ================================================== */}
          {/* LEFT SIDE - CONTENT */}
          {/* ================================================== */}

          <div className="relative z-20 text-center sm:-translate-y-8 lg:text-left">

            {/* Tagline */}
            <span className="font-eyebrow inline-block text-xs font-semibold uppercase text-sky">
              Digital healthcare, made for India
            </span>

            {/* Heading */}
            <h1 className="mt-7 text-4xl font-extrabold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl xl:text-7xl font-display">
              Your Health{" "}

              {/* Star */}
              <span className="inline-flex align-middle items-center justify-center mx-1">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="hero-star-sparkle w-9 h-9 text-sky lg:w-[50px] lg:h-[50px]"
                >
                  <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
                </svg>
              </span>{" "}

              Everything

              <span className="block sm:inline">
                {" "}
                in One Place{" "}

                {/* Animated Heart Pulse */}
                <span className="inline-flex align-middle items-center justify-center mx-1">
                  <HeartPulse
                    className="hero-heart-pulse w-9 h-9 text-sky lg:w-[44px] lg:h-[44px]"
                    strokeWidth={2.2}
                  />
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-7 max-w-xl mx-auto lg:mx-0 text-lg leading-relaxed text-charcoal/70 font-body">
              Manage medicines, save prescriptions and hospital documents,
              order medicines, discover medical camps, stay updated with
              health news, and keep your healthcare journey secure in one
              intelligent platform.
            </p>

            {/* ================================================== */}
            {/* BUTTON + GOOGLE RATING */}
            {/* ================================================== */}

            <div className="mt-9 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-6">

              {/* Get App Button */}
             <button
  className="min-h-11 rounded-full bg-ink px-8 py-3.5 text-sm font-semibold text-white hover:bg-ink-soft shadow-md transition-all duration-200 whitespace-nowrap"
>
  Get the App
</button>

              {/* ================================================== */}
              {/* GOOGLE RATING */}
              {/* ================================================== */}

              <div className="relative flex items-center min-h-[60px]">

                {/* Review Images */}
                <div className="flex items-center shrink-0">

                  <Image
                    src="/review-1.jpg"
                    alt="Patient"
                    width={36}
                    height={36}
                    className="w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm"
                  />

                  <Image
                    src="/review-2.jpg"
                    alt="Patient"
                    width={36}
                    height={36}
                    className="-ml-2 w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm"
                  />

                  <Image
                    src="/review-3.jpg"
                    alt="Patient"
                    width={36}
                    height={36}
                    className="-ml-2 w-9 h-9 rounded-full object-cover border-2 border-white shadow-sm"
                  />

                </div>

                {/* Google Rating Content */}
                <div className="ml-3 flex flex-col">

                  {/* Google + Stars */}
                  <div className="flex items-center gap-1.5">

                    {/* Exact Google G Logo */}
                    <svg
                      className="w-[20px] h-[20px] shrink-0"
                      viewBox="0 0 48 48"
                      aria-label="Google"
                    >
                      <path
                        fill="#4285F4"
                        d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.73 0 6.73 5.48 2.82 13.44l7.98 6.19C12.73 13.61 17.87 9.5 24 9.5z"
                      />

                      <path
                        fill="#34A853"
                        d="M46.98 24.55c0-1.64-.15-3.22-.43-4.74H24v9.02h12.94c-.57 3-2.25 5.54-4.78 7.25l7.73 6c4.51-4.16 7.09-10.29 7.09-17.53z"
                      />

                      <path
                        fill="#FBBC05"
                        d="M10.8 28.37A14.47 14.47 0 0 1 10 24c0-1.52.27-2.99.77-4.37l-7.95-6.19A23.95 23.95 0 0 0 0 24c0 3.83.92 7.45 2.82 10.56l7.98-6.19z"
                      />

                      <path
                        fill="#EA4335"
                        d="M24 48c6.48 0 11.93-2.14 15.9-5.82l-7.73-6c-2.15 1.45-4.92 2.3-8.17 2.3-6.13 0-11.27-4.11-13.2-9.64l-7.98 6.19C6.73 42.52 14.73 48 24 48z"
                      />
                    </svg>

                    {/* Google Stars */}
                    <div className="flex items-center gap-[2px]">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          viewBox="0 0 24 24"
                          fill="#FBBC04"
                          className="w-[17px] h-[17px]"
                        >
                          <path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.3l-5.8 3.06 1.11-6.46-4.7-4.58 6.49-.94L12 2.5z" />
                        </svg>
                      ))}
                    </div>

                  </div>

                  {/* Rating Text */}
                  <span className="mt-1 text-[12px] sm:text-[13px] leading-tight text-charcoal/80 whitespace-nowrap">
                    <strong className="font-semibold text-charcoal">
                      4.9
                    </strong>{" "}
                    average rating from 100+ patients
                  </span>

                </div>
              </div>
            </div>
          </div>

          {/* ================================================== */}
          {/* RIGHT SIDE - PHONE + ORBITS */}
          {/* ================================================== */}

          <div className="hero-phone-group relative flex min-h-[620px] lg:min-h-[700px] items-center justify-center overflow-hidden">

            {/* ================================================== */}
            {/* ORBIT BACKGROUND */}
            {/* ================================================== */}

            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">

              {/* Soft center glow */}
              <div className="absolute w-[480px] h-[480px] rounded-full bg-sky/5 blur-3xl" />

              {/* Circle 1 */}
              <div className="absolute w-[320px] h-[320px] rounded-full border border-sky/20">
                <div className="orbit-ring orbit-clockwise-1 absolute inset-0 rounded-full">
                  <div className="absolute left-1/2 -top-7 -translate-x-1/2">
                    <div className="orbit-icon-counter-1 flex h-14 w-14 items-center justify-center rounded-full bg-white border border-sky/20 text-sky shadow-[0_0_20px_rgba(47,127,219,0.25)]">
                      <Stethoscope
                        size={25}
                        strokeWidth={2.2}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Circle 2 */}
              <div className="absolute w-[410px] h-[410px] rounded-full border border-sky/20">
                <div className="orbit-ring orbit-counter-1 absolute inset-0 rounded-full">
                  <div className="absolute left-1/2 -top-7 -translate-x-1/2">
                    <div className="orbit-icon-counter-2 flex h-14 w-14 items-center justify-center rounded-full bg-white border border-sky/20 text-sky shadow-[0_0_22px_rgba(47,127,219,0.30)]">
                      <HeartPulse
                        size={25}
                        strokeWidth={2.2}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Circle 3 */}
              <div className="absolute w-[500px] h-[500px] rounded-full border border-sky/20">
                <div className="orbit-ring orbit-clockwise-2 absolute inset-0 rounded-full">
                  <div className="absolute left-1/2 -top-7 -translate-x-1/2">
                    <div className="orbit-icon-counter-3 flex h-14 w-14 items-center justify-center rounded-full bg-white border border-sky/20 text-sky shadow-[0_0_24px_rgba(47,127,219,0.30)]">
                      <Pill
                        size={25}
                        strokeWidth={2.2}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Circle 4 */}
              <div className="absolute w-[580px] h-[580px] rounded-full border border-sky/15">
                <div className="orbit-ring orbit-counter-2 absolute inset-0 rounded-full">
                  <div className="absolute left-1/2 -top-7 -translate-x-1/2">
                    <div className="orbit-icon-counter-4 flex h-14 w-14 items-center justify-center rounded-full bg-white border border-sky/20 text-sky shadow-[0_0_26px_rgba(47,127,219,0.35)]">
                      <ShoppingCart
                        size={25}
                        strokeWidth={2.2}
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Circle 5 */}
              <div className="absolute w-[660px] h-[660px] rounded-full border border-sky/15">
                <div className="orbit-ring orbit-clockwise-3 absolute inset-0 rounded-full">
                  <div className="absolute left-1/2 -top-7 -translate-x-1/2">
                    <div className="orbit-icon-counter-5 flex h-14 w-14 items-center justify-center rounded-full bg-white border border-sky/20 text-sky shadow-[0_0_28px_rgba(47,127,219,0.35)]">
                      <Phone
                        size={25}
                        strokeWidth={2.2}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ================================================== */}
            {/* CENTER PHONE */}
            {/* ================================================== */}

            <div className="relative z-10 flex items-center justify-center">

              <div className="main-phone relative w-[235px] sm:w-[260px] lg:w-[270px] aspect-[9/18.5] rounded-[3rem] bg-black border-[10px] border-black shadow-2xl shrink-0 overflow-hidden">

                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-30" />

                {/* YOUR DR JIVA APP IMAGE */}
                <Image
                  src="/app-screen.png"
                  alt="Dr Jiva app screen"
                  fill
                  priority
                  sizes="(max-width: 639px) 68vw, (max-width: 1023px) 260px, 270px"
                  className="absolute inset-0 w-full h-full object-cover"
                />

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ====================================================== */}
      {/* HOSPITAL LOGO CONTINUOUS INFINITE TICKER */}
      {/* ====================================================== */}

      <div className="mt-12 lg:mt-6 w-full overflow-hidden bg-white py-1">
        <div className="hospital-ticker-wrapper">

          {/* GROUP 1 */}
          <div className="hospital-ticker-track">
            {hospitals.map((hospital, index) => (
              <div
                className="hospital-logo-item"
                key={`first-${index}`}
              >
                <Image
                  src={hospital.src}
                  alt={hospital.alt}
                  width={160}
                  height={100}
                  sizes="160px"
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
                <Image
                  src={hospital.src}
                  alt={hospital.alt}
                  width={160}
                  height={100}
                  sizes="160px"
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
                <Image
                  src={hospital.src}
                  alt={hospital.alt}
                  width={160}
                  height={100}
                  sizes="160px"
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
                <Image
                  src={hospital.src}
                  alt={hospital.alt}
                  width={160}
                  height={100}
                  sizes="160px"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
