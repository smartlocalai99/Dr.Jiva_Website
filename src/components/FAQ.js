import { useState } from "react";
import {
  ChevronDown,
  ChevronUp,
  MessageCircle,
} from "lucide-react";

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
    <section
      id="faq"
      className="relative overflow-hidden bg-white py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-2xl text-center">

          <span className="inline-flex rounded-full bg-[#2F5E9F]/10 px-4 py-1.5 text-lg font-semibold text-[#2F5E9F]">
            FAQ
          </span>

          <h2 className="mt-5 text-3xl font-black leading-tight text-slate-900 lg:text-4xl">
            Frequently Asked

            <span className="block text-[#2F5E9F]">
              Questions
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-slate-600">
            Find answers to common questions about Dr. Jiva and how our
            digital healthcare platform helps you manage your health.
          </p>

        </div>

        {/* FAQ Content */}

        <div className="mx-auto mt-12 grid max-w-5xl gap-7 lg:grid-cols-[0.75fr_1.35fr]">

          {/* Left Support Card */}

          <div className="h-fit rounded-[25px] bg-[#2F5E9F] p-6 text-white">

            {/* Support Icon */}

            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/15">

              <MessageCircle size={23} />

            </div>

            {/* Support Title */}

            <h3 className="mt-6 text-2xl font-black leading-tight">

              Still Have

              <span className="block">
                Questions?
              </span>

            </h3>

            {/* Support Description */}

            <p className="mt-4 text-sm leading-6 text-blue-100">

              Our team is here to help you understand Dr. Jiva and get
              the support you need.

            </p>

            {/* Contact Button */}

            <a
              href="#contact"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#2F5E9F] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >

              Contact Us

              <MessageCircle size={16} />

            </a>

          </div>

          {/* Right FAQ Question Cards */}

          <div className="mx-auto w-full max-w-[620px] space-y-3">

            {faqs.map((faq, index) => {

              const isOpen = openIndex === index;

              return (

                <div
                  key={index}
                  className={`overflow-hidden rounded-xl border transition-all duration-300 ${
                    isOpen
                      ? "border-[#2F5E9F]/25 bg-white shadow-md"
                      : "border-slate-200 bg-[#F8FAFC] hover:border-[#2F5E9F]/20 hover:bg-white"
                  }`}
                >

                  {/* Question Button */}

                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  >

                    {/* Question */}

                    <span
                      className={`text-[15px] font-bold leading-6 transition-colors duration-300 ${
                        isOpen
                          ? "text-[#2F5E9F]"
                          : "text-slate-900"
                      }`}
                    >

                      {faq.question}

                    </span>

                   {/* Up / Down Arrow */}

<span
  className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
    isOpen
      ? " text-[#2F5E9F]"
      : " text-[#2F5E9F]"
  }`}
>
  {isOpen ? (
    <ChevronUp size={25} strokeWidth={3} />
  ) : (
    <ChevronDown size={25} strokeWidth={3} />
  )}
</span>
                  </button>

                  {/* FAQ Answer */}

                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >

                    <div className="overflow-hidden">

                      <p className="px-5 pb-5 text-sm leading-6 text-slate-600">

                        {faq.answer}

                      </p>

                    </div>

                  </div>

                </div>

              );
            })}

          </div>

        </div>

      </div>
    </section>
  );
}