import {
  Mail,
  Phone,
  MessageCircle,
  MessageSquareHeart,
} from "lucide-react";

export default function ContactUs() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-paper-soft py-16"
    >
      <div className="mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto text-center">
          <h2 className="text-3xl font-extrabold text-ink lg:text-4xl">
            Contact Us
          </h2>

          <p className="mx-auto mt-4 max-w-3xl text-sm leading-7 text-charcoal/80">
            Have questions about Dr. Jiva? Get in touch with our team and
            learn more about our digital healthcare platform.
          </p>
        </div>

        {/* Contact Information */}
        <div className="mt-12 grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4 lg:gap-x-8 lg:gap-y-10">

          {/* Email */}
          <a
            href="mailto:hello@drjiva.in"
            className="group flex flex-col items-center text-center"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky/10 text-sky transition-all duration-200 group-hover:scale-110 group-hover:bg-sky/15">
              <Mail size={24} strokeWidth={2} />
            </div>

            <h3 className="mt-5 text-sm font-semibold text-ink">
              Email Address
            </h3>

            <p className="text-sm leading-6 text-charcoal/70">
              support@drjiva.in
            </p>
          </a>

          {/* Phone */}
          <a
            href="tel:+919876543210"
            className="group flex flex-col items-center text-center"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky/10 text-sky transition-all duration-200 group-hover:scale-110 group-hover:bg-sky/15">
              <Phone size={24} strokeWidth={2} />
            </div>

            <h3 className="mt-5 text-sm font-semibold text-ink">
              Phone Number
            </h3>

            <p className="mt-2 text-sm leading-6 text-charcoal/70">
              +91 9866531011
            </p>

            <p className="text-sm leading-6 text-charcoal/70">
              Mon – Sat, 9 AM – 6 PM
            </p>
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/919866531011"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky/10 text-sky transition-all duration-200 group-hover:scale-110 group-hover:bg-sky/15">
              <MessageCircle size={24} strokeWidth={2} />
            </div>

            <h3 className="mt-5 text-sm font-semibold text-ink">
              WhatsApp
            </h3>

            <p className="mt-2 text-sm leading-6 text-charcoal/70">
              Chat with us
            </p>

            <p className="text-sm leading-6 text-charcoal/70">
              Get quick support
            </p>
          </a>

          {/* Share Feedback */}
          <a
            href="mailto:feedback@drjiva.in?subject=Dr.%20Jiva%20Feedback"
            className="group flex flex-col items-center text-center"
          >
            <div className="flex h-14 w-14 items-center justify-center rounded-full bg-sky/10 text-sky transition-all duration-200 group-hover:scale-110 group-hover:bg-sky/15">
              <MessageSquareHeart size={24} strokeWidth={2} />
            </div>

            <h3 className="mt-5 text-sm font-semibold text-ink">
              Share Feedback
            </h3>

            <p className="mt-2 text-sm leading-6 text-charcoal/70">
              Tell us what you think
            </p>

            <p className="text-sm leading-6 text-charcoal/70">
              Help us improve Dr. Jiva
            </p>
          </a>

        </div>
      </div>
    </section>
  );
}