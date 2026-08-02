
import {
  ShieldCheck,
  HeartPulse,
  Clock3,
  Smartphone,
} from "lucide-react";

const reasons = [
  {
    icon: HeartPulse,
    title: "Complete Healthcare in One App",
    description:
      "Manage medicines, order medicines online, prescriptions, and medical records from one secure platform.",
    stat: "All-in-One",
  },
  {
    icon: Clock3,
    title: "Never Miss Your Medicines",
    description:
      "Receive smart reminders and daily notifications to help you stay consistent with your treatment.",
    stat: "24/7",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Secure",
    description:
      "Your healthcare information is encrypted and protected with advanced security standards.",
    stat: "100%",
  },
  {
    icon: Smartphone,
    title: "Access Anywhere",
    description:
      "View your health records, prescriptions, and order medicines anytime from your smartphone.",
    stat: "Anytime",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why"
      className="bg-white py-20 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="inline-flex rounded-full bg-[#2F5E9F]/10 px-5 py-2 text-sm font-semibold text-[#2F5E9F]">
            WHY CHOOSE DR. JIVA
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-black text-slate-900">
            Smarter Healthcare,
            <span className="block text-[#2F5E9F]">
              Better Living
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-slate-600">
            Dr. Jiva simplifies healthcare with medicine reminders,
  online medicine ordering, secure digital records, and a
  connected healthcare experience.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

          {reasons.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="group rounded-2xl border border-slate-100 bg-[#F8FAFC] p-6 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                {/* Stat */}

                <div className="text-right text-2xl font-black text-[#2F5E9F]/15">
                  {item.stat}
                </div>

                {/* Icon */}

                <div className="mt-2 flex h-12 w-12 items-center justify-center rounded-xl bg-[#2F5E9F]/10 transition group-hover:bg-[#2F5E9F]">

                  <Icon
                    size={24}
                    className="text-[#2F5E9F] group-hover:text-white"
                  />

                </div>

                {/* Title */}

                <h3 className="mt-5 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                {/* Description */}

                <p className="mt-3 text-sm leading-6 text-slate-600">
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

        {/* Bottom Stats */}

        <div className="mt-14 rounded-3xl bg-[#2F5E9F] px-8 py-8">

          <div className="grid gap-8 text-center md:grid-cols-4">

            <div>
              <h3 className="text-3xl font-black text-white">
                10K+
              </h3>
              <p className="mt-2 text-sm text-blue-100">
                Active Users
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-white">
                4.9★
              </h3>
              <p className="mt-2 text-sm text-blue-100">
                User Rating
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-white">
                99%
              </h3>
              <p className="mt-2 text-sm text-blue-100">
                Reminder Accuracy
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-black text-white">
                24/7
              </h3>
              <p className="mt-2 text-sm text-blue-100">
                Secure Access
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}