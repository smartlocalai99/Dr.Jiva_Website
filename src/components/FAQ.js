import { useState } from "react";
import { Plus, Minus, MessageCircle } from "lucide-react";

const faqs = [
  {
    question: "What is Dr. Jiva?",
    answer:
      "Dr. Jiva is a digital healthcare platform that helps users manage medicine reminders, prescriptions, medical records, appointments, and healthcare information in one secure application.",
  },
  {
    question: "How do medicine reminders work?",
    answer:
      "You can add your medicine details, dosage, and schedule. Dr. Jiva will send timely reminders to help you stay consistent with your medication routine.",
  },
  {
    question: "Can I store my medical records in Dr. Jiva?",
    answer:
      "Yes. You can securely organize and access prescriptions, laboratory reports, discharge summaries, and other important healthcare documents in one place.",
  },
  {
    question: "Can I manage doctor appointments?",
    answer:
      "Yes. Dr. Jiva helps you keep track of upcoming appointments and receive reminders so that you do not miss important healthcare visits.",
  },
  {
    question: "Is my healthcare information secure?",
    answer:
      "Dr. Jiva is designed with privacy and security in mind. Your healthcare information is handled securely to help protect your personal medical data.",
  },
  {
    question: "Can I access Dr. Jiva from anywhere?",
    answer:
      "Yes. You can access your healthcare information through the Dr. Jiva application whenever you need it, helping you stay connected to your health information.",
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
      className="relative overflow-hidden bg-white py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-[#2F5E9F]/10 px-5 py-2 text-sm font-semibold text-[#2F5E9F]">
            FAQ
          </span>

          <h2 className="mt-6 text-4xl font-black leading-tight text-slate-900 lg:text-5xl">
            Frequently Asked

            <span className="block text-[#2F5E9F]">
              Questions
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Find answers to common questions about Dr. Jiva and how our
            digital healthcare platform helps you manage your health.
          </p>

        </div>

        {/* FAQ Content */}

        <div className="mx-auto mt-16 grid max-w-5xl gap-12 lg:grid-cols-[0.8fr_1.5fr]">

          {/* Left Support Card */}

          <div className="h-fit rounded-[32px] bg-[#2F5E9F] p-9 text-white">

            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white/15">

              <MessageCircle size={30} />

            </div>

            <h3 className="mt-8 text-3xl font-black">
              Still Have Questions?
            </h3>

            <p className="mt-5 leading-8 text-blue-100">
              Our team is here to help you understand Dr. Jiva and get the
              support you need.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-[#2F5E9F] transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              Contact Us

              <MessageCircle size={18} />

            </a>

          </div>

          {/* FAQ Accordion */}

          <div className="space-y-4">

            {faqs.map((faq, index) => {

              const isOpen = openIndex === index;

              return (
                <div
                  key={index}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-[#2F5E9F]/25 bg-white shadow-lg"
                      : "border-slate-200 bg-[#F8FAFC] hover:border-[#2F5E9F]/20 hover:bg-white"
                  }`}
                >

                  {/* Question */}

                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 px-7 py-6 text-left"
                  >

                    <span
                      className={`text-lg font-bold transition-colors duration-300 ${
                        isOpen
                          ? "text-[#2F5E9F]"
                          : "text-slate-900"
                      }`}
                    >
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 bg-[#2F5E9F] text-white"
                          : "bg-[#2F5E9F]/10 text-[#2F5E9F]"
                      }`}
                    >

                      {isOpen ? (
                        <Minus size={20} />
                      ) : (
                        <Plus size={20} />
                      )}

                    </span>

                  </button>

                  {/* Answer */}

                  <div
                    className={`grid transition-all duration-500 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >

                    <div className="overflow-hidden">

                      <p className="px-7 pb-7 leading-8 text-slate-600">
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