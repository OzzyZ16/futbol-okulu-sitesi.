"use client";

import { useState } from "react";
import { CheckCircle, AlertCircle, User, Phone, Calendar, Sun, Sunset, Moon } from "lucide-react";

interface FormData {
  ogrenciAdi: string;
  yas: string;
  veliAdi: string;
  veliTelefon: string;
  veliEmail: string;
  seansSecimi: string;
  yasGrubu: string;
  notlar: string;
}

const initialForm: FormData = {
  ogrenciAdi: "",
  yas: "",
  veliAdi: "",
  veliTelefon: "",
  veliEmail: "",
  seansSecimi: "",
  yasGrubu: "",
  notlar: "",
};

const seansler = [
  { value: "sabah", label: "Sabah Seansı (08:00 – 10:00)", icon: <Sun className="w-4 h-4 text-yellow-500" /> },
  { value: "ogleden-sonra", label: "Öğleden Sonra Seansı (14:00 – 16:30)", icon: <Sunset className="w-4 h-4 text-orange-500" /> },
  { value: "aksam", label: "Akşam Seansı (18:00 – 20:00)", icon: <Moon className="w-4 h-4 text-blue-500" /> },
];

const yasGruplari = [
  "U8 (6-8 Yaş)",
  "U10 (8-10 Yaş)",
  "U12 (10-12 Yaş)",
  "U14 (12-14 Yaş)",
  "U16 (14-16 Yaş)",
  "U18 (16-18 Yaş)",
  "Yetişkin (18+)",
];

export default function KayitPage() {
  const [form, setForm] = useState<FormData>(initialForm);
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Partial<FormData> = {};
    if (!form.ogrenciAdi.trim()) newErrors.ogrenciAdi = "Öğrenci adı zorunludur.";
    if (!form.yas || isNaN(Number(form.yas)) || Number(form.yas) < 5 || Number(form.yas) > 60)
      newErrors.yas = "Geçerli bir yaş giriniz (5–60).";
    if (!form.veliAdi.trim()) newErrors.veliAdi = "Veli adı zorunludur.";
    if (!form.veliTelefon.trim()) newErrors.veliTelefon = "Veli telefonu zorunludur.";
    if (form.veliEmail && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.veliEmail))
      newErrors.veliEmail = "Geçerli bir e-posta adresi giriniz.";
    if (!form.seansSecimi) newErrors.seansSecimi = "Seans seçimi zorunludur.";
    if (!form.yasGrubu) newErrors.yasGrubu = "Yaş grubu seçimi zorunludur.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    const kayit = {
      id: Date.now().toString(),
      ...form,
      tarih: new Date().toLocaleDateString("tr-TR"),
      durum: "bekliyor",
    };

    const existing = JSON.parse(localStorage.getItem("futbol_kayitlar") || "[]");
    localStorage.setItem("futbol_kayitlar", JSON.stringify([...existing, kayit]));

    setSubmitted(true);
    setForm(initialForm);
    setErrors({});
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  if (submitted) {
    return (
      <div className="bg-gray-50 min-h-[60vh] flex items-center justify-center py-16 px-4">
        <div className="bg-white border border-gray-200 p-10 max-w-md w-full text-center shadow-sm">
          <CheckCircle className="w-16 h-16 text-[#14532d] mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-3">Kayıt Talebiniz Alındı!</h2>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Başvurunuz başarıyla iletildi. En kısa sürede veli iletişim numaranızı
            arayarak bilgi vereceğiz.
          </p>
          <button
            onClick={() => setSubmitted(false)}
            className="bg-[#14532d] hover:bg-green-800 text-white font-semibold px-6 py-2.5 text-sm transition-colors"
          >
            Yeni Kayıt Oluştur
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50">
      {/* Page Header */}
      <div className="bg-[#14532d] text-white py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-xs font-semibold tracking-widest text-green-300 uppercase">
            Başvuru
          </span>
          <h1 className="text-3xl md:text-4xl font-bold mt-2 mb-3">Kayıt Formu</h1>
          <p className="text-green-200 max-w-2xl">
            Aşağıdaki formu eksiksiz doldurun. Uzmanlarımız en kısa sürede sizinle
            iletişime geçecektir.
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <form onSubmit={handleSubmit} noValidate>
          {/* Öğrenci Bilgileri */}
          <div className="bg-white border border-gray-200 shadow-sm mb-6">
            <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center gap-3">
              <User className="w-5 h-5 text-[#14532d]" />
              <h2 className="font-semibold text-gray-800">Öğrenci Bilgileri</h2>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Öğrenci Adı Soyadı <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="ogrenciAdi"
                  value={form.ogrenciAdi}
                  onChange={handleChange}
                  placeholder="Ad Soyad"
                  className={`w-full border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#14532d] ${
                    errors.ogrenciAdi ? "border-red-400" : "border-gray-300"
                  }`}
                />
                {errors.ogrenciAdi && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.ogrenciAdi}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Yaş <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="number"
                    name="yas"
                    value={form.yas}
                    onChange={handleChange}
                    placeholder="Yaşınızı giriniz"
                    min={5}
                    max={60}
                    className={`w-full border pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#14532d] ${
                      errors.yas ? "border-red-400" : "border-gray-300"
                    }`}
                  />
                </div>
                {errors.yas && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.yas}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Yaş Grubu <span className="text-red-500">*</span>
                </label>
                <select
                  name="yasGrubu"
                  value={form.yasGrubu}
                  onChange={handleChange}
                  className={`w-full border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#14532d] bg-white ${
                    errors.yasGrubu ? "border-red-400" : "border-gray-300"
                  }`}
                >
                  <option value="">Yaş grubunu seçiniz</option>
                  {yasGruplari.map((g) => (
                    <option key={g} value={g}>{g}</option>
                  ))}
                </select>
                {errors.yasGrubu && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.yasGrubu}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Veli Bilgileri */}
          <div className="bg-white border border-gray-200 shadow-sm mb-6">
            <div className="bg-gray-50 border-b border-gray-200 px-6 py-4 flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#14532d]" />
              <h2 className="font-semibold text-gray-800">Veli İletişim Bilgileri</h2>
            </div>
            <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Veli Adı Soyadı <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="veliAdi"
                  value={form.veliAdi}
                  onChange={handleChange}
                  placeholder="Veli Ad Soyad"
                  className={`w-full border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#14532d] ${
                    errors.veliAdi ? "border-red-400" : "border-gray-300"
                  }`}
                />
                {errors.veliAdi && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.veliAdi}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Telefon Numarası <span className="text-red-500">*</span>
                </label>
                <div className="relative">
                  <Phone className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2" />
                  <input
                    type="tel"
                    name="veliTelefon"
                    value={form.veliTelefon}
                    onChange={handleChange}
                    placeholder="0 (5XX) XXX XX XX"
                    className={`w-full border pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#14532d] ${
                      errors.veliTelefon ? "border-red-400" : "border-gray-300"
                    }`}
                  />
                </div>
                {errors.veliTelefon && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.veliTelefon}
                  </p>
                )}
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  E-posta Adresi <span className="text-gray-400 text-xs">(isteğe bağlı)</span>
                </label>
                <input
                  type="email"
                  name="veliEmail"
                  value={form.veliEmail}
                  onChange={handleChange}
                  placeholder="ornek@mail.com"
                  className={`w-full border px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#14532d] ${
                    errors.veliEmail ? "border-red-400" : "border-gray-300"
                  }`}
                />
                {errors.veliEmail && (
                  <p className="text-red-500 text-xs mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.veliEmail}
                  </p>
                )}
              </div>
            </div>
          </div>

          {/* Seans Seçimi */}
          <div className="bg-white border border-gray-200 shadow-sm mb-6">
            <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
              <h2 className="font-semibold text-gray-800">Seans Tercihi <span className="text-red-500">*</span></h2>
            </div>
            <div className="p-6">
              <div className="space-y-3">
                {seansler.map((s) => (
                  <label
                    key={s.value}
                    className={`flex items-center gap-4 p-4 border cursor-pointer transition-colors ${
                      form.seansSecimi === s.value
                        ? "border-[#14532d] bg-green-50"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    <input
                      type="radio"
                      name="seansSecimi"
                      value={s.value}
                      checked={form.seansSecimi === s.value}
                      onChange={handleChange}
                      className="accent-[#14532d]"
                    />
                    <div>{s.icon}</div>
                    <span className="text-sm font-medium text-gray-800">{s.label}</span>
                  </label>
                ))}
              </div>
              {errors.seansSecimi && (
                <p className="text-red-500 text-xs mt-2 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" /> {errors.seansSecimi}
                </p>
              )}
            </div>
          </div>

          {/* Notlar */}
          <div className="bg-white border border-gray-200 shadow-sm mb-8">
            <div className="bg-gray-50 border-b border-gray-200 px-6 py-4">
              <h2 className="font-semibold text-gray-800">Ek Notlar</h2>
            </div>
            <div className="p-6">
              <textarea
                name="notlar"
                value={form.notlar}
                onChange={handleChange}
                placeholder="Eklemek istediğiniz bilgiler, özel durumlar..."
                rows={4}
                className="w-full border border-gray-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#14532d] resize-none"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-[#14532d] hover:bg-green-800 text-white font-semibold py-3 text-sm tracking-wide transition-colors"
          >
            Kayıt Talebini Gönder
          </button>
        </form>
      </div>
    </div>
  );
}
