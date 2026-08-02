import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
} from "lucide-react";

export default function ContactUs() {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#F8FAFC] py-16"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-xl text-center">

          <span className="inline-flex rounded-full bg-[#2F5E9F]/10 px-4 py-2 text-xs font-semibold text-[#2F5E9F]">
            CONTACT US
          </span>

          <h2 className="mt-4 text-3xl font-black text-slate-900 lg:text-4xl">
            We Would Love to

            <span className="block text-[#2F5E9F]">
              Hear From You
            </span>

          </h2>

          <p className="mt-4 text-sm leading-7 text-slate-600">
            Have questions about Dr. Jiva? Get in touch with our team and
            learn how our digital healthcare platform can help you.
          </p>

        </div>

        {/* Contact Content */}

        <div className="mt-10 grid gap-5 lg:grid-cols-[0.75fr_1.05fr]">

          {/* Left Card */}

          <div className="h-fit rounded-2xl bg-[#2F5E9F] p-5 text-white lg:p-6">

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">
              <MessageCircle size={22} />
            </div>

            <h3 className="mt-5 text-xl font-black">
              Let's Start a Conversation
            </h3>

            <p className="mt-3 text-sm leading-6 text-blue-100">
              Our team is here to answer your questions and help you learn
              more about Dr. Jiva.
            </p>

            {/* Email */}

            <a
              href="mailto:hello@drjiva.in"
              className="group mt-6 flex items-center gap-3"
            >

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 transition group-hover:bg-white group-hover:text-[#2F5E9F]">
                <Mail size={18} />
              </div>

              <div>

                <p className="text-xs text-blue-200">
                  Email Us
                </p>

                <p className="text-sm font-medium">
                  hello@drjiva.in
                </p>

              </div>

            </a>

            {/* Phone */}

            <a
              href="tel:+910000000000"
              className="group mt-5 flex items-center gap-3"
            >

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15 transition group-hover:bg-white group-hover:text-[#2F5E9F]">
                <Phone size={18} />
              </div>

              <div>

                <p className="text-xs text-blue-200">
                  Call Us
                </p>

                <p className="text-sm font-medium">
                  +91 9876543210
                </p>

              </div>

            </a>

            {/* Location */}

            <div className="mt-5 flex items-center gap-3">

              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                <MapPin size={18} />
              </div>

              <div>

                <p className="text-xs text-blue-200">
                  Location
                </p>

                <p className="text-sm font-medium">
                  India
                </p>

              </div>

            </div>

            {/* Bottom Box */}

            <div className="mt-6 rounded-xl border border-white/20 bg-white/10 p-4">

              <p className="text-xs leading-6 text-blue-100">
                We aim to respond to your message as soon as possible.
              </p>

            </div>

          </div>

          {/* Right Form */}

          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm lg:p-6">

            <h3 className="text-lg font-black text-slate-900">
              Send Us a Message
            </h3>

            <p className="mt-2 text-sm text-slate-600">
              Fill out the form and our team will get back to you.
            </p>

            <form className="mt-5 space-y-3">
                            {/* Name & Email */}

              <div className="grid gap-3 md:grid-cols-2">

                <div>

                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Full Name
                  </label>

                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#2F5E9F] focus:bg-white focus:ring-4 focus:ring-[#2F5E9F]/10"
                  />

                </div>

                <div>

                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-slate-700"
                  >
                    Email Address
                  </label>

                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#2F5E9F] focus:bg-white focus:ring-4 focus:ring-[#2F5E9F]/10"
                  />

                </div>

              </div>

              {/* Phone */}

              <div>

                <label
                  htmlFor="phone"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Phone Number
                </label>

                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#2F5E9F] focus:bg-white focus:ring-4 focus:ring-[#2F5E9F]/10"
                />

              </div>

              {/* Subject */}

              <div>

                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  placeholder="What is your message about?"
                  className="w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#2F5E9F] focus:bg-white focus:ring-4 focus:ring-[#2F5E9F]/10"
                />

              </div>

              {/* Message */}

              <div>

                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-slate-700"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={3}
                  placeholder="Write your message here..."
                  className="w-full resize-none rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-2.5 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-[#2F5E9F] focus:bg-white focus:ring-4 focus:ring-[#2F5E9F]/10"
                />

              </div>

              {/* Submit Button */}

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#2F5E9F] px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#244B80] hover:shadow-lg"
              >

                Send Message

                <Send size={17} />

              </button>

            </form>

          </div>

        </div>

      </div>

    </section>
  );
}
            