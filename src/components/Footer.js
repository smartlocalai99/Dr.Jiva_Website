import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaGooglePlay,
  FaApple,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#163A63] text-white">

      {/* Main Footer */}

      <div className="mx-auto max-w-7xl px-6 pb-12 pt-20 lg:px-8">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Company Details */}

          <div>

            {/* Logo */}

            <a
              href="#home"
              className="inline-flex items-center gap-3"
            >

              <div className="flex items-center">

                <img
                  src="/Logo.png"
                  alt="Dr. Jiva Logo"
                  className="h-14 w-14 object-contain"
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

            {/* Description */}

            <p className="mt-4 max-w-sm leading-7 text-blue-100">

              Making healthcare simpler, smarter, and more connected
              through secure digital technology.

            </p>

   {/* Social Icons */}

<div className="mt-6">

  {/* Social Icons */}

  <div className="flex items-center gap-3">

    <a
      href="#"
      aria-label="Facebook"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#2F5E9F]"
    >
      <FaFacebookF size={17} />
    </a>

    <a
      href="#"
      aria-label="Instagram"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#2F5E9F]"
    >
      <FaInstagram size={19} />
    </a>

    <a
      href="#"
      aria-label="LinkedIn"
      className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-[#2F5E9F]"
    >
      <FaLinkedinIn size={17} />
    </a>

  </div>


  {/* App Download Buttons */}

<div className="mt-2 flex flex-wrap items-center gap-3">

   {/* Google Play */}

<a
  href="#"
  aria-label="Download Dr. Jiva from Google Play"
  className="flex h-[58px] w-[190px] items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
>
  <img
    src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
    alt="Get it on Google Play"
    className="h-[58px] w-[190px] object-fill"
  />
</a>


{/* App Store */}

<a
  href="#"
  aria-label="Download Dr. Jiva from the App Store"
  className="-mt-4 flex h-[58px] w-[190px] items-center justify-center transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
>
  <img
    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
    alt="Download on the App Store"
    className="h-[58px] w-[190px] object-fill"
  />
</a>

</div>
 </div>
 </div>


          {/* Quick Links */}

          <div>

            <h3 className="text-lg font-bold">
              Quick Links
            </h3>

            <ul className="mt-2 space-y-4 text-blue-100">

              <li>

                <a
                  href="#home"
                  className="transition duration-300 hover:pl-1 hover:text-white"
                >

                  Home

                </a>

              </li>

              <li>

                <a
                  href="#about"
                  className="transition duration-300 hover:pl-1 hover:text-white"
                >

                  About Us

                </a>

              </li>

              <li>

                <a
                  href="#features"
                  className="transition duration-300 hover:pl-1 hover:text-white"
                >

                  Features

                </a>

              </li>

              <li>

                <a
                  href="#how-it-works"
                  className="transition duration-300 hover:pl-1 hover:text-white"
                >

                  How It Works

                </a>

              </li>

              <li>

                <a
                  href="#contact"
                  className="transition duration-300 hover:pl-1 hover:text-white"
                >

                  Contact Us

                </a>

              </li>

            </ul>

          </div>


          {/* Dr. Jiva Features */}

          <div>

            <h3 className="text-lg font-bold">
              Dr. Jiva
            </h3>

            <ul className="mt-2 space-y-4 text-blue-100">

              <li>

                <a
                  href="#features"
                  className="transition duration-300 hover:pl-1 hover:text-white"
                >

                  Medicine Reminders

                </a>

              </li>

              <li>

                <a
                  href="#features"
                  className=" transition duration-300 hover:pl-1 hover:text-white"
                >

                  Digital Prescriptions

                </a>

              </li>

              <li>

                <a
                  href="#features"
                  className="transition duration-300 hover:pl-1 hover:text-white"
                >

                  Medical Records

                </a>

              </li>

              <li>

                <a
                  href="#features"
                  className="transition duration-300 hover:pl-1 hover:text-white"
                >

                  Order Medicines

                </a>

              </li>

              <li>

                <a
                  href="#features"
                  className="transition duration-300 hover:pl-1 hover:text-white"
                >

                  Secure Healthcare

                </a>

              </li>

            </ul>

          </div>


          {/* Contact and App Download */}

          <div>

            <h3 className="text-lg font-bold">
              Get in Touch
            </h3>

            <div className="mt-7 space-y-5 text-blue-100">

            {/* Location */}

              <div className="flex items-start ">

                <div>

                  <p className="-mt-4">
                    India
                  </p>

                </div>

              </div>

            
            <a
                href="mailto:hello@drjiva.in"
                className="group flex items-start "
              >

                <div>

                  <p className="-mt-4 transition group-hover:text-white">

                    hello@drjiva.in

                  </p>

                </div>

              </a>

              {/* Phone */}

              <a
                href="tel:+910000000000"
                className="group flex items-start"
              >

                <div>

                  <p className="-mt-4 transition group-hover:text-white">

                    +91 9876543210

                  </p>

                </div>

              </a>

            </div>



          </div>

        </div>

      </div>


      {/* Bottom Footer */}

      <div className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-7 text-sm text-blue-200 md:flex-row md:items-center md:justify-between lg:px-8">

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





// import {
//   Mail,
//   Phone,
//   MapPin,
// } from "lucide-react";

// import {
//   FaFacebookF,
//   FaInstagram,
//   FaLinkedinIn,
// } from "react-icons/fa";

// export default function Footer() {
//   return (
//     <footer className="border-t border-[#2F5E9F]/20 bg-white text-[#2F5E9F]">

//       {/* Main Footer */}

//       <div className="mx-auto max-w-7xl px-6 pb-12 pt-20 lg:px-8">

//         <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

//           {/* Company Details */}

//           <div>

//             {/* Logo */}

//             <a
//               href="#home"
//               className="inline-flex items-center gap-3"
//             >

//               <img
//                 src="/Logo_dr.png"
//                 alt="Dr. Jiva Logo"
//                 className="h-15 w-15 object-contain"
//               />

//               <div>

//                 <h2 className="text-2xl font-black tracking-tight text-[#2F5E9F]">
//                   Dr. Jiva
//                 </h2>

//                 <p className="text-xs text-[#2F5E9F]">
//                   Your Health Companion
//                 </p>

//               </div>

//             </a>


//             {/* Description */}

//             <p className="mt-7 max-w-sm leading-7 text-[#2F5E9F]">

//               Making healthcare simpler, smarter, and more connected
//               through secure digital technology.

//             </p>


//             {/* Social Icons */}

//             <div className="mt-6">

//               <div className="flex items-center gap-3">

//                 {/* Facebook */}

//                 <a
//                   href="#"
//                   aria-label="Facebook"
//                   className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2F5E9F]/10 text-[#2F5E9F] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2F5E9F] hover:text-white"
//                 >

//                   <FaFacebookF size={17} />

//                 </a>


//                 {/* Instagram */}

//                 <a
//                   href="#"
//                   aria-label="Instagram"
//                   className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2F5E9F]/10 text-[#2F5E9F] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2F5E9F] hover:text-white"
//                 >

//                   <FaInstagram size={19} />

//                 </a>


//                 {/* LinkedIn */}

//                 <a
//                   href="#"
//                   aria-label="LinkedIn"
//                   className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2F5E9F]/10 text-[#2F5E9F] transition-all duration-300 hover:-translate-y-1 hover:bg-[#2F5E9F] hover:text-white"
//                 >

//                   <FaLinkedinIn size={17} />

//                 </a>

//               </div>


//               {/* App Download Buttons */}

//               <div className="mt-4 flex flex-wrap items-center gap-3">

//                 {/* Google Play */}

//                 <a
//                   href="#"
//                   aria-label="Download Dr. Jiva from Google Play"
//                   className="flex h-[52px] w-[170px] items-center justify-center overflow-hidden rounded-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
//                 >

//                   <img
//                     src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
//                     alt="Get it on Google Play"
//                     className="h-full w-full object-fill"
//                   />

//                 </a>


//                 {/* App Store */}

//                 <a
//                   href="#"
//                   aria-label="Download Dr. Jiva from the App Store"
//                   className="-mt-4 flex h-[52px] w-[170px] items-center justify-center overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
//                 >

//                   <img
//                     src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
//                     alt="Download on the App Store"
//                     className="h-full w-full object-fill"
//                   />

//                 </a>

//               </div>

//             </div>

//           </div>


//           {/* Quick Links */}

//           <div>

//             <h3 className="text-lg font-bold text-[#2F5E9F]">
//               Quick Links
//             </h3>

//             <ul className="mt-7 space-y-4 text-[#2F5E9F]">

//               <li>

//                 <a
//                   href="#home"
//                   className="transition duration-300 hover:pl-1 hover:text-[#163A63]"
//                 >
//                   Home
//                 </a>

//               </li>


//               <li>

//                 <a
//                   href="#about"
//                   className="transition duration-300 hover:pl-1 hover:text-[#163A63]"
//                 >
//                   About Us
//                 </a>

//               </li>


//               <li>

//                 <a
//                   href="#features"
//                   className="transition duration-300 hover:pl-1 hover:text-[#163A63]"
//                 >
//                   Features
//                 </a>

//               </li>


//               <li>

//                 <a
//                   href="#how-it-works"
//                   className="transition duration-300 hover:pl-1 hover:text-[#163A63]"
//                 >
//                   How It Works
//                 </a>

//               </li>


//               <li>

//                 <a
//                   href="#contact"
//                   className="transition duration-300 hover:pl-1 hover:text-[#163A63]"
//                 >
//                   Contact Us
//                 </a>

//               </li>

//             </ul>

//           </div>


//           {/* Dr. Jiva Features */}

//           <div>

//             <h3 className="text-lg font-bold text-[#2F5E9F]">
//               Dr. Jiva
//             </h3>

//             <ul className="mt-7 space-y-4 text-[#2F5E9F]">

//               <li>

//                 <a
//                   href="#features"
//                   className="transition duration-300 hover:pl-1 hover:text-[#163A63]"
//                 >
//                   Medicine Reminders
//                 </a>

//               </li>


//               <li>

//                 <a
//                   href="#features"
//                   className="transition duration-300 hover:pl-1 hover:text-[#163A63]"
//                 >
//                   Digital Prescriptions
//                 </a>

//               </li>


//               <li>

//                 <a
//                   href="#features"
//                   className="transition duration-300 hover:pl-1 hover:text-[#163A63]"
//                 >
//                   Medical Records
//                 </a>

//               </li>


//               <li>

//                 <a
//                   href="#features"
//                   className="transition duration-300 hover:pl-1 hover:text-[#163A63]"
//                 >
//                   Appointments
//                 </a>

//               </li>


//               <li>

//                 <a
//                   href="#features"
//                   className="transition duration-300 hover:pl-1 hover:text-[#163A63]"
//                 >
//                   Secure Healthcare
//                 </a>

//               </li>

//             </ul>

//           </div>


//           {/* Contact */}

//           <div>

//             <h3 className="text-lg font-bold text-[#2F5E9F]">
//               Get in Touch
//             </h3>


//             <div className="mt-7 space-y-5 text-[#2F5E9F]">

//               {/* Email */}

//               <a
//                 href="mailto:hello@drjiva.in"
//                 className="group flex items-start gap-4"
//               >

//                 <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2F5E9F]/10">

//                   <Mail
//                     size={18}
//                     className="text-[#2F5E9F]"
//                   />

//                 </div>


//                 <div>

//                   <p className="text-sm text-[#2F5E9F]">
//                     Email Us
//                   </p>

//                   <p className="mt-1 transition group-hover:text-[#163A63]">
//                     hello@drjiva.in
//                   </p>

//                 </div>

//               </a>


//               {/* Phone */}

//               <a
//                 href="tel:+910000000000"
//                 className="group flex items-start gap-4"
//               >

//                 <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2F5E9F]/10">

//                   <Phone
//                     size={18}
//                     className="text-[#2F5E9F]"
//                   />

//                 </div>


//                 <div>

//                   <p className="text-sm text-[#2F5E9F]">
//                     Call Us
//                   </p>

//                   <p className="mt-1 transition group-hover:text-[#163A63]">
//                     +91 00000 00000
//                   </p>

//                 </div>

//               </a>


//               {/* Location */}

//               <div className="flex items-start gap-4">

//                 <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#2F5E9F]/10">

//                   <MapPin
//                     size={18}
//                     className="text-[#2F5E9F]"
//                   />

//                 </div>


//                 <div>

//                   <p className="text-sm text-[#2F5E9F]">
//                     Our Location
//                   </p>

//                   <p className="mt-1">
//                     India
//                   </p>

//                 </div>

//               </div>

//             </div>

//           </div>

//         </div>

//       </div>


//       {/* Bottom Footer */}

//       <div className="border-t border-[#2F5E9F]/20 bg-white">

//         <div className="mx-auto flex max-w-7xl flex-col gap-5 px-6 py-7 text-sm text-[#2F5E9F] md:flex-row md:items-center md:justify-between lg:px-8">

//           <p>

//             © {new Date().getFullYear()} Dr. Jiva. All rights reserved.

//           </p>


//           <div className="flex flex-wrap items-center gap-6">

//             <a
//               href="#"
//               className="transition duration-300 hover:text-[#163A63]"
//             >
//               Privacy Policy
//             </a>


//             <a
//               href="#"
//               className="transition duration-300 hover:text-[#163A63]"
//             >
//               Terms & Conditions
//             </a>


//             <a
//               href="#"
//               className="transition duration-300 hover:text-[#163A63]"
//             >
//               Cookie Policy
//             </a>

//           </div>

//         </div>

//       </div>

//     </footer>
//   );
// }