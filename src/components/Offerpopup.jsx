import { useEffect, useState } from "react";
import { Check, ShoppingCart, X } from "lucide-react";

const benefits = [
  "دليل PDF كامل جاهز للتطبيق",
  "تمارين عملية من واقع الجلسات",
  "وصول فوري ومدى الحياة للنسخة",
];

function OfferPopup() {
  const [showPopup, setShowPopup] = useState(true);

  const [timeLeft, setTimeLeft] = useState({
    days: 7,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    if (showPopup) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showPopup]);

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
    <>
      {showPopup && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-sm px-8 sm:px-4">

          <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl">

            {/* زر الإغلاق */}
            <button
              onClick={() => setShowPopup(false)}
              className="absolute right-3 top-3 z-50 flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 text-gray-600 hover:bg-gray-200"
            >
              <X />
            </button>

            {/* GRID RESPONSIVE */}
            <div className="grid grid-cols-1 gap-1 md:grid-cols-2 lg:grid-cols-[1fr_1.3fr_0.9fr] md:my-3">

              {/* Countdown */}
              <div className="flex flex-col items-center justify-center pt-8 md:p-6 text-center">
                <div className="mb-3 rounded-4xl bg-[#C5A059] px-15 py-2 md:px-12 text-sm font-bold text-white cairo">
                  عرض لفترة محدودة
                </div>

                <div className="bg-gray-200 rounded-2xl px-15 py-2  ">
                  <p className="mb-2 cairo">ينتهي خلال:</p>

                  <span className="tajawal text-5xl font-extrabold text-black">
                    {String(timeLeft.days).padStart(2, "0")}
                  </span>

                  <p className="mt-1 font-bold cairo">أيام</p>

                  <div className="flex justify-center gap-4 mt-5">
                    <div>
                      <div className="font-bold">
                        {String(timeLeft.hours).padStart(2, "0")}
                      </div>
                      <p className="text-sm">ساعة</p>
                    </div>

                    <div>
                      <div className="font-bold">
                        {String(timeLeft.minutes).padStart(2, "0")}
                      </div>
                      <p className="text-sm">دقيقة</p>
                    </div>

                    <div>
                      <div className="font-bold">
                        {String(timeLeft.seconds).padStart(2, "0")}
                      </div>
                      <p className="text-sm">ثانية</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benefits */}
              <div className="flex flex-col justify-center p-4 md:p-6">
                <h2 className="tajawal mb-5 text-center text-xl font-bold">
                  هذا العرض لن يتكرر!
                </h2>

                <ul className="space-y-4">
                  {benefits.map((item) => (
                    <li key={item} className="flex items-center justify-center md:justify-start gap-3">
                      <Check className="h-5 w-5 text-[#C5A059]" />
                      <span className="text-sm font-semibold">{item}</span>
                    </li>
                  ))}
                </ul>

                <button   onClick={() =>
    window.open(
      "https://ghfuran-business.systeme.io/356328bd",
      "_blank"
    )
  } className="mt-8 flex w-full items-center justify-center gap-1 rounded-4xl bg-black md:py-3 px-2 py-2 md:px-2   font-bold text-white hover:bg-gray-800 cairo">
                  <ShoppingCart className="h-5 w-5 " />
                  احصلي على الدليل الآن بـ $9 فقط
                </button>
              </div>

              {/* Price */}
              <div className="flex flex-col items-center justify-center p-4 md:p-6 text-center lg:order-none">
                <p className="mb-3 text-xl font-bold cairo">
                  العرض الحصري لأول المشترين
                </p>

                <div className="flex items-end gap-6">
                  <div className="text-center">
                    <p className="text-sm cairo">بدلاً من</p>
                    <span className="line-through text-gray-500">$49</span>
                  </div>

                  <span className="text-6xl font-extrabold text-[#C5A059] tajawal">
                    $9
                  </span>
                </div>

                <span className="mt-4 rounded-full bg-[#B84A4A] px-5 py-2 text-sm font-bold text-white">
                  وفر $40 الآن!
                </span>
              </div>

            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default OfferPopup;