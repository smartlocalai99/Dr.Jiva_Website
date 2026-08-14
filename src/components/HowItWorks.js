// import { Download, UserPlus, Pill, Hospital, HeartPulse } from "lucide-react";

// const steps = [
//   {
//     no: "01",
//     title: "Download Dr. Jiva",
//     desc: "Download the Dr. Jiva app and get started with your digital healthcare journey.",
//     icon: Download,
//   },
//   {
//     no: "02",
//     title: "Create Your Profile",
//     desc: "Create your secure profile and add your healthcare information.",
//     icon: UserPlus,
//   },
//   {
//     no: "03",
//     title: "Upload Prescription",
//     desc: "Upload your doctor's prescription securely for future reference.",
//     icon: Pill,
//   },
//   {
//     no: "04",
//     title: "Order Medicines",
//     desc: "Order your prescribed medicines online from partnered pharmacies.",
//     icon: Hospital,
//   },
//   {
//     no: "05",
//     title: "Get Smart Reminders",
//     desc: "Receive timely medicine reminders and stay on track with your treatment.",
//     icon: HeartPulse,
//   },
// ];

// export default function HowItWorks() {
//   return (
//     <section
//       id="how-it-works"
//       className="overflow-hidden bg-paper py-24 lg:py-28"
//     >
//       <div className="mx-auto  px-6 lg:px-8">

//         {/* Heading */}
//         <div className="mx-auto  text-center">
//           <span className="font-eyebrow inline-block text-xs font-semibold uppercase text-sky">
//             How it works
//           </span>

//           <h2 className="mt-5 text-4xl font-extrabold leading-tight text-ink lg:text-5xl">
//             Your healthcare journey
//             <span className="block text-sky">made simple</span>
//           </h2>

//           <p className="mx-auto mt-5  text-lg leading-8 text-charcoal/80">
//             Get started with Dr. Jiva and manage your healthcare in five
//             simple steps.
//           </p>
//         </div>

//         {/* Process */}
//         <div className="relative mx-auto mt-20 ">

//           {/* Connecting Line - Desktop */}
//           <div className="pointer-events-none absolute left-[6%] right-[6%] top-[145px] hidden h-[2px] bg-sky/20 lg:block" />
//           <div className="grid grid-cols-1 gap-14 lg:grid-cols-5 lg:gap-0">

//             {steps.map((step, index) => {
//               const Icon = step.icon;
//               const isEven = index % 2 === 1;

//               return (
//                 <div
//   key={step.no}
//   className={`relative flex flex-col items-center text-center ${
//     isEven ? "lg:mt-[132px]" : "lg:mt-0"
//   }`}
// >

//                   {/* Step Number */}
//                   <div className="relative z-20 mb-4">
//                     <span className="font-eyebrow text-sm font-bold text-sky">
//                       {step.no}
//                     </span>
//                   </div>

//                   {/* Icon */}
//                   <div className="animate-diamond relative z-20 flex h-[86px] w-[86px] items-center justify-center rounded-2xl border border-sky/20 bg-white">
//   <Icon
//     size={32}
//     strokeWidth={1.8}
//     className="animate-diamond-icon text-sky"
//   />
// </div>

//                   {/* Content */}
//                   <div className="mt-8 max-w-[190px]">
//                     <h3 className="text-base font-bold leading-6 text-ink">
//                       {step.title}
//                     </h3>

//                     <p className="mt-3 text-sm leading-5 text-charcoal/70">
//                       {step.desc}
//                     </p>
//                   </div>

//                 </div>
//               );
//             })}

//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";

import {
  Download,
  UserPlus,
  Pill,
  Newspaper,
  Hospital,
  HeartPulse,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    no: "01",
    title: "Download Dr. Jiva",
    desc: "Download the Dr. Jiva app and get started with your digital healthcare journey.",
    icon: Download,
    color: "bg-blue-500",
  },
  {
    no: "02",
    title: "Create Your Profile",
    desc: "Create your secure profile and add your healthcare information.",
    icon: UserPlus,
    color: "bg-sky-500",
  },
  {
    no: "03",
    title: "Upload Prescription",
    desc: "Upload your doctor's prescription securely for future reference.",
    icon: Pill,
    color: "bg-cyan-500",
  },
  {
    no: "04",
    title: "Health Feed",
    desc: "Stay informed with health posts and videos shared by verified doctors and healthcare professionals.",
    icon: Newspaper,
    color: "bg-blue-500",
  },
  {
    no: "05",
    title: "Order Medicines",
    desc: "Order your prescribed medicines online from partnered pharmacies.",
    icon: Hospital,
    color: "bg-sky-500",
  },
  {
    no: "06",
    title: "Get Smart Reminders",
    desc: "Receive timely medicine reminders and stay on track with your treatment.",
    icon: HeartPulse,
    color: "bg-cyan-500",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="overflow-hidden bg-paper py-24 lg:py-28"
    >
      <div className="mx-auto px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="font-eyebrow inline-block text-xs font-semibold uppercase tracking-wider text-sky">
            How it works
          </span>

          <h2 className="mt-5 text-4xl font-extrabold leading-tight text-ink lg:text-5xl">
            Your healthcare journey
            <span className="block text-sky">
              made simple
            </span>
          </h2>

          <p className="mx-auto mt-5 text-lg leading-8 text-charcoal/80">
            Get started with Dr. Jiva and manage your healthcare in six
            simple steps.
          </p>
        </div>

        {/* PROCESS CARDS */}
        <div className="mx-auto mt-20 w-full">
          <div className="flex w-full gap-6">

            {steps.map((step) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.no}
                  className="group relative h-[285px] min-w-0 flex-1 rounded-[16px] bg-white px-5 pt-7 shadow-[0_12px_35px_rgba(30,70,120,0.12)]"
                >

                  {/* STEP NUMBER */}
                  <div className="text-center">
                    <span className="font-serif text-[18px] font-bold text-sky">
                      {step.no}
                    </span>
                  </div>

                  {/* MAIN ICON */}
                  {/* FLOATING GLOW ICON */}
<div className="relative mt-5 flex h-[70px] items-center justify-center">

  {/* Glow */}
  <div className="absolute h-[58px] w-[58px] rounded-full bg-sky/25 blur-xl" />

  {/* Floating icon */}
  <div className="relative z-10 flex h-[58px] w-[58px] -translate-y-2 items-center justify-center rounded-full bg-white shadow-[0_12px_25px_rgba(14,165,233,0.25)] transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-[0_16px_32px_rgba(14,165,233,0.38)]">

    <Icon
      size={40}
      strokeWidth={1.5}
      className="text-sky drop-shadow-[0_0_8px_rgba(14,165,233,0.45)]"
    />

  </div>

</div>
                  {/* CONTENT */}
                  <div className="mt-5 text-center">
                    <h3 className="text-[12px] font-bold uppercase leading-5 text-ink">
                      {step.title}
                    </h3>

                    <p className="mx-auto mt-3 text-[10px] leading-[17px] text-charcoal/60">
                      {step.desc}
                    </p>
                  </div>

                  {/* COLOURED SQUARE */}
                  {step.no !== "06" && (
                    <div
                      className={`absolute -right-[43px] top-1/2 z-30 flex h-[65px] w-[65px] -translate-y-1/2 items-center justify-center rounded-[17px] ${step.color} shadow-[0_10px_25px_rgba(30,80,150,0.20)]`}
                    >
                      <div className="flex h-[58px] w-[58px] items-center justify-center rounded-[12px] bg-black/5">
                        <ArrowRight
                          size={27}
                          strokeWidth={1.8}
                          className="text-white"
                        />
                      </div>
                    </div>
                  )}

                </article>
              );
            })}

          </div>
        </div>

      </div>
    </section>
  );
}