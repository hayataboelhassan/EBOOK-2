import { Award, Download, ShieldCheck, BadgeCheck } from "lucide-react";
import { motion } from "framer-motion";
import { pageWrap } from "../utils/layout";

const badges = [
  {
    icon: Award,
    title: "جودة عالية",
    subtitle: "دليل عملى ومصمم بعنايه لتحقيق نتائج حقيقيه",
  },
  {
    icon: Download,
    title: "تحميل فوري",
    subtitle: "تحصلى على الدليل فور اتمام عمليه الشراء ",
  },
  {
    icon: ShieldCheck,
    title: "دفع آمن",
    subtitle: "جميع طرق الدفع متوفره ومحمى 100%",
  },
  {
    icon: BadgeCheck,
    title: "دفع مرة واحدة",
    subtitle: " ادفعى بطريقه التى تناسبك",
  },
];

function TrustBadges() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="w-full min-w-0 overflow-x-hidden"
    >
      <section className="py-12 md:py-10">
        <div className={pageWrap}>
          <div className="grid grid-cols-2 gap-6 sm:gap-8 md:grid-cols-4 md:gap-10 lg:gap-20">
            {badges.map(({ icon: Icon, title, subtitle }) => (
              <div key={title} className="flex min-w-0 flex-col items-center text-center">
                <Icon className="mb-3 text-[#C5A059]" strokeWidth={1.5} md:size={50} size={40} />
                <h3 className="mb-1 md:text-lg font-bold text-black cairo">{title}</h3>
                <p className="md:text-balance leading-relaxed text-gray-500 cairo">{subtitle}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default TrustBadges;
