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
    <section id="why" className="overflow-hidden bg-paper py-20">
      <div className="mx-auto px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto text-center">
          <span className="font-eyebrow inline-block text-xs font-semibold uppercase text-sky">
            Why choose Dr. Jiva
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-ink lg:text-5xl">
            Smarter healthcare,
            <span className="block text-sky">better living</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-charcoal/80">
            Dr. Jiva simplifies healthcare with medicine reminders, online
            medicine ordering, secure digital records, and a connected
            healthcare experience.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.title}
                className="rounded-2xl border border-line bg-paper-soft p-6"
              >
                <div className="font-eyebrow text-right text-xl font-semibold text-ink/15">
                  {item.stat}
                </div>

                <div className="mt-2 flex h-12 w-12 items-center justify-center rounded-xl bg-sky/10">
                  <Icon size={24} className="text-sky" />
                </div>

                <h3 className="mt-5 text-xl font-bold text-ink">
                  {item.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-charcoal/70">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Bottom Stats */}
        <div className="mt-14 rounded-3xl bg-ink px-8 py-8">
          <div className="grid gap-8 text-center md:grid-cols-4">
            <div>
              <h3 className="font-eyebrow text-3xl font-semibold text-paper">
                10K+
              </h3>
              <p className="mt-2 text-sm text-paper/70">Active Users</p>
            </div>
            <div>
              <h3 className="font-eyebrow text-3xl font-semibold text-paper">
                4.9★
              </h3>
              <p className="mt-2 text-sm text-paper/70">User Rating</p>
            </div>
            <div>
              <h3 className="font-eyebrow text-3xl font-semibold text-paper">
                99%
              </h3>
              <p className="mt-2 text-sm text-paper/70">Reminder Accuracy</p>
            </div>
            <div>
              <h3 className="font-eyebrow text-3xl font-semibold text-paper">
                24/7
              </h3>
              <p className="mt-2 text-sm text-paper/70">Secure Access</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
