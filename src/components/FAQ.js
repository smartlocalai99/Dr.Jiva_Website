import { useState } from "react";
import { ChevronDown, ChevronUp, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "What is Dr. Jiva?",
    answer:
      "Dr. Jiva is a digital healthcare platform that helps users manage medicine reminders, order medicines, prescriptions, medical records, and healthcare information in one secure application.",
  },
  {
    question: "How do medicine reminders work?",
    answer:
      "You can add your medicine details, dosage, and schedule. Dr. Jiva will send timely reminders to help you stay consistent with your medication routine.",
  },
  {
    question: "Can I order medicines through Dr. Jiva?",
    answer:
      "Yes. You can order your prescribed medicines from partnered pharmacies and have them delivered conveniently to your doorstep.",
  },
  {
    question: "Can I store my medical records in Dr. Jiva?",
    answer:
      "Yes. You can securely organize and access prescriptions, laboratory reports, discharge summaries, and other important healthcare documents in one place.",
  },
  {
    question: "Is my healthcare information secure?",
    answer:
      "Yes. Dr. Jiva is designed with advanced privacy and security measures to help protect your personal healthcare information.",
  },
  {
    question: "Can I access Dr. Jiva from anywhere?",
    answer:
      "Yes. You can access your medicine reminders, medicine orders, prescriptions, and medical records anytime through the Dr. Jiva app.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative overflow-hidden bg-paper py-20 lg:py-24">
      <div className="mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto text-center">
          <span className="font-eyebrow inline-block text-xs font-semibold uppercase text-sky">
            FAQ
          </span>
          <h2 className="mt-5 text-3xl font-extrabold leading-tight text-ink lg:text-4xl">
            Frequently asked
            <span className="block text-sky">questions</span>
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base leading-7 text-charcoal/80">
            Find answers to common questions about Dr. Jiva and how our
            digital healthcare platform helps you manage your health.
          </p>
        </div>

        {/* FAQ Content */}
        <div className="mx-auto mt-12 grid gap-7 lg:grid-cols-[0.75fr_1.35fr]">
          {/* Left Support Card */}
          <div className="h-fit rounded-[25px] bg-ink p-6 text-paper">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-paper/15">
              <MessageCircle size={23} />
            </div>

            <h3 className="mt-6 text-2xl font-extrabold leading-tight">
              Still have
              <span className="block">questions?</span>
            </h3>

            <p className="mt-4 text-sm leading-6 text-paper/70">
              Our team is here to help you understand Dr. Jiva and get the
              support you need.
            </p>

            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-paper px-5 py-2.5 text-sm font-semibold text-ink"
            >
              Contact Us
              <MessageCircle size={16} />
            </a>
          </div>

          {/* Right FAQ Question Cards */}
          <div className="mx-auto w-full space-y-3">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`overflow-hidden rounded-xl border ${
                    isOpen
                      ? "border-sky/30 bg-paper"
                      : "border-line bg-paper-soft"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >
                    <span
                      className={`text-[15px] font-bold leading-6 ${
                        isOpen ? "text-sky" : "text-ink"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-sky">
                      {isOpen ? (
                        <ChevronUp size={25} strokeWidth={3} />
                      ) : (
                        <ChevronDown size={25} strokeWidth={3} />
                      )}
                    </span>
                  </button>

                  {isOpen && (
                    <p className="px-5 pb-5 text-sm leading-6 text-charcoal/70">
                      {faq.answer}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
