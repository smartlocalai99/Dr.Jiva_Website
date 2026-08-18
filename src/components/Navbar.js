import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#why", label: "Why Us" },
  { href: "#features", label: "Features" },
  { href: "#how-it-works", label: "How It Works" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 w-full border-b border-line bg-paper">
      <div className="mx-auto px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <Image
  src="/Logo_dr.png"
  width={150}
  height={50}
  className="h-auto w-18"
  alt="Dr. Jiva"
/>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden items-center gap-9 lg:flex">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-[19px] uppercase text-ink hover:text-sky"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden lg:block">
            <a
              href="#download-app"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-paper hover:bg-ink-soft"
            >
              Get the App
              <ArrowUpRight size={16} />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink lg:hidden"
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-line bg-paper lg:hidden">
          <div className="flex flex-col gap-1 px-6 py-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-2 py-3 font-medium text-ink hover:bg-paper-soft"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#download-app"
              onClick={() => setMenuOpen(false)}
              className="mt-3 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-paper"
            >
              Get the App
              <ArrowUpRight size={16} />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
