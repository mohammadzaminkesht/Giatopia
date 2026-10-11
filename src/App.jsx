import { useEffect, useState } from "react"
const photos = {
  monstera:
    "https://images.unsplash.com/photo-1774487585515-500a8c527832?auto=format&fit=crop&w=900&q=85",
  leaf: "https://images.unsplash.com/photo-1761742130086-d3a3d604bb26?auto=format&fit=crop&w=900&q=85",
  room: "https://images.unsplash.com/photo-1765371512587-5a01b25abca8?auto=format&fit=crop&w=900&q=85",
  pot: "https://images.unsplash.com/photo-1762755647813-017e128a4ba0?auto=format&fit=crop&w=900&q=85",
}
function Icon({ name, size = 20 }) {
  const paths = {
    home: (
      <>
        <path d="M3 11.5 12 4l9 7.5" />
        <path d="M5 10v10h14V10M9 20v-6h6v6" />
      </>
    ),
    leaf: (
      <>
        <path d="M20 4C10 4 5 9 5 17c6 1 13-3 15-13Z" />
        <path d="M4 21c2-6 7-10 12-13" />
      </>
    ),
    scan: (
      <>
        <path d="M4 8V4h4M16 4h4v4M20 16v4h-4M8 20H4v-4" />
        <path d="M9 12c1.5-3 4.5-3 6 0-1.5 3-4.5 3-6 0Z" />
        <circle cx="12" cy="12" r="1" />
      </>
    ),
    explore: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="m15 9-2 4-4 2 2-4 4-2Z" />
      </>
    ),
    user: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21c1-5 15-5 16 0" />
      </>
    ),
    bell: (
      <>
        <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
      </>
    ),
    arrow: <path d="m9 18 6-6-6-6" />,
    back: <path d="m15 18-6-6 6-6" />,
    check: <path d="m5 12 4 4L19 6" />,
    plus: <path d="M12 5v14M5 12h14" />,
    camera: (
      <>
        <path d="M4 8h3l2-3h6l2 3h3v11H4Z" />
        <circle cx="12" cy="13" r="3.5" />
      </>
    ),
    upload: (
      <>
        <path d="M12 16V4m0 0L8 8m4-4 4 4" />
        <path d="M5 15v5h14v-5" />
      </>
    ),
    droplet: <path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11Z" />,
    sun: (
      <>
        <circle cx="12" cy="12" r="4" />
        <path d="M12 2v2m0 16v2M4.9 4.9l1.4 1.4m11.4 11.4 1.4 1.4M2 12h2m16 0h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
      </>
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    book: (
      <>
        <path d="M4 5c4-1 6 1 8 3v12c-2-2-4-4-8-3ZM20 5c-4-1-6 1-8 3v12c2-2 4-4 8-3Z" />
      </>
    ),
    search: (
      <>
        <circle cx="11" cy="11" r="7" />
        <path d="m20 20-4-4" />
      </>
    ),
    more: (
      <>
        <circle cx="5" cy="12" r="1" />
        <circle cx="12" cy="12" r="1" />
        <circle cx="19" cy="12" r="1" />
      </>
    ),
    spark: (
      <path d="m12 2 1.6 6.4L20 10l-6.4 1.6L12 18l-1.6-6.4L4 10l6.4-1.6L12 2Z" />
    ),
  }
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {paths[name]}
    </svg>
  )
}
function Button({
  children,
  onClick,
  variant = "primary",
  icon,
  className = "",
}) {
  return (
    <button className={`btn btn-${variant} ${className}`} onClick={onClick}>
      {icon && <Icon name={icon} />}
      {children}
    </button>
  )
}
function Title({ children, action }) {
  return (
    <div className="section-title">
      <h2>{children}</h2>
      {action}
    </div>
  )
}
function Header({ title, onBack, right }) {
  return (
    <header className="topbar">
      {onBack ? (
        <button className="icon-btn" onClick={onBack} aria-label="Go back">
          <Icon name="back" />
        </button>
      ) : (
        <div className="brand-mark">
          <Icon name="leaf" size={22} />
        </div>
      )}
      <h1>{title}</h1>
      {right || <div className="topbar-spacer" />}
    </header>
  )
}
function Status({ type = "healthy", children }) {
  return (
    <span className={`status ${type}`}>
      <i />
      {children}
    </span>
  )
}
const plantList = [
  {
    name: "Monstera",
    species: "Monstera deliciosa",
    image: photos.monstera,
    status: "Needs attention",
    task: "Water today",
    type: "attention",
  },
  {
    name: "Snake Plant",
    species: "Dracaena trifasciata",
    image: photos.room,
    status: "Healthy",
    task: "Check in 4 days",
    type: "healthy",
  },
  {
    name: "Golden Pothos",
    species: "Epipremnum aureum",
    image: photos.pot,
    status: "Healthy",
    task: "Mist tomorrow",
    type: "healthy",
  },
]
function SplashScreen({ onComplete }) {
  const [logoVisible, setLogoVisible] = useState(false)
  useEffect(() => {
    const revealTimer = window.setTimeout(() => setLogoVisible(true), 5000)
    const completeTimer = window.setTimeout(onComplete, 10000)
    return () => {
      window.clearTimeout(revealTimer)
      window.clearTimeout(completeTimer)
    }
  }, [onComplete])
  return (
    <main className="fa-splash" dir="rtl">
      <div className={`fa-splash-logo${logoVisible ? " is-visible" : ""}`}>
        <div className="fa-splash-logo-inner">
          <span className="fa-splash-mark">
            <img src="/assets/41168.svg" alt="" />
          </span>
          <strong>گیاتوپیا</strong>
        </div>
      </div>
    </main>
  )
}
function OnboardingOne({ onNext }) {
  return (
    <main className="fa-onboarding-one" dir="rtl">
      <div className="fa-onboarding-one-image">
        <img src="/assets/80ac7.png" alt="نمای نزدیک برگ‌های ساکولنت" />
      </div>
      <div className="fa-onboarding-one-fade" />
      <h1>
        به گیــاتوپیـــا
        <br />
        خوش اومدید.
      </h1>
      <div className="fa-onboarding-progress" aria-label="مرحله یک از دو">
        <span className="active" />
        <button type="button" onClick={onNext} aria-label="رفتن به مرحله دوم" />
      </div>
    </main>
  )
}
function OnboardingTwo({ onStart }) {
  return (
    <main className="fa-onboarding-two" dir="rtl">
      <div className="fa-onboarding-two-fade" />
      <div className="fa-onboarding-two-image">
        <img src="/assets/840da.png" alt="سه گیاه آپارتمانی در گلدان سفید" />
      </div>
      <div className="fa-onboarding-two-copy">
        <h1>از نگهداری گیاهانت لذت ببر!</h1>
        <p>با نکات مراقبتی شخصی سازی شده طراوت گیاهانتان را تضمین میکنیم.</p>
      </div>
      <button className="fa-onboarding-start" type="button" onClick={onStart}>
        شروع کنید
      </button>
      <div className="fa-onboarding-progress" aria-label="مرحله دو از دو">
        <span />
        <span className="active" />
      </div>
    </main>
  )
}
function BottomNav({ screen, go }) {
  const homeActive = screen === "home" || screen === "search"
  return (
    <nav className="fa-bottom-nav" dir="rtl" aria-label="ناوبری اصلی">
      <div className="fa-bottom-nav-panel">
        <button
          className={homeActive ? "active" : ""}
          onClick={() => go("home")}
        >
          <span>
            <img src="/assets/b294c.svg" alt="" />
          </span>
          <small>صفحه اصلی</small>
        </button>
        <button
          className={screen === "plants" ? "active" : ""}
          onClick={() => go("plants")}
        >
          <span>
            <img src="/assets/3a1ac.svg" alt="" />
          </span>
          <small>گل های من</small>
        </button>
        <button
          className="fa-scan-nav"
          onClick={() => go("scan")}
          aria-label="اسکن گیاه"
        >
          <img src="/assets/a8d08.svg" alt="" />
        </button>
        <button
          className={screen === "add" ? "active" : ""}
          onClick={() => go("add")}
        >
          <span>
            <img src="/assets/1ba66.svg" alt="" />
          </span>
          <small>افزودن گیاه</small>
        </button>
        <button
          className={screen === "profile" ? "active" : ""}
          onClick={() => go("profile")}
        >
          <span>
            <img src="/assets/ede52.svg" alt="" />
          </span>
          <small>پشتیبانی</small>
        </button>
      </div>
    </nav>
  )
}
function Home({ go }) {
  const shortcuts = [
    { label: "پیشنهادات ما", icon: "/assets/5470c.svg", target: "explore" },
    { label: "علاقه‌مندی‌ها", icon: "/assets/144be.svg", target: "article" },
    { label: "غرفه‌های ما", icon: "/assets/da6f8.svg", target: "explore" },
    { label: "مقالات", icon: "/assets/d2dcf.svg", target: "article" },
  ]
  const categories = [
    { label: "کاکتوس‌ها", image: "/assets/2b5a6.png" },
    { label: "درختچه‌ها", image: "/assets/d7a7b.png" },
    { label: "گیاهان دارویی", image: "/assets/59d34.png" },
    { label: "مشاهده همه", image: "/assets/c2cf2.png" },
  ]
  const articles = [
    {
      image: "/assets/b2e90.png",
      date: "۱۵ آذر",
      title: "نکات مراقبتی مفید از گیاه کاتلیا",
    },
    {
      image: "/assets/c1098.png",
      date: "۳۰ تیر",
      title: "نکات مهم نگهداری گیاهان آپارتمانی",
    },
    {
      image: "/assets/6c03f.png",
      date: "۰۲ دی",
      title: "روش صحیح آبیاری گیاهان در خانه",
    },
  ]
  return (
    <main className="fa-home" dir="rtl">
      <header className="fa-hero">
        <img className="fa-cloud" src="/assets/29cfc.svg" alt="" />
        <div className="fa-brand-row">
          <button onClick={() => go("profile")} aria-label="پروفایل">
            <img src="/assets/75a46.svg" alt="" />
          </button>
          <div className="fa-brand">
            <img src="/assets/41168.svg" alt="" />
            <strong>گیــــاتوپیــــا</strong>
          </div>
        </div>
        <label className="fa-search">
          <input
            placeholder="جستجوی گیاه مورد نظر شما"
            onFocus={() => go("search")}
            readOnly
          />
          <img src="/assets/8c1bc.svg" alt="" />
        </label>
      </header>

      <section className="fa-schedule">
        <div className="fa-watering">
          <button onClick={() => go("plant")}>
            <span>
              <img src="/assets/7bc3b.svg" alt="" />
              کاتالیا شرقی
            </span>
            <span className="fa-water-time">
              ۲ روز تا آبیاری بعدی
              <i>
                <b />
              </i>
            </span>
          </button>
          <button onClick={() => go("plant")}>
            <span>
              <img src="/assets/7bc3b.svg" alt="" />
              ساکولنت مرجانی
            </span>
            <span className="fa-water-time">
              ۱ روز تا آبیاری بعدی
              <i>
                <b className="long" />
              </i>
            </span>
          </button>
        </div>
        <button className="fa-week" onClick={() => go("reminders")}>
          <span>
            <img src="/assets/c9736.svg" alt="" />
            برنامه این هفته‌تو چک کن!
          </span>
          <img src="/assets/52c97.svg" alt="" />
        </button>
      </section>

      <section className="fa-shortcuts">
        {shortcuts.map((item) => (
          <button key={item.label} onClick={() => go(item.target)}>
            <span>
              <img src={item.icon} alt="" />
            </span>
            <small>{item.label}</small>
          </button>
        ))}
      </section>

      <button className="fa-banner" onClick={() => go("article")}>
        <div>
          <h2>گیاهان آپارتمانی</h2>
          <p>
            معرفی مناسب‌ترین گیاهان
            <br />
            برای نگهداری در آپارتمان
          </p>
        </div>
        <img src="/assets/94b64.png" alt="مجموعه‌ای از گیاهان آپارتمانی" />
      </button>

      <section className="fa-section">
        <div className="fa-section-title">
          <h2>دسته‌بندی‌ها</h2>
          <button onClick={() => go("explore")}>
            مشاهده همه <span>‹</span>
          </button>
        </div>
        <div className="fa-categories">
          {categories.map((item) => (
            <button key={item.label} onClick={() => go("explore")}>
              <img src={item.image} alt={item.label} />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="fa-section fa-articles-section">
        <div className="fa-section-title">
          <h2>جدیدترین مقالات</h2>
          <button onClick={() => go("explore")}>
            مشاهده همه <span>‹</span>
          </button>
        </div>
        <div className="fa-articles">
          {articles.map((item) => (
            <button key={item.title} onClick={() => go("article")}>
              <div className="fa-article-image">
                <img src={item.image} alt="" />
                <span>{item.date}</span>
              </div>
              <h3>{item.title}</h3>
              <p>
                این گیاه با نام‌های مستعار گیاه گورخر و گیاه طاووس نیز شناخته
                می‌شود...
              </p>
              <footer>
                <b>محمد زمین‌کشت</b>
                <span>
                  <img src="/assets/4f44e.svg" alt="" />
                  ۴.۵
                </span>
              </footer>
            </button>
          ))}
        </div>
      </section>
    </main>
  )
}
const searchCategories = [
  { label: "کاکتوس‌ها", image: "/assets/2b5a6.png" },
  { label: "درختچه‌ها", image: "/assets/59d34.png" },
  { label: "گیاهان دارویی", image: "/assets/d7a7b.png" },
  { label: "سبزیجات", image: "/assets/1eec1.png" },
  { label: "گلدارها", image: "/assets/c24b3.png" },
  { label: "ساکولنت‌ها", image: "/assets/9cb37.png" },
  { label: "آپارتمانی‌ها", image: "/assets/f2cf9.png" },
  { label: "پیشنهادات ما", image: "/assets/c2cf2.png" },
]
function SearchPage({ go }) {
  return (
    <main className="fa-search-page" dir="rtl">
      <img className="fa-page-cloud" src="/assets/29cfc.svg" alt="" />
      <header className="fa-search-header">
        <button onClick={() => go("home")} aria-label="بازگشت به صفحه اصلی">
          <img src="/assets/f0a9d.svg" alt="" />
        </button>
        <h1>جستجو</h1>
        <button
          className="fa-header-profile"
          onClick={() => go("profile")}
          aria-label="پروفایل"
        >
          <img src="/assets/75a46.svg" alt="" />
        </button>
      </header>
      <label
        className="fa-search fa-search-input"
        onClick={() => go("searchInput")}
      >
        <input
          placeholder="جستجوی گیاه مورد نظر شما"
          onFocus={() => go("searchInput")}
          readOnly
        />
        <img src="/assets/8c1bc.svg" alt="" />
      </label>
      <section className="fa-search-grid">
        {searchCategories.map((item) => (
          <button
            key={item.label}
            onClick={() => go(item.label === "کاکتوس‌ها" ? "cacti" : "explore")}
          >
            <img src={item.image} alt={item.label} />
            <span>{item.label}</span>
          </button>
        ))}
      </section>
    </main>
  )
}
const recentSearches = ["کالاتیا شرقی", "اپونیتا", "انجیر تیغی"]
const keyboardRows = [
  ["۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹", "۰"],
  ["ض", "ص", "ق", "ف", "غ", "ع", "ه", "خ", "ح", "چ"],
  ["ش", "س", "ی", "ب", "ل", "ا", "ت", "م", "ک", "گ"],
]
function PersianKeyboard({ onInput, onBackspace, onDone }) {
  const keepInputFocused = (event) => event.preventDefault()
  return (
    <div className="fa-keyboard" dir="ltr" onPointerDown={keepInputFocused}>
      <div className="fa-keyboard-inner">
        <img
          className="fa-keyboard-background"
          src="/assets/33787.svg"
          alt=""
        />
        <div className="fa-keyboard-row fa-keyboard-numbers">
          {keyboardRows[0].map((key) => (
            <button
              key={key}
              onClick={() => onInput(key)}
              aria-label={`تایپ ${key}`}
            >
              <img src="/assets/efd34.svg" alt="" />
              <span>{key}</span>
            </button>
          ))}
        </div>
        {keyboardRows.slice(1).map((row, index) => (
          <div className="fa-keyboard-row" key={index}>
            {row.map((key) => (
              <button
                key={key}
                onClick={() => onInput(key)}
                aria-label={`تایپ ${key}`}
              >
                <img src="/assets/88cf1.svg" alt="" />
                <span>{key}</span>
              </button>
            ))}
          </div>
        ))}
        <div className="fa-keyboard-row fa-keyboard-shift-row">
          <button className="fa-keyboard-shift" aria-label="تغییر حالت حروف">
            <img src="/assets/4bcb8.svg" alt="" />
          </button>
          {["ظ", "ط", "ر", "ز", "د", "و", "پ"].map((key) => (
            <button
              key={key}
              onClick={() => onInput(key)}
              aria-label={`تایپ ${key}`}
            >
              <img src="/assets/88cf1.svg" alt="" />
              <span>{key}</span>
            </button>
          ))}
          <button
            className="fa-keyboard-backspace"
            onClick={onBackspace}
            aria-label="حذف حرف"
          >
            <img src="/assets/1cfe6.svg" alt="" />
          </button>
        </div>
        <div className="fa-keyboard-row fa-keyboard-bottom">
          <button className="fa-keyboard-symbols">
            <img src="/assets/ad07b.svg" alt="" />
            <span>?۱۲۳</span>
          </button>
          <button onClick={() => onInput(",")} aria-label="تایپ ویرگول">
            <img src="/assets/d1d3f.svg" alt="" />
            <span className="fa-keyboard-latin">,</span>
          </button>
          <button
            className="fa-keyboard-space"
            onClick={() => onInput(" ")}
            aria-label="فاصله"
          >
            <img src="/assets/2cfc7.svg" alt="" />
            <span className="fa-keyboard-latin">EN • FA</span>
          </button>
          <button onClick={() => onInput(".")} aria-label="تایپ نقطه">
            <img src="/assets/da47c.svg" alt="" />
            <span className="fa-keyboard-latin">.</span>
          </button>
          <button
            className="fa-keyboard-done"
            onClick={onDone}
            aria-label="بستن کیبورد"
          >
            <Icon name="check" size={23} />
          </button>
        </div>
      </div>
    </div>
  )
}
function ActiveSearchPage({ go }) {
  const [query, setQuery] = useState("")
  const [keyboardVisible, setKeyboardVisible] = useState(false)
  return (
    <main className="fa-active-search-page" dir="rtl">
      <img className="fa-page-cloud" src="/assets/29cfc.svg" alt="" />
      <header className="fa-active-search-header">
        <button onClick={() => go("search")} aria-label="بازگشت به دسته‌بندی‌ها">
          <img src="/assets/f0a9d.svg" alt="" />
        </button>
        <h1>جستجو</h1>
        <button
          className="fa-header-profile"
          onClick={() => go("profile")}
          aria-label="پروفایل"
        >
          <img src="/assets/75a46.svg" alt="" />
        </button>
      </header>
      <section className="fa-active-search-panel">
        <label>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onClick={() => setKeyboardVisible(true)}
            onFocus={() => setKeyboardVisible(true)}
            placeholder="جستجو گیاه مورد نظر شما"
            inputMode="none"
            autoFocus
          />
          <img src="/assets/cf369.svg" alt="" />
        </label>
        <div className="fa-recent-searches">
          {recentSearches.map((item) => (
            <button key={item} onClick={() => setQuery(item)}>
              <img src="/assets/328e0.svg" alt="" />
              <span>{item}</span>
              <i>
                <img src="/assets/f70e9.svg" alt="" />
              </i>
            </button>
          ))}
        </div>
      </section>
      <section className="fa-search-hint">
        <img src="/assets/b0a52.svg" alt="" />
        <p>
          نام یا دسته بندی گیاه موردنظر خود
          <br />
          را جستجو کنید.
        </p>
      </section>
      {keyboardVisible && (
        <PersianKeyboard
          onInput={(key) => setQuery((current) => current + key)}
          onBackspace={() =>
            setQuery((current) => Array.from(current).slice(0, -1).join(""))
          }
          onDone={() => setKeyboardVisible(false)}
        />
      )}
    </main>
  )
}
const cactusPlants = [
  {
    name: "آلوئه ورا",
    latinName: "Aloe vera",
    image: "/assets/56121.png",
    care: "نگهداری آسان",
    cloud: true,
    sun: true,
  },
  {
    name: "اپونیتا",
    latinName: "Opunita",
    image: "/assets/f8c5f.png",
    care: "نگهداری آسان",
    cloud: false,
    sun: true,
  },
  {
    name: "اچینو کاکتوس",
    latinName: "Echinocactus",
    image: "/assets/e057f.png",
    care: "متوسط",
    cloud: false,
    sun: true,
  },
  {
    name: "استروفیتوم کاپرکورن",
    latinName: "Astrofitum Capricorne",
    image: "/assets/4507d.png",
    care: "نگهداری آسان",
    cloud: true,
    sun: false,
  },
  {
    name: "انجیر تیغی",
    latinName: "Prickly Pear",
    image: "/assets/2e423.png",
    care: "نگهداری آسان",
    cloud: true,
    sun: true,
  },
  {
    name: "کالاتیا شرقی",
    latinName: "Calathea",
    image: "/assets/43e63.png",
    care: "نگهداری آسان",
    cloud: true,
    sun: true,
  },
]
function CactusCard({ plant, onClick }) {
  return (
    <button className="fa-cactus-card" onClick={onClick}>
      <img className="fa-cactus-photo" src={plant.image} alt={plant.name} />
      <span className="fa-cactus-info">
        <span className="fa-cactus-name">
          <strong>{plant.name}</strong>
          <small dir="ltr">{plant.latinName}</small>
        </span>
        <span className="fa-cactus-tags">
          <span>{plant.care}</span>
          {plant.sun && (
            <i>
              <img src="/assets/7842f.svg" alt="نیاز نوری زیاد" />
            </i>
          )}
          {plant.cloud && (
            <i>
              <img src="/assets/bf87f.svg" alt="نور غیر مستقیم" />
            </i>
          )}
        </span>
      </span>
    </button>
  )
}
function CactusPage({ go }) {
  return (
    <main className="fa-cactus-page" dir="rtl">
      <img className="fa-page-cloud" src="/assets/29cfc.svg" alt="" />
      <header className="fa-cactus-header">
        <button onClick={() => go("search")} aria-label="بازگشت به جستجو">
          <img src="/assets/f0a9d.svg" alt="" />
        </button>
        <h1>کاکتوس ها</h1>
        <button
          className="fa-header-profile"
          onClick={() => go("profile")}
          aria-label="پروفایل"
        >
          <img src="/assets/75a46.svg" alt="" />
        </button>
      </header>
      <label className="fa-cactus-search" onClick={() => go("cactusSearch")}>
        <input
          placeholder="جستجو در کاکتوس ها"
          onFocus={() => go("cactusSearch")}
          readOnly
        />
        <img src="/assets/8c1bc.svg" alt="" />
      </label>
      <section className="fa-cactus-list">
        {cactusPlants.map((plant) => (
          <CactusCard plant={plant} key={plant.name} />
        ))}
      </section>
    </main>
  )
}
function CactusSearchPage({ go }) {
  const [query, setQuery] = useState("")
  const [keyboardVisible, setKeyboardVisible] = useState(false)
  const normalizedQuery = query.trim().toLocaleLowerCase("fa")
  const results = normalizedQuery
    ? cactusPlants.filter((plant) =>
        `${plant.name} ${plant.latinName}`
          .toLocaleLowerCase("fa")
          .includes(normalizedQuery),
      )
    : cactusPlants
  const suggestions = ["اپونیتا", "انجیر تیغی", "آلوئه ورا"]
  return (
    <main className="fa-cactus-search-page" dir="rtl">
      <img className="fa-page-cloud" src="/assets/29cfc.svg" alt="" />
      <header className="fa-cactus-search-header">
        <button
          onClick={() => go("cacti")}
          aria-label="بازگشت به فهرست کاکتوس‌ها"
        >
          <img src="/assets/f0a9d.svg" alt="" />
        </button>
        <h1>کاکتوس‌ها</h1>
        <button
          className="fa-header-profile"
          onClick={() => go("profile")}
          aria-label="پروفایل"
        >
          <img src="/assets/75a46.svg" alt="" />
        </button>
      </header>

      <section className={`fa-cactus-search-box${!query ? " is-open" : ""}`}>
        <label>
          <input
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            onClick={() => setKeyboardVisible(true)}
            onFocus={() => setKeyboardVisible(true)}
            placeholder="جستجو در کاکتوس‌ها"
            inputMode="none"
          />
          {query ? (
            <button onClick={() => setQuery("")} aria-label="پاک کردن جستجو">
              <img src="/assets/f70e9.svg" alt="" />
            </button>
          ) : (
            <img src="/assets/cf369.svg" alt="" />
          )}
        </label>
        {!query && (
          <div className="fa-cactus-suggestions">
            {suggestions.map((item) => (
              <button key={item} onClick={() => setQuery(item)}>
                <img src="/assets/328e0.svg" alt="" />
                <span>{item}</span>
                <i>
                  <img src="/assets/f70e9.svg" alt="" />
                </i>
              </button>
            ))}
          </div>
        )}
      </section>

      <div className="fa-cactus-results-head">
        <strong>{query ? `نتایج برای «${query}»` : "همه کاکتوس‌ها"}</strong>
        <span>{results.length.toLocaleString("fa-IR")} گیاه</span>
      </div>

      {results.length > 0 ? (
        <section className="fa-cactus-list fa-cactus-search-results">
          {results.map((plant) => (
            <CactusCard plant={plant} key={plant.name} />
          ))}
        </section>
      ) : (
        <section className="fa-cactus-empty">
          <img src="/assets/b0a52.svg" alt="" />
          <h2>گیاهی پیدا نشد</h2>
          <p>نام گیاه را بررسی کنید یا عبارت دیگری بنویسید.</p>
          <button onClick={() => setQuery("")}>نمایش همه کاکتوس‌ها</button>
        </section>
      )}
      {keyboardVisible && (
        <PersianKeyboard
          onInput={(key) => setQuery((current) => current + key)}
          onBackspace={() =>
            setQuery((current) => Array.from(current).slice(0, -1).join(""))
          }
          onDone={() => setKeyboardVisible(false)}
        />
      )}
    </main>
  )
}
function Plants({ go }) {
  return (
    <main>
      <Header
        title="My Plants"
        right={
          <button
            className="icon-btn"
            onClick={() => go("add")}
            aria-label="Add plant"
          >
            <Icon name="plus" />
          </button>
        }
      />
      <div className="count-row">
        <div>
          <strong>11</strong>
          <span>plants in your care</span>
        </div>
        <Button onClick={() => go("add")} icon="plus">
          Add plant
        </Button>
      </div>
      <div className="search-row">
        <div className="search-box">
          <Icon name="search" />
          <input aria-label="Search plants" placeholder="Search your plants" />
        </div>
        <button className="filter-btn">All plants</button>
      </div>
      <div className="plant-list">
        {plantList.map((p) => (
          <button
            className="plant-card"
            key={p.name}
            onClick={() => go("plant")}
          >
            <img src={p.image} alt={p.name} />
            <div className="plant-info">
              <h3>{p.name}</h3>
              <p>{p.species}</p>
              <Status type={p.type}>{p.status}</Status>
              <div className="next-task">
                <Icon name="clock" size={15} />
                {p.task}
              </div>
            </div>
            <Icon name="arrow" size={18} />
          </button>
        ))}
      </div>
    </main>
  )
}
function AddPlant({ go }) {
  const [identified, setIdentified] = useState(false)
  return (
    <main>
      <Header title="Add a plant" onBack={() => go("plants")} />
      {!identified ? (
        <>
          <div className="step">
            <span>1 of 2</span>
            <i>
              <b />
            </i>
          </div>
          <div className="intro">
            <span className="big-icon">
              <Icon name="leaf" size={32} />
            </span>
            <h2>Let’s meet your plant</h2>
            <p>
              Take a clear photo and Planty can identify it for you, or add the
              details yourself.
            </p>
          </div>
          <button className="photo-drop" onClick={() => setIdentified(true)}>
            <span>
              <Icon name="camera" size={28} />
            </span>
            <h3>Take a photo</h3>
            <p>Center the whole plant in good light</p>
          </button>
          <Button
            variant="soft"
            className="full"
            onClick={() => setIdentified(true)}
            icon="upload"
          >
            Choose from library
          </Button>
          <button className="manual-link">Enter plant name manually</button>
        </>
      ) : (
        <>
          <div className="step">
            <span>2 of 2</span>
            <i>
              <b className="complete" />
            </i>
          </div>
          <div className="identified-photo">
            <img src={photos.monstera} alt="Identified Monstera Deliciosa" />
            <span>
              <Icon name="spark" />
              AI identified
            </span>
          </div>
          <div className="identified-copy">
            <span className="confidence">94% confidence</span>
            <h2>Monstera deliciosa</h2>
            <p>Also known as the Swiss cheese plant</p>
          </div>
          <div className="suggestion">
            <Icon name="spark" />
            <div>
              <b>Details suggested by AI</b>
              <p>Bright indirect light · Moderate watering · Indoor</p>
            </div>
          </div>
          <label className="field">
            <span>
              Plant nickname <em>Optional</em>
            </span>
            <input defaultValue="My Monstera" />
          </label>
          <p className="helper">
            You can complete location, soil, humidity, and care details later.
          </p>
          <Button className="full" onClick={() => go("plant")} icon="check">
            Confirm and add plant
          </Button>
          <button className="manual-link">This isn’t my plant</button>
        </>
      )}
    </main>
  )
}
function PlantDetail({ go }) {
  return (
    <main className="flush">
      <div className="hero-photo">
        <img src={photos.monstera} alt="Monstera Deliciosa in a bright room" />
        <div className="photo-top">
          <button className="glass-btn" onClick={() => go("plants")}>
            <Icon name="back" />
          </button>
          <button className="glass-btn">
            <Icon name="more" />
          </button>
        </div>
        <div className="hero-copy">
          <Status type="attention">Needs attention</Status>
          <h1>Monstera</h1>
          <p>Monstera deliciosa</p>
        </div>
      </div>
      <div className="detail-body">
        <div className="score-card">
          <div className="score-ring">
            <strong>74</strong>
            <small>estimate</small>
          </div>
          <div>
            <span className="eyebrow">OVERALL HEALTH</span>
            <h3>Doing okay, with room to improve</h3>
            <p>Last AI check 7 days ago</p>
          </div>
        </div>
        <Button
          className="full scan-button"
          onClick={() => go("scan")}
          icon="scan"
        >
          Scan with AI
        </Button>
        <Title>Care today</Title>
        <div className="care-grid">
          <div>
            <Icon name="droplet" />
            <b>Water</b>
            <span>Due today</span>
          </div>
          <div>
            <Icon name="sun" />
            <b>Light</b>
            <span>Bright, indirect</span>
          </div>
          <div>
            <b className="temp">23°</b>
            <b>Temperature</b>
            <span>Comfortable</span>
          </div>
          <div>
            <b className="humidity">48%</b>
            <b>Humidity</b>
            <span>A little low</span>
          </div>
        </div>
        <Title
          action={
            <button className="text-button" onClick={() => go("reminders")}>
              Manage
            </button>
          }
        >
          Next reminder
        </Title>
        <button className="reminder-card" onClick={() => go("reminders")}>
          <span className="task-icon">
            <Icon name="droplet" />
          </span>
          <div>
            <b>Water Monstera</b>
            <p>Today at 6:00 PM</p>
          </div>
          <Icon name="arrow" />
        </button>
        <Title
          action={
            <button className="text-button" onClick={() => go("progress")}>
              View progress
            </button>
          }
        >
          Health timeline
        </Title>
        <div className="timeline">
          <div>
            <i />
            <span>
              <b>Today</b>
              <p>Watering due</p>
            </span>
          </div>
          <div>
            <i />
            <span>
              <b>May 13</b>
              <p>Possible dehydration detected</p>
            </span>
          </div>
          <div>
            <i />
            <span>
              <b>May 8</b>
              <p>Moved to brighter light</p>
            </span>
          </div>
        </div>
      </div>
    </main>
  )
}
const scanDotAssets = {
  ready: [
    "f5544.svg",
    "f6163.svg",
    "f6163.svg",
    "09c6c.svg",
    "09c6c.svg",
    "09c6c.svg",
    "09c6c.svg",
    "09c6c.svg",
    "09c6c.svg",
    "ee3af.svg",
  ],
  scanning: [
    "c6375.svg",
    "af135.svg",
    "af135.svg",
    "e163e.svg",
    "e163e.svg",
    "e163e.svg",
    "e163e.svg",
    "e163e.svg",
    "e163e.svg",
    "4a8ee.svg",
  ],
}
const scanButtonFrames = [
  "5f19c.svg",
  "84919.svg",
  "8795b.svg",
  "8f759.svg",
  "b7228.svg",
  "fddc5.svg",
  "fb1de.svg",
  "791df.svg",
  "c01a9.svg",
  "e4bd7.svg",
]
function ScanDots({ variant }) {
  return (
    <div className="fa-scan-dots" aria-hidden="true">
      {scanDotAssets[variant].map((asset, index) => (
        <span className={`dot-${index + 1}`} key={`${asset}-${index}`}>
          <img src={`/assets/${asset}`} alt="" />
        </span>
      ))}
    </div>
  )
}
function Scan({ go }) {
  const [readyToScan, setReadyToScan] = useState(false)
  const [capturing, setCapturing] = useState(false)
  const [scanning, setScanning] = useState(false)
  const [scanButtonFrame, setScanButtonFrame] = useState(0)
  useEffect(() => {
    const timer = window.setTimeout(() => setReadyToScan(true), 3000)
    return () => window.clearTimeout(timer)
  }, [])
  useEffect(() => {
    if (!capturing) return
    const timer = window.setTimeout(() => {
      setScanning(true)
      setCapturing(false)
    }, 350)
    return () => window.clearTimeout(timer)
  }, [capturing])
  useEffect(() => {
    if (!scanning || scanButtonFrame >= scanButtonFrames.length - 1) return
    const timer = window.setTimeout(
      () => setScanButtonFrame((frame) => frame + 1),
      1000,
    )
    return () => window.clearTimeout(timer)
  }, [scanning, scanButtonFrame])
  return (
    <main className="fa-scan-camera">
      <img
        className="fa-scan-camera-image"
        src={scanning ? "/assets/fed8e.png" : "/assets/7862e.png"}
        alt="نمای دوربین از برگ گیاه"
      />
      <button
        className={`fa-scan-camera-back${scanning ? " is-scanning" : ""}`}
        onClick={() => go("home")}
        aria-label="بازگشت به صفحه اصلی"
      >
        <img src="/assets/dd47c.svg" alt="" />
      </button>
      {readyToScan && !scanning && (
        <>
          <ScanDots variant="ready" />
          <p className="fa-scan-prompt">برای اسکن کلیک کنید</p>
          <img className="fa-scan-arrow" src="/assets/b3656.svg" alt="" />
          <button
            className="fa-scan-action"
            onClick={() => setCapturing(true)}
            disabled={capturing}
            aria-label="شروع اسکن"
          >
            <img src="/assets/90f3d.svg" alt="" />
          </button>
        </>
      )}
      {scanning && (
        <>
          <div className="fa-scanning-shadow" />
          <p className="fa-scanning-label">درحال اسکن...</p>
          <ScanDots variant="scanning" />
          <div className="fa-scanning-action" aria-hidden="true">
            <img src={`/assets/${scanButtonFrames[scanButtonFrame]}`} alt="" />
          </div>
        </>
      )}
      {capturing && <div className="fa-camera-flash" aria-hidden="true" />}
    </main>
  )
}
function Processing({ go }) {
  useEffect(() => {
    const timer = setTimeout(() => go("result"), 2200)
    return () => clearTimeout(timer)
  }, [go])
  return (
    <main className="processing">
      <div className="analysis-orb">
        <img src={photos.leaf} alt="" />
        <i />
        <span>
          <Icon name="spark" />
        </span>
      </div>
      <h1>Analyzing your plant…</h1>
      <p>Identifying the species and checking visible symptoms.</p>
      <div className="analysis-steps">
        <span className="complete">
          <Icon name="check" />
          Photo quality checked
        </span>
        <span className="active">
          <i />
          Comparing visible symptoms
        </span>
        <span>
          <i />
          Preparing helpful next steps
        </span>
      </div>
      <small>Usually takes less than 10 seconds</small>
    </main>
  )
}
const issues = [
  { name: "Dehydration", value: 82, color: "orange" },
  { name: "Insufficient light", value: 61, color: "gold" },
  { name: "Low humidity", value: 38, color: "sage" },
  { name: "Pest damage", value: 12, color: "pale" },
]
function Result({ go }) {
  return (
    <main>
      <Header
        title="AI health check"
        onBack={() => go("plant")}
        right={
          <button className="icon-btn">
            <Icon name="more" />
          </button>
        }
      />
      <div className="result-plant">
        <img src={photos.leaf} alt="Scanned Monstera leaf" />
        <div>
          <span className="confidence">94% match</span>
          <h2>Monstera deliciosa</h2>
          <p>Based on your photo</p>
        </div>
      </div>
      <div className="result-summary">
        <Icon name="spark" />
        <div>
          <h3>Your plant may need a little help</h3>
          <p>
            We found signs that could point to several issues. These are
            estimates, not certain diagnoses.
          </p>
        </div>
      </div>
      <Title>Possible issues</Title>
      <p className="caption">Estimated likelihood based on visible symptoms</p>
      <div className="issues">
        {issues.map((issue) => (
          <button key={issue.name} onClick={() => go("problem")}>
            <div>
              <h3>{issue.name}</h3>
              <span>{issue.value}%</span>
            </div>
            <div className="probability">
              <i className={issue.color} style={{ width: `${issue.value}%` }} />
            </div>
            <small>
              {issue.value > 70
                ? "High likelihood"
                : issue.value > 40
                  ? "Worth checking"
                  : "Less likely"}{" "}
              <Icon name="arrow" size={14} />
            </small>
          </button>
        ))}
      </div>
      <div className="notice">
        AI can make mistakes. If symptoms worsen, consult a local plant
        specialist.
      </div>
      <Button className="full" onClick={() => go("problem")}>
        See recommended actions
      </Button>
    </main>
  )
}
function Problem({ go }) {
  return (
    <main>
      <Header title="Possible dehydration" onBack={() => go("result")} />
      <div className="likelihood">
        <div>
          <span>82%</span>
          <small>estimated likelihood</small>
        </div>
        <Status type="attention">Possible issue</Status>
      </div>
      <section className="why-card">
        <span className="eyebrow">WHY WE THINK THIS</span>
        <h2>Visible signs in your photo</h2>
        <div className="symptoms">
          <span>Drooping leaves</span>
          <span>Dry leaf edges</span>
          <span>Dry-looking soil</span>
        </div>
        <p>
          These signs often appear when a Monstera needs water, but can have
          other causes too.
        </p>
      </section>
      <Title>What to do</Title>
      <div className="action-list">
        <div>
          <span>1</span>
          <div>
            <h3>Check the soil, then water</h3>
            <p>
              Push a finger 2–3 cm into the soil. If it feels dry, water slowly
              until excess drains from the pot.
            </p>
            <Button variant="soft" onClick={() => go("reminders")} icon="bell">
              Set watering reminder
            </Button>
          </div>
        </div>
        <div>
          <span>2</span>
          <div>
            <h3>Improve light conditions</h3>
            <p>Move it to a bright location with indirect sunlight.</p>
            <Button variant="text" onClick={() => go("article")} icon="book">
              Show me how
            </Button>
          </div>
        </div>
        <div>
          <span>3</span>
          <div>
            <h3>Monitor temperature</h3>
            <p>Keep the room between 18–27°C and away from cold drafts.</p>
            <Button variant="text">Find a thermometer</Button>
          </div>
        </div>
      </div>
      <section className="product-peek">
        <img src={photos.room} alt="Indoor plant care setup" />
        <div>
          <span className="eyebrow">HELPFUL TOOL</span>
          <h3>Digital soil moisture meter</h3>
          <p>From $14 · 4 stores</p>
          <Button variant="white">Compare stores</Button>
        </div>
      </section>
    </main>
  )
}
function Reminders({ go }) {
  const [saved, setSaved] = useState(false)
  return (
    <main>
      <Header title="Smart reminder" onBack={() => go("problem")} />
      <div className="reminder-hero">
        <span>
          <Icon name="spark" />
        </span>
        <h2>Check Monstera again in 5 days</h2>
        <p>A follow-up photo can show whether watering helped.</p>
      </div>
      <div className="form-card">
        <label>
          <span>Reminder</span>
          <div>Plant health check</div>
        </label>
        <label>
          <span>Date</span>
          <div>Sunday, May 25</div>
        </label>
        <label>
          <span>Time</span>
          <div>9:00 AM</div>
        </label>
        <label>
          <span>Repeat</span>
          <div>
            Once <Icon name="arrow" size={16} />
          </div>
        </label>
        <label>
          <span>Notifications</span>
          <div>
            <i className="toggle on" />
          </div>
        </label>
      </div>
      <div className="adaptive-note">
        <Icon name="spark" />
        <p>
          <b>Smart adjustments stay in your control.</b> We’ll always ask before
          changing this schedule.
        </p>
      </div>
      <Button className="full" onClick={() => setSaved(true)} icon="bell">
        {saved ? "Reminder saved" : "Set reminder"}
      </Button>
      {saved && (
        <div className="snackbar">
          <Icon name="check" />
          Reminder set for May 25
          <button onClick={() => go("progress")}>View</button>
        </div>
      )}
    </main>
  )
}
function Progress({ go }) {
  return (
    <main>
      <Header title="Health progress" onBack={() => go("plant")} />
      <div className="trend-card">
        <span className="eyebrow">ESTIMATED HEALTH TREND</span>
        <div className="trend-head">
          <div>
            <strong>89</strong>
            <span>Improving</span>
          </div>
          <small>Last 30 days</small>
        </div>
        <svg className="chart" viewBox="0 0 330 120" preserveAspectRatio="none">
          <defs>
            <linearGradient id="area" x1="0" x2="0" y1="0" y2="1">
              <stop offset="0" stopColor="#2e7d32" stopOpacity=".2" />
              <stop offset="1" stopColor="#2e7d32" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M5 83 C50 70 58 98 100 86 S160 58 190 68 S250 37 325 24 L325 120 L5 120Z"
            fill="url(#area)"
          />
          <path
            d="M5 83 C50 70 58 98 100 86 S160 58 190 68 S250 37 325 24"
            fill="none"
            stroke="#2e7d32"
            strokeWidth="4"
            strokeLinecap="round"
          />
          <circle
            cx="325"
            cy="24"
            r="6"
            fill="#fff"
            stroke="#2e7d32"
            strokeWidth="4"
          />
        </svg>
        <div className="trend-values">
          <span>72</span>
          <span>68</span>
          <span>74</span>
          <span>81</span>
          <span>89</span>
        </div>
        <p>
          This is an app-generated estimate based on scans and completed
          care—not a scientific measurement.
        </p>
      </div>
      <Title>Photo history</Title>
      <div className="photo-history">
        {[photos.pot, photos.leaf, photos.monstera].map((p, i) => (
          <div key={p}>
            <img src={p} alt={`Plant progress ${i + 1}`} />
            <span>{["Apr 20", "May 4", "Today"][i]}</span>
          </div>
        ))}
      </div>
      <Title>What helped</Title>
      <div className="timeline large">
        <div>
          <i />
          <span>
            <b>Health appears to be improving</b>
            <p>Today · AI follow-up</p>
          </span>
        </div>
        <div>
          <i />
          <span>
            <b>Moved to brighter, indirect light</b>
            <p>May 14 · Action completed</p>
          </span>
        </div>
        <div>
          <i />
          <span>
            <b>Possible dehydration detected</b>
            <p>May 13 · AI scan</p>
          </span>
        </div>
      </div>
    </main>
  )
}
function Explore({ go }) {
  return (
    <main>
      <Header title="Explore" />
      <div className="search-box explore-search">
        <Icon name="search" />
        <input placeholder="Search care guides and products" />
      </div>
      <div className="chips">
        <button className="selected">For you</button>
        <button>Articles</button>
        <button>Guides</button>
        <button>Products</button>
      </div>
      <section className="feature-article">
        <img src={photos.room} alt="Houseplants in a bright modern room" />
        <div>
          <span className="eyebrow">RECOMMENDED FOR YOU</span>
          <h2>Find the perfect light for every room</h2>
          <p>A beginner-friendly guide · 6 min</p>
          <Button variant="white" onClick={() => go("article")}>
            Read guide
          </Button>
        </div>
      </section>
      <Title>Based on your recent check</Title>
      <div className="horizontal-cards">
        <button onClick={() => go("article")}>
          <img src={photos.leaf} alt="Monstera leaf" />
          <span>MONSTERA</span>
          <h3>How to revive a thirsty plant</h3>
          <p>5 min read</p>
        </button>
        <button>
          <img src={photos.pot} alt="Monstera in a pot" />
          <span>WATERING</span>
          <h3>Know when soil is truly dry</h3>
          <p>4 min read</p>
        </button>
      </div>
      <Title>Helpful products</Title>
      <div className="product-row">
        <img src={photos.pot} alt="Plant care tools" />
        <div>
          <h3>Moisture meters</h3>
          <p>Compare 12 products from trusted stores</p>
        </div>
        <Icon name="arrow" />
      </div>
    </main>
  )
}
function Article({ go }) {
  return (
    <main className="flush article">
      <div className="article-hero">
        <img src={photos.room} alt="Indoor plant in bright indirect sunlight" />
        <button className="glass-btn" onClick={() => go("explore")}>
          <Icon name="back" />
        </button>
      </div>
      <article>
        <span className="eyebrow">LIGHT · 6 MIN READ</span>
        <h1>Find the perfect light for your plants</h1>
        <p className="lead">
          You don’t need special equipment. Learning to read the light in your
          home is a great place to start.
        </p>
        <div className="author">
          <span>PP</span>
          <div>
            <b>Planty plant team</b>
            <p>Reviewed May 2025</p>
          </div>
          <Button variant="soft">Save</Button>
        </div>
        <h2>What “bright indirect” really means</h2>
        <p>
          Think of a space that feels bright throughout the day, but where the
          sun’s rays do not sit directly on the leaves. A few feet from an
          east-facing window is often a good start.
        </p>
        <div className="article-tip">
          <Icon name="sun" />
          <p>
            <b>Quick test</b>
            <br />
            Hold your hand above the plant at noon. A soft, blurry shadow
            usually means indirect light.
          </p>
        </div>
        <h2>Move gradually</h2>
        <p>
          Plants adapt to their environment. Move your Monstera closer to the
          window over several days, and watch for pale or crisp patches.
        </p>
        <Button className="full" onClick={() => go("problem")}>
          Back to your care plan
        </Button>
      </article>
    </main>
  )
}
function Profile() {
  return (
    <main>
      <Header title="Profile" />
      <div className="profile-head">
        <div className="avatar large">A</div>
        <div>
          <h2>Alex Morgan</h2>
          <p>Plant parent since 2024</p>
        </div>
        <button className="text-button">Edit</button>
      </div>
      <div className="profile-stats">
        <div>
          <strong>11</strong>
          <span>Plants</span>
        </div>
        <div>
          <strong>6</strong>
          <span>Reminders</span>
        </div>
        <div>
          <strong>14</strong>
          <span>AI scans</span>
        </div>
      </div>
      <section className="premium">
        <Icon name="spark" />
        <div>
          <span className="eyebrow">PLANTY PLUS</span>
          <h3>Grow with deeper insights</h3>
          <p>More scans, extended history, and adaptive care plans.</p>
        </div>
        <button>Explore</button>
      </section>
      <div className="settings">
        {[
          "Saved articles",
          "AI scan history",
          "Notifications",
          "App settings",
          "Help & support",
        ].map((x) => (
          <button key={x}>
            <span>{x}</span>
            <Icon name="arrow" size={18} />
          </button>
        ))}
      </div>
    </main>
  )
}
export default function App() {
  const [screen, setScreen] = useState("splash")
  const go = (next) => {
    setScreen(next)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  const content = {
    splash: <SplashScreen onComplete={() => go("onboarding1")} />,
    onboarding1: <OnboardingOne onNext={() => go("onboarding2")} />,
    onboarding2: <OnboardingTwo onStart={() => go("home")} />,
    home: <Home go={go} />,
    search: <SearchPage go={go} />,
    searchInput: <ActiveSearchPage go={go} />,
    cacti: <CactusPage go={go} />,
    cactusSearch: <CactusSearchPage go={go} />,
    plants: <Plants go={go} />,
    add: <AddPlant go={go} />,
    plant: <PlantDetail go={go} />,
    scan: <Scan go={go} />,
    processing: <Processing go={go} />,
    result: <Result go={go} />,
    problem: <Problem go={go} />,
    reminders: <Reminders go={go} />,
    progress: <Progress go={go} />,
    explore: <Explore go={go} />,
    article: <Article go={go} />,
    profile: <Profile />,
  }
  const navScreens = ["home", "search", "plants", "explore", "profile"]
  return (
    <div className="app-shell">
      <div className="phone">
        {content[screen]}
        {navScreens.includes(screen) && <BottomNav screen={screen} go={go} />}
      </div>
    </div>
  )
}
