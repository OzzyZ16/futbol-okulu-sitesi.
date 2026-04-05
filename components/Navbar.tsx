"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Shield } from "lucide-react";

const navLinks = [
  { href: "/", label: "Ana Sayfa" },
  { href: "/egitim", label: "Eğitim Programı" },
  { href: "/kayit", label: "Kayıt Ol" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <nav className="bg-[#14532d] text-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 font-bold text-xl tracking-wide hover:text-green-200 transition-colors">
            <Shield className="w-7 h-7 text-green-300" />
            <span>Futbol Akademisi</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors px-2 py-1 border-b-2 ${
                  pathname === link.href
                    ? "border-green-300 text-green-200"
                    : "border-transparent hover:text-green-200 hover:border-green-400"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/admin"
              className="ml-2 text-xs bg-[#1e3a8a] hover:bg-blue-800 text-white px-3 py-1.5 font-medium tracking-wide transition-colors"
            >
              Yönetici Paneli
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded hover:bg-green-800 transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Menüyü aç/kapat"
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#0f3d20] border-t border-green-800">
          <div className="px-4 py-3 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`block py-2 px-3 text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-green-300 bg-green-900"
                    : "hover:text-green-200 hover:bg-green-900"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/admin"
              onClick={() => setMenuOpen(false)}
              className="block mt-2 py-2 px-3 text-sm font-medium text-white bg-[#1e3a8a] hover:bg-blue-800 transition-colors"
            >
              Yönetici Paneli
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
