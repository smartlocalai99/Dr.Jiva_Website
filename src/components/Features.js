"use client";

const features = [
  {
    title: "Medicine Reminders",
    description:
      "Get timely reminders for your medicines and stay consistent with your daily medication schedule.",
    src: "/medicine reminders.png",
  },
  {
    title: "Health Documents",
    description:
      "Keep prescriptions, lab reports, discharge summaries, and important health documents in one place.",
    src: "/health documents.png",
  },
  {
    title: "Health Feed",
    description:
      "Stay informed with health posts and videos shared by verified doctors and healthcare professionals.",
    src: "/health feed.png",
  },
  {
    title: "Medicine Ordering",
    description:
      "Order your prescribed medicines conveniently through the app from partnered pharmacies.",
    src: "/medicine ordering.png",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="overflow-hidden bg-paper-soft py-24 lg:py-28"
    >
      <div className="mx-auto px-6 lg:px-8">

        {/* HEADING */}
        <div className="mx-auto  text-center">
          <span className="font-eyebrow inline-block text-xs font-semibold uppercase tracking-wider text-sky">
            Features
          </span>

          <h2 className="mt-4 text-4xl font-extrabold leading-tight text-ink lg:text-5xl">
            Everything you need
            <span className="block text-sky">
              for better healthcare
            </span>
          </h2>

          <p className="mx-auto mt-5  text-base leading-7 text-charcoal/80 lg:text-lg">
            Dr. Jiva brings medicine reminders, health documents, doctor
            insights, medicine ordering, and essential healthcare services
            together in one intelligent healthcare platform.
          </p>
        </div>

        {/* FEATURE PHONES */}
        <div className="relative mx-auto mt-16 flex  items-end justify-center gap-6 lg:gap-10">

          {features.map((feature, index) => (
            <article
              key={feature.title}
              className={`group flex w-[210px] flex-shrink-0 flex-col items-center ${
                index % 2 === 0 ? "lg:-translate-y-3" : "lg:translate-y-3"
              }`}
            >

              {/* PHONE */}
              <div className="relative h-[430px] w-[210px] rounded-[34px] border-[7px] border-[#111827] bg-[#111827] p-[3px] shadow-[0_20px_45px_rgba(0,0,0,0.18)] transition-all duration-500 group-hover:-translate-y-3 group-hover:shadow-[0_28px_55px_rgba(0,0,0,0.24)]">

                {/* PHONE SCREEN */}
                <div className="relative h-full w-full overflow-hidden rounded-[27px] bg-white">

                  <img
                    src={feature.src}
                    alt={feature.title}
                    className="h-full w-full object-contain object-center transition-transform duration-700 group-hover:scale-[1.02]"
                  />

                  {/* DYNAMIC ISLAND */}
                  <div className="absolute left-1/2 top-[7px] h-[18px] w-[70px] -translate-x-1/2 rounded-full bg-black" />
                </div>
              </div>

              {/* FEATURE NAME */}
              <div className="mt-7 text-center">
                <h3 className="text-lg font-bold leading-6 text-ink">
                  {feature.title}
                </h3>

                <p className="mt-2 text-sm leading-5 text-charcoal/70">
                  {feature.description}
                </p>
              </div>
            </article>
          ))}

        </div>
      </div>
    </section>
  );
}