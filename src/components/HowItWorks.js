import {
  Download,
  UserPlus,
  Pill,
  Hospital,
  HeartPulse,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    no: "STEP 01",
    title: "Download Dr. Jiva",
    desc: "Download the Dr. Jiva app and begin your digital healthcare journey.",
    icon: Download,
  },
  {
    no: "STEP 02",
    title: "Create Your Profile",
    desc: "Create your profile securely and add your basic healthcare details.",
    icon: UserPlus,
  },
  {
    no: "STEP 03",
    title: "Add Your Medicines",
    desc: "Add your medicines, upload prescriptions, and set smart reminders.",
    icon: Pill,
  },
  {
    no: "STEP 04",
    title: "Manage Your Health",
    desc: "Access medical records, appointments, prescriptions, and health information.",
    icon: Hospital,
  },
  {
    no: "STEP 05",
    title: "Stay Healthy",
    desc: "Follow reminders, maintain healthy habits, and stay consistent every day.",
    icon: HeartPulse,
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="overflow-hidden bg-white py-24 lg:py-28"
    >
      {/* Reduced main width */}

      <div className="mx-auto max-w-[1250px] px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">

          <span className="inline-flex rounded-full bg-[#2F5E9F]/10 px-5 py-2 text-sm font-semibold text-[#2F5E9F]">
            HOW IT WORKS
          </span>

          <h2 className="mt-5 text-4xl font-black leading-tight text-slate-900 lg:text-5xl">
            Your Healthcare Journey

            <span className="block text-[#2F5E9F]">
              Made Simple
            </span>
          </h2>

          <p className="mt-5 text-lg leading-8 text-slate-600">
            Get started with Dr. Jiva and manage your healthcare in a few
            simple steps.
          </p>

        </div>

        {/* Smaller Five Cards */}

        <div className="mx-auto mt-14 grid max-w-[1180px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <article
                key={step.no}
                className="relative overflow-visible rounded-[22px] border border-[#DCE3EA] bg-white transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >

                {/* Smaller Icon Area */}

                <div className="relative mx-2.5 mt-2.5 flex h-[135px] items-center justify-center overflow-hidden rounded-[17px] bg-[#EEF4F8]">

                  {/* Background Circle */}

                  <div className="absolute h-24 w-24 rounded-full bg-[#2F5E9F]/10" />

                  {/* Main Icon */}

                  <div className="relative flex h-16 w-16 items-center justify-center rounded-[20px] bg-white text-[#2F5E9F] shadow-md">

                    <Icon
                      size={31}
                      strokeWidth={1.8}
                    />

                  </div>

                </div>

                {/* Smaller Card Content */}

                <div className="min-h-[190px] px-4 pb-5 pt-5">

                  <p className="text-[10px] font-bold tracking-[0.16em] text-[#2F5E9F]">
                    {step.no}
                  </p>

                  <h3 className="mt-3 text-[17px] font-bold leading-6 text-slate-900">
                    {step.title}
                  </h3>

                  <p className="mt-2 text-[13px] leading-5 text-slate-600">
                    {step.desc}
                  </p>

                </div>

                {/* Arrow Between Cards */}

                {index !== steps.length - 1 && (

                  <div className="absolute -right-[16px] top-[132px] z-20 hidden h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-[#2F5E9F] text-white shadow-md lg:flex">

                    <ArrowRight
                      size={15}
                      strokeWidth={2.5}
                    />

                  </div>

                )}

              </article>
            );
          })}

        </div>

      </div>
    </section>
  );
}