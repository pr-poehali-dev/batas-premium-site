import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const LOGO_IMG = "https://cdn.poehali.dev/projects/884bd571-7ab3-4c26-9a11-87544c71b4ff/bucket/f1bd798c-b383-4137-8834-5ea926e95a60.png";
const SHOP_IMG = "https://cdn.poehali.dev/projects/884bd571-7ab3-4c26-9a11-87544c71b4ff/bucket/52ce39f9-5899-46da-8040-be852f688cb0.jpg";
const KNIFE_HERO_IMG = "https://cdn.poehali.dev/projects/884bd571-7ab3-4c26-9a11-87544c71b4ff/files/198bb206-daa7-431f-a21d-6e4c40bce416.jpg";
const HERO_IMG = "https://cdn.poehali.dev/projects/884bd571-7ab3-4c26-9a11-87544c71b4ff/bucket/ab85f460-5651-46b0-bfce-9c5faa449ca4.jpg";
const FORGE_IMG = "https://cdn.poehali.dev/files/965d81b1-ccfa-42d5-b4d4-08d713b205b7.jpg";
const COLLECTION_IMG = "https://cdn.poehali.dev/files/5196942c-5c7f-40d6-85f5-b7fc3a64f5bd.jpg";
const STONE_IMG = "https://cdn.poehali.dev/projects/884bd571-7ab3-4c26-9a11-87544c71b4ff/bucket/839106de-ad44-457b-a81a-6a7de1157508.jpg";
const ICE_IMG = "https://cdn.poehali.dev/projects/884bd571-7ab3-4c26-9a11-87544c71b4ff/bucket/145a1dda-e26f-4b50-9bb7-298df71beaf3.jpg";
const WATER_IMG = "https://cdn.poehali.dev/files/922ce53b-3cdf-4469-8938-5cfb416d9b64.jpg";
const GRASS_IMG = "https://cdn.poehali.dev/projects/884bd571-7ab3-4c26-9a11-87544c71b4ff/bucket/f297f4ba-cd40-4d73-93e9-b0278b697f89.jpg";

const MAMMOTH_IMG = "https://cdn.poehali.dev/projects/884bd571-7ab3-4c26-9a11-87544c71b4ff/files/d952a992-362f-4610-9f0e-95c84a7bfff1.jpg";
const KRICHA_IMG = "https://cdn.poehali.dev/projects/884bd571-7ab3-4c26-9a11-87544c71b4ff/files/f2a17d9a-0e44-4b0a-ab9d-d67301eb43cd.jpg";
const KAP_IMG = "https://cdn.poehali.dev/projects/884bd571-7ab3-4c26-9a11-87544c71b4ff/files/a38bebc9-fdbf-4feb-85f2-aed8bba0381b.jpg";

const navItems = [
  { label: "О бренде", id: "about" },
  { label: "Изделия", id: "collections" },
  { label: "Материалы", id: "materials" },
  { label: "Мастер", id: "masters" },
  { label: "Галерея", id: "gallery" },
  { label: "Контакты", id: "contacts" },
];

const crafts = [
  {
    img: STONE_IMG,
    label: "Авторское изделие",
    material: "Крица · Кап берёзы",
    origin: "Изготовлено в Якутии · Ручная работа",
  },
  {
    img: HERO_IMG,
    label: "Авторское изделие",
    material: "Крица · Бивень мамонта",
    origin: "Натуральные материалы · Ручная работа",
  },
  {
    img: GRASS_IMG,
    label: "Авторское изделие",
    material: "Крица · Серебро · Кожа",
    origin: "Изготовлено в Якутии · Ручная работа",
  },
];

const KAP_REAL_IMG = "https://cdn.poehali.dev/files/a0844362-0ad1-4cf9-b7a2-b9fa529080d4.png";
const MAMMOTH_REAL_IMG = "https://cdn.poehali.dev/files/74459937-f72b-4beb-bc6b-56c68b2e499f.png";
const RUNE_STONE_IMG = "https://cdn.poehali.dev/files/7665313d-166d-40d9-bd0d-7f562fe415bb.png";
const KRICHA_REAL_IMG = "https://cdn.poehali.dev/files/a1186fa1-7e13-48bb-a41e-455aedbe4166.png";
const KNIFE_ICE_IMG = "https://cdn.poehali.dev/files/81c23427-d3f9-4fd8-9bb6-aba1728e8e36.jpg";
const MASTER_IMG = "https://cdn.poehali.dev/files/17727c2e-9998-44e7-9377-bbf40c4ba26b.jpg";
const HORSE_SYMBOL_IMG = "https://cdn.poehali.dev/files/b9f127c7-71bd-4d3a-8346-7f28e36ee08f.png";
const KNIFE_STAND1_IMG = "https://cdn.poehali.dev/files/32ded62d-b0ce-47be-b3de-1023301b48ac.png";
const KNIFE_STAND2_IMG = "https://cdn.poehali.dev/files/3a163131-440b-4496-8e24-84456ff18859.png";

const materialItems = [
  {
    img: KAP_REAL_IMG,
    title: "Кап берёзы",
    sub: "Природный нарост якутской берёзы",
    text: "Плотная свилеватая структура. После многолетней сушки — прочнее дуба, с живым природным рисунком.",
  },
  {
    img: MAMMOTH_REAL_IMG,
    title: "Бивень мамонта",
    sub: "Из вечной мерзлоты Якутии",
    text: "Возраст от 5 000 до 40 000 лет. Перламутровый отлив — каждый фрагмент неповторим.",
  },
  {
    img: KRICHA_REAL_IMG,
    title: "Крица",
    sub: "Традиционный якутский металл",
    text: "Получен методом прямого восстановления железа. Придаёт клинку гибкость и стойкость к северным температурам.",
  },
];

export default function Index() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="batas-root">
      {/* ─── NAVBAR ─── */}
      <header className={`batas-nav ${scrolled ? "batas-nav--scrolled" : ""}`}>
        <div className="batas-nav__inner">
          <img src={LOGO_IMG} alt="БАТАС" className="batas-logo-img" onClick={() => scrollTo("hero")} />

          <nav className="batas-nav__links">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="batas-nav__link">
                {item.label}
              </button>
            ))}
          </nav>

          <button className="batas-burger" onClick={() => setMenuOpen(!menuOpen)}>
            <Icon name={menuOpen ? "X" : "Menu"} size={22} />
          </button>
        </div>

        {menuOpen && (
          <div className="batas-mobile-menu">
            {navItems.map((item) => (
              <button key={item.id} onClick={() => scrollTo(item.id)} className="batas-nav__link">
                {item.label}
              </button>
            ))}
          </div>
        )}
      </header>

      {/* ─── HERO ─── */}
      <section id="hero" className="batas-hero">
        <div className="batas-hero__bg" style={{ backgroundImage: `url(${SHOP_IMG})` }} />
        <div className="batas-hero__overlay" />
        <div className="batas-hero__overlay2" />

        <div className="batas-hero__center batas-anim" style={{ animationDelay: "0.4s" }}>
          <p className="batas-eyebrow batas-eyebrow--light">
            Якутия · Народ Саха
          </p>
          <div className="batas-hero__logo-block">
            <img src={LOGO_IMG} alt="БАТАС" className="batas-hero__logo-img" />
          </div>
          <p className="batas-hero__tagline">
            Премиальные якутские ножи
          </p>
          <div className="batas-hero__divider" />
          <p className="batas-hero__manifesto">
            Каждый клинок — единственный в своём роде.
          </p>
          <button onClick={() => scrollTo("about")} className="batas-btn batas-btn--gold batas-anim" style={{ animationDelay: "0.9s", marginTop: "2.5rem" }}>
            Открыть коллекцию
          </button>
        </div>

        <div className="batas-scroll-hint">
          <span>Листать</span>
          <div className="batas-scroll-line" />
        </div>
      </section>

      {/* ─── О БРЕНДЕ ─── */}
      <section id="about" className="batas-section">
        <div className="batas-two-col">
          <div>
            <p className="batas-eyebrow">О бренде</p>
            <h2 className="batas-h2">
              Северное<br />
              <em>наследие</em>
            </h2>
            <div className="batas-text-block">
              <p>
                BATAS — это не просто нож. Это живая история народа Саха, выкованная в сердце Якутии.
                Якутский нож — «быhах» — сопровождал человека тысячи лет: в охоте, в быту, в ритуалах.
                Он был неотъемлемой частью культуры и мировоззрения северного народа.
              </p>
              <p>
                Потомственные кузнецы основали мастерскую, где традиционные методы ковки
                соединились с требованиями современного коллекционного искусства.
                Каждый нож BATAS — это месяцы работы, передаваемые из рук в руки знания
                и уважение к вечным материалам Севера.
              </p>
              <p>Мы не производим серийные изделия. Каждый клинок — единственный в своём роде.</p>
            </div>
            <div className="batas-about-signature">
              <div className="batas-about-line" />
              <p className="batas-about-sign-text">Каждый клинок — единственный в своём роде</p>
            </div>
          </div>
          <div className="batas-img-wrap">
            <div className="batas-img-glow" />
            <img src={KNIFE_ICE_IMG} alt="Нож BATAS на льду" className="batas-img batas-img--hover-color" style={{ objectFit: "cover" }} />
          </div>
        </div>
      </section>

      <div className="batas-hr" />

      {/* ─── РУНЫ И ОРНАМЕНТЫ ─── */}
      <section id="collections" className="batas-rune-section">
        <div className="batas-rune-layout">
          <div className="batas-rune-img-wrap">
            <img src={RUNE_STONE_IMG} alt="Древние руны народа Саха" className="batas-rune-img" />
            <div className="batas-rune-veil" />
          </div>
          <div className="batas-rune-text">
            <p className="batas-eyebrow batas-eyebrow--light">Традиции</p>
            <h2 className="batas-h2">
              Знаки<br /><em>Севера</em>
            </h2>
            <div className="batas-rune-rule" />
            <p className="batas-rune-body">
              Каждое изделие BATAS несёт в себе символику народа Саха — древние орнаменты и знаки, передававшиеся из поколения в поколение тысячи лет.
            </p>
            <p className="batas-rune-body">
              Якутские мастера вносили в клинок и рукоять смысл: защиту, силу, связь с Севером. Не просто украшение — язык предков.
            </p>
            <div className="batas-rune-tags">
              <span>Северная эстетика</span>
              <span>Символика Саха</span>
              <span>Традиционный орнамент</span>
            </div>
          </div>
        </div>
      </section>

      {/* ─── МАТЕРИАЛЫ ─── */}
      <section id="materials" className="batas-mat-section">
        <div className="batas-mat-header">
          <p className="batas-eyebrow batas-eyebrow--light">Материалы</p>
          <h2 className="batas-h2">Дары <em>Севера</em></h2>
          <p className="batas-mat-intro">
            Материалы из глубин Якутии — редкие, древние, неповторимые.
          </p>
        </div>

        <div className="batas-mat-exhibits">
          {materialItems.map((mat, i) => (
            <div key={i} className="batas-mat-exhibit">
              <div className="batas-mat-photo-wrap">
                <img src={mat.img} alt={mat.title} className="batas-mat-photo" />
                <div className="batas-mat-photo-veil" />
              </div>
              <div className="batas-mat-body">
                <p className="batas-mat-sub">{mat.sub}</p>
                <h3 className="batas-mat-name">{mat.title}</h3>
                <div className="batas-mat-rule" />
                <p className="batas-mat-desc">{mat.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── МАСТЕР ─── */}
      <section id="masters" className="batas-section batas-section--dark">
        <div className="batas-master-single">
          <div className="batas-master-single__img-wrap">
            <img src={MASTER_IMG} alt="Василий Попов — Бааха Уус" className="batas-master-single__img" />
            <div className="batas-master-single__veil" />
          </div>
          <div className="batas-master-single__text">
            <p className="batas-eyebrow batas-eyebrow--light">Мастер</p>
            <h2 className="batas-h2">
              Василий Попов<br /><em>Бааха Уус</em>
            </h2>
            <p className="batas-master-single__role">Главный мастер BATAS · Дархан Уус</p>
            <div className="batas-master-single__rule" />
            <p className="batas-master-single__bio">
              Василий Попов — Бааха Уус — главный мастер BATAS, обладатель титула Дархан Уус и один из известных мастеров Якутии.
            </p>
            <p className="batas-master-single__bio">
              На протяжении многих лет сохраняет традиции якутского ножевого ремесла, соединяя древние техники ковки с авторским подходом и премиальными натуральными материалами.
            </p>
          </div>
        </div>
      </section>

      {/* ─── ПРОИЗВОДСТВО ─── */}
      <section className="batas-section">
        <div className="batas-two-col batas-two-col--reverse">
          <div className="batas-img-wrap">
            <div className="batas-img-glow" />
            <img src={HORSE_SYMBOL_IMG} alt="Символ народа Саха" className="batas-img batas-img--tall" style={{ objectFit: "contain", background: "#0d0c0b" }} />
          </div>
          <div>
            <p className="batas-eyebrow">Производство</p>
            <h2 className="batas-h2">Сделано в<br /><em>Якутии</em></h2>
            <div className="batas-text-block">
              <p>
                Изделия BATAS создаются в Якутии — на родине якутского ножа. Производство основано на ручной работе мастеров, традиционных техниках обработки металла и внимании к каждой детали.
              </p>
              <p>
                Каждый клинок проходит путь от заготовки и ковки до шлифовки, заточки и финальной полировки. Именно ручная работа делает каждое изделие индивидуальным.
              </p>
            </div>
            <div className="batas-prod-accents">
              {["Сделано в Якутии", "Ручная работа", "Натуральные материалы"].map((txt, i) => (
                <div key={i} className="batas-prod-accent">
                  <div className="batas-prod-accent__dot" />
                  <span>{txt}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── ГАЛЕРЕЯ ─── */}
      <section id="gallery" className="batas-cinema-section">
        <div className="batas-cinema-header">
          <p className="batas-eyebrow batas-eyebrow--light">Галерея</p>
          <h2 className="batas-h2">Изделия <em>BATAS</em></h2>
        </div>
        <div className="batas-cinema-main">
          <img src={WATER_IMG} alt="Нож BATAS у реки" className="batas-cinema-img batas-cinema-img--large" />
          <div className="batas-cinema-side">
            <img src={GRASS_IMG} alt="Нож BATAS в травах" className="batas-cinema-img batas-cinema-img--sm" />
            <img src={COLLECTION_IMG} alt="Изделие BATAS в коробке" className="batas-cinema-img batas-cinema-img--sm" />
          </div>
        </div>
        <div className="batas-cinema-caption">
          <p className="batas-eyebrow batas-eyebrow--light">Авторские изделия · Ручная работа · Якутия</p>
        </div>
      </section>

      {/* ─── КОНТАКТЫ ─── */}
      <section id="contacts" className="batas-section batas-section--dark batas-section--center">
        <p className="batas-eyebrow">Контакты</p>
        <h2 className="batas-h2 batas-h2--center">Заказать <em>нож</em></h2>
        <p className="batas-section-desc">
          Каждый нож изготавливается по индивидуальному заказу. Свяжитесь с нами, и мы обсудим
          ваш нож — материалы, размеры, орнамент и сроки изготовления.
        </p>

        <div className="batas-contacts">
          {[
            { icon: "MapPin", label: "Адрес", value: "Якутск, Якутия" },
            { icon: "Mail", label: "Email", value: "info@batas.ru" },
            { icon: "Phone", label: "Телефон", value: "+7 (914) 000-00-00" },
          ].map((c, i) => (
            <div key={i} className="batas-contact-card">
              <Icon name={c.icon} fallback="Star" size={18} className="batas-contact-icon" />
              <p className="batas-contact-label">{c.label}</p>
              <p className="batas-contact-value">{c.value}</p>
            </div>
          ))}
        </div>

        <button className="batas-btn batas-btn--gold" style={{ marginTop: "2.5rem" }}>
          Оставить заявку
        </button>
      </section>

      {/* ─── FOOTER ─── */}
      <footer className="batas-footer">
        <img src={LOGO_IMG} alt="БАТАС" className="batas-footer__logo-img" />
        <p className="batas-footer__copy">© 2024 BATAS · Якутия · Россия</p>
        <p className="batas-footer__sub">Традиции народа Саха</p>
      </footer>

      <style>{`
        /* ── RESET / BASE ── */
        .batas-root {
          background: #0a0a0a;
          color: #e8e0d4;
          font-family: 'IBM Plex Sans', sans-serif;
          font-weight: 300;
          min-height: 100vh;
          overflow-x: hidden;
        }

        /* ── TYPOGRAPHY ── */
        .batas-h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(2.2rem, 5vw, 4rem);
          font-weight: 300;
          color: #f0e8dc;
          line-height: 1.1;
          margin-bottom: 2rem;
        }
        .batas-h2 em { font-style: italic; color: #c9a96e; }
        .batas-h2--center { text-align: center; }

        .batas-eyebrow {
          font-size: 10px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: #c9a96e;
          margin-bottom: 1rem;
          display: block;
        }

        .batas-section-desc {
          color: #9a8878;
          font-size: 0.875rem;
          line-height: 1.9;
          max-width: 36rem;
          margin: 0 auto 1rem;
          text-align: center;
        }

        .batas-text-block {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
          color: #9a8878;
          font-size: 0.875rem;
          line-height: 1.9;
          margin-bottom: 2.5rem;
        }

        /* ── NAVBAR ── */
        .batas-nav {
          position: fixed;
          top: 0; left: 0; right: 0;
          z-index: 50;
          transition: background 0.7s, border-color 0.7s;
        }
        .batas-nav--scrolled {
          background: rgba(10,10,10,0.95);
          backdrop-filter: blur(12px);
          border-bottom: 1px solid rgba(42,35,24,0.6);
        }
        .batas-nav__inner {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 3rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 80px;
        }
        @media (max-width: 768px) {
          .batas-nav__inner { padding: 0 1.5rem; height: 64px; }
        }
        .batas-logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.75rem;
          font-weight: 300;
          letter-spacing: 0.3em;
          color: #c9a96e;
          cursor: pointer;
        }
        .batas-logo-img {
          height: 48px;
          width: auto;
          cursor: pointer;
          filter: invert(1) brightness(0.85) sepia(0.3) saturate(1.5) hue-rotate(5deg);
          transition: filter 0.3s;
        }
        .batas-logo-img:hover {
          filter: invert(1) brightness(1) sepia(0.5) saturate(2) hue-rotate(5deg);
        }
        @media (max-width: 768px) { .batas-logo-img { height: 38px; } }
        .batas-nav__links {
          display: flex;
          gap: 2rem;
        }
        @media (max-width: 1024px) { .batas-nav__links { display: none; } }
        .batas-nav__link {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #9a8878;
          transition: color 0.3s;
          font-family: 'IBM Plex Sans', sans-serif;
        }
        .batas-nav__link:hover { color: #c9a96e; }
        .batas-burger {
          display: none;
          background: none;
          border: none;
          cursor: pointer;
          color: #c9a96e;
        }
        @media (max-width: 1024px) { .batas-burger { display: block; } }
        .batas-mobile-menu {
          background: rgba(13,12,11,0.98);
          border-top: 1px solid rgba(42,35,24,0.6);
          padding: 1.5rem;
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        /* ── HERO ── */
        .batas-hero {
          position: relative;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .batas-hero__overlay2 {
          position: absolute; inset: 0;
          background: rgba(5,4,3,0.55);
          z-index: 2;
        }
        .batas-hero__center {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 0 2rem;
          padding-top: 80px;
          max-width: 640px;
        }

        .batas-eyebrow--light { color: rgba(201,169,110,0.7); margin-bottom: 1.5rem; }

        .batas-hero__logo-block { margin-bottom: 1.5rem; }
        .batas-hero__logo-img {
          height: 90px;
          width: auto;
          filter: brightness(0) invert(1);
          opacity: 0.95;
        }
        @media (max-width: 900px) { .batas-hero__logo-img { height: 70px; } }

        .batas-hero__tagline {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.1rem, 2.5vw, 1.5rem);
          font-weight: 300;
          font-style: italic;
          color: #c9a96e;
          letter-spacing: 0.05em;
          margin-bottom: 1.5rem;
        }
        .batas-hero__divider {
          width: 3rem;
          height: 1px;
          background: linear-gradient(to right, transparent, #c9a96e, transparent);
          margin: 0 auto 1.5rem;
        }
        .batas-hero__manifesto {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1rem, 1.5vw, 1.15rem);
          font-weight: 300;
          color: rgba(240,232,220,0.7);
          letter-spacing: 0.03em;
          line-height: 1.6;
        }

        /* knife frame */
        .batas-hero__right { display: flex; align-items: center; justify-content: center; }
        .batas-hero__knife-frame {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          max-width: 480px;
        }
        .batas-hero__knife-img {
          width: 100%;
          height: 560px;
          object-fit: contain;
          object-position: center;
          filter: drop-shadow(0 0 60px rgba(201,169,110,0.25));
          position: relative;
          z-index: 2;
        }
        .batas-hero__knife-glow {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at center, rgba(201,169,110,0.12) 0%, transparent 70%);
          z-index: 1;
          pointer-events: none;
        }

        /* about signature */
        .batas-about-signature {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-top: 0.5rem;
        }
        .batas-about-line {
          width: 2rem;
          height: 1px;
          background: rgba(201,169,110,0.4);
          flex-shrink: 0;
        }
        .batas-about-sign-text {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 0.95rem;
          color: rgba(201,169,110,0.7);
          letter-spacing: 0.02em;
        }

        .batas-hero__bg {
          position: absolute; inset: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        .batas-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, rgba(5,4,3,0.3) 0%, rgba(5,4,3,0) 40%, rgba(5,4,3,0.95) 100%);
          z-index: 1;
        }

        /* ── BUTTONS ── */
        .batas-btn {
          border: none;
          cursor: pointer;
          font-family: 'IBM Plex Sans', sans-serif;
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          font-weight: 500;
          padding: 1rem 2.5rem;
          transition: all 0.3s;
        }
        .batas-btn--gold {
          background: #c9a96e;
          color: #0a0a0a;
        }
        .batas-btn--gold:hover { background: #d4b87a; transform: scale(1.02); }
        .batas-btn--outline {
          background: transparent;
          color: #c9a96e;
          border: 1px solid rgba(201,169,110,0.4);
        }
        .batas-btn--outline:hover { border-color: #c9a96e; }

        /* ── SCROLL HINT ── */
        .batas-scroll-hint {
          position: absolute;
          bottom: 2.5rem;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 0.5rem;
          color: #9a8878;
          font-size: 9px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
        }
        .batas-scroll-line {
          width: 1px;
          height: 3rem;
          background: linear-gradient(to bottom, rgba(201,169,110,0.6), transparent);
          animation: pulse 2s infinite;
        }

        /* ── SECTIONS ── */
        .batas-section {
          padding: 8rem 3rem;
          max-width: 1280px;
          margin: 0 auto;
        }
        .batas-section--dark {
          background: #080807;
          max-width: 100%;
          padding: 8rem 3rem;
        }
        .batas-section--dark > * { max-width: 1280px; margin-left: auto; margin-right: auto; }
        .batas-section--center { text-align: center; display: flex; flex-direction: column; align-items: center; }
        @media (max-width: 768px) {
          .batas-section, .batas-section--dark { padding: 5rem 1.5rem; }
        }
        .batas-section-head {
          text-align: center;
          margin-bottom: 4rem;
        }

        /* ── TWO COL ── */
        .batas-two-col {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }
        .batas-two-col--reverse { }
        @media (max-width: 1024px) {
          .batas-two-col { grid-template-columns: 1fr; gap: 3rem; }
          .batas-two-col--reverse .batas-img-wrap { order: -1; }
        }

        /* ── IMAGE ── */
        .batas-img-wrap { position: relative; }
        .batas-img-glow {
          position: absolute;
          inset: -1rem;
          background: rgba(201,169,110,0.05);
          filter: blur(2rem);
          border-radius: 50%;
        }
        .batas-img {
          width: 100%;
          height: 500px;
          object-fit: contain;
          background: #0d0c0b;
          filter: grayscale(1);
          transition: filter 0.7s;
          display: block;
        }
        .batas-img--tall { height: 600px; object-fit: contain; background: #0d0c0b; }
        .batas-img--hover-color:hover { filter: grayscale(0); }
        .batas-img-caption-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,10,10,0.7), transparent);
          display: flex;
          align-items: flex-end;
        }
        .batas-img-caption { padding: 1.5rem; }
        .batas-quote {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          color: #c9a96e;
          font-size: 1.1rem;
        }
        .batas-quote-author {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #9a8878;
          margin-top: 0.25rem;
        }

        /* ── STATS ── */
        .batas-stats {
          display: flex;
          gap: 2rem;
          align-items: center;
        }
        .batas-stat { text-align: center; }
        .batas-stat__num {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2.5rem;
          color: #c9a96e;
          line-height: 1;
        }
        .batas-stat__label {
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #9a8878;
          margin-top: 0.25rem;
        }
        .batas-divider-v {
          width: 1px;
          height: 3rem;
          background: #2a2318;
        }

        /* ── HR ── */
        .batas-hr {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 3rem;
          height: 1px;
          background: linear-gradient(to right, transparent, #2a2318, transparent);
        }

        /* ── CARDS (COLLECTIONS) ── */
        .batas-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2rem;
          margin-bottom: 4rem;
        }
        @media (max-width: 1024px) { .batas-cards { grid-template-columns: 1fr; } }
        .batas-card {
          border: 1px solid rgba(42,35,24,0.6);
          padding: 2.5rem;
          position: relative;
          overflow: hidden;
          transition: border-color 0.5s;
        }
        .batas-card:hover { border-color: rgba(201,169,110,0.3); }
        .batas-card__top-line {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(201,169,110,0.4), transparent);
          opacity: 0;
          transition: opacity 0.5s;
        }
        .batas-card:hover .batas-card__top-line { opacity: 1; }
        .batas-card__sub {
          font-size: 9px;
          letter-spacing: 0.4em;
          text-transform: uppercase;
          color: rgba(201,169,110,0.6);
          margin-bottom: 1rem;
        }
        .batas-card__name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 2rem;
          font-weight: 300;
          color: #f0e8dc;
          margin-bottom: 1rem;
        }
        .batas-card__dash {
          width: 2rem;
          height: 1px;
          background: rgba(201,169,110,0.4);
          margin-bottom: 1.5rem;
        }
        .batas-card__desc {
          color: #9a8878;
          font-size: 0.875rem;
          line-height: 1.8;
          margin-bottom: 2rem;
        }
        .batas-card__detail {
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(201,169,110,0.5);
          border-top: 1px solid #2a2318;
          padding-top: 1rem;
        }

        /* ── CRAFT GRID (изделия) ── */
        .batas-craft-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 2.5rem;
        }
        @media (max-width: 900px) { .batas-craft-grid { grid-template-columns: 1fr; gap: 3rem; } }
        .batas-craft-card { display: flex; flex-direction: column; gap: 1.25rem; }
        .batas-craft-img-wrap {
          position: relative;
          overflow: hidden;
        }
        .batas-craft-img {
          width: 100%;
          height: clamp(320px, 40vw, 520px);
          object-fit: contain;
          background: #0d0c0b;
          display: block;
          transition: transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94);
        }
        .batas-craft-card:hover .batas-craft-img { transform: scale(1.03); }
        .batas-craft-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(5,4,3,0.6) 0%, transparent 50%);
        }
        .batas-craft-info { padding: 0 0.25rem; }
        .batas-craft-label {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.1rem;
          font-weight: 300;
          color: #f0e8dc;
          margin-bottom: 0.4rem;
        }
        .batas-craft-material {
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #c9a96e;
          margin-bottom: 0.3rem;
        }
        .batas-craft-origin {
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(154,136,120,0.6);
        }

        /* ── RUNE SECTION ── */
        .batas-rune-section {
          padding: 8rem 3rem;
          max-width: 1280px;
          margin: 0 auto;
        }
        @media (max-width: 768px) { .batas-rune-section { padding: 5rem 1.5rem; } }
        .batas-rune-layout {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
        }
        @media (max-width: 1024px) {
          .batas-rune-layout { grid-template-columns: 1fr; gap: 3rem; }
        }
        .batas-rune-img-wrap {
          position: relative;
          overflow: hidden;
        }
        .batas-rune-img {
          width: 100%;
          height: clamp(380px, 50vw, 580px);
          object-fit: cover;
          display: block;
          transition: transform 1s cubic-bezier(0.25,0.46,0.45,0.94);
          filter: brightness(0.9) saturate(0.85);
        }
        .batas-rune-img-wrap:hover .batas-rune-img { transform: scale(1.03); filter: brightness(1) saturate(1); }
        .batas-rune-veil {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(5,4,3,0.3) 0%, transparent 60%);
          pointer-events: none;
        }
        .batas-rune-text { }
        .batas-rune-rule {
          width: 2.5rem;
          height: 1px;
          background: rgba(201,169,110,0.35);
          margin: 1.5rem 0;
        }
        .batas-rune-body {
          color: #9a8878;
          font-size: 0.875rem;
          line-height: 1.9;
          margin-bottom: 1rem;
        }
        .batas-rune-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.75rem;
          margin-top: 2rem;
        }
        .batas-rune-tags span {
          font-size: 9px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(201,169,110,0.6);
          border: 1px solid rgba(201,169,110,0.2);
          padding: 0.4rem 0.9rem;
        }

        /* ── MATERIALS EXHIBITS ── */
        .batas-mat-section {
          background: #06050480;
          padding: 8rem 3rem;
        }
        @media (max-width: 768px) { .batas-mat-section { padding: 5rem 1.5rem; } }
        .batas-mat-header {
          max-width: 1280px;
          margin: 0 auto 5rem;
        }
        .batas-mat-intro {
          color: #9a8878;
          font-size: 0.875rem;
          line-height: 1.9;
          max-width: 32rem;
          margin-top: 0.5rem;
        }
        .batas-mat-exhibits {
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
        }
        @media (max-width: 1024px) { .batas-mat-exhibits { grid-template-columns: 1fr; gap: 4rem; } }
        .batas-mat-exhibit { display: flex; flex-direction: column; gap: 0; }
        .batas-mat-photo-wrap {
          position: relative;
          overflow: hidden;
          margin-bottom: 1.75rem;
        }
        .batas-mat-photo {
          width: 100%;
          height: 340px;
          object-fit: cover;
          display: block;
          transition: transform 1s cubic-bezier(0.25,0.46,0.45,0.94);
          filter: brightness(0.85) saturate(0.8);
        }
        .batas-mat-exhibit:hover .batas-mat-photo { transform: scale(1.04); filter: brightness(0.95) saturate(1); }
        .batas-mat-photo-veil {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(5,4,3,0.5) 0%, transparent 60%);
        }
        .batas-mat-sub {
          font-size: 9px;
          letter-spacing: 0.35em;
          text-transform: uppercase;
          color: rgba(201,169,110,0.6);
          margin-bottom: 0.75rem;
        }
        .batas-mat-name {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.5rem, 2.5vw, 2rem);
          font-weight: 300;
          color: #f0e8dc;
          margin-bottom: 1rem;
          line-height: 1.1;
        }
        .batas-mat-rule {
          width: 2rem;
          height: 1px;
          background: rgba(201,169,110,0.35);
          margin-bottom: 1rem;
        }
        .batas-mat-desc {
          color: #9a8878;
          font-size: 0.82rem;
          line-height: 1.9;
        }

        /* ── MASTER SINGLE ── */
        .batas-master-single {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 6rem;
          align-items: center;
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 3rem;
        }
        @media (max-width: 900px) {
          .batas-master-single { grid-template-columns: 1fr; gap: 3rem; padding: 0; }
        }
        .batas-master-single__img-wrap {
          position: relative;
          overflow: hidden;
        }
        .batas-master-single__img {
          width: 100%;
          height: 560px;
          object-fit: contain;
          background: #0d0c0b;
          display: block;
          filter: brightness(0.9) saturate(0.7);
          transition: filter 0.7s;
        }
        .batas-master-single__img-wrap:hover .batas-master-single__img { filter: brightness(1) saturate(1); }
        .batas-master-single__veil {
          position: absolute; inset: 0;
          background: linear-gradient(to right, rgba(8,8,7,0.4) 0%, transparent 60%);
          pointer-events: none;
        }
        .batas-master-single__text { padding: 0; }
        .batas-master-single__role {
          font-size: 9px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(201,169,110,0.7);
          margin-bottom: 2rem;
        }
        .batas-master-single__rule {
          width: 2.5rem;
          height: 1px;
          background: rgba(201,169,110,0.3);
          margin: 1.5rem 0;
        }
        .batas-master-single__bio {
          color: #9a8878;
          font-size: 0.875rem;
          line-height: 1.9;
          margin-bottom: 1rem;
        }

        /* ── PRODUCTION ACCENTS ── */
        .batas-prod-accents {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          margin-top: 2.5rem;
        }
        .batas-prod-accent {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          font-size: 10px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: rgba(201,169,110,0.7);
        }
        .batas-prod-accent__dot {
          width: 4px; height: 4px;
          background: rgba(201,169,110,0.5);
          border-radius: 50%;
          flex-shrink: 0;
        }

        /* ── CINEMA GALLERY ── */
        .batas-cinema-section {
          padding: 8rem 3rem;
          max-width: 1280px;
          margin: 0 auto;
        }
        @media (max-width: 768px) { .batas-cinema-section { padding: 5rem 1.5rem; } }
        .batas-cinema-header { margin-bottom: 3rem; }
        .batas-cinema-main {
          display: grid;
          grid-template-columns: 2fr 1fr;
          gap: 1.5rem;
          margin-bottom: 1.5rem;
        }
        @media (max-width: 768px) { .batas-cinema-main { grid-template-columns: 1fr; } }
        .batas-cinema-side { display: flex; flex-direction: column; gap: 1.5rem; }
        .batas-cinema-img { width: 100%; display: block; object-fit: contain; background: #0d0c0b; }
        .batas-cinema-img--large { height: clamp(320px, 45vw, 620px); }
        .batas-cinema-img--sm { height: clamp(140px, 18vw, 290px); flex: 1; }
        .batas-cinema-caption { text-align: center; margin-top: 1rem; }

        /* ── CONTACTS ── */
        .batas-contacts {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1.5rem;
          width: 100%;
          max-width: 48rem;
        }
        @media (max-width: 768px) { .batas-contacts { grid-template-columns: 1fr; } }
        .batas-contact-card {
          border: 1px solid rgba(42,35,24,0.6);
          padding: 1.5rem;
          text-align: center;
          transition: border-color 0.3s;
        }
        .batas-contact-card:hover { border-color: rgba(201,169,110,0.3); }
        .batas-contact-icon { color: #c9a96e; margin: 0 auto 0.75rem; display: block; }
        .batas-contact-label {
          font-size: 9px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #9a8878;
          margin-bottom: 0.5rem;
        }
        .batas-contact-value { color: #f0e8dc; font-size: 0.875rem; }

        /* ── FOOTER ── */
        .batas-footer {
          border-top: 1px solid rgba(42,35,24,0.6);
          padding: 2rem 3rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 1rem;
          flex-wrap: wrap;
        }
        .batas-footer__logo {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.25rem;
          letter-spacing: 0.3em;
          color: rgba(201,169,110,0.6);
        }
        .batas-footer__logo-img {
          height: 36px;
          width: auto;
          filter: invert(1) brightness(0.5) sepia(0.2);
          opacity: 0.5;
        }
        .batas-footer__copy, .batas-footer__sub {
          font-size: 9px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: rgba(154,136,120,0.4);
        }

        /* ── ANIMATIONS ── */
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .batas-anim {
          opacity: 0;
          animation: fade-in-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.3; }
        }
      `}</style>
    </div>
  );
}