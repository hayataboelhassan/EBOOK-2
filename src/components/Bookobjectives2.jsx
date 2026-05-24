import { Sprout, Footprints, Compass, Wrench, Eye } from "lucide-react";
import { motion } from "framer-motion";
import { pageWrap } from "../utils/layout";

const items = [
  { icon: Sprout, label: "تغيير داخلي مستدام من جذورك" },
  { icon: Footprints, label: "خطوات واضحة تساعدك تتحركين بثبات" },
  { icon: Compass, label: "تمارين اكتشافية تطبيقية" },
  { icon: Wrench, label: "أدوات عملية للتعامل مع التفكير والمشاعر" },
  { icon: Eye, label: "فهم أعمق لنفسك من منظور الفطرة" },
];

function Bookobjectives2() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full min-w-0 overflow-x-hidden"
    >
      <section className="py-16 md:py-18">
        <div className={pageWrap}>
          <h2 className="tajawal mb-12 text-center text-2xl font-bold text-black md:text-3xl">
            ماذا ستجدين داخل الدليل؟
          </h2>

          <div className="flex flex-wrap items-start justify-center gap-8 md:gap-10 lg:gap-12">
            {items.map(({ icon: Icon, label }) => (
              <div
                key={label}
                className="flex w-[140px] max-w-full flex-col items-center text-center sm:w-[180px]"
              >
                <div className="mb-3 flex h-14 w-14 items-center justify-center rounded-full border-2 border-[#C5A059]">
                  <Icon className="h-6 w-6 text-[#C5A059]" strokeWidth={1.5} />
                </div>
                <p className="text-xs font-bold leading-snug text-gray-800 cairo md:text-lg">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </motion.div>
  );
}

export default Bookobjectives2;
