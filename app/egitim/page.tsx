import Link from "next/link";
import Image from "next/image";
import { Sun, Sunset, Moon, ChevronRight, Clock, Users } from "lucide-react";

const sessions = [
  {
    id: "sabah",
    icon: <Sun className="w-7 h-7 text-yellow-500" />,
    title: "Sabah Seansı",
    time: "08:00 – 10:00",
    color: "border-yellow-500",
    headerBg: "bg-yellow-50",
    ageGroups: [
      { group: "U8 (6-8 Yaş)", days: "Pazartesi / Çarşamba / Cuma", duration: "60 dk", capacity: "12 kişi" },
      { group: "U10 (8-10 Yaş)", days: "Salı / Perşembe / Cumartesi", duration: "75 dk", capacity: "15 kişi" },
      { group: "U12 (10-12 Yaş)", days: "Pazartesi / Çarşamba / Cuma", duration: "90 dk", capacity: "15 kişi" },
    ],
    schedule: [
      { saat: "08:00 – 08:15", aktivite: "Isınma & Esneme" },
      { saat: "08:15 – 08:45", aktivite: "Teknik Çalışma (Top Kontrolü)" },
      { saat: "08:45 – 09:15", aktivite: "Taktik Egzersizler" },
      { saat: "09:15 – 09:45", aktivite: "Küçük Alan Maçı" },
      { saat: "09:45 – 10:00", aktivite: "Soğuma & Değerlendirme" },
    ],
    image: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1553778263-73a83bab9b0c?w=400&q=80",
      "https://images.unsplash.com/photo-1544442843-6e68f9f2a60a?w=400&q=80",
    ],
  },
  {
    id: "ogleden-sonra",
    icon: <Sunset className="w-7 h-7 text-orange-500" />,
    title: "Öğleden Sonra Seansı",
    time: "14:00 – 16:30",
    color: "border-orange-500",
    headerBg: "bg-orange-50",
    ageGroups: [
      { group: "U14 (12-14 Yaş)", days: "Pazartesi / Çarşamba / Cuma", duration: "90 dk", capacity: "15 kişi" },
      { group: "U16 (14-16 Yaş)", days: "Salı / Perşembe / Cumartesi", duration: "100 dk", capacity: "15 kişi" },
      { group: "Karma Grup", days: "Perşembe / Cumartesi", duration: "90 dk", capacity: "12 kişi" },
    ],
    schedule: [
      { saat: "14:00 – 14:20", aktivite: "Isınma & Dinamik Esneme" },
      { saat: "14:20 – 15:00", aktivite: "Teknik & Paslaşma Drilleri" },
      { saat: "15:00 – 15:40", aktivite: "Taktik & Pozisyon Çalışması" },
      { saat: "15:40 – 16:10", aktivite: "Tam Alan Maçı (7v7 veya 11v11)" },
      { saat: "16:10 – 16:30", aktivite: "Soğuma & Video Analizi" },
    ],
    image: "https://images.unsplash.com/photo-1579952363873-27f3bade9f55?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1526232761682-d26e03ac148e?w=400&q=80",
      "https://images.unsplash.com/photo-1560272564-c83b66b1ad12?w=400&q=80",
    ],
  },
  {
    id: "aksam",
    icon: <Moon className="w-7 h-7 text-blue-500" />,
    title: "Akşam Seansı",
    time: "18:00 – 20:00",
    color: "border-blue-500",
    headerBg: "bg-blue-50",
    ageGroups: [
      { group: "U18 (16-18 Yaş)", days: "Pazartesi / Çarşamba / Cuma", duration: "105 dk", capacity: "15 kişi" },
      { group: "Yetişkin (18+)", days: "Salı / Perşembe", duration: "90 dk", capacity: "12 kişi" },
      { group: "Hafta Sonu Yoğun", days: "Cumartesi / Pazar", duration: "120 dk", capacity: "15 kişi" },
    ],
    schedule: [
      { saat: "18:00 – 18:20", aktivite: "Isınma & Koordinasyon" },
      { saat: "18:20 – 19:00", aktivite: "Fiziksel Kondisyon & Güç" },
      { saat: "19:00 – 19:40", aktivite: "Taktik Derinleştirme" },
      { saat: "19:40 – 20:00", aktivite: "Rekabetçi Maç & Kapanış" },
    ],
    image: "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=800&q=80",
    images: [
      "https://images.unsplash.com/photo-1517466787929-bc90951d0974?w=400&q=80",
      "https://images.unsplash.com/photo-1508098682722-e99c643e7f0b?w=400&q=80",
    ],
  },
];

export default function EgitimPage() {
  return (
    <div className="bg-gray-50">
      {/* Page Header */}
      <div className="bg-[#14532d] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold tracking-widest text-green-300 uppercase">
            Akademi Programları
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-3">Eğitim Programı</h1>
          <p className="text-green-200 max-w-2xl">
            Farklı yaş grupları ve seviyelere yönelik üç ayrı antrenman seansımızla
            her sporcunun ihtiyacına özel program sunuyoruz.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-14">
        {sessions.map((session) => (
          <section
            key={session.id}
            id={session.id}
            className={`bg-white border-t-4 ${session.color} shadow-sm`}
          >
            {/* Session Header */}
            <div className={`${session.headerBg} px-6 py-5 border-b border-gray-200`}>
              <div className="flex flex-wrap items-center gap-4">
                <div>{session.icon}</div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">{session.title}</h2>
                  <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                    <Clock className="w-4 h-4" />
                    <span>{session.time}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Age Groups */}
              <div className="lg:col-span-2 space-y-6">
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Users className="w-4 h-4 text-[#14532d]" />
                    Yaş Grupları & Program
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="text-left px-4 py-2 font-semibold text-gray-700 border border-gray-200">
                            Yaş Grubu
                          </th>
                          <th className="text-left px-4 py-2 font-semibold text-gray-700 border border-gray-200">
                            Antrenman Günleri
                          </th>
                          <th className="text-left px-4 py-2 font-semibold text-gray-700 border border-gray-200">
                            Süre
                          </th>
                          <th className="text-left px-4 py-2 font-semibold text-gray-700 border border-gray-200">
                            Kapasite
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {session.ageGroups.map((ag, i) => (
                          <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                            <td className="px-4 py-2 border border-gray-200 font-medium text-gray-800">
                              {ag.group}
                            </td>
                            <td className="px-4 py-2 border border-gray-200 text-gray-600">
                              {ag.days}
                            </td>
                            <td className="px-4 py-2 border border-gray-200 text-gray-600">
                              {ag.duration}
                            </td>
                            <td className="px-4 py-2 border border-gray-200 text-gray-600">
                              {ag.capacity}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>

                {/* Schedule */}
                <div>
                  <h3 className="font-semibold text-gray-800 mb-3 flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#14532d]" />
                    Seans Programı
                  </h3>
                  <div className="overflow-x-auto">
                    <table className="w-full text-sm border-collapse">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="text-left px-4 py-2 font-semibold text-gray-700 border border-gray-200 w-36">
                            Saat
                          </th>
                          <th className="text-left px-4 py-2 font-semibold text-gray-700 border border-gray-200">
                            Aktivite
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {session.schedule.map((item, i) => (
                          <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                            <td className="px-4 py-2 border border-gray-200 font-medium text-gray-700">
                              {item.saat}
                            </td>
                            <td className="px-4 py-2 border border-gray-200 text-gray-600">
                              {item.aktivite}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>

              {/* Gallery Placeholder */}
              <div className="space-y-4">
                <h3 className="font-semibold text-gray-800">Antrenman Galerisi</h3>
                <div className="relative w-full aspect-video">
                  <Image
                    src={session.image}
                    alt={`${session.title} antrenmanı`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 320px"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  {session.images.map((src, i) => (
                    <div key={i} className="relative aspect-video">
                      <Image
                        src={src}
                        alt={`${session.title} antrenman galerisi ${i + 1}`}
                        fill
                        className="object-cover"
                        sizes="160px"
                      />
                    </div>
                  ))}
                </div>
                <Link
                  href="/kayit"
                  className="block w-full text-center bg-[#14532d] hover:bg-green-800 text-white text-sm font-semibold py-2.5 transition-colors"
                >
                  Bu Seansa Kayıt Ol <ChevronRight className="inline w-4 h-4" />
                </Link>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}
