"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

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
    title: "Health News",
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
  {
    title: "Medical Feed",
    description:
      "Discover medical camps, select the number of people attending, add attendee names, and confirm your booking.",
    src: "/medical feed.png",
  },
];

export default function Features() {
  const [activeIndex, setActiveIndex] = useState(2);

  const previousFeature = () => {
    setActiveIndex((prev) =>
      prev === 0 ? features.length - 1 : prev - 1
    );
  };

  const nextFeature = () => {
    setActiveIndex((prev) =>
      prev === features.length - 1 ? 0 : prev + 1
    );
  };

  const getPosition = (index) => {
    let position = index - activeIndex;

    if (position > features.length / 2) {
      position -= features.length;
    }

    if (position < -features.length / 2) {
      position += features.length;
    }

    return position;
  };

  return (
    <section
      id="features"
      className="overflow-hidden bg-paper-soft py-16 sm:py-24 lg:py-28"
    >
      <div className="mx-auto px-6 lg:px-8">

        {/* HEADING */}
        <div className="mx-auto text-center">
          <span className="font-eyebrow inline-block text-xs font-semibold uppercase tracking-wider text-sky">
            Features
          </span>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
            Everything you need
            <span className="block text-sky">
              for better healthcare
            </span>
          </h2>

          <p className="mx-auto mt-5 text-base leading-7 text-charcoal/80 lg:text-lg">
            Dr. Jiva brings medicine reminders, health documents, doctor
            insights, medicine ordering, and essential healthcare services
            together in one intelligent healthcare platform.
          </p>
        </div>

        {/* PHONE CAROUSEL */}
       <div className="relative mx-auto mt-6 h-[570px] w-full sm:h-[640px]">

          {/* LEFT BUTTON */}
          <button
            onClick={previousFeature}
            aria-label="Previous feature"
            className="absolute left-2 top-[205px] z-40 flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white text-ink shadow-md transition hover:scale-105 hover:text-sky sm:left-4 sm:top-[230px] lg:left-10"
          >
            <ChevronLeft size={22} />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={nextFeature}
            aria-label="Next feature"
            className="absolute right-2 top-[205px] z-40 flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white text-ink shadow-md transition hover:scale-105 hover:text-sky sm:right-4 sm:top-[230px] lg:right-10"
          >
            <ChevronRight size={22} />
          </button>

          {/* PHONES */}
          <div className="absolute inset-0 flex items-center justify-center">

            {features.map((feature, index) => {
              const position = getPosition(index);
              const isActive = position === 0;

              let translateX = position * 230;
              let scale = 0.82;
              let opacity = 0.45;
              let zIndex = 10;

              if (isActive) {
                translateX = 0;
                scale = 1.05;
                opacity = 1;
                zIndex = 30;
              } else if (Math.abs(position) === 1) {
                scale = 0.88;
                opacity = 0.85;
                zIndex = 20;
              }

              return (
                <article
                  key={feature.title}
                  className={`absolute ${isActive ? "flex" : "hidden sm:flex"} flex-col items-center transition-all duration-700 ease-in-out`}
                  style={{
                    transform: `translateX(${translateX}px) scale(${scale})`,
                    opacity: opacity,
                    zIndex: zIndex,
                  }}
                >
                  {/* PHONE */}
                  <div className="relative h-[390px] w-[190px] rounded-[34px] border-[7px] border-[#111827] bg-[#111827] p-[3px] shadow-[0_20px_45px_rgba(0,0,0,0.18)] sm:h-[430px] sm:w-[210px]">

                    {/* PHONE SCREEN */}
                    <div className="relative h-full w-full overflow-hidden rounded-[27px] bg-white">
                      <Image
                        src={feature.src}
                        alt={feature.title}
                        fill
                        sizes="(max-width: 639px) 190px, 210px"
                        className="h-full w-full object-cover object-center"
                      />

                      {/* DYNAMIC ISLAND */}
                      <div className="absolute left-1/2 top-[7px] h-[18px] w-[70px] -translate-x-1/2 rounded-full bg-black" />
                    </div>
                  </div>
                </article>
              );
            })}

          </div>

          {/* FEATURE TEXT */}
          <div className="absolute bottom-0 left-1/2 w-full -translate-x-1/2 px-4 text-center sm:-bottom-6 sm:px-6">

            <h3 className="text-xl font-bold text-ink lg:text-2xl">
              {features[activeIndex].title}
            </h3>

            <p className="mt-3 text-sm leading-6 text-charcoal/70 lg:text-base">
              {features[activeIndex].description}
            </p>

          </div>

        </div>

      </div>
    </section>
  );
}
