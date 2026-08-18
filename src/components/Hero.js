"use client";

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
      src: "/Asian.png",
      alt: "Asian Hospital",
    },
    {
      src: "/holistics.png",
      alt: "Holistics Hospital",
    },
    {
      src: "/Prime.png",
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
      className="relative overflow-x-clip border-b border-line bg-white pt-4 pb-3 lg:pt-6 lg:pb-0"
    >
      {/* BACKGROUND SOFT BRAND GRADIENT GLOWS */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-0 top-0 h-[600px] w-[600px] rounded-full bg-[radial-gradient(circle,_rgba(47,127,219,0.08)_0%,_rgba(255,255,255,0)_70%)] blur-3xl" />

        <div className="absolute right-0 top-0 h-[650px] w-[700px] rounded-full bg-[radial-gradient(circle,_rgba(20,34,74,0.03)_0%,_rgba(255,255,255,0)_80%)] blur-2xl" />

        <div className="absolute right-24 top-10 h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,_rgba(47,127,219,0.05)_0%,_rgba(255,255,255,0)_70%)] blur-3xl" />
      </div>

      {/* MAIN HERO */}
      <div className="w-full px-6 lg:px-10 xl:px-14">
        <div className="mx-auto grid max-w-[1500px] items-center gap-8 lg:grid-cols-[0.9fr_1.1fr] xl:gap-4">

          {/* LEFT SIDE - CONTENT */}
          <div className="relative z-20 text-center sm:-translate-y-8 lg:text-left">

            <span className="font-eyebrow inline-block text-xs font-semibold uppercase text-sky">
              Digital healthcare, made for India
            </span>

            {/* HEADING */}
            <h1 className="mx-auto mt-6 max-w-[360px] font-display text-3xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:mx-0 lg:max-w-none lg:text-6xl xl:text-7xl">
              Your Health{" "}

              <span className="mx-1 inline-flex items-center justify-center align-middle">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="hero-star-sparkle h-8 w-8 text-sky sm:h-9 sm:w-9 lg:h-[50px] lg:w-[50px]"
                >
                  <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
                </svg>
              </span>{" "}

              Everything

              <span className="block sm:inline">
                {" "}
                in One Place{" "}

                <span className="mx-1 inline-flex items-center justify-center align-middle">
                  <HeartPulse
                    className="hero-heart-pulse h-8 w-8 text-sky sm:h-9 sm:w-9 lg:h-[44px] lg:w-[44px]"
                    strokeWidth={2.2}
                  />
                </span>
              </span>
            </h1>

            {/* SUBTITLE */}
            <p className="mx-auto mt-6 max-w-[340px] font-body text-base leading-relaxed text-charcoal/70 sm:text-lg lg:mx-0">
              Manage medicines, save prescriptions and hospital documents,
              order medicines, discover medical camps, stay updated with
              health news, and keep your healthcare journey secure in one
              intelligent platform.
            </p>

            {/* BUTTON + GOOGLE RATING */}
            <div className="mt-7 flex flex-col items-center justify-center gap-6 sm:mt-9 sm:flex-row lg:justify-start">

              <button className="min-h-11 whitespace-nowrap rounded-full bg-ink px-8 py-3.5 text-sm font-semibold text-white shadow-md transition-all duration-200 hover:bg-ink-soft">
                Get the App
              </button>

              <div className="relative flex min-h-[60px] items-center">

                {/* REVIEW IMAGES */}
                <div className="flex shrink-0 items-center">
                  <Image
                    src="/review-1.png"
                    alt="Patient"
                    width={36}
                    height={36}
                    className="h-8 w-8 rounded-full border-2 border-white object-cover shadow-sm sm:h-9 sm:w-9"
                  />

                  <Image
                    src="/review-2.png"
                    alt="Patient"
                    width={36}
                    height={36}
                    className="-ml-2 h-8 w-8 rounded-full border-2 border-white object-cover shadow-sm sm:h-9 sm:w-9"
                  />

                  <Image
                    src="/review-3.png"
                    alt="Patient"
                    width={36}
                    height={36}
                    className="-ml-2 h-8 w-8 rounded-full border-2 border-white object-cover shadow-sm sm:h-9 sm:w-9"
                  />
                </div>

                {/* GOOGLE RATING */}
                <div className="ml-3 flex flex-col">
                  <div className="flex items-center gap-1.5">

                    <svg
                      className="h-[20px] w-[20px] shrink-0"
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

                    <div className="flex items-center gap-[2px]">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <svg
                          key={star}
                          viewBox="0 0 24 24"
                          fill="#FBBC04"
                          className="h-[17px] w-[17px]"
                        >
                          <path d="M12 2.5l2.9 5.88 6.49.94-4.7 4.58 1.11 6.46L12 17.3l-5.8 3.06 1.11-6.46-4.7-4.58 6.49-.94L12 2.5z" />
                        </svg>
                      ))}
                    </div>
                  </div>

                  <span className="mt-1 whitespace-nowrap text-[11px] leading-tight text-charcoal/80 sm:text-[13px]">
                    <strong className="font-semibold text-charcoal">
                      4.9
                    </strong>{" "}
                    average rating from 100+ patients
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE - PHONE + ORBITS */}
          <div className="hero-phone-group relative flex min-h-[430px] w-full items-center justify-center overflow-hidden px-2 sm:min-h-[620px] sm:px-0 lg:min-h-[700px]">

            {/* ORBITS */}
            <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">

              <div className="absolute h-[300px] w-[300px] rounded-full bg-sky/5 blur-3xl sm:h-[480px] sm:w-[480px]" />

              {/* CIRCLE 1 */}
              <div className="absolute h-[230px] w-[230px] rounded-full border border-sky/20 sm:h-[320px] sm:w-[320px]">
                <div className="orbit-ring orbit-clockwise-1 absolute inset-0 rounded-full">
                  <div className="absolute left-1/2 -top-6 -translate-x-1/2">
                    <div className="orbit-icon-counter-1 flex h-10 w-10 items-center justify-center rounded-full border border-sky/20 bg-white text-sky shadow-[0_0_20px_rgba(47,127,219,0.25)] sm:h-14 sm:w-14">
                      <Stethoscope size={21} strokeWidth={2.2} />
                    </div>
                  </div>
                </div>
              </div>

              {/* CIRCLE 2 */}
              <div className="absolute h-[280px] w-[280px] rounded-full border border-sky/20 sm:h-[410px] sm:w-[410px]">
                <div className="orbit-ring orbit-counter-1 absolute inset-0 rounded-full">
                  <div className="absolute left-1/2 -top-6 -translate-x-1/2">
                    <div className="orbit-icon-counter-2 flex h-10 w-10 items-center justify-center rounded-full border border-sky/20 bg-white text-sky shadow-[0_0_22px_rgba(47,127,219,0.30)] sm:h-14 sm:w-14">
                      <HeartPulse size={21} strokeWidth={2.2} />
                    </div>
                  </div>
                </div>
              </div>

              {/* CIRCLE 3 */}
              <div className="absolute h-[330px] w-[330px] rounded-full border border-sky/20 sm:h-[500px] sm:w-[500px]">
                <div className="orbit-ring orbit-clockwise-2 absolute inset-0 rounded-full">
                  <div className="absolute left-1/2 -top-6 -translate-x-1/2">
                    <div className="orbit-icon-counter-3 flex h-10 w-10 items-center justify-center rounded-full border border-sky/20 bg-white text-sky shadow-[0_0_24px_rgba(47,127,219,0.30)] sm:h-14 sm:w-14">
                      <Pill size={21} strokeWidth={2.2} />
                    </div>
                  </div>
                </div>
              </div>

              {/* CIRCLE 4 */}
              <div className="absolute h-[380px] w-[380px] rounded-full border border-sky/15 sm:h-[580px] sm:w-[580px]">
                <div className="orbit-ring orbit-counter-2 absolute inset-0 rounded-full">
                  <div className="absolute left-1/2 -top-6 -translate-x-1/2">
                    <div className="orbit-icon-counter-4 flex h-10 w-10 items-center justify-center rounded-full border border-sky/20 bg-white text-sky shadow-[0_0_26px_rgba(47,127,219,0.35)] sm:h-14 sm:w-14">
                      <ShoppingCart size={21} strokeWidth={2.2} />
                    </div>
                  </div>
                </div>
              </div>

              {/* CIRCLE 5 */}
              <div className="absolute h-[430px] w-[430px] rounded-full border border-sky/15 sm:h-[660px] sm:w-[660px]">
                <div className="orbit-ring orbit-clockwise-3 absolute inset-0 rounded-full">
                  <div className="absolute left-1/2 -top-6 -translate-x-1/2">
                    <div className="orbit-icon-counter-5 flex h-10 w-10 items-center justify-center rounded-full border border-sky/20 bg-white text-sky shadow-[0_0_28px_rgba(47,127,219,0.35)] sm:h-14 sm:w-14">
                      <Phone size={21} strokeWidth={2.2} />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* PHONE */}
            <div className="relative z-10 flex h-full w-full items-center justify-center px-4 py-5 sm:px-0 sm:py-8">

              {/* PHONE BODY */}
              <div className="main-phone relative flex aspect-[9/18.5] w-[190px] shrink-0 items-center justify-center rounded-[2.7rem] border-[8px] border-black bg-black p-[2px] shadow-2xl sm:w-[260px] sm:rounded-[3.2rem] sm:border-[10px] sm:p-[3px] lg:w-[270px]">

                {/* PHONE SCREEN - SMALLER CURVE SO VIDEO IS NOT CUT */}
                <div className="relative h-full w-full overflow-hidden rounded-[2.2rem] bg-black sm:rounded-[2.7rem]">

                  {/* APP VIDEO */}
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    poster="/app-screen.png"
                    className="absolute inset-0 h-full w-full object-fill"
                  >
                    <source src="/app-video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* HOSPITAL LOGO TICKER */}
      <div className="mt-12 w-full overflow-hidden bg-white py-2 lg:mt-6">
        <div className="hospital-ticker-wrapper">

          {/* TRACK 1 */}
          <div className="hospital-ticker-track">
            {hospitals.map((hospital, index) => (
              <div
                className="hospital-logo-item flex h-[100px] w-[180px] shrink-0 items-center justify-center px-3 sm:w-[200px]"
                key={`track-1-${index}`}
              >
                <Image
                  src={hospital.src}
                  alt={hospital.alt}
                  width={160}
                  height={100}
                  sizes="160px"
                  priority={hospital.src === "/Prime.png"}
                  className="block h-[90px] w-[160px] object-contain object-center"
                />
              </div>
            ))}
          </div>

          {/* TRACK 2 */}
          <div className="hospital-ticker-track" aria-hidden="true">
            {hospitals.map((hospital, index) => (
              <div
                className="hospital-logo-item flex h-[100px] w-[180px] shrink-0 items-center justify-center px-3 sm:w-[200px]"
                key={`track-2-${index}`}
              >
                <Image
                  src={hospital.src}
                  alt=""
                  width={160}
                  height={100}
                  sizes="160px"
                  className="block h-[90px] w-[160px] object-contain object-center"
                />
              </div>
            ))}
          </div>

          {/* TRACK 3 */}
          <div className="hospital-ticker-track" aria-hidden="true">
            {hospitals.map((hospital, index) => (
              <div
                className="hospital-logo-item flex h-[100px] w-[180px] shrink-0 items-center justify-center px-3 sm:w-[200px]"
                key={`track-3-${index}`}
              >
                <Image
                  src={hospital.src}
                  alt=""
                  width={160}
                  height={100}
                  sizes="160px"
                  className="block h-[90px] w-[160px] object-contain object-center"
                />
              </div>
            ))}
          </div>

          {/* TRACK 4 */}
          <div className="hospital-ticker-track" aria-hidden="true">
            {hospitals.map((hospital, index) => (
              <div
                className="hospital-logo-item flex h-[100px] w-[180px] shrink-0 items-center justify-center px-3 sm:w-[200px]"
                key={`track-4-${index}`}
              >
                <Image
                  src={hospital.src}
                  alt=""
                  width={160}
                  height={100}
                  sizes="160px"
                  className="block h-[90px] w-[160px] object-contain object-center"
                />
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}