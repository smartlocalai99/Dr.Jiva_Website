import dynamic from "next/dynamic";
import { Pill, Stethoscope, ArrowUpRight, Link2 } from "lucide-react";

// Dynamically import the Globe component to prevent SSR hydration errors
const Globe = dynamic(() => import("./Globe"), { ssr: false });

export default function AboutUs() {
  return (
    <section id="about" className="overflow-hidden bg-white py-24 lg:py-28 border-y border-line">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        {/* CENTER HEADER */}
        <div className="mx-auto max-w-4xl text-center mb-16">
          <h2 className="text-3xl font-light leading-relaxed text-gray-400 lg:text-5xl font-display">
            We're{" "}
            <span className="font-semibold text-ink">revolutionizing healthcare</span>
            <span className="inline-flex align-middle items-center justify-center px-3 py-1 rounded-full bg-sky/10 border border-sky/20 text-sky text-xs font-semibold mx-2">
              <Link2 size={13} className="rotate-45" />
            </span>
            delivery by bringing{" "}
            <span className="font-semibold text-ink">expertise</span>
            <span className="inline-flex align-middle items-center justify-center w-8 h-8 rounded-full bg-sky text-white mx-2">
              <Stethoscope size={14} />
            </span>
            to your doorstep through our{" "}
            <span className="font-semibold text-ink">advanced</span>
            <span className="inline-flex align-middle items-center justify-center w-8 h-8 rounded-full bg-paper-soft border border-line text-ink-soft mx-2">
              <ArrowUpRight size={14} />
            </span>
            <span className="font-semibold text-ink">telehealth</span> platform.
          </h2>
        </div>

        {/* 4-CARD GRID */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* CARD 1: Online Pharmacy */}
          <div className="flex flex-col justify-between rounded-[2rem] bg-paper-soft p-8 border border-line min-h-[320px] hover:border-sky/50 transition-all duration-300">
            <div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-sky text-white">
                <Pill size={22} />
              </div>
              <h3 className="mt-8 text-xl font-bold text-ink font-display">
                Online Pharmacy
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-charcoal/70 font-body">
                Order your prescribed medicines from verified partnered local pharmacies and get them delivered directly to your doorstep swiftly and safely.
              </p>
            </div>
          </div>

          {/* CARD 2: Real-time Medical Assistance */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-line group">
            <img
              src="/about_waving_doctor.png"
              alt="Real time medical assistance"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* FLOATING INSET AVATAR */}
            <div className="absolute right-4 top-4 h-16 w-16 overflow-hidden rounded-2xl border-2 border-white shadow-md transition-transform duration-500 group-hover:scale-110">
              <img
                src="/about_inset_doctor.png"
                alt="Doctor online consultation"
                className="h-full w-full object-cover"
              />
            </div>
            {/* BOTTOM LABEL */}
            <div className="absolute bottom-4 left-4 rounded-full bg-white/95 px-4 py-1.5 shadow-sm border border-gray-100 transition-all duration-300 group-hover:bg-white group-hover:shadow-md">
              <span className="text-xs font-semibold text-ink">
                Real-time doctor support
              </span>
            </div>
          </div>

          {/* CARD 3: Collaborative Healthcare / 3D WebGL Globe Card */}
          <div className="relative flex flex-col justify-between overflow-hidden rounded-[2rem] bg-ink p-8 text-white min-h-[320px] group transition-all duration-500 hover:bg-[#1a2c5a]">
            <div className="z-10">
              <h3 className="text-xl font-bold font-display">
                Collaborative Care
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-paper/70 font-body">
                Connecting doctors, clinics, and pharmacies across India for seamless patient-centric care.
              </p>
            </div>
            
            {/* INTERACTIVE 3D WEBGL GLOBE */}
            <div className="absolute -bottom-10 -right-10 w-60 h-60 transition-transform duration-500 group-hover:scale-105">
              <Globe className="h-full w-full" />
            </div>

            {/* Static Indian Avatar overlay */}
            <div className="absolute bottom-4 left-6 h-12 w-12 overflow-hidden rounded-full border-2 border-white/20 shadow-md group-hover:border-sky transition-colors duration-500 z-10">
              <img
                src="/about_inset_doctor.png"
                alt="Doctor avatar"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          {/* CARD 4: Digital Health Records */}
          <div className="relative aspect-[3/4] overflow-hidden rounded-[2rem] border border-line group">
            <img
              src="/about.png"
              alt="Digital Health Records"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* BOTTOM LABEL */}
            <div className="absolute bottom-4 left-4 rounded-full bg-white/95 px-4 py-1.5 shadow-sm border border-gray-100 transition-all duration-300 group-hover:bg-white group-hover:shadow-md">
              <span className="text-xs font-semibold text-ink">
                Digital Health Records
              </span>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

