import {
  Bell,
  FileText,
  Files,
  ShieldCheck,
  Hospital,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";

const features = [
  {
    icon: Bell,
    title: "Smart Medicine Reminders",
    description:
      "Receive timely medicine reminders and stay consistent with your daily medication routine.",
  },
  {
    icon: ShoppingBag,
    title: "Order Medicines Online",
    description:
      "Order your prescribed medicines from partnered pharmacies and get them delivered to your doorstep.",
  },
  {
    icon: FileText,
    title: "Digital Prescriptions",
    description:
      "Access and manage your doctor prescriptions securely without carrying paper copies.",
  },
  {
    icon: Files,
    title: "Medical Records",
    description:
      "Store laboratory reports, discharge summaries, and important healthcare documents in one place.",
  },
  {
    icon: Hospital,
    title: "Hospital Connectivity",
    description:
      "Stay connected with partnered hospitals and access healthcare information easily.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy & Security",
    description:
      "Your healthcare information is securely managed with advanced privacy and data protection.",
  },
];

export default function Features() {
  return (
    <section id="features" className="overflow-hidden bg-paper-soft py-24 lg:py-28">
      <div className="mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div>
          <span className="font-eyebrow inline-block text-xs font-semibold uppercase text-sky">
            Features
          </span>
          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-ink lg:text-5xl">
            Everything you need
            <span className="block text-sky">for better healthcare</span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-charcoal/80">
            Dr. Jiva combines medicine reminders, online medicine ordering,
            digital prescriptions, medical records, and secure healthcare
            services into one intelligent healthcare platform.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isFeatured = index === 0;
            return (
              <article
                key={feature.title}
                className={`group flex min-h-[255px] flex-col rounded-[22px] border p-6 ${
                  isFeatured
                    ? "border-ink bg-ink"
                    : "border-line bg-paper"
                }`}
              >
                <div
                  className={`flex h-[48px] w-[48px] items-center justify-center rounded-2xl ${
                    isFeatured
                      ? "bg-paper text-ink"
                      : "bg-sky/10 text-sky"
                  }`}
                >
                  <Icon size={22} strokeWidth={1.8} />
                </div>

                <h3
                  className={`mt-6 text-xl font-bold leading-7 ${
                    isFeatured ? "text-paper" : "text-ink"
                  }`}
                >
                  {feature.title}
                </h3>

                <p
                  className={`mt-3 text-sm leading-6 ${
                    isFeatured ? "text-paper/70" : "text-charcoal/70"
                  }`}
                >
                  {feature.description}
                </p>

                <a
                  href="#contact"
                  className={`mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold ${
                    isFeatured ? "text-paper" : "text-sky"
                  }`}
                >
                  Learn More
                  <ArrowRight size={18} />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
