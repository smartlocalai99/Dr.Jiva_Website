export default function DownloadApp() {
  return (
    <section id="download-app" className="overflow-hidden bg-paper py-14 lg:py-20">
      <div className="mx-auto px-6 lg:px-8">
        {/* Main Card */}
        <div className="relative overflow-hidden rounded-[28px] border border-line bg-paper-soft">
          <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-sky/10 blur-3xl" />
          <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-ink/10 blur-3xl" />

          <div className="relative grid items-center gap-14 px-8 py-10 lg:grid-cols-2 lg:px-16 lg:py-14">
            {/* Left Content */}
            <div>
              <span className="font-eyebrow inline-block text-xs font-semibold uppercase text-sky">
                Download the app
              </span>

              <h2 className="mt-5 text-4xl font-extrabold leading-tight text-ink sm:text-5xl">
                Your healthcare,
                <span className="block text-sky">always with you</span>
              </h2>

              <p className="mt-6 text-lg leading-8 text-charcoal/80">
                Download the Dr. Jiva app to order medicines, manage your
                prescriptions, track your medicines, and securely store
                your medical records — all in one place.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <a href="#" aria-label="Download Dr. Jiva from Google Play">
                  <img
                    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                    alt="Get it on Google Play"
                    className="h-[75px] w-[170px] object-fill"
                  />
                </a>

                <a href="#" aria-label="Download Dr. Jiva from the App Store">
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="Download on the App Store"
                    className="h-[58px] w-auto object-fill"
                  />
                </a>
              </div>
            </div>

            {/* Right Side */}
            <div className="relative flex items-center justify-center">
              <div className="absolute h-[380px] w-[380px] rounded-full bg-sky/10 blur-3xl" />

              <div className="relative">
                <img
                  src="/mbl-img.png"
                  alt="Dr. Jiva App"
                  className="w-[250px]"
                />

                <div className="absolute inset-0 z-20 flex flex-col items-center justify-center">
                  <h3 className="text-[22px] font-bold leading-tight text-ink">
                    Scan the QR Code
                  </h3>
                  <p className="mt-2 text-[20px] font-bold leading-tight text-sky">
                    Download the App
                  </p>
                  <img
                    src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=DrJiva"
                    alt="QR Code"
                    className="mt-8 h-[140px] w-[140px] rounded-lg border border-line"
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
