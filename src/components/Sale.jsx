import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { pageWrap } from "../utils/layout";

function Sale() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      className="w-full min-w-0 overflow-x-hidden"
    >
      <section className="py-8 md:py-5">
        <div className={pageWrap}>
        <div className="overflow-hidden rounded-2xl border border-[#C5A059]/30 bg-[#FDFBF7] p-4 md:p-6 text-center">
  
  <div className="flex flex-col items-center">
    
    <h2 className="tajawal mb-4 text-lg leading-relaxed text-black md:text-2xl lg:text-3xl font-bold">
      هذه فرصتك أن تتخلصي من وضع من زمان عالقة فيه.
    </h2>

    <button
      type="button"
      className="mt-2 flex items-center justify-center gap-2 rounded-3xl bg-black md:px-15 md:py-3 px-10 py-2 text-sm md:text-base font-bold text-white transition hover:bg-gray-800 cairo"
    >
      <ShoppingCart className="h-5 w-5 shrink-0 md:h-6 md:w-6" />
      احصلي على الدليل الآن بـ $9 فقط
    </button>

  </div>
</div>
        </div>
      </section>
    </motion.div>
  );
}

export default Sale;