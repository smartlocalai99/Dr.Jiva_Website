"use client";

import {
  Download,
  UserPlus,
  Pill,
  Newspaper,
  Hospital,
  HeartPulse,
} from "lucide-react";

const steps = [
  {
    no: "01",
    title: "Download Dr. Jiva",
    desc: "Download the Dr. Jiva app and get started with your digital healthcare journey.",
    icon: Download,
  },
  {
    no: "02",
    title: "Create Your Profile",
    desc: "Create your secure profile and add your healthcare information.",
    icon: UserPlus,
  },
  {
    no: "03",
    title: "Upload Prescription",
    desc: "Upload your doctor's prescription securely for future reference.",
    icon: Pill,
  },
  {
    no: "04",
    title: "Health Feed",
    desc: "Stay informed with health posts and videos shared by verified doctors and healthcare professionals.",
    icon: Newspaper,
  },
  {
    no: "05",
    title: "Order Medicines",
    desc: "Order your prescribed medicines online from partnered pharmacies.",
    icon: Hospital,
  },
  {
    no: "06",
    title: "Get Smart Reminders",
    desc: "Receive timely medicine reminders and stay on track with your treatment.",
    icon: HeartPulse,
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="overflow-hidden bg-paper py-20 lg:py-24"
    >
      <div className="w-full px-6 lg:px-8">
        
        {/* HEADING */}
        <div className="text-center">
          <span className="font-eyebrow inline-block text-xs font-semibold uppercase tracking-wider text-sky">
            How it works
          </span>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-ink lg:text-4xl">
            Your healthcare journey
            <span className="block text-sky">
              made simple
            </span>
          </h2>

          <p className="mt-4 text-base leading-7 text-charcoal/80">
            Get started with Dr. Jiva and manage your healthcare in six
            simple steps.
          </p>
        </div>

        {/* CARDS */}
        <div className="mt-14 grid grid-cols-1 justify-center gap-5 md:grid-cols-2 lg:grid-cols-[repeat(3,380px)]">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.no}
                className="group relative h-[210px] overflow-hidden rounded-[28px] border border-line bg-white px-8 py-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_35px_rgba(30,70,120,0.10)]"
              >
                {/* LARGE FADED NUMBER */}
                <span className="pointer-events-none absolute -right-1 -top-6 font-serif text-[105px] font-bold leading-none text-sky/[0.06]">
                  {step.no}
                </span>

                {/* ICON */}
                <div className="relative z-10 flex h-[52px] w-[52px] items-center justify-center rounded-[16px] bg-paper-soft shadow-[0_8px_20px_rgba(30,70,120,0.08)]">
                  <Icon
                    size={24}
                    strokeWidth={1.7}
                    className="text-sky"
                  />
                </div>

                {/* CONTENT */}
                <div className="relative z-10 mt-5">
                  <h3 className="text-[17px] font-bold leading-6 text-ink">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-6 text-charcoal/70">
                    {step.desc}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

      </div>
    </section>
  );
}