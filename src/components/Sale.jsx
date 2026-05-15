import { motion } from "framer-motion";
import { Heart } from "lucide-react";

function Sale() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="mx-15"
    >

      <div
        className="
          border-2 rounded-4xl 
          bg-[#3E2C23]
          p-10
          flex flex-col md:flex-row items-center justify-between
         
          shadow-[0_15px_40px_rgba(227,183,35,0.25)]
          border-[#cb9f30]
        "
      >
   {/* IMAGE */}
        <div className="flex-1 flex justify-center">

          <img
            src="/media/5fd77218672909a9f9d10f9242499bdc.jpg"
            className="
              w-48 md:w-56
              rounded-3xl
              object-cover
              shadow-[0_10px_30px_rgba(203,159,48,0.6)]
              hover:scale-105
              transition-all duration-500
            "
          />

        </div>
        {/* TEXT */}
        <div className="flex-1 text-center md:text-center flex flex-col items-center md:items-center gap-5 mt-10">

          <h1 className="font-bold text-4xl text-white cairo">
            .... مو كل شيء يحتاج تحليل
          </h1>

          <p className="text-white font-bold text-3xl max-w-md cairo">
            بعض الأشياء تحتاج خطوة مختلفة
          </p>

          <button
            className="
              bg-[#cb9f30]
              text-white
              px-16
              py-2
              rounded-full
              hover:bg-[#222]
              hover:shadow-xl
              hover:scale-105
              transition-all
              duration-300
              cairo
              text-lg
              font-bold
            "
          >
            ابدئي رحلتك الآن
          </button>

          <div className="flex items-center gap-2">
            <Heart color="white" size={26} />
            <p className="cairo font-bold text-lg text-white">
              تحميل فوري
            </p>
          </div>

        </div>

      </div>

    </motion.div>
  );
}

export default Sale;