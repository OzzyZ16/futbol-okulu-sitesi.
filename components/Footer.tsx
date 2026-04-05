import Link from "next/link";
import { Phone, Mail, MapPin, Shield } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#14532d] text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Shield className="w-6 h-6 text-green-300" />
              <span className="font-bold text-lg">Futbol Akademisi</span>
            </div>
            <p className="text-green-200 text-sm leading-relaxed">
              Köklü eğitim geleneği ve uzman kadromuzla çocuklarınızı geleceğin
              futbolcuları olarak yetiştiriyoruz.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-green-100 mb-3 tracking-wide">Hızlı Bağlantılar</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-green-300 hover:text-white transition-colors">Ana Sayfa</Link></li>
              <li><Link href="/egitim" className="text-green-300 hover:text-white transition-colors">Eğitim Programı</Link></li>
              <li><Link href="/kayit" className="text-green-300 hover:text-white transition-colors">Kayıt Ol</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-green-100 mb-3 tracking-wide">İletişim</h3>
            <ul className="space-y-2 text-sm text-green-200">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span>+90 (212) 000 00 00</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span>info@futbolakademisi.com</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-green-400 flex-shrink-0" />
                <span>İstanbul, Türkiye</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-green-800 text-center text-sm text-green-400">
          © {new Date().getFullYear()} Futbol Akademisi. Tüm hakları saklıdır.
        </div>
      </div>
    </footer>
  );
}
