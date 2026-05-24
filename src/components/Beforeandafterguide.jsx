import { X, Check, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { pageWrap } from "../utils/layout";

const beforeItems = [
  "تحليل مستمر لا يهدأ",
  "تقلبات في المزاج والطاقة",
  "شك في نفسك وفي حدسك",
  "صعوبة في الاستمرارية والالتزام",
];

const afterItems = [
  "وضوح فيما تريدين وتشعرين به",
  "ثقة بصوتك الداخلي وحدسك",
  "هدوء وتقبل لذاتك ومشاعرك",
  "خطوات عملية تطبقينها بثبات",
];

function Beforeandafterguide() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full min-w-0 overflow-x-hidden"
    >
      <section className="py-16">
        <div className={pageWrap}>
          <div className="flex min-w-0 flex-col items-stretch gap-6 md:flex-row md:items-center md:gap-8">
            <div className="min-w-0 flex-1 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
              <h2 className="tajawal mb-6 text-center text-2xl font-bold text-black">
                قبل الدليل
              </h2>
              <ul className="space-y-4">
                {beforeItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-center justify-center gap-3 text-base text-gray-700 md:text-lg cairo"
                  >
                    <X className="h-5 w-5 shrink-0 text-[#B84A4A]" strokeWidth={2.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex shrink-0 items-center justify-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#C5A059] shadow-md">
                <ArrowLeft className="h-6 w-6 text-white" />
              </div>
            </div>

            <div className="min-w-0 flex-1 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm md:p-8">
              <h2 className="tajawal mb-6 text-center text-2xl font-bold text-black">
                بعد الدليل
              </h2>
              <ul className="space-y-4">
                {afterItems.map((item) => (
                  <li
                    key={item}
                    className="flex items-center justify-center gap-3 text-base text-gray-700 md:text-lg cairo"
                  >
                    <Check className="h-5 w-5 shrink-0 text-emerald-600" strokeWidth={2.5} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Beforeandafterguide;
