import { ShieldCheck, HeartPulse, Clock3, Smartphone } from "lucide-react";

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
    <section>
      <div className="mx-auto  px-6 py-20 lg:px-8">

        {/* Section Header */}
        <div className="grid gap-8 lg:grid-cols-2 lg:items-end">
          
          {/* Left */}
          <div>
            <p className="font-eyebrow text-sm font-semibold uppercase tracking-wider text-ink/60">
              Why choose Dr. Jiva
            </p>

            <h2 className="mt-5 text-4xl font-extrabold leading-tight text-ink lg:text-5xl">
              Smarter healthcare,
              <span className="block text-sky">better living</span>
            </h2>
          </div>

          {/* Right */}
          <div className="lg:pb-5">
            <p className="text-50 leading-7 text-charcoal/80 lg:ml-auto lg:translate-x-80">
              Dr. Jiva simplifies healthcare with medicine reminders,
              <br />
              online medicine ordering, secure digital records, 
               <br />
              and a connected healthcare experience.
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item) => {
            const Icon = item.icon;

            return (
              <div
  key={item.title}
  className="group relative rounded-3xl border border-line bg-white p-7 transition-all duration-300 hover:border-sky/40 hover:shadow-lg"
>

                {/* Icon */}
                <div className="flex h-10 w-10 items-center justify-start">
                  <Icon
                    size={29}
                    strokeWidth={1.8}
                    className="text-sky"
                  />
                </div>

                {/* Stat */}
                <div className="mt-5 font-eyebrow text-sm font-semibold text-ink/30">
                  {item.stat}
                </div>

                {/* Title */}
                <h3 className="mt-2 text-lg font-bold leading-6 text-ink">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-charcoal/70">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-16 rounded-3xl bg-ink px-8 py-8">
          <div className="grid gap-8 text-center md:grid-cols-4">

            <div>
              <h3 className="font-eyebrow text-3xl font-semibold text-paper">
                32+
              </h3>
              <p className="mt-2 text-sm text-paper/70">
                Hospitals
              </p>
            </div>

            <div>
              <h3 className="font-eyebrow text-3xl font-semibold text-paper">
                4.9★
              </h3>
              <p className="mt-2 text-sm text-paper/70">
                User Rating
              </p>
            </div>

            <div>
              <h3 className="font-eyebrow text-3xl font-semibold text-paper">
                100%
              </h3>
              <p className="mt-2 text-sm text-paper/70">
                Reminder Accuracy
              </p>
            </div>

            <div>
              <h3 className="font-eyebrow text-3xl font-semibold text-paper">
                24/7
              </h3>
              <p className="mt-2 text-sm text-paper/70">
                Secure Access
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}