
import React, { useState } from 'react';

/**
 * CRAY Digital Landing Page
 * Ported from HTML/CSS to React with Tailwind CSS
 */

const App: React.FC = () => {
  const [formData, setFormData] = useState({
    status: '',
    description: '',
    contact: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Talebiniz alınmıştır. En kısa sürede sizinle iletişime geçeceğiz.');
  };

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen selection:bg-brand-orange selection:text-black">
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-[1000] bg-gradient-to-b from-brand-dark to-black border-b border-brand-orange/30 shadow-[0_4px_12px_rgba(255,177,0,0.2)]">
        <nav className="max-w-[1280px] mx-auto px-8">
          <div className="flex justify-between items-center h-20">
            <a href="#" className="flex items-center gap-3 transition-transform hover:scale-105">
              <div className="w-12 h-12 bg-brand-orange rounded-xl flex items-center justify-center font-bold text-xl text-black shadow-[0_4px_12px_rgba(255,177,0,0.3)]">
                CR
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-xl tracking-tight">CRAY</span>
                <span className="text-brand-orange text-xs font-medium">Digital</span>
              </div>
            </a>

            <ul className="hidden md:flex items-center gap-8 list-none">
              <li><a href="#" className="text-[#d1d5db] font-medium transition-colors hover:text-white">Ana Sayfa</a></li>
              <li><a href="#section3" onClick={(e) => { e.preventDefault(); scrollTo('section3'); }} className="text-[#d1d5db] font-medium transition-colors hover:text-white">Hizmetler</a></li>
              <li><a href="#" className="text-[#d1d5db] font-medium transition-colors hover:text-white">Çözümler</a></li>
              <li><a href="#" className="text-[#d1d5db] font-medium transition-colors hover:text-white">Referanslar</a></li>
              <li><a href="#" className="text-[#d1d5db] font-medium transition-colors hover:text-white">Hakkımızda</a></li>
              <li>
                <a href="#" className="bg-brand-orange text-black px-6 py-2.5 rounded-lg font-bold shadow-[0_4px_12px_rgba(255,177,0,0.3)] transition-all hover:scale-105 hover:shadow-[0_6px_20px_rgba(255,177,0,0.4)]">
                  Teklif Al
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>

      {/* HERO SECTION */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-black text-white">
        <img src="/c1.jpg" alt="Process Background" className="absolute top-0 left-0 w-full h-full object-cover z-0 opacity-40" />
        <div className="absolute inset-0 bg-black/60 z-[1]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black z-[2]"></div>

        <div className="relative z-10 container mx-auto px-8 pt-12">
          <div className="text-center mb-8 max-w-4xl mx-auto px-4">
            <h1 className="text-[2.3rem] font-bold leading-[1.2] mb-6">
              Bir Kripto Projesini A'dan Z'ye Biz Yönetiyoruz
            </h1>
            <p className="text-lg font-light leading-relaxed mb-4">
              Fikir aşamasından teknik altyapıya, pazarlamadan listelemeye,
              yatırım sürecinden likidite yönetimine kadar tüm adımları sizin yerinize planlar, uygular ve yönetiriz.
            </p>
            <h3 className="text-brand-orange text-xl font-semibold mt-4">
              Bu yaklaşım klasik "ajans hizmeti" değil, uçtan uca proje ortaklığıdır.
            </h3>
          </div>

          {/* Process Diagram */}
          <div className="relative h-[20rem] my-12 mx-auto max-w-[75rem] hidden lg:block">
            <svg className="absolute w-full h-full top-0 left-0 pointer-events-none" viewBox="0 0 1200 320" preserveAspectRatio="none">
              <path 
                d="M 50 160 Q 200 80, 350 160 T 650 160 T 950 160 Q 1050 80, 1150 160" 
                stroke="#ffb100" 
                strokeWidth="3" 
                fill="none" 
                strokeDasharray="10 8" 
              />
            </svg>

            {/* Steps Positioning */}
            {[
              { id: 1, pos: "left-[4%] top-[57%]", title: "Fikir & Konsept\nAnalizi", num: "01" },
              { id: 2, pos: "left-[16.5%] top-[29%]", title: "Strateji &\nYol Haritası", num: "02" },
              { id: 3, pos: "left-[29%] top-[58%]", title: "Tokenomics &\nTeknik Altyapı", num: "03" },
              { id: 4, pos: "left-[41.5%] top-[54%]", title: "Yazılım & Ürün\nGeliştirme", num: "04" },
              { id: 5, pos: "left-[54%] top-[58%]", title: "Branding &\nPazarlama", num: "05" },
              { id: 6, pos: "left-[66.5%] top-[29%]", title: "Topluluk &\nGrowth", num: "06" },
              { id: 7, pos: "left-[79%] top-[59%]", title: "Launch &\nListing", num: "07" },
              { id: 8, pos: "left-[94.5%] top-[41%]", title: "Market Making\n& Likidite", num: "08" },
            ].map((step) => (
              <div key={step.id} className={`absolute flex flex-col items-center -translate-x-1/2 -translate-y-1/2 ${step.pos}`}>
                <div className="w-12 h-12 rounded-full border-2 border-brand-orange bg-white flex items-center justify-center font-bold text-black cursor-pointer transition-transform hover:scale-110 hover:shadow-[0_4px_12px_rgba(255,177,0,0.5)]">
                  {step.num}
                </div>
                <div className="text-[0.78rem] font-medium text-brand-orange whitespace-pre-line text-center mt-4 leading-4">
                  {step.title}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <a href="#" className="inline-block bg-brand-orange text-black px-8 py-4 rounded-lg font-bold shadow-[0_4px_12px_rgba(255,177,0,0.3)] transition-all hover:scale-105 hover:shadow-[0_6px_20px_rgba(255,177,0,0.4)]">
              Projemi A'dan Z'ye Hayata Geçirmek İstiyorum
            </a>
          </div>

          <div 
            className="mt-12 text-center cursor-pointer animate-bounce-slow"
            onClick={() => scrollTo('section1')}
          >
            <svg className="w-12 h-12 text-brand-orange mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* SECTION 1: A'dan Z'ye Danışmanlık */}
      <section className="relative py-20 overflow-hidden bg-black text-white min-h-[600px]" id="section1">
        <img src="/c2.jpg" alt="Hero Background" className="absolute inset-0 w-full h-full object-cover z-0 opacity-40" />
        <div className="absolute inset-0 bg-black/65 z-[1]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-[2]"></div>

        <div className="relative z-10 container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
            <div className="lg:col-span-2">
              <h1 className="text-[2.3rem] font-bold leading-[1.2] mb-2">
                A'dan Z'ye Danışmanlık
              </h1>
              <h2 className="text-brand-orange text-3xl font-semibold leading-tight">Marketing ve Büyüme</h2>
              <h2 className="text-brand-orange text-3xl font-semibold leading-tight mb-6">ve 360° Çözümler</h2>

              <p className="text-lg font-light leading-relaxed py-3 mb-8">
                Bir kripto projesini hayata geçirmek, büyütmek ve sürdürülebilir hale getirmek için
                ihtiyacınız olan tüm teknik, stratejik ve operasyonel süreçleri tek çatı altında sunuyoruz.
              </p>

              <div className="flex flex-col gap-4 mb-8">
                <a href="#" className="bg-brand-orange text-black px-8 py-4 rounded-lg font-bold shadow-[0_4px_12px_rgba(255,177,0,0.3)] transition-all hover:scale-105 max-w-xs text-center">
                  Yeni Kripto Projesi Başlatmak İstiyorum
                </a>
                <a href="#" className="border border-brand-orange/30 text-brand-orange px-8 py-4 rounded-lg font-bold transition-all hover:bg-brand-orange/10 max-w-xs text-center">
                  Mevcut Projem Var, Geliştirmek İstiyorum
                </a>
              </div>

              <div className="flex flex-wrap gap-6 text-sm text-[#9ca3af]">
                <div className="flex items-center gap-2">
                  <span className="text-brand-orange font-bold text-lg">✓</span>
                  <span>NDA & Gizlilik</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-brand-orange font-bold text-lg">✓</span>
                  <span>Web3 Odaklı Uzmanlık</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-brand-orange font-bold text-lg">✓</span>
                  <span>Global Standartlarda Süreçler</span>
                </div>
              </div>
            </div>

            <div className="bg-[#f7f7f7] border border-[#e5e7eb] rounded-lg p-8 shadow-xl">
              <h2 className="text-[#111827] text-2xl font-bold mb-6 whitespace-nowrap">Ücretsiz Ön Değerlendirme Al</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <label className="block text-sm font-medium text-[#374151]">Proje Durumu</label>
                  <select 
                    className="w-full bg-white border border-[#d1d5db] rounded-lg text-[#111827] p-3 outline-none focus:border-brand-orange transition-colors"
                    value={formData.status}
                    onChange={(e) => setFormData({...formData, status: e.target.value})}
                  >
                    <option value="">Seçiniz</option>
                    <option value="yeni">Yeni proje</option>
                    <option value="mevcut">Mevcut proje</option>
                    <option value="yatirim">Yatırım aşaması</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-[#374151]">Kısa Hedef Açıklaması</label>
                  <textarea 
                    className="w-full bg-white border border-[#d1d5db] rounded-lg text-[#111827] p-3 min-h-[5rem] outline-none focus:border-brand-orange transition-colors resize-none"
                    placeholder="Ne yapmak istiyorsunuz?"
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                  ></textarea>
                </div>

                <div className="space-y-2">
                  <label className="block text-sm font-medium text-[#374151]">E-posta / Telegram</label>
                  <input 
                    type="text" 
                    className="w-full bg-white border border-[#d1d5db] rounded-lg text-[#111827] p-3 outline-none focus:border-brand-orange transition-colors"
                    placeholder="İletişim bilginiz"
                    value={formData.contact}
                    onChange={(e) => setFormData({...formData, contact: e.target.value})}
                  />
                </div>

                <button type="submit" className="w-full bg-brand-orange text-black py-4 rounded-lg font-bold shadow-[0_4px_12px_rgba(255,177,0,0.3)] transition-all hover:scale-105">
                  GÖNDER
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Neden Bizimle Çalışmalısınız? */}
      <section className="relative py-20 bg-black text-white min-h-[600px] overflow-hidden">
        <img src="/fh.jpg" alt="Why Us Background" className="absolute inset-0 w-full h-full object-cover z-0 opacity-40" />
        <div className="absolute inset-0 bg-black/70 z-[1]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-[2]"></div>

        <div className="relative z-10 container mx-auto px-8">
          <div className="text-center mb-16">
            <h1 className="text-[2.3rem] font-bold">Neden Bizimle Çalışmalısınız?</h1>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
                  </svg>
                ),
                title: "Web3 & Crypto Odaklı Uzmanlık",
                desc: "Sadece kripto ve Web3 projelerine odaklanmış deneyimli ekip"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                  </svg>
                ),
                title: "A'dan Z'ye Proje Yaklaşımı",
                desc: "Fikir aşamasından lansmanına kadar her adımda yanınızdayız"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                ),
                title: "Tek Noktadan Yönetim",
                desc: "Tüm süreçleri koordine eden entegre ekip yapısı"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                  </svg>
                ),
                title: "NDA & Gizlilik Önceliği",
                desc: "Projelerinizin güvenliği bizim için en önemli konu"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>
                  </svg>
                ),
                title: "Veri Odaklı Karar Mekanizması",
                desc: "Her kararımız analitik verilerle desteklenir"
              },
              {
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
                  </svg>
                ),
                title: "Global Standartlarda Süreçler",
                desc: "Uluslararası kalite standartlarında hizmet sunuyoruz"
              }
            ].map((reason, idx) => (
              <div key={idx} className="group p-8 rounded-xl transition-all hover:bg-brand-orange/5 text-center flex flex-col items-center">
                <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center mb-4 transition-all group-hover:scale-110 group-hover:shadow-[0_8px_24px_rgba(255,177,0,0.3)]">
                  <div className="text-white">
                    {reason.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">{reason.title}</h3>
                <p className="text-base font-light opacity-80">{reason.desc}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <a href="#" className="inline-block bg-brand-orange text-black px-8 py-4 rounded-lg font-bold shadow-[0_4px_12px_rgba(255,177,0,0.3)] transition-all hover:scale-105">
              Daha Fazla Bilgi Al
            </a>
          </div>
        </div>
      </section>

      {/* SECTION 5: Mevcut Kripto Projenizi */}
      <section className="py-20 bg-black text-white border-y border-brand-orange/10">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[24rem] rounded-lg overflow-hidden border border-brand-orange/20 order-2 lg:order-1">
              <img src="/z.jpg" alt="Existing Project Growth" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>

            <div className="order-1 lg:order-2">
              <h1 className="text-[2.3rem] font-bold mb-6">Mevcut Kripto Projenizi Bir Üst Seviyeye Taşıyalım</h1>
              <p className="text-lg font-light mb-8">
                Birçok proje doğru strateji, pazarlama ve teknik optimizasyon eksikliği nedeniyle potansiyelini kullanamıyor.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Projenizi analiz ederiz",
                  "Eksikleri tespit ederiz",
                  "Yeniden konumlandırır ve büyütürüz"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="text-brand-orange text-xl">✓</span>
                    <span className="text-[#d1d5db] font-light">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="inline-block bg-brand-orange text-black px-8 py-4 rounded-lg font-bold shadow-[0_4px_12px_rgba(255,177,0,0.3)] transition-all hover:scale-105">
                Projemi Değerlendirin
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Web3 & Crypto İçin Uçtan Uca Hizmetler */}
      <section className="relative py-20 bg-black text-white overflow-hidden" id="section3">
        <img src="/ag1.jpg" alt="Services Background" className="absolute inset-0 w-full h-full object-cover z-0 opacity-40" />
        <div className="absolute inset-0 bg-black/70 z-[1]"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black z-[2]"></div>

        <div className="relative z-10 container mx-auto px-8">
          <div className="text-center mb-16">
            <h1 className="text-[2.3rem] font-bold mb-4">Web3 & Crypto İçin Uçtan Uca Hizmetler</h1>
            <p className="text-[#9ca3af] font-light max-w-2xl mx-auto">
              Her projeye ihtiyacına göre yaklaşır,
              tek bir hizmetten komple 360° çözüme kadar esnek modeller sunarız.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              {
                icon: <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 20v-6M6 20V10M18 20V4"/></svg>,
                title: "A'dan Z'ye Crypto Proje Danışmanlığı",
                desc: "Fikirden pazara tüm sürecin tek ekip tarafından yönetilmesi"
              },
              {
                icon: <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><circle cx="12" cy="12" r="10"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h8"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v8"/></svg>,
                title: "Token & Blockchain Geliştirme",
                desc: "Tokenomics, smart contract, whitepaper ve teknik mimari"
              },
              {
                icon: <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="3" width="20" height="14" rx="2" strokeWidth="2"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 21h8"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 17v4"/></svg>,
                title: "Blockchain & Yazılım Geliştirme",
                desc: "Web3 siteler, dashboard'lar, Telegram botları ve oyunlar"
              },
              {
                icon: <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>,
                title: "Token Lansmanı & Listeleme",
                desc: "DEX/CEX launch, launchpad hazırlığı ve listeleme süreçleri"
              },
              {
                icon: <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8" strokeWidth="2"/><line x1="12" y1="3" x2="12" y2="15" strokeWidth="2"/></svg>,
                title: "Kripto & Web3 Pazarlama",
                desc: "Growth, influencer, PR, kampanya ve funnel yönetimi"
              },
              {
                icon: <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4" strokeWidth="2"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M23 21v-2a4 4 0 0 0-3-3.87"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
                title: "Sosyal Medya & Topluluk",
                desc: "X, Telegram, Discord, topluluk büyütme ve kriz yönetimi"
              },
              {
                icon: <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="2" y="2" width="20" height="20" rx="2" strokeWidth="2"/><line x1="7" y1="2" x2="7" y2="22" strokeWidth="2"/><line x1="17" y1="2" x2="17" y2="22" strokeWidth="2"/><line x1="2" y1="12" x2="22" y2="12" strokeWidth="2"/></svg>,
                title: "İçerik Üretimi",
                desc: "Brand identity, motion graphics, explainer videos ve görsel içerik"
              },
              {
                icon: <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><line x1="12" y1="1" x2="12" y2="23" strokeWidth="2"/><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
                title: "Piyasa Yapıcılığı & Likidite",
                desc: "Likidite stratejisi, market making danışmanlığı ve sistem kurulumu"
              },
              {
                icon: <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><line x1="18" y1="20" x2="18" y2="10" strokeWidth="2"/><line x1="12" y1="20" x2="12" y2="4" strokeWidth="2"/><line x1="6" y1="20" x2="6" y2="14" strokeWidth="2"/></svg>,
                title: "Yatırım Danışmanlığı & Fon Toplama",
                desc: "Yatırım turu planlama, yatırımcı araştırması ve stratejik eşleşmeler"
              },
              {
                icon: <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4" strokeWidth="2"/><polyline points="16 11 18 13 22 9" strokeWidth="2"/></svg>,
                title: "Ortaklıklar & İş Geliştirme",
                desc: "Stratejik partnerlikler, ecosystem collaborations ve cross-marketing"
              }
            ].map((service, idx) => (
              <div key={idx} className="group p-8 border border-white/15 rounded-xl transition-all hover:bg-brand-orange/5 hover:border-brand-orange hover:-translate-y-2 hover:shadow-[0_8px_24px_rgba(255,177,0,0.2)] text-center cursor-pointer flex flex-col items-center gap-4">
                <div className="w-14 h-14 text-brand-orange transition-all group-hover:scale-110">
                  {service.icon}
                </div>
                <h3 className="text-white group-hover:text-brand-orange text-lg font-semibold leading-tight transition-colors">
                  {service.title}
                </h3>
                <p className="text-[#9ca3af] group-hover:text-[#d1d5db] text-sm font-light leading-relaxed transition-colors">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Yatırım Gücünüz Var Ama */}
      <section className="py-20 bg-gradient-to-b from-brand-orange/5 to-black text-white border-t border-brand-orange/10">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-[2.3rem] font-bold mb-6 leading-tight">Yatırım Gücünüz Var Ama Ne Yapacağınıza Karar Veremediniz mi?</h1>
              <p className="text-lg font-light mb-8">
                Web3 ve kripto dünyasında doğru yatırım,
                sadece sermaye değil doğru strateji gerektirir.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  "Yatırım fırsatlarını analiz eder",
                  "Riskleri değerlendirir",
                  "Size uygun Web3 modellerini belirleriz"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-4">
                    <span className="text-brand-orange text-xl">✓</span>
                    <span className="text-[#d1d5db] font-light">{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="inline-block bg-brand-orange text-black px-8 py-4 rounded-lg font-bold shadow-[0_4px_12px_rgba(255,177,0,0.3)] transition-all hover:scale-105">
                Yatırım Danışmanlığı Al
              </a>
            </div>

            <div className="relative h-[24rem] rounded-lg overflow-hidden border border-brand-orange/20">
              <img src="/y.jpg" alt="Investment Advisory" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Hazır mısınız? */}
      <section className="py-20 text-center text-white border-t border-brand-orange/10 bg-gradient-to-b from-transparent to-brand-orange/5">
        <div className="container mx-auto px-8 max-w-4xl">
          <h1 className="text-[2.3rem] font-bold mb-6">Kripto Projenizi Bir Sonraki Seviyeye Taşımaya Hazır mısınız?</h1>
          <p className="text-lg font-light mb-12">
            İster yeni bir fikir, ister mevcut bir proje,
            ister sadece yatırım gücü… 
            <span className="block mt-2 text-brand-orange font-semibold">
              Doğru yol haritasını birlikte oluşturalım.
            </span>
          </p>
          <a href="#" className="inline-block bg-brand-orange text-black px-12 py-5 rounded-lg font-bold text-lg shadow-[0_4px_12px_rgba(255,177,0,0.3)] transition-all hover:scale-105">
            Ücretsiz Ön Değerlendirme Al
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-black text-white border-t border-brand-orange/20 py-12">
        <div className="container mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-brand-orange rounded flex items-center justify-center font-bold text-lg text-black">
                  CR
                </div>
                <div className="flex flex-col">
                  <span className="text-white font-bold text-lg">CRAY</span>
                  <span className="text-brand-orange text-[0.6rem]">Digital</span>
                </div>
              </div>
              <p className="text-[#9ca3af] text-sm leading-relaxed mb-6">
                Kripto sektöründe dijital pazarlama ve danışmanlık hizmetleri sunan lider ajans. Token projeleriniz için 360 derece çözümler.
              </p>
              <div className="flex gap-4">
                {['𝕏', 'in', '✈'].map((s, i) => (
                  <a key={i} href="#" className="w-10 h-10 bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center transition-colors hover:bg-brand-orange/20">
                    {s}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Hizmetlerimiz</h3>
              <ul className="space-y-2 text-[#9ca3af] text-sm font-light">
                <li><a href="#" className="hover:text-brand-orange transition-colors">A'dan Z'ye Danışmanlık</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">Token & Blockchain Development</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">Crypto & Web3 Marketing</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">Market Making & Likidite</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">Yatırım Danışmanlığı</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">Kurumsal</h3>
              <ul className="space-y-2 text-[#9ca3af] text-sm font-light">
                <li><a href="#" className="hover:text-brand-orange transition-colors">Hakkımızda</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">İletişim</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">Referanslar</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">Kaynaklar</a></li>
                <li><a href="#" className="hover:text-brand-orange transition-colors">Çözümler</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-bold text-lg mb-4">İletişim</h3>
              <ul className="space-y-4 text-[#9ca3af] text-sm font-light">
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange">✉</span>
                  <a href="mailto:info@craydigital.com" className="hover:text-brand-orange transition-colors">info@craydigital.com</a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange">☎</span>
                  <a href="tel:+442071234567" className="hover:text-brand-orange transition-colors">+44 20 7123 4567</a>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-brand-orange">📍</span>
                  <span>London, England</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-brand-orange/20 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-[#9ca3af] text-sm font-light">
              © 2024 CRAY Digital. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-6 text-[#9ca3af] text-sm font-light">
              <a href="#" className="hover:text-brand-orange transition-colors">Gizlilik Politikası</a>
              <a href="#" className="hover:text-brand-orange transition-colors">Kullanım Koşulları</a>
              <a href="#" className="hover:text-brand-orange transition-colors">KVKK</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
