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
    <section
      id="features"
      className="overflow-hidden bg-[#F8FAFC] py-24 lg:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}
        <div className="max-w-3xl">
          <span className="inline-flex rounded-full bg-[#2F5E9F]/10 px-5 py-2 text-sm font-semibold text-[#2F5E9F]">
            FEATURES
          </span>
          <h2 className="mt-6 text-4xl font-black leading-tight text-slate-900 lg:text-5xl">
            Everything You Need
            <span className="block text-[#2F5E9F]">
              For Better Healthcare
            </span>
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            Dr. Jiva combines medicine reminders, online medicine ordering,
  digital prescriptions, medical records, and secure healthcare
  services into one intelligent healthcare platform.
          </p>
        </div>
        {/* Feature Cards */}
       <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            {/* First card blue */}
            const isFeatured = index === 0;
            return (
              <article
                key={feature.title}
className={`group flex min-h-[255px] flex-col rounded-[22px] border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${
                  isFeatured
                    ? "border-[#2F5E9F] bg-[#2F5E9F]"
                    : "border-slate-200 bg-white"
                }`}
              >
                {/* Icon */}
                <div
                 className={`flex h-[48px] w-[48px] items-center justify-center rounded-2xl transition-all duration-300 ${
                    isFeatured
                      ? "bg-white text-[#2F5E9F]"
                      : "bg-[#2F5E9F]/10 text-[#2F5E9F] group-hover:bg-[#2F5E9F] group-hover:text-white"
                  }`}
                >
                  <Icon
                    size={22}
                    strokeWidth={1.8}
                  />
                </div>
                {/* Title */}
                <h3
                  className={`mt-6 text-xl font-bold leading-7 ${
                    isFeatured
                      ? "text-white"
                      : "text-slate-900"
                  }`}
                >
                  {feature.title}
                </h3>
                {/* Description */}
                <p
                  className={`mt-3 text-sm leading-6 ${
                    isFeatured
                      ? "text-blue-100"
                      : "text-slate-600"

                  }`}
                >
                  {feature.description}
                </p>
                {/* Learn More */}
                <a
                  href="#contact"
                 className={`mt-auto inline-flex items-center gap-2 pt-5 text-sm font-bold transition ${
                  isFeatured
                      ? "text-white hover:text-blue-100"
                      : "text-[#2F5E9F] hover:text-[#244B80]"
                  }`}
                >
                  Learn More
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );

}