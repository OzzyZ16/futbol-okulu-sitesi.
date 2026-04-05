"use client";

import { useState } from "react";
import { CheckCircle, XCircle, Clock, Trash2, RefreshCw, Shield } from "lucide-react";

interface Kayit {
  id: string;
  ogrenciAdi: string;
  yas: string;
  veliAdi: string;
  veliTelefon: string;
  veliEmail: string;
  seansSecimi: string;
  yasGrubu: string;
  notlar: string;
  tarih: string;
  durum: "bekliyor" | "onaylandi" | "reddedildi";
}

const seansLabel: Record<string, string> = {
  sabah: "Sabah",
  "ogleden-sonra": "Öğleden Sonra",
  aksam: "Akşam",
};

const durumConfig = {
  bekliyor: {
    label: "Bekliyor",
    className: "bg-yellow-100 text-yellow-800 border border-yellow-300",
    icon: <Clock className="w-3.5 h-3.5" />,
  },
  onaylandi: {
    label: "Onaylandı",
    className: "bg-green-100 text-green-800 border border-green-300",
    icon: <CheckCircle className="w-3.5 h-3.5" />,
  },
  reddedildi: {
    label: "Reddedildi",
    className: "bg-red-100 text-red-800 border border-red-300",
    icon: <XCircle className="w-3.5 h-3.5" />,
  },
};

export default function AdminPage() {
  const [kayitlar, setKayitlar] = useState<Kayit[]>(() => {
    if (typeof window === "undefined") return [];
    return JSON.parse(localStorage.getItem("futbol_kayitlar") || "[]");
  });
  const [filter, setFilter] = useState<string>("tumu");
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const loadKayitlar = () => {
    const data = JSON.parse(localStorage.getItem("futbol_kayitlar") || "[]");
    setKayitlar(data);
  };

  const updateDurum = (id: string, durum: Kayit["durum"]) => {
    const updated = kayitlar.map((k) => (k.id === id ? { ...k, durum } : k));
    setKayitlar(updated);
    localStorage.setItem("futbol_kayitlar", JSON.stringify(updated));
  };

  const deleteKayit = (id: string) => {
    if (!confirm("Bu kaydı silmek istediğinize emin misiniz?")) return;
    const updated = kayitlar.filter((k) => k.id !== id);
    setKayitlar(updated);
    localStorage.setItem("futbol_kayitlar", JSON.stringify(updated));
    if (selectedId === id) setSelectedId(null);
  };

  const filtered = filter === "tumu" ? kayitlar : kayitlar.filter((k) => k.durum === filter);

  const stats = {
    toplam: kayitlar.length,
    bekliyor: kayitlar.filter((k) => k.durum === "bekliyor").length,
    onaylandi: kayitlar.filter((k) => k.durum === "onaylandi").length,
    reddedildi: kayitlar.filter((k) => k.durum === "reddedildi").length,
  };

  const selectedKayit = kayitlar.find((k) => k.id === selectedId);

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Admin Header */}
      <div className="bg-[#1e3a8a] text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Shield className="w-7 h-7 text-blue-300" />
              <div>
                <h1 className="text-2xl font-bold">Yönetici Paneli</h1>
                <p className="text-blue-300 text-sm">Kayıt başvurularını yönetin</p>
              </div>
            </div>
            <button
              onClick={loadKayitlar}
              className="flex items-center gap-2 bg-blue-800 hover:bg-blue-700 text-white text-sm px-4 py-2 transition-colors"
            >
              <RefreshCw className="w-4 h-4" />
              Yenile
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Toplam Başvuru", value: stats.toplam, color: "text-gray-800", bg: "bg-white" },
            { label: "Bekliyor", value: stats.bekliyor, color: "text-yellow-700", bg: "bg-yellow-50 border-yellow-200" },
            { label: "Onaylandı", value: stats.onaylandi, color: "text-green-700", bg: "bg-green-50 border-green-200" },
            { label: "Reddedildi", value: stats.reddedildi, color: "text-red-700", bg: "bg-red-50 border-red-200" },
          ].map((s) => (
            <div key={s.label} className={`${s.bg} border border-gray-200 p-4 text-center shadow-sm`}>
              <div className={`text-3xl font-bold ${s.color}`}>{s.value}</div>
              <div className="text-sm text-gray-500 mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-5">
          {[
            { value: "tumu", label: "Tümü" },
            { value: "bekliyor", label: "Bekliyor" },
            { value: "onaylandi", label: "Onaylandı" },
            { value: "reddedildi", label: "Reddedildi" },
          ].map((tab) => (
            <button
              key={tab.value}
              onClick={() => setFilter(tab.value)}
              className={`px-4 py-1.5 text-sm font-medium transition-colors ${
                filter === tab.value
                  ? "bg-[#1e3a8a] text-white"
                  : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="bg-white border border-gray-200 p-12 text-center text-gray-400 shadow-sm">
            <Shield className="w-12 h-12 mx-auto mb-3 text-gray-300" />
            <p className="font-medium">Henüz kayıt bulunmamaktadır.</p>
            <p className="text-sm mt-1">Kayıt formu doldurulduğunda burada görüntülenecektir.</p>
          </div>
        ) : (
          <div className="flex flex-col lg:flex-row gap-6">
            {/* Table */}
            <div className="flex-1 overflow-x-auto">
              <div className="bg-white border border-gray-200 shadow-sm">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-100 border-b border-gray-200">
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Öğrenci</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Veli</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Seans</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700 hidden md:table-cell">Tarih</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">Durum</th>
                      <th className="text-left px-4 py-3 font-semibold text-gray-700">İşlem</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filtered.map((kayit, i) => {
                      const d = durumConfig[kayit.durum];
                      return (
                        <tr
                          key={kayit.id}
                          onClick={() => setSelectedId(kayit.id === selectedId ? null : kayit.id)}
                          className={`border-b border-gray-100 cursor-pointer transition-colors ${
                            i % 2 === 0 ? "bg-white" : "bg-gray-50"
                          } ${selectedId === kayit.id ? "ring-2 ring-inset ring-[#1e3a8a]" : "hover:bg-blue-50"}`}
                        >
                          <td className="px-4 py-3">
                            <div className="font-medium text-gray-900">{kayit.ogrenciAdi}</div>
                            <div className="text-gray-500 text-xs">{kayit.yasGrubu}</div>
                          </td>
                          <td className="px-4 py-3">
                            <div className="text-gray-800">{kayit.veliAdi}</div>
                            <div className="text-gray-500 text-xs">{kayit.veliTelefon}</div>
                          </td>
                          <td className="px-4 py-3 text-gray-600 hidden md:table-cell">
                            {seansLabel[kayit.seansSecimi] || kayit.seansSecimi}
                          </td>
                          <td className="px-4 py-3 text-gray-500 hidden md:table-cell">
                            {kayit.tarih}
                          </td>
                          <td className="px-4 py-3">
                            <span className={`inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 ${d.className}`}>
                              {d.icon}
                              {d.label}
                            </span>
                          </td>
                          <td className="px-4 py-3" onClick={(e) => e.stopPropagation()}>
                            <div className="flex items-center gap-1">
                              <button
                                onClick={() => updateDurum(kayit.id, "onaylandi")}
                                title="Onayla"
                                className="p-1.5 text-green-600 hover:bg-green-100 transition-colors"
                              >
                                <CheckCircle className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => updateDurum(kayit.id, "reddedildi")}
                                title="Reddet"
                                className="p-1.5 text-red-500 hover:bg-red-100 transition-colors"
                              >
                                <XCircle className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => updateDurum(kayit.id, "bekliyor")}
                                title="Bekleyene Al"
                                className="p-1.5 text-yellow-600 hover:bg-yellow-100 transition-colors"
                              >
                                <Clock className="w-4 h-4" />
                              </button>
                              <button
                                onClick={() => deleteKayit(kayit.id)}
                                title="Sil"
                                className="p-1.5 text-gray-400 hover:bg-gray-100 hover:text-red-500 transition-colors"
                              >
                                <Trash2 className="w-4 h-4" />
                              </button>
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Detail Panel */}
            {selectedKayit && (
              <div className="lg:w-80 bg-white border border-gray-200 shadow-sm flex-shrink-0">
                <div className="bg-gray-50 border-b border-gray-200 px-5 py-4">
                  <h3 className="font-semibold text-gray-800">Başvuru Detayı</h3>
                </div>
                <div className="p-5 space-y-4 text-sm">
                  <DetailRow label="Öğrenci" value={selectedKayit.ogrenciAdi} />
                  <DetailRow label="Yaş" value={selectedKayit.yas} />
                  <DetailRow label="Yaş Grubu" value={selectedKayit.yasGrubu} />
                  <DetailRow label="Veli" value={selectedKayit.veliAdi} />
                  <DetailRow label="Telefon" value={selectedKayit.veliTelefon} />
                  {selectedKayit.veliEmail && (
                    <DetailRow label="E-posta" value={selectedKayit.veliEmail} />
                  )}
                  <DetailRow
                    label="Seans"
                    value={seansLabel[selectedKayit.seansSecimi] || selectedKayit.seansSecimi}
                  />
                  <DetailRow label="Başvuru Tarihi" value={selectedKayit.tarih} />
                  {selectedKayit.notlar && (
                    <div>
                      <div className="text-gray-500 text-xs mb-1">Notlar</div>
                      <div className="text-gray-800 bg-gray-50 p-3 text-xs leading-relaxed">
                        {selectedKayit.notlar}
                      </div>
                    </div>
                  )}

                  <div className="pt-2 border-t border-gray-100">
                    <div className="text-gray-500 text-xs mb-2">Durumu Güncelle</div>
                    <div className="flex gap-2">
                      <button
                        onClick={() => updateDurum(selectedKayit.id, "onaylandi")}
                        className="flex-1 py-2 bg-green-600 hover:bg-green-700 text-white text-xs font-medium transition-colors"
                      >
                        Onayla
                      </button>
                      <button
                        onClick={() => updateDurum(selectedKayit.id, "reddedildi")}
                        className="flex-1 py-2 bg-red-500 hover:bg-red-600 text-white text-xs font-medium transition-colors"
                      >
                        Reddet
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

function DetailRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <div className="text-gray-500 text-xs">{label}</div>
      <div className="text-gray-800 font-medium mt-0.5">{value}</div>
    </div>
  );
}
