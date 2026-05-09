import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const LOGO_IMG = "https://cdn.poehali.dev/projects/884bd571-7ab3-4c26-9a11-87544c71b4ff/bucket/f1bd798c-b383-4137-8834-5ea926e95a60.png";
const HERO_IMG = "https://cdn.poehali.dev/projects/884bd571-7ab3-4c26-9a11-87544c71b4ff/bucket/ab85f460-5651-46b0-bfce-9c5faa449ca4.jpg";
const FORGE_IMG = "https://cdn.poehali.dev/files/965d81b1-ccfa-42d5-b4d4-08d713b205b7.jpg";
const COLLECTION_IMG = "https://cdn.poehali.dev/files/5196942c-5c7f-40d6-85f5-b7fc3a64f5bd.jpg";
const STONE_IMG = "https://cdn.poehali.dev/projects/884bd571-7ab3-4c26-9a11-87544c71b4ff/bucket/839106de-ad44-457b-a81a-6a7de1157508.jpg";
const ICE_IMG = "https://cdn.poehali.dev/projects/884bd571-7ab3-4c26-9a11-87544c71b4ff/bucket/145a1dda-e26f-4b50-9bb7-298df71beaf3.jpg";
const WATER_IMG = "https://cdn.poehali.dev/files/922ce53b-3cdf-4469-8938-5cfb416d9b64.jpg";
const GRASS_IMG = "https://cdn.poehali.dev/projects/884bd571-7ab3-4c26-9a11-87544c71b4ff/bucket/f297f4ba-cd40-4d73-93e9-b0278b697f89.jpg";

const navItems = [
  { label: "О бренде", id: "about" },
  { label: "Коллекции", id: "collections" },
  { label: "Материалы", id: "materials" },
  { label: "Мастера", id: "masters" },
  { label: "Галерея", id: "gallery" },
  { label: "Контакты", id: "contacts" },
];

const collections = [
  {
    name: "БАЛТА",
    sub: "Традиционный",
    desc: "Классический якутский нож с рукоятью из капа берёзы. Клинок из кованой крицы с характерным выраженным доломом.",
    detail: "Длина клинка 120 мм · Сталь У8А · Кап берёзы",
  },
  {
    name: "МАМОНТ",
    sub: "Премиальный",
    desc: "Рукоять из бивня мамонта возрастом 10 000 лет. Каждое изделие несёт в себе память тысячелетий северной земли.",
    detail: "Длина клинка 140 мм · Дамаск · Бивень мамонта",
  },
  {
    name: "САХА",
    sub: "Коллекционный",
    desc: "Нож, воплощающий дух народа Саха. Рукоять из зуба мамонта с традиционными орнаментами в технике золотой инкрустации.",
    detail: "Длина клинка 160 мм · Булат · Зуб мамонта",
  },
];

const materials = [
  {
    icon: "Flame",
    title: "Крица",
    text: "Традиционный якутский металл, полученный методом прямого восстановления железа. Крица придаёт клинку особую гибкость и стойкость к низким температурам Севера.",
  },
  {
    icon: "Mountain",
    title: "Бивень мамонта",
    text: "Добытый в вечной мерзлоте Якутии, бивень возрастом от 5 000 до 40 000 лет. Уникальная текстура с перламутровым отливом — у каждого изделия неповторимый рисунок.",
  },
  {
    icon: "Leaf",
    title: "Кап берёзы",
    text: "Наросты на якутской берёзе с плотной свилеватой структурой. После многолетней сушки и пропитки превращается в материал прочнее дуба с живым природным узором.",
  },
  {
    icon: "Gem",
    title: "Зуб мамонта",
    text: "Пластины зуба мамонта с характерным шевронным рисунком дентина. Редкий материал, каждый фрагмент которого обрабатывается вручную якутскими мастерами.",
  },
];

const masters = [
  {
    name: "Айал Борисов",
    title: "Главный мастер",
    exp: "32 года опыта",
    bio: "Потомственный кузнец в третьем поколении. Освоил технику ковки крицы у отца, бережно сохраняет древние методы народа Саха. Его ножи хранятся в коллекциях по всему миру.",
  },
  {
    name: "Михаил Попов",
    title: "Мастер резьбы",
    exp: "18 лет опыта",
    bio: "Специализируется на работе с бивнем и зубом мамонта. Каждую рукоять создаёт месяцами, превращая фрагменты вечной мерзлоты в произведения искусства.",
  },
  {
    name: "Степан Николаев",
    title: "Кузнец-оружейник",
    exp: "25 лет опыта",
    bio: "Мастер булатной и дамасской стали. Кует клинки по старинным рецептам, добавляя в каждое лезвие частицу северного духа и вековых традиций якутской металлургии.",
  },
];

const galleryItems = [
  { img: HERO_IMG, label: "Нож на углях · Крица · Бивень мамонта" },
  { img: STONE_IMG, label: "Якутский нож на камне · Кап берёзы" },
  { img: ICE_IMG, label: "Нож на льду · Вечная мерзлота Якутии" },
  { img: GRASS_IMG, label: "Традиционный нож · Кожаная рукоять" },
  { img: WATER_IMG, label: "Коллекционный нож · Зуб мамонта" },
  { img: COLLECTION_IMG, label: "Подарочная упаковка БАТАС" },
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
        <div className="batas-hero__bg" style={{ backgroundImage: `url(${HERO_IMG})` }} />
        <div className="batas-hero__overlay" />
        <div className="batas-hero__glow" />

        <div className="batas-hero__content">
          <p className="batas-eyebrow batas-anim" style={{ animationDelay: "0.3s" }}>
            Якутия · Ручная работа · Народ Саха
          </p>
          <h1 className="batas-hero__title batas-anim" style={{ animationDelay: "0.6s" }}>
            BATAS
          </h1>
          <p className="batas-hero__subtitle batas-anim" style={{ animationDelay: "0.9s" }}>
            Искусство якутского ножа
          </p>
          <p className="batas-hero__desc batas-anim" style={{ animationDelay: "1.2s" }}>
            Ножи ручной работы мастеров Якутии. Традиции народа Саха, воплощённые в каждом клинке.
            Материалы вечной мерзлоты — бивень мамонта, крица, кап берёзы.
          </p>
          <div className="batas-hero__actions batas-anim" style={{ animationDelay: "1.5s" }}>
            <button onClick={() => scrollTo("collections")} className="batas-btn batas-btn--gold">
              Открыть коллекцию
            </button>
            <button onClick={() => scrollTo("about")} className="batas-btn batas-btn--outline">
              О бренде
            </button>
          </div>
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
            <div className="batas-stats">
              <div className="batas-stat">
                <p className="batas-stat__num">3</p>
                <p className="batas-stat__label">мастера</p>
              </div>
              <div className="batas-divider-v" />
              <div className="batas-stat">
                <p className="batas-stat__num">∞</p>
                <p className="batas-stat__label">уникальных изделий</p>
              </div>
              <div className="batas-divider-v" />
              <div className="batas-stat">
                <p className="batas-stat__num">100%</p>
                <p className="batas-stat__label">ручная работа</p>
              </div>
            </div>
          </div>
          <div className="batas-img-wrap">
            <div className="batas-img-glow" />
            <img src={FORGE_IMG} alt="Нож на наковальне" className="batas-img batas-img--hover-color" />
            <div className="batas-img-caption-overlay">
              <div className="batas-img-caption">
                <p className="batas-quote">«Каждый удар молота — это молитва»</p>
                <p className="batas-quote-author">Айал Борисов, главный мастер</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="batas-hr" />

      {/* ─── КОЛЛЕКЦИИ ─── */}
      <section id="collections" className="batas-section">
        <div className="batas-section-head">
          <p className="batas-eyebrow">Коллекции</p>
          <h2 className="batas-h2 batas-h2--center">Линейки <em>BATAS</em></h2>
        </div>

        <div className="batas-cards">
          {collections.map((item, i) => (
            <div key={i} className="batas-card">
              <div className="batas-card__top-line" />
              <p className="batas-card__sub">{item.sub}</p>
              <h3 className="batas-card__name">{item.name}</h3>
              <div className="batas-card__dash" />
              <p className="batas-card__desc">{item.desc}</p>
              <p className="batas-card__detail">{item.detail}</p>
            </div>
          ))}
        </div>

        <div className="batas-gallery-feature">
          <img src={COLLECTION_IMG} alt="Коллекция ножей BATAS" className="batas-feature-img" />
          <div className="batas-feature-line" />
        </div>
      </section>

      {/* ─── МАТЕРИАЛЫ ─── */}
      <section id="materials" className="batas-section batas-section--dark">
        <div className="batas-section-head">
          <p className="batas-eyebrow">Материалы</p>
          <h2 className="batas-h2 batas-h2--center">Дары <em>Севера</em></h2>
          <p className="batas-section-desc">
            Каждый материал мы добываем и обрабатываем в Якутии. Тысячелетняя мерзлота
            сохранила для нас то, что не воссоздать нигде в мире.
          </p>
        </div>

        <div className="batas-mat-grid">
          {materials.map((mat, i) => (
            <div key={i} className="batas-mat-card">
              <div className="batas-mat-icon">
                <Icon name={mat.icon} fallback="Star" size={20} />
              </div>
              <h3 className="batas-mat-title">{mat.title}</h3>
              <p className="batas-mat-text">{mat.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── МАСТЕРА ─── */}
      <section id="masters" className="batas-section">
        <div className="batas-section-head">
          <p className="batas-eyebrow">Мастера</p>
          <h2 className="batas-h2 batas-h2--center">Хранители <em>традиции</em></h2>
        </div>

        <div className="batas-masters">
          {masters.map((master, i) => (
            <div key={i} className="batas-master">
              <div className="batas-master__line">
                <div className="batas-master__diamond" />
              </div>
              <p className="batas-master__exp">{master.exp}</p>
              <h3 className="batas-master__name">{master.name}</h3>
              <p className="batas-master__title">{master.title}</p>
              <p className="batas-master__bio">{master.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── ПРОИЗВОДСТВО ─── */}
      <section className="batas-section batas-section--dark">
        <div className="batas-two-col batas-two-col--reverse">
          <div className="batas-img-wrap">
            <div className="batas-img-glow" />
            <img src={ICE_IMG} alt="Якутский нож на льду" className="batas-img batas-img--tall" />
          </div>
          <div>
            <p className="batas-eyebrow">Производство</p>
            <h2 className="batas-h2">Сделано в<br /><em>Якутии</em></h2>
            <div className="batas-text-block">
              <p>
                Наша мастерская находится в Якутске. Здесь, в краю вечной мерзлоты и белых ночей,
                рождаются ножи BATAS. Производство полностью ручное — от добычи сырья до финальной полировки.
              </p>
              <blockquote className="batas-blockquote">
                Клинок проходит через 47 этапов обработки — ковка, закалка, шлифовка, заточка.
                На каждый нож уходит от 3 до 6 месяцев.
              </blockquote>
              <p>
                Металл куём по старинным рецептам — низкотемпературная ковка даёт клинку
                уникальную геометрию с характерным доломом, позволяющим работать без поверхностного скольжения.
                Это особенность якутского ножа, которой нет больше нигде в мире.
              </p>
            </div>
            <div className="batas-process-stats">
              {[["47", "этапов"], ["3–6", "месяцев"], ["100%", "ручная работа"]].map(([num, lbl], i) => (
                <div key={i} className="batas-process-stat">
                  <p className="batas-stat__num">{num}</p>
                  <p className="batas-stat__label">{lbl}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── ГАЛЕРЕЯ ─── */}
      <section id="gallery" className="batas-section">
        <div className="batas-section-head">
          <p className="batas-eyebrow">Галерея</p>
          <h2 className="batas-h2 batas-h2--center">Изделия <em>BATAS</em></h2>
        </div>

        <div className="batas-gallery">
          {galleryItems.map((item, i) => (
            <div key={i} className="batas-gallery__item">
              <img src={item.img} alt={item.label} className="batas-gallery__img" />
              <div className="batas-gallery__caption">
                <p className="batas-eyebrow" style={{ color: "#c9a96e" }}>{item.label}</p>
              </div>
            </div>
          ))}
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
        .batas-hero__bg {
          position: absolute; inset: 0;
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
        .batas-hero__overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to bottom, rgba(10,10,10,0.65) 0%, rgba(10,10,10,0.35) 50%, rgba(10,10,10,1) 100%);
        }
        .batas-hero__glow {
          position: absolute;
          bottom: 33%;
          left: 50%;
          transform: translateX(-50%);
          width: 600px; height: 200px;
          background: rgba(201,169,110,0.08);
          filter: blur(80px);
          border-radius: 50%;
        }
        .batas-hero__content {
          position: relative;
          z-index: 10;
          text-align: center;
          padding: 0 1.5rem;
          max-width: 56rem;
          margin: 0 auto;
        }
        .batas-hero__title {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(4rem, 12vw, 9rem);
          font-weight: 300;
          color: #f0e8dc;
          letter-spacing: 0.15em;
          line-height: 1;
          margin-bottom: 1rem;
        }
        .batas-hero__subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(1.25rem, 3vw, 1.75rem);
          font-weight: 300;
          font-style: italic;
          color: #c9a96e;
          margin-bottom: 1.5rem;
        }
        .batas-hero__desc {
          color: #9a8878;
          font-size: 0.9rem;
          letter-spacing: 0.02em;
          max-width: 38rem;
          margin: 0 auto 3rem;
          line-height: 1.8;
        }
        .batas-hero__actions {
          display: flex;
          flex-wrap: wrap;
          gap: 1rem;
          justify-content: center;
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

        /* ── FEATURE IMAGE ── */
        .batas-gallery-feature { text-align: center; }
        .batas-feature-img {
          width: 100%;
          max-width: 56rem;
          margin: 0 auto;
          height: clamp(250px, 35vw, 500px);
          object-fit: cover;
          display: block;
        }
        .batas-feature-line {
          height: 1px;
          background: linear-gradient(to right, transparent, rgba(201,169,110,0.2), transparent);
          max-width: 56rem;
          margin: 0 auto;
        }

        /* ── MATERIALS ── */
        .batas-mat-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }
        @media (max-width: 1024px) { .batas-mat-grid { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .batas-mat-grid { grid-template-columns: 1fr; } }
        .batas-mat-card {
          border: 1px solid rgba(42,35,24,0.4);
          padding: 2rem;
          text-align: center;
          transition: border-color 0.5s;
        }
        .batas-mat-card:hover { border-color: rgba(201,169,110,0.2); }
        .batas-mat-icon {
          width: 3rem; height: 3rem;
          border: 1px solid rgba(201,169,110,0.3);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.5rem;
          color: #c9a96e;
          transition: border-color 0.3s;
        }
        .batas-mat-card:hover .batas-mat-icon { border-color: rgba(201,169,110,0.6); }
        .batas-mat-title {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.25rem;
          color: #f0e8dc;
          margin-bottom: 1rem;
        }
        .batas-mat-text {
          color: #9a8878;
          font-size: 0.75rem;
          line-height: 1.8;
        }

        /* ── MASTERS ── */
        .batas-masters {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 3rem;
        }
        @media (max-width: 1024px) { .batas-masters { grid-template-columns: 1fr; } }
        .batas-master { }
        .batas-master__line {
          width: 100%;
          height: 1px;
          background: rgba(201,169,110,0.2);
          position: relative;
          margin-bottom: 2rem;
        }
        .batas-master__diamond {
          position: absolute;
          top: 50%; left: 0;
          transform: translate(-50%, -50%) rotate(45deg);
          width: 12px; height: 12px;
          border: 1px solid rgba(201,169,110,0.4);
          transition: border-color 0.3s;
        }
        .batas-master:hover .batas-master__diamond { border-color: #c9a96e; }
        .batas-master__exp {
          font-size: 9px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: rgba(201,169,110,0.6);
          margin-bottom: 0.5rem;
        }
        .batas-master__name {
          font-family: 'Cormorant Garamond', serif;
          font-size: 1.6rem;
          color: #f0e8dc;
          margin-bottom: 0.25rem;
        }
        .batas-master__title {
          font-size: 10px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #c9a96e;
          margin-bottom: 1.5rem;
        }
        .batas-master__bio {
          color: #9a8878;
          font-size: 0.875rem;
          line-height: 1.8;
        }

        /* ── BLOCKQUOTE ── */
        .batas-blockquote {
          border-left: 2px solid rgba(201,169,110,0.3);
          padding-left: 1.5rem;
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          color: #c9a96e;
          font-size: 1.1rem;
          margin: 0;
        }

        /* ── PROCESS STATS ── */
        .batas-process-stats {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
          margin-top: 2.5rem;
        }
        .batas-process-stat {
          border: 1px solid #2a2318;
          padding: 1rem;
          text-align: center;
        }

        /* ── GALLERY ── */
        .batas-gallery {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1rem;
        }
        @media (max-width: 900px) { .batas-gallery { grid-template-columns: repeat(2, 1fr); } }
        @media (max-width: 600px) { .batas-gallery { grid-template-columns: 1fr; } }
        .batas-gallery__item {
          position: relative;
          overflow: hidden;
          cursor: pointer;
        }
        .batas-gallery__img {
          width: 100%;
          height: clamp(220px, 28vw, 400px);
          object-fit: contain;
          background: #0d0c0b;
          filter: grayscale(1);
          transition: filter 0.7s, transform 0.7s;
          display: block;
          padding: 1rem;
        }
        .batas-gallery__item:hover .batas-gallery__img {
          filter: grayscale(0);
          transform: scale(1.03);
        }
        .batas-gallery__caption {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,10,10,0.8), transparent);
          display: flex;
          align-items: flex-end;
          padding: 1.5rem;
          opacity: 0;
          transition: opacity 0.5s;
        }
        .batas-gallery__item:hover .batas-gallery__caption { opacity: 1; }

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