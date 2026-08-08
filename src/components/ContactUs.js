import { Mail, Phone, MapPin, Send, MessageCircle } from "lucide-react";

export default function ContactUs() {
  return (
    <section id="contact" className="relative overflow-hidden bg-paper-soft py-16">
      <div className="mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto text-center">
          <span className="font-eyebrow inline-block text-xs font-semibold uppercase text-sky">
            Contact us
          </span>
          <h2 className="mt-4 text-3xl font-extrabold text-ink lg:text-4xl">
            We would love to
            <span className="block text-sky">hear from you</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-charcoal/80">
            Have questions about Dr. Jiva? Get in touch with our team and
            learn how our digital healthcare platform can help you.
          </p>
        </div>

        {/* Contact Content */}
        <div className="mt-10 grid gap-5 lg:grid-cols-[0.75fr_1.05fr]">
          {/* Left Card */}
          <div className="h-fit rounded-2xl bg-ink p-5 text-paper lg:p-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-paper/15">
              <MessageCircle size={22} />
            </div>

            <h3 className="mt-5 text-xl font-extrabold">
              Let&apos;s start a conversation
            </h3>

            <p className="mt-3 text-sm leading-6 text-paper/70">
              Our team is here to answer your questions and help you learn
              more about Dr. Jiva.
            </p>

            <a href="mailto:hello@drjiva.in" className="mt-6 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-paper/15">
                <Mail size={18} />
              </div>
              <div>
                <p className="text-xs text-paper/60">Email Us</p>
                <p className="text-sm font-medium">hello@drjiva.in</p>
              </div>
            </a>

            <a href="tel:+910000000000" className="mt-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-paper/15">
                <Phone size={18} />
              </div>
              <div>
                <p className="text-xs text-paper/60">Call Us</p>
                <p className="text-sm font-medium">+91 9876543210</p>
              </div>
            </a>

            <div className="mt-5 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-paper/15">
                <MapPin size={18} />
              </div>
              <div>
                <p className="text-xs text-paper/60">Location</p>
                <p className="text-sm font-medium">India</p>
              </div>
            </div>

            <div className="mt-6 rounded-xl border border-paper/20 bg-paper/10 p-4">
              <p className="text-xs leading-6 text-paper/70">
                We aim to respond to your message as soon as possible.
              </p>
            </div>
          </div>

          {/* Right Form */}
          <div className="rounded-2xl border border-line bg-paper p-5 lg:p-6">
            <h3 className="text-lg font-extrabold text-ink">Send us a message</h3>
            <p className="mt-2 text-sm text-charcoal/70">
              Fill out the form and our team will get back to you.
            </p>

            <form className="mt-5 space-y-3">
              <div className="grid gap-3 md:grid-cols-2">
                <div>
                  <label htmlFor="name" className="mb-2 block text-sm font-semibold text-ink">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Enter your name"
                    className="w-full rounded-xl border border-line bg-paper-soft px-4 py-2.5 text-sm text-ink outline-none placeholder:text-charcoal/40 focus:border-sky focus:bg-paper focus:ring-4 focus:ring-sky/10"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="mb-2 block text-sm font-semibold text-ink">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="w-full rounded-xl border border-line bg-paper-soft px-4 py-2.5 text-sm text-ink outline-none placeholder:text-charcoal/40 focus:border-sky focus:bg-paper focus:ring-4 focus:ring-sky/10"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="phone" className="mb-2 block text-sm font-semibold text-ink">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  className="w-full rounded-xl border border-line bg-paper-soft px-4 py-2.5 text-sm text-ink outline-none placeholder:text-charcoal/40 focus:border-sky focus:bg-paper focus:ring-4 focus:ring-sky/10"
                />
              </div>

              <div>
                <label htmlFor="subject" className="mb-2 block text-sm font-semibold text-ink">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  placeholder="What is your message about?"
                  className="w-full rounded-xl border border-line bg-paper-soft px-4 py-2.5 text-sm text-ink outline-none placeholder:text-charcoal/40 focus:border-sky focus:bg-paper focus:ring-4 focus:ring-sky/10"
                />
              </div>

              <div>
                <label htmlFor="message" className="mb-2 block text-sm font-semibold text-ink">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={3}
                  placeholder="Write your message here..."
                  className="w-full resize-none rounded-xl border border-line bg-paper-soft px-4 py-2.5 text-sm text-ink outline-none placeholder:text-charcoal/40 focus:border-sky focus:bg-paper focus:ring-4 focus:ring-sky/10"
                />
              </div>

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-xl bg-ink px-5 py-3 text-sm font-semibold text-paper hover:bg-ink-soft"
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
