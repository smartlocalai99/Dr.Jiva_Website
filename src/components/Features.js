import {
  Bell,
  FileText,
  Files,
  CalendarDays,
  ShieldCheck,
  Hospital,
} from "lucide-react";

const features = [
  {
    icon: Bell,
    title: "Smart Medicine Reminders",
    description:
      "Receive timely medicine reminders with daily streaks to help you stay consistent.",
  },
  {
    icon: FileText,
    title: "Digital Prescriptions",
    description:
      "Access doctor prescriptions securely anytime without carrying paper copies.",
  },
  {
    icon: Files,
    title: "Medical Records",
    description:
      "Store laboratory reports, discharge summaries, and healthcare documents securely.",
  },
  {
    icon: CalendarDays,
    title: "Appointment Management",
    description:
      "View upcoming appointments and receive reminders so you never miss a visit.",
  },
  {
    icon: Hospital,
    title: "Hospital Connectivity",
    description:
      "Stay connected with partnered hospitals and access updated healthcare information.",
  },
  {
    icon: ShieldCheck,
    title: "Privacy & Security",
    description:
      "Your health records are securely stored with strong privacy and data protection.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24 bg-[#F8FAFC] to-slate-50"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center max-w-3xl mx-auto">

          <span className="-mt-20 inline-flex rounded-full bg-[#2F5E9F]/10 px-5 py-2 text-sm font-semibold text-[#2F5E9F]">
            FEATURES
          </span>

          <h2 className="mt-6 text-4xl lg:text-5xl font-black text-slate-900">
            Everything You Need
            <span className="block text-[#2F5E9F]">
              For Better Healthcare
            </span>
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-8">
            Dr. Jiva combines medicine reminders, digital records,
            appointments, and secure healthcare services into one
            intelligent mobile platform.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group rounded-3xl bg-white border border-gray-100 p-8 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2F5E9F]/10 group-hover:bg-[#2F5E9F] transition">

                  <Icon
                    size={30}
                    className="text-[#2F5E9F] group-hover:text-white"
                  />

                </div>

                <h3 className="mt-8 text-2xl font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-8">
                  {feature.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}


