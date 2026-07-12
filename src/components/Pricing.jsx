import { useEffect, useState } from "react";
import { Check, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { pageWrap } from "../utils/layout";

const benefits = [
  "دليل PDF كامل جاهز للتطبيق",
  "تمارين عملية من واقع الجلسات",
  "وصول فوري ومدى الحياة للنسخة",
];

function Pricing() {

  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
useEffect(() => {
  // بداية العرض
 const offerStart = new Date("2026-07-12T03:40:00").getTime();

  // نهاية العرض = بداية العرض + 7 أيام
  const offerEnd = offerStart + 7 * 24 * 60 * 60 * 1000;

  const interval = setInterval(() => {
    const now = Date.now();

    // قبل بداية العرض
    if (now < offerStart) {
      setTimeLeft({
        days: 7,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });
      return;
    }

    // بعد انتهاء العرض
    if (now >= offerEnd) {
      clearInterval(interval);

      setTimeLeft({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
      });

      return;
    }

    // أثناء العرض
    const difference = offerEnd - now;

    setTimeLeft({
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) /
          (1000 * 60 * 60)
      ),
      minutes: Math.floor(
        (difference % (1000 * 60 * 60)) /
          (1000 * 60)
      ),
      seconds: Math.floor(
        (difference % (1000 * 60)) /
          1000
      ),
    });
  }, 1000);

  return () => clearInterval(interval);
}, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <section id="pricing" className="w-full min-w-0 overflow-x-hidden py-8 md:py-10 ">
        <div className={pageWrap}>
          <div className="min-w-0 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="grid grid-cols-1 divide-y divide-gray-100 md:grid-cols-[1fr_1.5fr_1fr] md:divide-x md:divide-y-0">
              {/* Countdown — right in RTL */}
              <div className="flex flex-col items-center justify-center p-4 text-center sm:p-6 md:p-8">
                <div className="mb-2 w-full max-w-xs rounded-4xl border border-[#C5A059] bg-[#C5A059] px-4 py-2 text-sm font-bold text-white sm:px-8 sm:text-sm cairo">
                  عرض لفترة محدودة
                </div>
                <div className="w-full max-w-sm rounded-2xl bg-gray-100  py-3 shadow-md sm:px-6 sm:py-8 md:px-10 md:py-10">
                <p className="mb-2 text-base cairo sm:text-lg">ينتهي خلال:</p>
          <span className="tajawal text-4xl font-extrabold text-black sm:text-5xl md:text-6xl">
  {String(timeLeft.days).padStart(2, "0")}
</span>

<p className="mt-1 text-sm font-bold text-gray-700 cairo sm:text-base">
  أيام فقط
</p>
                <div className="mt-4 flex flex-wrap items-center justify-center gap-3 text-center sm:mt-5 sm:gap-4">
  <div>
    <span className="tajawal text-xl font-extrabold text-black">
      {String(timeLeft.hours).padStart(2, "0")}
    </span>
    <p className="mt-1 text-sm font-bold text-gray-700 cairo">ساعة</p>
  </div>

  <div>
    <span className="tajawal text-xl font-extrabold text-black">
      {String(timeLeft.minutes).padStart(2, "0")}
    </span>
    <p className="mt-1 text-sm font-bold text-gray-700 cairo">دقيقة</p>
  </div>

  <div>
    <span className="tajawal text-xl font-extrabold text-black">
      {String(timeLeft.seconds).padStart(2, "0")}
    </span>
    <p className="mt-1 text-sm font-bold text-gray-700 cairo">ثانية</p>
  </div>

</div>
                </div>
              </div>

              {/* Benefits — center */}
              <div className="flex flex-col justify-center p-4 sm:p-6 md:p-8">
                    <h2 className="tajawal mb-4 border-b border-gray-100 pb-4 text-center text-lg font-bold text-black sm:mb-5 sm:text-xl md:text-2xl">
              هذا العرض لن يتكرر!
            </h2>
                <ul className="space-y-4">
                  {benefits.map((item) => (
                    <li
                      key={item}
                      className="flex items-center md:justify-start justify-center  gap-3 text-gray-700 cairo"
                    >
                        <Check className="h-5 w-5 shrink-0 text-[#C5A059]" strokeWidth={2.5} />
                      <span className="text-sm font-semibold">{item}</span>
                    
                    </li>
                  ))}
                </ul>
                <div className="mt-6 p-2 sm:mt-8 sm:p-4 md:mt-10">
              <button
                type="button"
                onClick={() =>
    window.open(
      "https://ghfuran-business.systeme.io/356328bd",
      "_blank"
    )
  }
                className="flex w-full items-center justify-center gap-2 rounded-4xl bg-black px-3 py-3 text-sm font-bold text-white transition hover:bg-gray-800 sm:py-3.5 sm:text-base cairo"
              >
                <ShoppingCart className="h-5 w-5" />
                احصلي على الدليل الآن بـ $9 فقط
              </button>
   
            </div>
            <p className="mt-3 text-center text-xs text-gray-700 sm:text-sm cairo">العرض ينتهى بعد انتهاء العد التنازلى</p>
              </div>

              {/* Price — left in RTL */}
              <div className="flex flex-col items-center justify-center p-4 text-center sm:p-6 md:p-8">

                <p className="mb-3 text-lg font-bold text-black sm:text-xl md:text-2xl cairo">
                  العرض الحصري لأول المشترين فقط!
                </p>
               <div className="mb-2 flex flex-wrap items-center justify-center gap-4 sm:gap-6 md:gap-8">

  <div className="flex flex-col items-center">
    <p className="text-sm cairo sm:text-lg">بدلاً من</p>
    <span className="text-xl line-through sm:text-2xl">
      $49
    </span>
  </div>

  <span className="tajawal text-5xl font-extrabold text-[#C5A059] sm:text-6xl md:text-7xl lg:text-8xl">
    $9
  </span>

</div>
                <span className="rounded-full bg-[#B84A4A] px-5 py-2 text-sm font-bold text-white sm:px-7 sm:text-sm cairo">
                  وفري $40 الآن!
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Pricing;
