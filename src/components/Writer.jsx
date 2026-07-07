import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { pageWrap } from "../utils/layout";

function Writer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full min-w-0 overflow-x-hidden"
    >
      <section id="writer" className="py-8 md:py-10">
        <div className={`${pageWrap} min-w-0`}>
          <h2 className="tajawal mb-16 text-center text-2xl font-bold text-black md:text-3xl">
            نبذة عن الكاتبة
          </h2>
          
         <div className="flex flex-col items-center gap-10 md:grid md:grid-cols-3 md:items-center md:gap-12">
           <div className="flex justify-center order-2 md:order-2 w-full">
              <div className="relative">
                <div className="absolute -inset-2 rounded-2xl border-2 border-[#C5A059] opacity-40" />
                <img
                  src="media/WhatsApp Image 2026-05-10 at 8.36.15 PM.jpeg"
                  alt="غفران"
              className="relative z-10 w-[170px] h-[170px] md:w-[230px] md:h-[230px] object-cover rounded-2xl shadow-lg"
                />
              </div>
            </div>
           
        <div className="text-center md:text-right order-3 md:order-3">
              <p className="mb-3 leading-relaxed text-gray-600 cairo">
                ومن هنا بنيت منهج الوعي بالفطرة — منهج عملي يساعدك:
              </p>
              <ul className="space-y-2 text-gray-700 cairo">
                <li className="flex items-center justify-start gap-2">
                   <Sparkles className="h-4 w-4 text-[#C5A059]" />
                  <span>توقفين التحليل الزائد</span>
                  <Sparkles className="h-4 w-4 text-[#C5A059]" />
                </li>
                <li className="flex items-center justify-start gap-2">
                   <Sparkles className="h-4 w-4 text-[#C5A059]" />
                  <span>تسمعين نفسك بوضوح</span>
                  <Sparkles className="h-4 w-4 text-[#C5A059]" />
                </li>
                <li className="flex items-center justify-start gap-2">
                   <Sparkles className="h-4 w-4 text-[#C5A059]" />
                  <span>تتحركين حتى مع وجود مقاومة</span>
                  <Sparkles className="h-4 w-4 text-[#C5A059]" />
                </li>
              </ul>
            </div>
           <div className="text-center md:text-right order-1 md:order-1">
              <h3 className="cairo mb-8 text-2xl md:text-4xl font-bold text-black">أنا غفران</h3>
              <p className="mb-3 leading-relaxed text-gray-600 cairo">
                خلال عملي مع البنات في الجلسات الخاصة… لاحظت شيء يتكرر كثير
              </p>
              <p className="leading-relaxed text-gray-600 cairo">
                يفهمون أنفسهم… لكن يرجعون لنفس الدائرة — مو لأنهم ضعيفات، لكن
                لأنهم تعلموا طريقة قديمة في التعامل مع النفس والمشاعر
              </p>
            </div>
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Writer;
