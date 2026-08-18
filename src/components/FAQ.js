import { useState } from "react";
import { Plus, Minus, ArrowUpRight } from "lucide-react";

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

  // Left side FAQs
  const leftFaqs = faqs.filter((_, index) => index % 2 === 0);

  // Right side FAQs
  const rightFaqs = faqs.filter((_, index) => index % 2 !== 0);

  const FAQItem = ({ faq, originalIndex }) => {
    const isOpen = openIndex === originalIndex;

    return (
      <div className="overflow-hidden rounded-[20px] border border-gray-100 bg-white transition-all duration-300">
        {/* Question */}
        <button
          type="button"
          onClick={() => toggleFAQ(originalIndex)}
          aria-expanded={isOpen}
          className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left"
        >
          <span className="text-[15px] font-medium leading-6 text-ink sm:text-base">
            {faq.question}
          </span>

          {/* Plus / Minus */}
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-ink text-white">
            {isOpen ? (
              <Minus size={16} strokeWidth={2.5} />
            ) : (
              <Plus size={16} strokeWidth={2.5} />
            )}
          </span>
        </button>

        {/* Answer */}
        {isOpen && (
          <div className="px-5 pb-5">
            <p className="text-sm leading-6 text-charcoal/65">
              {faq.answer}
            </p>
          </div>
        )}
      </div>
    );
  };

  return (
    <section className="bg-paper py-20 lg:py-24">
      <div className="w-full px-6 lg:px-8">

        {/* FAQ Heading */}
        <div className="mx-auto max-w-3xl text-center">

          {/* Small Label */}
          <div className="flex items-center justify-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-blue-500" />

            <span className="text-sm font-medium text-charcoal">
              FAQs
            </span>
          </div>

          {/* Main Heading */}
          <h2 className="mt-6 text-4xl font-bold tracking-tight text-ink sm:text-5xl">
            Frequently asked questions
          </h2>

          {/* Description */}
          <p className="mx-auto mt-5 max-w-xl text-sm leading-6 text-charcoal/65 sm:text-base">
            Find answers to common questions about Dr. Jiva and how our
            digital healthcare platform helps you manage your health.
          </p>

        </div>

        {/* FAQ TWO INDEPENDENT COLUMNS */}
        <div className="mx-auto mt-12 grid grid-cols-1 gap-5 md:grid-cols-2">

          {/* LEFT COLUMN */}
          <div className="flex flex-col gap-5 self-start">
            {leftFaqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                originalIndex={index * 2}
              />
            ))}
          </div>

          {/* RIGHT COLUMN */}
          <div className="flex flex-col gap-5 self-start">
            {rightFaqs.map((faq, index) => (
              <FAQItem
                key={index}
                faq={faq}
                originalIndex={index * 2 + 1}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
