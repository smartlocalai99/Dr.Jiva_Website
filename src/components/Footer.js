import {
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#163A63] text-white">

      {/* Main Footer */}

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-12">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company */}

          <div>

            <a
              href="#home"
              className="inline-flex items-center gap-3"
            >

              <div className="flex items-center">
  <img
    src="/Logo.png"
    alt="Dr. Jiva Logo"
    className="h-12 w-12 rounded-2xl object-contain"
  />
</div>

              <div>

                <h2 className="text-2xl font-black tracking-tight">
                  Dr. Jiva
                </h2>

                <p className="text-xs text-blue-200">
                  Your Health Companion
                </p>

              </div>

            </a>

            <p className="mt-7 max-w-sm leading-7 text-blue-100">

              Making healthcare simpler, smarter, and more connected
              through secure digital technology.

            </p>

       {/* Social Icons */}

<div className="mt-8 flex items-center gap-4">

  <a
    href="#"
    aria-label="Facebook"
    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#2F5E9F]"
  >
    <FaFacebookF size={18} />
  </a>

  <a
    href="#"
    aria-label="Instagram"
    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#2F5E9F]"
  >
    <FaInstagram size={20} />
  </a>

  <a
    href="#"
    aria-label="LinkedIn"
    className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#2F5E9F]"
  >
    <FaLinkedinIn size={18} />
  </a>

</div>

          </div>


          {/* Quick Links */}

          <div>

            <h3 className="text-lg font-bold">
              Quick Links
            </h3>

            <ul className="mt-7 space-y-4 text-blue-100">

              <li>
                <a
                  href="#home"
                  className="transition hover:text-white"
                >
                  Home
                </a>
              </li>

              <li>
                <a
                  href="#about"
                  className="transition hover:text-white"
                >
                  About Us
                </a>
              </li>

              <li>
                <a
                  href="#features"
                  className="transition hover:text-white"
                >
                  Features
                </a>
              </li>

              <li>
                <a
                  href="#how-it-works"
                  className="transition hover:text-white"
                >
                  How It Works
                </a>
              </li>

              <li>
                <a
                  href="#contact"
                  className="transition hover:text-white"
                >
                  Contact Us
                </a>
              </li>

            </ul>

          </div>


          {/* App Features */}

          <div>

            <h3 className="text-lg font-bold">
              Dr. Jiva
            </h3>

            <ul className="mt-7 space-y-4 text-blue-100">

              <li>
                <a
                  href="#features"
                  className="transition hover:text-white"
                >
                  Medicine Reminders
                </a>
              </li>

              <li>
                <a
                  href="#features"
                  className="transition hover:text-white"
                >
                  Digital Prescriptions
                </a>
              </li>

              <li>
                <a
                  href="#features"
                  className="transition hover:text-white"
                >
                  Medical Records
                </a>
              </li>

              <li>
                <a
                  href="#features"
                  className="transition hover:text-white"
                >
                  Appointments
                </a>
              </li>

              <li>
                <a
                  href="#features"
                  className="transition hover:text-white"
                >
                  Secure Healthcare
                </a>
              </li>

            </ul>

          </div>


          {/* Contact */}

          <div>

            <h3 className="text-lg font-bold">
              Get in Touch
            </h3>

            <div className="mt-7 space-y-5 text-blue-100">

              <a
                href="mailto:hello@drjiva.in"
                className="group flex items-start gap-4"
              >

                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">

                  <Mail
                    size={18}
                    className="text-white"
                  />

                </div>

                <div>

                  <p className="text-sm text-blue-300">
                    Email Us
                  </p>

                  <p className="mt-1 transition group-hover:text-white">
                    hello@drjiva.in
                  </p>

                </div>

              </a>


              <a
                href="tel:+910000000000"
                className="group flex items-start gap-4"
              >

                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">

                  <Phone
                    size={18}
                    className="text-white"
                  />

                </div>

                <div>

                  <p className="text-sm text-blue-300">
                    Call Us
                  </p>

                  <p className="mt-1 transition group-hover:text-white">
                    +91 00000 00000
                  </p>

                </div>

              </a>


              <div className="flex items-start gap-4">

                <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/10">

                  <MapPin
                    size={18}
                    className="text-white"
                  />

                </div>

                <div>

                  <p className="text-sm text-blue-300">
                    Our Location
                  </p>

                  <p className="mt-1 leading-6">
                    India
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>


      {/* Bottom Footer */}

      <div className="border-t border-white/10">

        <div className="max-w-7xl mx-auto flex flex-col gap-5 px-6 py-7 text-sm text-blue-200 md:flex-row md:items-center md:justify-between lg:px-8">

          <p>
            © {new Date().getFullYear()} Dr. Jiva. All rights reserved.
          </p>

          <div className="flex flex-wrap items-center gap-6">

            <a
              href="#"
              className="transition hover:text-white"
            >
              Privacy Policy
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              Terms & Conditions
            </a>

            <a
              href="#"
              className="transition hover:text-white"
            >
              Cookie Policy
            </a>

          </div>

        </div>

      </div>

    </footer>
  );
}