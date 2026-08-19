"use client";

import { useEffect, useState } from "react";
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
    video: "/health-news.mp4",
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
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) =>
        prev === features.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isPaused]);

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
      className="overflow-hidden bg-paper-soft py-12 sm:py-20 lg:py-24"
    >
      <div className="mx-auto w-full px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="font-eyebrow inline-block text-xs font-semibold uppercase tracking-wider text-sky">
            Features
          </span>

          <h2 className="mt-4 text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl">
            Everything you need
            <span className="block text-sky">
              for better healthcare
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-base leading-7 text-charcoal/80 lg:text-lg">
            Dr. Jiva brings medicine reminders, health documents, doctor
            insights, medicine ordering, and essential healthcare services
            together in one intelligent healthcare platform.
          </p>
        </div>

        {/* Phone Carousel */}
        <div
          className="relative mx-auto mt-10 w-full"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {/* Phones Area */}
          <div className="relative h-[520px] w-full sm:h-[600px] lg:h-[610px]">

            {/* Phones */}
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
                    className={`absolute ${
                      isActive ? "flex" : "hidden sm:flex"
                    } flex-col items-center transition-all duration-700 ease-in-out`}
                    style={{
                      transform: `translateX(${translateX}px) scale(${scale})`,
                      opacity,
                      zIndex,
                    }}
                  >
                    {/* Phone Frame */}
                    <div className="relative h-[390px] w-[190px] rounded-[34px] border-[7px] border-[#111827] bg-[#111827] p-[3px] shadow-[0_20px_45px_rgba(0,0,0,0.18)] sm:h-[430px] sm:w-[210px]">

                      {/* Phone Screen */}
                      <div className="relative h-full w-full overflow-hidden rounded-[27px] bg-white">

                        {feature.video ? (
                          <video
                            src={feature.video}
                            autoPlay
                            muted
                            loop
                            playsInline
                            className="h-full w-full object-cover object-center"
                          />
                        ) : (
                          <Image
                            src={feature.src}
                            alt={feature.title}
                            fill
                            sizes="(max-width: 639px) 190px, 210px"
                            className="object-cover object-center"
                          />
                        )}

                        {/* Dynamic Island */}
                        <div className="absolute left-1/2 top-[7px] h-[18px] w-[70px] -translate-x-1/2 rounded-full bg-black" />
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>

          {/* Active Feature Information */}
          <div className="mx-auto w-full max-w-3xl px-4 pb-4 text-center sm:px-6">
            <h3 className="text-xl font-bold leading-tight text-ink sm:text-2xl lg:text-2xl">
              {features[activeIndex].title}
            </h3>

            <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-charcoal/70 sm:text-base sm:leading-7">
              {features[activeIndex].description}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}