import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper">
      {/* Main Footer */}
      <div className="mx-auto px-6 pb-12 pt-20 lg:px-8">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Details */}
          <div>
            <a href="#home" className="inline-flex items-center gap-3">
              <img src="/Logo.png" alt="Dr. Jiva Logo" className="h-14 w-14 object-contain" />
              <div>
                <h2 className="text-2xl font-extrabold tracking-tight">Dr. Jiva</h2>
                <p className="text-xs text-paper/60">Your Health Companion</p>
              </div>
            </a>

            <p className="mt-4 max-w-sm leading-7 text-paper/70">
              Making healthcare simpler, smarter, and more connected
              through secure digital technology.
            </p>

            <div className="mt-6 flex items-center gap-3">
              <a href="#" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-paper/10 text-paper hover:bg-paper hover:text-ink">
                <FaFacebookF size={17} />
              </a>
              <a href="#" aria-label="Instagram" className="flex h-10 w-10 items-center justify-center rounded-full bg-paper/10 text-paper hover:bg-paper hover:text-ink">
                <FaInstagram size={19} />
              </a>
              <a href="#" aria-label="LinkedIn" className="flex h-10 w-10 items-center justify-center rounded-full bg-paper/10 text-paper hover:bg-paper hover:text-ink">
                <FaLinkedinIn size={17} />
              </a>
            </div>

            <div className="mt-5 flex flex-wrap items-center gap-3">
              <a href="#" aria-label="Download Dr. Jiva from Google Play" className="flex h-[58px] w-[190px] items-center justify-center">
                <img
                  src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
                  alt="Get it on Google Play"
                  className="h-[58px] w-[190px] object-fill"
                />
              </a>
              <a href="#" aria-label="Download Dr. Jiva from the App Store" className="flex h-[58px] w-[190px] items-center justify-center">
                <img
                  src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                  alt="Download on the App Store"
                  className="h-[58px] w-[190px] object-fill"
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
              <li><a href="#home" className="hover:text-paper">Home</a></li>
              <li><a href="#about" className="hover:text-paper">About Us</a></li>
              <li><a href="#features" className="hover:text-paper">Features</a></li>
              <li><a href="#how-it-works" className="hover:text-paper">How It Works</a></li>
              <li><a href="#contact" className="hover:text-paper">Contact Us</a></li>
            </ul>
          </div>

          {/* Dr. Jiva Features */}
          <div>
            <h3 className="font-eyebrow text-xs font-semibold uppercase text-paper/50">
              Dr. Jiva
            </h3>
            <ul className="mt-5 space-y-4 text-paper/70">
              <li><a href="#features" className="hover:text-paper">Medicine Reminders</a></li>
              <li><a href="#features" className="hover:text-paper">Digital Prescriptions</a></li>
              <li><a href="#features" className="hover:text-paper">Medical Records</a></li>
              <li><a href="#features" className="hover:text-paper">Order Medicines</a></li>
              <li><a href="#features" className="hover:text-paper">Secure Healthcare</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-eyebrow text-xs font-semibold uppercase text-paper/50">
              Get in Touch
            </h3>
            <div className="mt-5 space-y-3 text-paper/70">
              <p>India</p>
              <a href="mailto:hello@drjiva.in" className="block hover:text-paper">
                hello@drjiva.in
              </a>
              <a href="tel:+910000000000" className="block hover:text-paper">
                +91 9876543210
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-paper/10">
        <div className="mx-auto flex flex-col gap-5 px-6 py-7 text-sm text-paper/60 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© {new Date().getFullYear()} Dr. Jiva. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-6">
            <a href="#" className="hover:text-paper">Privacy Policy</a>
            <a href="#" className="hover:text-paper">Terms & Conditions</a>
            <a href="#" className="hover:text-paper">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
