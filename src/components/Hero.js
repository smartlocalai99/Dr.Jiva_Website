import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-x-hidden bg-white pt-12 pb-24 lg:pt-16 lg:pb-32 border-b border-line">
      {/* Background soft brand gradient glows - matching the screenshot's layout but with brand colors */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* Top-left soft sky blue glow */}
        <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,_rgba(47,127,219,0.08)_0%,_rgba(255,255,255,0)_70%)] blur-3xl" />
        {/* Top-right soft navy-ink glow */}
        <div className="absolute top-0 right-0 w-[700px] h-[650px] rounded-full bg-[radial-gradient(circle,_rgba(20,34,74,0.03)_0%,_rgba(255,255,255,0)_80%)] blur-2xl" />
        {/* Subtle sky blue accent glow */}
        <div className="absolute top-10 right-24 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,_rgba(47,127,219,0.05)_0%,_rgba(255,255,255,0)_70%)] blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
        {/* Tagline */}
        <span className="font-eyebrow inline-block text-xs font-semibold uppercase text-sky">
          Digital healthcare, made for India
        </span>

        {/* Center Header */}
        <h1 className="mt-8 text-5xl font-extrabold leading-[1.08] tracking-tight text-ink lg:text-7xl font-display max-w-4xl mx-auto">
          Never{" "}
          <span className="inline-flex align-middle items-center justify-center mx-1">
            {/* 8-pointed star in brand Sky Blue */}
            <svg
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-10 h-10 text-sky lg:w-[52px] lg:h-[52px]"
            >
              <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
            </svg>
          </span>{" "}
          miss a{" "}
          <span className="block sm:inline">
            dose{" "}
            <span className="inline-flex align-middle items-center justify-center mx-1">
              {/* Play triangle in brand Sky Blue */}
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-8 h-8 text-sky lg:w-[44px] lg:h-[44px]"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>{" "}
            again
          </span>
        </h1>

        {/* Subtitle */}
        <p className="mt-8 max-w-xl mx-auto text-lg leading-relaxed text-charcoal/70 font-body">
          Track medicines, order refills, manage prescriptions, and keep every medical record secure in one intelligent platform built for your life.
        </p>

        {/* Buttons */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button className="rounded-full bg-ink px-8 py-3.5 text-sm font-semibold text-white hover:bg-ink-soft shadow-md transition-all duration-200">
            Get the App
          </button>
          <button className="rounded-full border border-ink/20 bg-white px-8 py-3.5 text-sm font-semibold text-ink hover:border-ink/40 shadow-sm transition-all duration-200">
            See How It Works
          </button>
        </div>

        {/* CARDS CONTAINER */}
        <div className="relative mt-20 flex items-center justify-center -space-x-8 sm:-space-x-12 lg:-space-x-16 xl:-space-x-20 overflow-x-hidden max-w-full mx-auto pb-6">
          
          {/* Card 1: Outer Left cropped */}
          <div className="hidden xl:block w-32 h-52 rounded-[1.8rem] overflow-hidden shrink-0 translate-y-16 rotate-[-8deg] opacity-40 border border-[#e2e8f0] bg-[#f4eefb] z-0">
            <img
              src="/about_waving_doctor.png"
              alt="Customer photo"
              className="w-full h-full object-cover grayscale opacity-90"
            />
          </div>

          {/* Card 2: Mid Left */}
          <div className="hidden lg:block w-40 h-60 rounded-[1.8rem] overflow-hidden shrink-0 translate-y-10 rotate-[-4deg] border border-[#e2e8f0] bg-paper-soft relative p-4 z-0">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,#e0f2fe,transparent)]" />
            <img
              src="/about_inset_doctor.png"
              alt="Consultation avatar"
              className="w-full h-[85%] object-cover rounded-2xl relative z-10"
            />
          </div>

          {/* Card 3: Inner Left */}
          <div className="w-48 h-[310px] rounded-[1.8rem] overflow-hidden shrink-0 translate-y-4 rotate-[-2deg] bg-ink text-white p-5 flex flex-col justify-between border border-[#ffffff15] shadow-lg z-10 text-left">
            <p className="text-lg font-bold font-display leading-tight tracking-tight">
              We bring doctors and patients closer
            </p>
            <div className="w-full h-[60%] rounded-2xl overflow-hidden mt-3 relative">
              <img
                src="/about.png"
                alt="Doctor reviewing digital records with patient"
                className="w-full h-full object-cover object-top"
              />
            </div>
          </div>

          {/* Center Card: Mobile Phone Mockup */}
          <div className="relative w-[280px] sm:w-[310px] aspect-[9/18.5] rounded-[3rem] bg-black border-[10px] border-black shadow-2xl shrink-0 z-20 flex flex-col justify-between overflow-hidden p-4 pb-6 select-none bg-[#f0f4f9]">
            {/* Notch */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-black rounded-b-2xl z-30" />
            
            {/* Phone Screen Content */}
            <div className="flex flex-col h-full justify-between pt-6 text-left relative">
              <div>
                {/* Header text */}
                <h3 className="text-2xl font-black text-ink leading-[1.1] tracking-tight font-display">
                  Smart Reminder
                  <span className="block text-sky mt-1 text-sm font-semibold">Next Dose: 08:00 AM</span>
                </h3>

                {/* Stats Overlay Card */}
                <div className="mt-4 bg-white rounded-2xl p-3 shadow-md border border-gray-100 flex flex-col gap-1 relative z-10">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-extrabold text-ink">96%</span>
                    <span className="text-[10px] font-bold text-green-500 bg-green-50 px-1.5 py-0.5 rounded-full flex items-center">
                      ▲ 5%
                    </span>
                  </div>
                  <span className="text-[10px] font-medium text-gray-400 uppercase tracking-wider">
                    Monthly Adherence
                  </span>
                  {/* Wavy line chart SVG */}
                  <svg className="w-full h-10 text-sky mt-1" viewBox="0 0 100 30" fill="none">
                    <path
                      d="M0 20 Q 20 5, 40 22 T 80 8 T 100 12"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      fill="none"
                    />
                  </svg>
                  <div className="mt-2 bg-sky/10 rounded-lg py-1 px-2.5 text-[10px] font-bold text-sky w-fit">
                    On Track
                  </div>
                </div>
              </div>

              {/* Bottom Background Doctor Photo */}
              <div className="absolute bottom-[-16px] inset-x-[-16px] h-[50%] overflow-hidden">
                <img
                  src="/about_waving_doctor.png"
                  alt="Doctor waving inside phone app"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

          {/* Card 5: Inner Right */}
          <div className="w-48 h-[310px] rounded-[1.8rem] overflow-hidden shrink-0 translate-y-4 rotate-[2deg] bg-paper-soft text-ink p-5 flex flex-col justify-between border border-[#e2e8f0] shadow-lg z-10 text-left">
            <p className="text-base font-extrabold font-display leading-tight">
              Real-time updates to manage health
            </p>
            
            {/* Center avatar looking up with background circles */}
            <div className="relative w-full h-[60%] flex items-center justify-center mt-2">
              <div className="absolute w-28 h-28 rounded-full border border-sky-100 bg-sky-50/20" />
              <img
                src="/about_inset_doctor.png"
                alt="Analytics doctor avatar"
                className="w-20 h-20 rounded-full object-cover border-2 border-white shadow-md relative z-10"
              />
              {/* Floating badges */}
              <div className="absolute top-2 right-2 w-6 h-6 rounded-full bg-sky text-white flex items-center justify-center shadow z-20 text-[9px] font-bold">
                🩺
              </div>
            </div>
          </div>

          {/* Card 6: Mid Right */}
          <div className="hidden lg:flex w-40 h-64 rounded-[1.8rem] overflow-hidden shrink-0 translate-y-10 rotate-[4deg] bg-sky text-white p-5 flex flex-col justify-between shadow-md border border-sky/20 z-0 text-left">
            <p className="text-base font-extrabold font-display">
              Dr. Jiva Features
            </p>
            <ul className="space-y-3 mt-4 text-[11px] font-medium text-white/90">
              <li className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0">
                  <Sparkles size={10} className="fill-current" />
                </div>
                Sync Refills
              </li>
              <li className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0">
                  <Sparkles size={10} className="fill-current" />
                </div>
                Secure Vault
              </li>
              <li className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-white/20 text-white flex items-center justify-center shrink-0">
                  <Sparkles size={10} className="fill-current" />
                </div>
                24/7 Consults
              </li>
            </ul>
            <p className="text-[10px] text-white/40 mt-auto">
              Dr. Jiva App
            </p>
          </div>

          {/* Card 7: Outer Right cropped */}
          <div className="hidden xl:block w-32 h-52 rounded-[1.8rem] overflow-hidden shrink-0 translate-y-16 rotate-[8deg] opacity-40 border border-[#e2e8f0] bg-paper-soft z-0">
            <img
              src="/about_waving_doctor.png"
              alt="Indian doctor profile"
              className="w-full h-full object-cover grayscale opacity-90"
            />
          </div>

        </div>

      </div>
    </section>
  );
}
