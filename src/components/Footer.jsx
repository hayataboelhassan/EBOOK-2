
import { motion } from "framer-motion";
import { pageWrap } from "../utils/layout";
import { useState } from "react";
import { X } from "lucide-react";
function Footer() {
  const [openPolicy, setOpenPolicy] = useState(false);
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full min-w-0 overflow-x-hidden border-t border-gray-100 pt-2 pb-8"
    >
      <div className={pageWrap}>
          <div className="mt-6 flex justify-center">
  <button
    onClick={() => setOpenPolicy(true)}
    className="rounded-full border md:w-1/3  border-gold md:px-6 md:py-4 px-14 py-2 text-xl md:text-2xl font-bold text-gold transition hover:bg-gold hover:text-white"
  >
    سياسة الدليل 
  </button>
</div>
{openPolicy && (
<div
  className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
  onClick={() => setOpenPolicy(false)}
>
  <div
    onClick={(e) => e.stopPropagation()}
className="relative flex h-[88vh] w-full max-w-5xl flex-col overflow-hidden rounded-[32px] border border-[#E6D5B8] bg-[#FDFBF7] shadow-[0_25px_70px_rgba(0,0,0,.18)]"  >
     <div className="flex items-center justify-between border-b border-[#E6D5B8] bg-white px-8 py-6">
 <h2 className="tajawal text-3xl font-extrabold text-[#C5A059]" >سياسة الدليل   
  </h2>

 <button
  onClick={() => setOpenPolicy(false)}
  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#E6D5B8] bg-white text-[#C5A059] transition duration-300 hover:bg-[#C5A059] hover:text-white"
>
  <X size={22} strokeWidth={2.5} />
</button>
</div>

<div className="flex-1 overflow-y-auto bg-[#FDFBF7] px-8 py-8">
 <div className="rounded-3xl border border-[#E6D5B8] bg-white p-8 shadow-lg">
  <h3 className="tajawal mb-6 text-center text-3xl font-extrabold text-[#C5A059]">
    📖 سياسة الدليل
  </h3>

  <div className="space-y-5 text-right text-[15px] leading-9 text-neutral-700">

    <p>
      شكرًا لثقتك وشرائك <strong>الدليل العملي للرجوع لفطرتك</strong>.
    </p>

    <p>
      يرجى قراءة السياسة التالية قبل إتمام عملية الشراء:
    </p>

    <p>
      <strong>طبيعة المنتج:</strong> هذا المنتج عبارة عن دليل رقمي (PDF) يتم
      تسليمه إلكترونيًا فور إتمام عملية الدفع، أو خلال مدة لا تتجاوز 24 ساعة في
      بعض حالات الدفع اليدوي.
    </p>

    <p>
      <strong>سياسة الاسترجاع:</strong> نظرًا لطبيعة المنتجات الرقمية وإمكانية
      الوصول إليها وتحميلها مباشرة، فإن جميع المبيعات نهائية وغير قابلة
      للاسترجاع أو الاستبدال بعد إتمام عملية الشراء وتسليم المنتج.
    </p>

    <p>
      <strong>مسؤولية المستخدم:</strong> يتحمل المشتري مسؤولية التأكد من صحة
      البريد الإلكتروني وبيانات التواصل المدخلة أثناء عملية الشراء.
    </p>

    <p>
      <strong>الدعم والاستفسارات:</strong> في حال واجهت أي مشكلة تقنية في
      استلام الدليل أو تحميله، يرجى التواصل معنا عبر وسائل التواصل المتاحة،
      وسنعمل على مساعدتك في أقرب وقت ممكن.
    </p>

    <p>
      <strong>إخلاء المسؤولية:</strong> الدليل مخصص للتوعية والتطوير الشخصي،
      ولا يُعتبر بديلاً عن الاستشارات الطبية أو النفسية أو القانونية أو المالية
      المتخصصة.
    </p>

    <div className="mt-8 rounded-2xl border border-[#E6D5B8] bg-[#FFF8EE] p-5 text-center font-bold leading-8 text-[#8A6A2F]">
      إتمام عملية الشراء يعني موافقتك على جميع البنود المذكورة أعلاه.
    </div>

  </div>
</div>
    </div>
  </div>
  </div>
)}
        <p className="px-2  mt-8 text-center text-[11px] leading-relaxed text-gray-400 sm:text-xs cairo">
          جميع الحقوق محفوظة © 2024 | الدليل العملي - افهمي نفسك بدون ما تضيعين
          في التحليل
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;
