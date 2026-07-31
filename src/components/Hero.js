import { PlayCircle } from "lucide-react";

export default function Hero() {
  return (
   <section className="relative overflow-x-hidden bg-white">

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 min-h-[90vh] flex items-center">

  <div className="grid lg:grid-cols-2 gap-16 xl:gap-24 items-center w-full">

    {/* LEFT */}
    <div className="max-w-l">

      <h1 className="-mt-12 text-2xl lg:text-5xl font-black leading-[1.05] text-slate-900">
        Your Personal
        <span className="block text-[#2F5E9F]">
  Healthcare
</span>
        Companion
      </h1>

      <p className="mt-8 text-l leading-6 text-slate-600">
        Track medicines, access prescriptions, manage medical records,
view lab reports, and stay connected with your healthcare providers—
all in one secure platform.
      </p>

      <div className="mt-6">
       <button className="flex items-center gap-3 rounded-full bg-[#2F5E9F] px-8 py-4 font-semibold text-white hover:bg-[#264f87] transition">
          <PlayCircle size={20} />
          Watch Demo
        </button>
      </div>

    </div>


         {/* RIGHT */}

<div className="relative flex justify-end"> 
    <img src="/hero-phone.png" 
    alt="Dr.Jiva App" 
    className="relative right-[-70px] w-[650px] max-w-none scale-125 " 
    />
 </div>
        </div>

      </div>

    </section>
  );
}




