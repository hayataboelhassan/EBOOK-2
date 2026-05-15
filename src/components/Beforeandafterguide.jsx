import {
  Frown,
  AlertCircle,
  HelpCircle,
  Angry,
  Sparkles,
  Activity,
  ShieldCheck,
  Wind,
  ArrowLeft
} from "lucide-react";
import { motion } from "framer-motion";
function Beforeandafterguide() {
  return (
    <motion.div
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
    <div className="flex items-center justify-center gap-6 py-20  mx-15">
  {/* AFTER */}
      <div className="flex-1 bg-white/50 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg shadow-[#cb9f30]">

        <h2 className="text-3xl font-bold mb-4 tajawal pb-5">
          بعد الدليل
        </h2>

        <div className="flex flex-col items-center gap-3 text-gray-600">

          <div className="flex items-center gap-4 cairo text-2xl ">
            <Sparkles size={30} className="text-[#cb9f30]"
    strokeWidth={2}  /> وضوح
          </div>

          <div className="flex items-center gap-4 cairo text-2xl ">
            <Activity size={30} className="text-[#cb9f30]"
    strokeWidth={2}  /> حركة
          </div>

          <div className="flex items-center gap-4 cairo text-2xl ">
            <ShieldCheck size={30} className="text-[#cb9f30]"
    strokeWidth={2}  /> ثقة
          </div>

          <div className="flex items-center gap-4 cairo text-2xl ">
            <Wind size={30} className="text-[#cb9f30]"
    strokeWidth={2} /> هدوء
          </div>

        </div>

      </div>

      {/* ARROW */}
      <div className="flex items-center justify-center">
        <div className="w-12 h-12 rounded-full bg-[#cb9f30] flex items-center justify-center shadow-md">
          <ArrowLeft className="text-white" />
        </div>
      </div>

     
       {/* BEFORE */}
      <div className="flex-1 bg-white/50 backdrop-blur-sm rounded-2xl p-8 text-center shadow-lg shadow-[#cb9f30] ">

        <h2 className="text-3xl font-bold mb-4 tajawal pb-5">
          قبل الدليل
        </h2>

        <div className="flex flex-col items-center gap-3 text-gray-600">

          <div className="flex items-center gap-4 cairo text-2xl ">
            <Frown size={30} className="text-[#cb9f30]"
    strokeWidth={2}  /> تحليل
          </div>

          <div className="flex items-center gap-4 cairo text-2xl ">
            <HelpCircle size={30} className="text-[#cb9f30]"
    strokeWidth={2}  /> شك
          </div>

          <div className="flex items-center gap-4 cairo text-2xl">
            <AlertCircle size={30} className="text-[#cb9f30]"
    strokeWidth={2}  /> تردد
          </div>

          <div className="flex items-center gap-4 cairo text-2xl ">
            <Angry size={30} className="text-[#cb9f30]"
    strokeWidth={2}  /> جلد ذات
          </div>

        </div>

      </div>

    </div>
    </motion.div>
  );
}

export default Beforeandafterguide;