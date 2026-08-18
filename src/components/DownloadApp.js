import Image from "next/image";

export default function DownloadApp() {
  return (
    <section id="download-app" className="px-4 py-12 sm:px-8 lg:px-10">
      <div className="mx-auto ">
        {/* Main Two-Panel Card */}
        <div className="grid gap-4 lg:grid-cols-2">

          {/* Left Panel */}
          <div className="flex min-h-[500px] flex-col justify-center rounded-[28px] bg-[#EEF5FB] px-6 py-10 sm:min-h-[560px] sm:px-12 sm:py-12 lg:px-16 lg:py-16">
            <span className="font-eyebrow inline-block text-xs font-semibold uppercase tracking-[0.18em] text-sky">
              Download the app
            </span>

            <h2 className="mt-5 max-w-xl text-4xl font-extrabold leading-[1.05] text-ink sm:text-5xl lg:text-[56px]">
              Your healthcare,
              <span className="block text-sky">
                always with you
              </span>
            </h2>

            <p className="mt-6 max-w-xl text-base leading-7 text-charcoal/75 sm:text-lg sm:leading-8">
              Download the Dr. Jiva app to order medicines, manage your
              prescriptions, track your medicines, and securely store
              your medical records — all in one place.
            </p>

            {/* App Store Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4">

              <a
                href="#"
                aria-label="Download Dr. Jiva from Google Play"
                className="flex h-[58px] w-[170px] items-center justify-center"
              >
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  className="h-[59px] w-[170px]"
                />
              </a>

              <a
                href="#"
                aria-label="Download Dr. Jiva from the App Store"
                className="flex h-11 w-[130px] items-center justify-center"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-[39px] w-[130px]"
                />
              </a>

            </div>
          </div>


          {/* Right Panel */}
{/* Right Panel */}
<div className="relative flex min-h-[500px] items-center justify-center overflow-hidden rounded-[28px] bg-sky px-6 py-10 sm:min-h-[560px] sm:px-12 lg:px-16">

  {/* Decorative circles */}
  <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-white/10" />
  <div className="absolute -bottom-24 -left-20 h-64 w-64 rounded-full bg-white/10" />

  {/* Content */}
  <div className="relative z-10 flex h-full w-full flex-col items-center">

    {/* Heading */}
    <h3 className="text-center text-2xl font-bold leading-tight text-white sm:text-3xl">
      Scan the QR Code
    </h3>

    <p className="mt-2 text-center text-lg font-bold text-white/90 sm:text-xl">
      Download the App
    </p>

    {/* Hand + Phone */}
    <div className="relative mt-4 flex flex-1 items-center justify-center">

      <div className="relative h-[360px] translate-x-2 translate-y-8 sm:h-[465px] sm:translate-x-5 sm:translate-y-10 lg:h-[480px] lg:translate-x-6">

        {/* Hand holding phone */}
        <Image
          src="/hand-phone.png"
          alt="Dr. Jiva app"
          width={520}
          height={620}
          sizes="(max-width: 639px) 300px, (max-width: 1023px) 390px, 410px"
          className="h-full w-auto object-contain"
        />

        {/* Covers the decorative scanner baked into the phone artwork. */}
        <div
          aria-hidden="true"
          className="absolute left-[30%] top-[35%] z-10 aspect-square w-[24%] rounded-md bg-white"
        />

        {/* Local QR asset remains the only visible scanner code. */}
        <Image
          src="/dr-jiva-qr.svg"
          alt="Dr. Jiva QR Code"
          width={200}
          height={200}
          unoptimized
          className="absolute left-[32%] top-[37%] z-20 h-auto w-[20%] rounded-sm bg-white p-1 shadow-sm"
        />

      </div>

    </div>

  </div>
</div>

        </div>
      </div>
    </section>
  );
}
