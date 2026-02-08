
import React from 'react';

const App: React.FC = () => {
  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* HEADER */}
      <header>
        <nav>
          <div className="nav-container">
            <a href="#" className="logo">
              <div className="logo-icon">CR</div>
              <div className="logo-text">
                <span className="logo-title">CRAY</span>
                <span className="logo-subtitle">Digital</span>
              </div>
            </a>

            <ul className="nav-links">
              <li><a href="#">Ana Sayfa</a></li>
              <li><a href="#section3" onClick={(e) => { e.preventDefault(); scrollTo('section3'); }}>Hizmetler</a></li>
              <li><a href="#">Çözümler</a></li>
              <li><a href="#">Referanslar</a></li>
              <li><a href="#">Kaynaklar</a></li>
              <li><a href="#">Hakkımızda</a></li>
              <li><a href="#" className="cta-button">Teklif Al</a></li>
            </ul>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <img src="/c1.jpg" alt="Process Background" className="hero-bg" />
        <div className="hero-overlay"></div>
        <div className="hero-gradient"></div>

        <div className="container hero-content">
          <div className="hero-intro">
            <h1>Bir Kripto Projesini A'dan Z'ye Biz Yönetiyoruz</h1>
            <p className="description-text-hero">
              Fikir aşamasından teknik altyapıya, pazarlamadan listelemeye,
              yatırım sürecinden likidite yönetimine kadar tüm adımları sizin yerinize planlar, uygular ve yönetiriz.
            </p>
            <h3 className="hero-highlight">
              Bu yaklaşım klasik "ajans hizmeti" değil, uçtan uca proje ortaklığıdır.
            </h3>
          </div>

          <div className="process-diagram">
            <svg className="process-diagram-svg" viewBox="0 0 1200 320" preserveAspectRatio="none">
              <path d="M 50 160 Q 200 80, 350 160 T 650 160 T 950 160 Q 1050 80, 1150 160" stroke="#ffb100" strokeWidth="3" fill="none" strokeDasharray="10 8" />
            </svg>

            <div className="process-step step-1">
              <div className="process-number">01</div>
              <div className="process-title">{"Fikir & Konsept\nAnalizi"}</div>
            </div>

            <div className="process-step step-2">
              <div className="process-title">{"Strateji &\nYol Haritası"}</div>
              <div className="process-number">02</div>
            </div>

            <div className="process-step step-3">
              <div className="process-number">03</div>
              <div className="process-title">{"Tokenomics &\nTeknik Altyapı"}</div>
            </div>

            <div className="process-step step-4">
              <div className="process-title">{"Yazılım & Ürün\nGeliştirme"}</div>
              <div className="process-number">04</div>
            </div>

            <div className="process-step step-5">
              <div className="process-number">05</div>
              <div className="process-title">{"Branding &\nPazarlama"}</div>
            </div>

            <div className="process-step step-6">
              <div className="process-title">{"Topluluk &\nGrowth"}</div>
              <div className="process-number">06</div>
            </div>

            <div className="process-step step-7">
              <div className="process-number">07</div>
              <div className="process-title">{"Launch &\nListing"}</div>
            </div>

            <div className="process-step step-8">
              <div className="process-title">{"Market Making\n& Likidite"}</div>
              <div className="process-number">08</div>
            </div>
          </div>

          <div className="hero-cta">
            <a href="#" className="btn-primary"><h4 style={{ margin: 0 }}>Projemi A'dan Z'ye Hayata Geçirmek İstiyorum</h4></a>
          </div>

          <div className="scroll-arrow" onClick={() => scrollTo('section1')}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </div>
        </div>
      </section>

      {/* SECTION 1: A'dan Z'ye Danışmanlık */}
      <section className="section1" id="section1">
        <img src="/c2.jpg" alt="Hero Background" className="section1-bg" />
        <div className="section1-overlay"></div>
        <div className="section1-gradient"></div>
        <div className="section1-gradient-bottom"></div>

        <div className="container section1-content">
          <div className="grid-2col">
            <div>
              <h1>A'dan Z'ye Danışmanlık</h1>
              <h2 className="highlight-orange">Marketing ve Büyüme</h2>
              <h2 className="highlight-orange">ve 360° Çözümler</h2>

              <p className="description-text section1-description">
                Bir kripto projesini hayata geçirmek, büyütmek ve sürdürülebilir hale getirmek için
                ihtiyacınız olan tüm teknik, stratejik ve operasyonel süreçleri tek çatı altında sunuyoruz.
              </p>

              <div className="button-group">
                <a href="#" className="btn-primary" style={{ maxWidth: '100%', alignSelf: 'flex-start' }}><h4 style={{ margin: 0 }}>Yeni Kripto Projesi Başlatmak İstiyorum</h4></a>
                <a href="#" className="btn-secondary" style={{ maxWidth: '100%', alignSelf: 'flex-start' }}><h4 style={{ margin: 0 }}>Mevcut Projem Var, Geliştirmek İstiyorum</h4></a>
              </div>

              <div className="checkmarks">
                <div className="checkmark-item">
                  <span className="check-icon">✓</span>
                  <span className="body-text">NDA & Gizlilik</span>
                </div>
                <div className="checkmark-item">
                  <span className="check-icon">✓</span>
                  <span className="body-text">Web3 Odaklı Uzmanlık</span>
                </div>
                <div className="checkmark-item">
                  <span className="check-icon">✓</span>
                  <span className="body-text">Global Standartlarda Süreçler</span>
                </div>
              </div>
            </div>

            <div className="form-card">
              <h2>Ücretsiz Ön Değerlendirme Al</h2>
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="form-group">
                  <label className="form-label">Proje Durumu</label>
                  <select className="form-select">
                    <option value="">Seçiniz</option>
                    <option value="yeni">Yeni proje</option>
                    <option value="mevcut">Mevcut proje</option>
                    <option value="yatirim">Yatırım aşaması</option>
                  </select>
                </div>
                <div className="form-group">
                  <label className="form-label">Kısa Hedef Açıklaması</label>
                  <textarea className="form-textarea" rows={3} placeholder="Ne yapmak istiyorsunuz?"></textarea>
                </div>
                <div className="form-group">
                  <label className="form-label">E-posta / Telegram</label>
                  <input type="text" className="form-input" placeholder="İletişim bilginiz" />
                </div>
                <button type="submit" className="btn-primary form-submit">
                  <h4 style={{ margin: 0 }}>GÖNDER</h4>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2: Neden Bizimle Çalışmalısınız? */}
      <section className="section2">
        <img src="/fh.jpg" alt="Why Us Background" className="section2-bg" />
        <div className="section2-overlay"></div>
        <div className="section2-gradient"></div>

        <div className="container section2-content">
          <div className="section2-intro">
            <h1>Neden Bizimle Çalışmalısınız?</h1>
          </div>

          <div className="grid-3col-neden">
            {[
              { title: "Web3 & Crypto Odaklı Uzmanlık", text: "Sadece kripto ve Web3 projelerine odaklanmış deneyimli ekip" },
              { title: "A'dan Z'ye Proje Yaklaşımı", text: "Fikir aşamasından lansmanına kadar her adımda yanınızdayız" },
              { title: "Tek Noktadan Yönetim", text: "Tüm süreçleri koordine eden entegre ekip yapısı" },
              { title: "NDA & Gizlilik Önceliği", text: "Projelerinizin güvenliği bizim için en önemli konu" },
              { title: "Veri Odaklı Karar Mekanizması", text: "Her kararımız analitik verilerle desteklenir" },
              { title: "Global Standartlarda Süreçler", text: "Uluslararası kalite standartlarında hizmet sunuyoruz" }
            ].map((reason, idx) => (
              <div key={idx} className="reason-card">
                <div className="reason-icon">⭐</div>
                <h3>{reason.title}</h3>
                <p className="body-text">{reason.text}</p>
              </div>
            ))}
          </div>

          <div className="section2-cta">
            <a href="#" className="btn-primary"><h4 style={{ margin: 0 }}>Daha Fazla Bilgi Al</h4></a>
          </div>
        </div>
      </section>

      {/* SECTION 5: Mevcut Kripto Projenizi */}
      <section className="section5">
        <div className="container">
          <div className="grid-2col-section5">
            <div className="image-container">
              <img src="/z.jpg" alt="Existing Project Growth" />
              <div className="image-overlay"></div>
            </div>
            <div>
              <h1>Mevcut Kripto Projenizi Bir Üst Seviyeye Taşıyalım</h1>
              <p className="description-text">
                Birçok proje doğru strateji, pazarlama ve teknik optimizasyon eksikliği nedeniyle potansiyelini kullanamıyor.
              </p>
              <ul className="list-with-checks">
                <li><span className="list-check-icon">✓</span> <span className="body-text">Projenizi analiz ederiz</span></li>
                <li><span className="list-check-icon">✓</span> <span className="body-text">Eksikleri tespit ederiz</span></li>
                <li><span className="list-check-icon">✓</span> <span className="body-text">Yeniden konumlandırır ve büyütürüz</span></li>
              </ul>
              <a href="#" className="btn-primary"><h4 style={{ margin: 0 }}>Projemi Değerlendirin</h4></a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: Web3 & Crypto İçin Uçtan Uca Hizmetler */}
      <section className="section3" id="section3">
        <img src="/ag1.jpg" alt="Services Background" className="section3-bg" />
        <div className="section3-overlay"></div>
        <div className="section3-gradient"></div>

        <div className="container section3-content">
          <div className="section3-intro">
            <h1>Web3 & Crypto İçin Uçtan Uca Hizmetler</h1>
            <h5 style={{ color: '#fff', marginBottom: '4rem', fontSize: '1rem' }}>
              Her projeye ihtiyacına göre yaklaşır, tek bir hizmetten komple 360° çözüme kadar esnek modeller sunarız.
            </h5>
          </div>

          <div className="services-grid">
            {[
              "A'dan Z'ye Crypto Proje Danışmanlığı",
              "Token & Blockchain Geliştirme",
              "Blockchain & Yazılım Geliştirme",
              "Token Lansmanı & Listeleme",
              "Kripto & Web3 Pazarlama",
              "Sosyal Medya & Topluluk",
              "İçerik Üretimi",
              "Piyasa Yapıcılığı & Likidite",
              "Yatırım Danışmanlığı & Fon Toplama",
              "Ortaklıklar & İş Geliştirme"
            ].map((service, idx) => (
              <div key={idx} className="service-card">
                <div className="service-icon">💎</div>
                <h3>{service}</h3>
                <p>Profesyonel Web3 çözümleri</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: Yatırım Gücünüz Var Ama */}
      <section className="section4">
        <div className="container">
          <div className="grid-2col">
            <div>
              <h1>Yatırım Gücünüz Var Ama Ne Yapacağınıza Karar Veremediniz mi?</h1>
              <p className="description-text">
                Web3 ve kripto dünyasında doğru yatırım, sadece sermaye değil doğru strateji gerektirir.
              </p>
              <ul className="list-with-checks">
                <li><span className="list-check-icon">✓</span> <span className="body-text">Yatırım fırsatlarını analiz eder</span></li>
                <li><span className="list-check-icon">✓</span> <span className="body-text">Riskleri değerlendirir</span></li>
                <li><span className="list-check-icon">✓</span> <span className="body-text">Size uygun Web3 modellerini belirleriz</span></li>
              </ul>
              <a href="#" className="btn-primary"><h4 style={{ margin: 0 }}>Yatırım Danışmanlığı Al</h4></a>
            </div>
            <div className="image-container">
              <img src="/y.jpg" alt="Investment Advisory" />
              <div className="image-overlay"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Hazır mısınız? */}
      <section className="section6">
        <div className="container section6-content">
          <h1>Kripto Projenizi Bir Sonraki Seviyeye Taşımaya Hazır mısınız?</h1>
          <p className="description-text">
            İster yeni bir fikir, ister mevcut bir proje, ister sadece yatırım gücü…
            <span className="section6-highlight" style={{ color: '#ffb100', fontWeight: 'bold' }}>Doğru yol haritasını birlikte oluşturalım.</span>
          </p>
          <a href="#" className="btn-primary section6-cta">
            <h4 style={{ margin: 0 }}>Ücretsiz Ön Değerlendirme Al</h4>
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <div className="container">
          <div className="footer-grid">
            <div>
              <div className="footer-brand">
                <div className="footer-logo-icon">CR</div>
                <div className="footer-logo-text">
                  <span className="footer-logo-title">CRAY</span>
                  <span className="footer-logo-subtitle">Digital</span>
                </div>
              </div>
              <p className="footer-desc">Kripto sektöründe dijital pazarlama ve danışmanlık hizmetleri sunan lider ajans.</p>
              <div className="social-links">
                <a href="#" className="social-link">𝕏</a>
                <a href="#" className="social-link">in</a>
                <a href="#" className="social-link">✈</a>
              </div>
            </div>
            <div>
              <h3 className="footer-title">Hizmetlerimiz</h3>
              <ul className="footer-links">
                <li><a href="#">A'dan Z'ye Danışmanlık</a></li>
                <li><a href="#">Token & Blockchain Development</a></li>
                <li><a href="#">Crypto & Web3 Marketing</a></li>
              </ul>
            </div>
            <div>
              <h3 className="footer-title">Kurumsal</h3>
              <ul className="footer-links">
                <li><a href="#">Hakkımızda</a></li>
                <li><a href="#">İletişim</a></li>
              </ul>
            </div>
            <div>
              <h3 className="footer-title">İletişim</h3>
              <ul className="footer-contact">
                <li><span className="contact-icon">✉</span> info@craydigital.com</li>
                <li><span className="contact-icon">📍</span> London, England</li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p className="footer-copyright">© 2024 CRAY Digital. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default App;
