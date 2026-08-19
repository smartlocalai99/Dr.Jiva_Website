import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      {/* Main Footer */}
      <div className="mx-auto px-6 pb-12 pt-20 lg:px-8">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4 lg:gap-12">

          {/* Company Details */}
          <div className="col-span-2 lg:col-span-1">
            <a href="#home" className="inline-flex items-center gap-3">
              <img
                src="/Logo.png"
                alt="Dr. Jiva Logo"
                className="h-14 w-14 object-contain"
              />

              <div>
                <h2 className="text-2xl font-extrabold tracking-tight">
                  Dr. Jiva
                </h2>

                <p className="text-xs text-paper/60">
                  Your Health Companion
                </p>
              </div>
            </a>

            <p className="mt-4 max-w-sm leading-7 text-paper/70">
              Making healthcare simpler, smarter, and more connected through
              secure digital technology.
            </p>

            {/* App Download Buttons */}
            <div className="mt-6 flex items-center gap-2">
              <a
                href="#"
                aria-label="Download Dr. Jiva from Google Play"
                className="flex h-[58px] w-[170px] shrink-0 items-center justify-center"
              >
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  className="h-[59px] w-[170px] object-fill"
                />
              </a>

              <a
                href="#"
                aria-label="Download Dr. Jiva from the App Store"
                className="flex h-[58px] w-[130px] shrink-0 items-center justify-center"
              >
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-[39px] w-[130px] object-fill"
                />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-eyebrow text-xs font-semibold uppercase text-paper/50">
              Quick Links
            </h3>

            <ul className="mt-5 space-y-4 text-paper/70">
              <li>
                <a href="#home" className="hover:text-paper">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-paper">
                  About Us
                </a>
              </li>

              <li>
                <a href="#features" className="hover:text-paper">
                  Features
                </a>
              </li>

              <li>
                <a href="#how-it-works" className="hover:text-paper">
                  How It Works
                </a>
              </li>

              <li>
                <a href="#contact" className="hover:text-paper">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Dr. Jiva Features */}
          <div>
            <h3 className="font-eyebrow text-xs font-semibold uppercase text-paper/50">
              Dr. Jiva
            </h3>

            <ul className="mt-5 space-y-4 text-paper/70">
              <li>
                <a href="#features" className="hover:text-paper">
                  Medicine Reminders
                </a>
              </li>

              <li>
                <a href="#features" className="hover:text-paper">
                  Digital Prescriptions
                </a>
              </li>

              <li>
                <a href="#features" className="hover:text-paper">
                  Medical Records
                </a>
              </li>

              <li>
                <a href="#features" className="hover:text-paper">
                  Order Medicines
                </a>
              </li>

              <li>
                <a href="#features" className="hover:text-paper">
                  Secure Healthcare
                </a>
              </li>
            </ul>
          </div>

          {/* Get in Touch */}
          <div className="col-span-2 lg:col-span-1">

            {/* Mobile: Two Columns | Desktop: Normal */}
            <div className="grid grid-cols-2 gap-5 lg:block">

              {/* Get in Touch */}
              <div>
                <h3 className="font-eyebrow text-xs font-semibold uppercase text-paper/50">
                  Get in Touch
                </h3>

                <div className="mt-5 space-y-3 text-paper/70">
                  <p>India</p>

                  <a
                    href="mailto:hello@drjiva.in"
                    className="block break-words hover:text-paper"
                  >
                    hello@drjiva.in
                  </a>

                  <a
                    href="tel:+919876543210"
                    className="block hover:text-paper"
                  >
                    +91 9876543210
                  </a>
                </div>
              </div>

              {/* Connect With Us */}
              <div className="pt-8 lg:mt-8 lg:pt-0">
                <h3 className="font-eyebrow text-xs font-semibold uppercase text-paper/50">
                  Connect With Us
                </h3>

                <div className="mt-5 flex flex-wrap items-center gap-3">

                  {/* Facebook */}
                  <div
  aria-label="Facebook"
  className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-paper/10 text-paper"
>
  <FaFacebookF size={17} />
</div>

                  {/* Instagram */}
                  <a
                    href="https://www.instagram.com/smartlocal_ai/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Instagram"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-paper/10 text-paper hover:bg-paper hover:text-ink"
                  >
                    <FaInstagram size={19} />
                  </a>

                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/company/133385965/"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-paper/10 text-paper hover:bg-paper hover:text-ink"
                  >
                    <FaLinkedinIn size={17} />
                  </a>

                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div>
        <div className="mx-auto flex flex-col gap-5 px-6 py-7 text-sm text-paper/60 md:flex-row md:items-center md:justify-between lg:px-8">

          {/* Copyright */}
          <p className="w-full text-center md:w-auto md:text-left">
            © 2026 Dr. Jiva. All rights reserved.
          </p>

          {/* Policy Links */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 md:justify-end">
            <a href="#" className="hover:text-paper">
              Privacy Policy
            </a>

            <a href="#" className="hover:text-paper">
              Terms & Conditions
            </a>

            <a href="#" className="hover:text-paper">
              Cookie Policy
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}