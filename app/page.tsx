import Link from "next/link";
import Image from "next/image";
import { Users, Trophy, Clock, ChevronRight, Star, BookOpen } from "lucide-react";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative text-white">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1551698618-1dfe5d97d256?w=1600&q=80')",
            backgroundColor: "#14532d",
          }}
        />
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 md:py-40">
          <div className="max-w-2xl">
            <span className="inline-block bg-[#1e3a8a] text-white text-xs font-semibold tracking-widest uppercase px-3 py-1 mb-4">
              Profesyonel Futbol Eğitimi
            </span>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
              Geleceğin Futbolcularını Yetiştiriyoruz
            </h1>
            <p className="text-lg text-green-100 mb-8 leading-relaxed">
              20 yıllık deneyim ve uzman kadromuzla çocuklarınıza en iyi futbol
              eğitimini sunuyoruz. 6–18 yaş arası her yaş grubuna özel programlar.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/kayit"
                className="inline-flex items-center gap-2 bg-white text-[#14532d] font-semibold px-6 py-3 hover:bg-green-50 transition-colors text-sm tracking-wide"
              >
                Hemen Kayıt Ol <ChevronRight className="w-4 h-4" />
              </Link>
              <Link
                href="/egitim"
                className="inline-flex items-center gap-2 border border-white text-white font-semibold px-6 py-3 hover:bg-white/10 transition-colors text-sm tracking-wide"
              >
                Eğitim Programı <ChevronRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="bg-[#1e3a8a] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "20+", label: "Yıllık Deneyim" },
              { value: "500+", label: "Mezun Sporcu" },
              { value: "3", label: "Antrenman Seansı" },
              { value: "15+", label: "Uzman Antrenör" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-2xl font-bold text-green-300">{stat.value}</div>
                <div className="text-sm text-blue-200 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm font-semibold text-[#14532d] tracking-widest uppercase">
                Hakkımızda
              </span>
              <h2 className="text-3xl font-bold text-gray-900 mt-2 mb-5">
                Kurumsal Bir Eğitim Geleneği
              </h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Futbol Akademimiz, 2004 yılından bu yana Türkiye&apos;nin önde gelen
                futbol okullarından biri olarak faaliyet göstermektedir. UEFA lisanslı
                antrenörlerimiz ve modern altyapımızla sporculara dünya standartlarında
                eğitim sunuyoruz.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                Her yaş grubuna özel müfredat, bireysel gelişim takibi ve disiplinli
                antrenman programlarıyla gençlerimizin hem spor hem de kişisel
                gelişimlerine katkı sağlıyoruz.
              </p>
              <ul className="space-y-3">
                {[
                  "UEFA lisanslı uzman antrenörler",
                  "Her yaş gruba özel eğitim müfredatı",
                  "Bireysel performans takibi",
                  "Modern saha ve ekipman altyapısı",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-gray-700">
                    <Star className="w-4 h-4 text-[#14532d] flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative">
              <div className="relative w-full aspect-video">
                <Image
                  src="https://images.unsplash.com/photo-1518604964417-04c3b2f56cb3?w=800&q=80"
                  alt="Futbol antrenmanı"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-[#14532d] text-white p-4 hidden md:block">
                <div className="text-2xl font-bold">2004</div>
                <div className="text-xs text-green-200">Yılından Beri</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold text-[#14532d] tracking-widest uppercase">
              Neden Biz?
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              Akademimizin Avantajları
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Trophy className="w-8 h-8 text-[#14532d]" />,
                title: "Başarı Odaklı",
                desc: "Onlarca ulusal turnuva şampiyonluğu ve yüzlerce başarılı sporcu mezunu.",
              },
              {
                icon: <Users className="w-8 h-8 text-[#14532d]" />,
                title: "Küçük Gruplar",
                desc: "Maksimum 15 kişilik gruplarla bireysel ilgi ve kişisel gelişim garantisi.",
              },
              {
                icon: <Clock className="w-8 h-8 text-[#14532d]" />,
                title: "Esnek Seanslar",
                desc: "Sabah, öğleden sonra ve akşam olmak üzere üç farklı antrenman seansı.",
              },
              {
                icon: <BookOpen className="w-8 h-8 text-[#14532d]" />,
                title: "Yapılandırılmış Müfredat",
                desc: "Yaş grubuna göre özel hazırlanmış bilimsel antrenman programları.",
              },
              {
                icon: <Star className="w-8 h-8 text-[#14532d]" />,
                title: "Uzman Kadro",
                desc: "UEFA A ve B lisanslı, alanında uzman 15+ antrenörden oluşan kadro.",
              },
              {
                icon: <Trophy className="w-8 h-8 text-[#14532d]" />,
                title: "Modern Altyapı",
                desc: "Tam boyut çim saha, kondisyon salonu ve duş/soyunma odaları.",
              },
            ].map((feature) => (
              <div
                key={feature.title}
                className="bg-white border border-gray-200 p-6 hover:border-[#14532d] transition-colors"
              >
                <div className="mb-3">{feature.icon}</div>
                <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1e3a8a] text-white py-14">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Çocuğunuzun Geleceğine Yatırım Yapın</h2>
          <p className="text-blue-200 mb-8 text-lg">
            Kayıt formunu doldurun, en kısa sürede sizinle iletişime geçelim.
          </p>
          <Link
            href="/kayit"
            className="inline-flex items-center gap-2 bg-[#14532d] hover:bg-green-800 text-white font-semibold px-8 py-3 transition-colors text-sm tracking-wide"
          >
            Ücretsiz Deneme Seansı Talep Et <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
