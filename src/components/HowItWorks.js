import { Download, UserPlus, Pill, Hospital, HeartPulse } from "lucide-react";
import PulseLine from "./PulseLine";

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
    title: "Order Medicines",
    desc: "Order your prescribed medicines online from partnered pharmacies.",
    icon: Hospital,
  },
  {
    no: "05",
    title: "Get Smart Reminders",
    desc: "Receive timely medicine reminders and stay on track with your treatment.",
    icon: HeartPulse,
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="overflow-hidden bg-paper py-24 lg:py-28">
      <div className="mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto text-center">
          <span className="font-eyebrow inline-block text-xs font-semibold uppercase text-sky">
            How it works
          </span>
          <h2 className="mt-5 text-4xl font-extrabold leading-tight text-ink lg:text-5xl">
            Your healthcare journey
            <span className="block text-sky">made simple</span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-8 text-charcoal/80">
            Get started with Dr. Jiva and manage your healthcare in five
            simple steps.
          </p>
        </div>

        {/* Steps threaded by a single pulse line */}
        <div className="relative mx-auto mt-16 grid grid-cols-1 gap-x-4 gap-y-10 sm:grid-cols-2 lg:grid-cols-5">
          <PulseLine className="pointer-events-none absolute left-0 top-9 hidden h-6 w-full text-sky/30 lg:block" />

          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div key={step.no} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 flex h-[72px] w-[72px] items-center justify-center rounded-full border border-line bg-paper">
                  <Icon size={28} strokeWidth={1.8} className="text-sky" />
                </div>

                <p className="font-eyebrow mt-5 text-xs font-semibold text-sky">
                  Step {step.no}
                </p>
                <h3 className="mt-2 text-lg font-bold leading-6 text-ink">
                  {step.title}
                </h3>
                <p className="mt-2 max-w-[220px] text-sm leading-5 text-charcoal/70">
                  {step.desc}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
