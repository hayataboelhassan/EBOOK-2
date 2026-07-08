import { useCallback, useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { label: "الرئيسية", id: "hero" },
  { label: "أهداف الكتاب", id: "objectives" },
  { label: "نبذة عن الكاتبة", id: "writer" },
  { label: "آراء العملاء", id: "testimonials" },
];

const SECTION_IDS = NAV_LINKS.map((link) => link.id);

function Navbar() {
  const navRef = useRef(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero"); // ✅ مهم جدًا

  // حساب ارتفاع الناف
  const getNavOffset = useCallback(() => {
    return (navRef.current?.offsetHeight ?? 0) + 16;
  }, []);

  // Scroll smooth
  const scrollToSection = useCallback(
    (sectionId) => {
      const target = document.getElementById(sectionId);
      if (!target) return;

      const top =
        target.getBoundingClientRect().top +
        window.scrollY -
        getNavOffset();

      window.scrollTo({ top: Math.max(top, 0), behavior: "smooth" });

      setActiveSection(sectionId);
      window.history.replaceState(null, "", `#${sectionId}`);
      setMenuOpen(false);
    },
    [getNavOffset]
  );

  // تحديث section النشط أثناء السكروول
  useEffect(() => {
    const updateActiveSection = () => {
      const offset = getNavOffset() + 100;

      let current = SECTION_IDS[0];

      for (const id of SECTION_IDS) {
        const section = document.getElementById(id);

        if (
          section &&
          section.getBoundingClientRect().top <= offset
        ) {
          current = id;
        }
      }

      setActiveSection(current);
    };

    updateActiveSection();

    window.addEventListener("scroll", updateActiveSection, {
      passive: true,
    });

    window.addEventListener("resize", updateActiveSection);

    return () => {
      window.removeEventListener("scroll", updateActiveSection);
      window.removeEventListener("resize", updateActiveSection);
    };
  }, [getNavOffset]);

  // فتح اللينك من hash
  useEffect(() => {
    const hash = window.location.hash.replace("#", "");
    if (hash && SECTION_IDS.includes(hash)) {
      requestAnimationFrame(() => scrollToSection(hash));
    }
  }, [scrollToSection]);

  // منع scroll لما المينيو مفتوحة
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const linkClass = (id) =>
    `text-sm font-medium transition cairo ${
      activeSection === id
        ? "text-[#C5A059] font-bold"
        : "text-gray-700 hover:text-[#C5A059]"
    }`;

  return (
    <header className="fixed top-0 left-0 z-50 w-full">
      <nav
        ref={navRef}
        className="
          w-full
          px-3 sm:px-4 md:px-6 lg:px-10
          py-3
          bg-white/60
          backdrop-blur-xl
          border-b border-white/30
          shadow-sm
          transition-all duration-300
        "
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">

          {/* Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
            className="tajawal text-lg font-bold text-black md:text-xl"
          >
            افهمي نفسك
          </a>

          {/* Desktop Links */}
          <ul className="hidden items-center gap-6 lg:flex">
            {NAV_LINKS.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.id);
                  }}
                  className={linkClass(link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button
         onClick={() =>
    window.open(
      "https://ghfuran-business.systeme.io/356328bd",
      "_blank"
    )
  }
            className="rounded-full bg-black px-5 py-2 text-sm font-bold text-white hover:bg-gray-800 cairo"
          >
            احصلي على الدليل
          </button>

        </div>
      </nav>
    </header>
  );
}

export default Navbar;