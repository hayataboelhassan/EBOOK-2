import { Mail, User, RefreshCw, Lock } from "lucide-react";
import { motion } from "framer-motion";
import { pageWrap } from "../utils/layout";

const policies = [
  {
    icon: Mail,
    title: "تواصل دائم",
    desc: "فريق الدعم متاح دائما للرد على استفساراتك",
  },
  {
    icon: User,
    title: "استخدام شخصي فقط",
    desc: " يمنع اعاده بيع او مشاركه الدليل",
  },
  {
    icon: RefreshCw,
    title: "استرجاع بسهولة",
    desc: "يمكنك طلب استرجاع خلال 3 ايام اذا لم يكن الدليل مناسبا لك ",
  },
  {
    icon: Lock,
    title: "خصوصيتك تهمنا",
    desc: "نحافظ على معلوماتك ولا نشاركها مع اى جهه",
  },
];

function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="w-full min-w-0 overflow-x-hidden border-t border-gray-100 pt-16 pb-8"
    >
      <div className={pageWrap}>
        <h2 className="tajawal mb-8 text-center md:text-3xl font-bold text-black sm:mb-20 text-2xl">
          سياسة الشراء
        </h2>

        <div className=" mb-10 grid grid-cols-2 gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:mb-12">
          {policies.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="flex flex-col items-center px-2 text-center">
              <Icon className="mb-3 h-7 w-7 text-[#C5A059] sm:h-8 sm:w-8" strokeWidth={1.5} />
              <h3 className="mb-1 text-sm font-bold text-black sm:text-base cairo">{title}</h3>
              <p className="text-xs leading-relaxed text-gray-500 sm:text-sm cairo">{desc}</p>
            </div>
          ))}
        </div>

        <p className="px-2 text-center text-[11px] leading-relaxed text-gray-400 sm:text-xs cairo">
          جميع الحقوق محفوظة © 2024 | الدليل العملي - افهمي نفسك بدون ما تضيعين
          في التحليل
        </p>
      </div>
    </motion.footer>
  );
}

export default Footer;
