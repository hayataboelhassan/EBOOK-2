import { motion } from "framer-motion";
import { ShoppingCart, Download, BookOpen, ClipboardCheck, CreditCard } from "lucide-react";
import { pageWrap } from "../utils/layout";

const features = [
  { icon: Download, label: "دليل رقمي فوري" },
  { icon: BookOpen, label: "محتوى عملي عميق" },
  { icon: ClipboardCheck, label: "مصمم للتطبيق" },
  { icon: CreditCard, label: "ادفع مرة واحدة فقط" },
];

function Header() {
 ;
  return (
   <section
  id="hero"
  className="relative overflow-hidden mt-20 md:mt-30 md:mb-20 "
>
  <div
    className={`${pageWrap} flex flex-col items-center gap-8 overflow-hidden md:flex-row md:items-center md:justify-between md:gap-10`}
  >

    {/* النص */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="order-2 w-full text-center md:order-1 md:w-1/2"
    >
      <span className="mb-5 inline-block rounded-full border border-[#C5A059] px-4 py-1 text-sm font-medium text-[#C5A059] cairo">
        الدليل العملي
      </span>

      <h1 className="tajawal mb-3 text-3xl font-extrabold leading-tight text-black md:text-4xl lg:text-5xl">
        افهمي نفسك...
      </h1>

      <h1 className="tajawal mb-4 text-3xl font-extrabold leading-tight text-black md:text-4xl lg:text-4xl">
        بدون ما تضيعين في التحليل!
      </h1>

      <p className="mb-8 font-bold leading-relaxed text-gray-600 cairo md:text-lg">
        دليل عملي يساعدك تفهمين نفسك بعمق، وتتعاملين مع مشاعرك بوعي،
        وتتخذين خطوات تهدئك.
      </p>

      <div className="mb-8 flex flex-col gap-3">
 
<button
  type="button"
  onClick={() =>
    window.open(
      "https://ghfuran-business.systeme.io/356328bd",
      "_blank"
    )
  }
  className="flex w-full items-center justify-center gap-2 rounded-full bg-black px-6 py-3.5 text-base font-bold text-white transition hover:bg-gray-800 cairo"
>
  <ShoppingCart className="h-5 w-5 shrink-0" />
  احصلي على الدليل الآن
</button>
      <button
  type="button"
  onClick={() =>
    document.getElementById("preview")?.scrollIntoView({
      behavior: "smooth",
    })
  }
  className="w-full rounded-full border border-black bg-transparent px-6 py-3.5 text-base font-bold text-black transition hover:bg-gray-50 cairo"
>
  تصفحي محتوى الدليل
</button>
      </div>

      <div className="flex flex-wrap items-center justify-center md:gap-4 gap-8 border-t border-gray-100 pt-6">
        {features.map(({ icon: Icon, label }) => (
          <div
            key={label}
            className="flex items-center md:gap-2 gap-3"
          >
            <Icon
              className="md:h-5 md:w-5 text-[#C5A059]"
              strokeWidth={1.75}
            />

            <span className="md:text-xs text-sm font-semibold text-gray-700 cairo">
              {label}
            </span>
          </div>
        ))}
      </div>
    </motion.div>

    {/* الصورة */}
    <motion.div
      initial={{ opacity: 0, x: -60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="order-1 flex w-full justify-center md:order-2 md:w-[42%]"
    >
      <img
        src="media/Gemini_Generated_Image_9pbwq29pbwq29pbw-removebg-preview.png"
        alt="غلاف الدليل"
        className="w-full max-w-[260px] object-contain sm:max-w-[340px] md:max-w-[420px] lg:max-w-[500px]"
      />
    </motion.div>
  </div>
</section>
  );
}

export default Header;
