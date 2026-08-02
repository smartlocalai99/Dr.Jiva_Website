import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
         <Link href="/">
  <img
    src="Logo_dr.png"
    alt="Dr.Jiva"
    className="h-18 w-auto"
  />
</Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center gap-10">

            <a href="#" className="font-medium text-slate-700 hover:text-blue-600 transition">
              Home
            </a>

            <a href="#about" className="font-medium text-slate-700 hover:text-blue-600 transition">
              About Us
            </a>

            <a href="#features" className="font-medium text-slate-700 hover:text-blue-600 transition">
              Features
            </a>

            <a href="#how-it-works" className="font-medium text-slate-700 hover:text-blue-600 transition">
              How It Works
            </a>


            <a href="#contact" className="font-medium text-slate-700 hover:text-blue-600 transition">
              Contact Us
            </a>

          </nav>

        </div>
      </div>

      {/* Mobile Menu */}

      {menuOpen && (
        <div className="lg:hidden bg-white border-t">

          <div className="px-6 py-6 space-y-5">

            <a href="#" className="block text-slate-700 font-medium">
              Home
            </a>

            <a href="#about" className="block text-slate-700 font-medium">
              About Us
            </a>

            <a href="#features" className="block text-slate-700 font-medium">
              Why Dr.Jiva
            </a>

            <a href="#how-it-works" className="block text-slate-700 font-medium">
              How It Works
            </a>

            <a href="#contact" className="block text-slate-700 font-medium">
              Contact Us
            </a>

            

          </div>

        </div>
      )}
    </header>
  );
}
