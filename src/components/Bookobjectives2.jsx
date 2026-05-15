
// import { X } from 'lucide-react';
import { Sparkles } from 'lucide-react';
import { motion } from "framer-motion";
function Bookobjectives2() {
  return (<>
  <motion.div
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <div className="py-5">
<div className="flex flex-col items-center justify-center pb-10 gap-3">

  {/* Title with lines */}
  <div className="flex items-center justify-center gap-4">

    <span className="w-20 h-[2px] bg-[#cb9f30] mt-3"></span>

    <h1 className="text-3xl font-bold  text-center tajawal">
  ماذا ستجدين بالداخل الدليل؟
    </h1>

    <span className="w-20 h-[2px] bg-[#cb9f30] mt-3"></span>

  </div>
</div>
   <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 justify-center items-center mx-30">

  {/* Card 1 */}
  <div className="group p-6 flex flex-col items-center text-center w-full hover:scale-105 transition-all duration-300
  bg-white/70 backdrop-blur-sm rounded-2xl border border-transparent hover:border-[#e3b723] shadow-sm hover:shadow-xl">
  <div className="  pX-6 py-2 rounded-full mb-4">
       <Sparkles 
    size={28}
    className="text-[#cb9f30]"
    strokeWidth={3}
  />
    </div>
<h3 className="font-bold  mb-2 cairo" >   تمرين إيقاف التحليل
وغيرها من التمارين+10 </h3>
 
  </div>

  {/* Card 2 */}
  <div className="group p-6 flex flex-col items-center text-center w-full hover:scale-105 transition-all duration-300
  bg-white/70 backdrop-blur-sm rounded-2xl border border-transparent hover:border-[#e3b723] shadow-sm hover:shadow-xl">

      <div className="  p-4 rounded-full mb-4">
       <Sparkles 
    size={28}
    className="text-[#cb9f30]"
    strokeWidth={3}
  />
    </div>
<h3 className="font-bold mb-2  cairo" >    تمرين معرفة العائق  </h3>


  </div>

  {/* Card 3 */}
 <div className="group p-6 flex flex-col items-center text-center w-full hover:scale-105 transition-all duration-300
  bg-white/70 backdrop-blur-sm rounded-2xl border border-transparent hover:border-[#e3b723] shadow-sm hover:shadow-xl">
  <div className="  p-4 rounded-full mb-4">
       <Sparkles 
    size={28}
    className="text-[#cb9f30]"
    strokeWidth={3}
  />
    </div>

  <h3 className="font-bold  mb-2 cairo">تمرين فهم نمطك الحالي</h3>

  
</div>
   <div className="group p-6 flex flex-col items-center text-center w-full hover:scale-105 transition-all duration-300
  bg-white/70 backdrop-blur-sm rounded-2xl border border-transparent hover:border-[#e3b723] shadow-sm hover:shadow-xl">

    <div className="  p-4 rounded-full mb-4">
       <Sparkles 
    size={28}
    className="text-[#cb9f30]"
    strokeWidth={3}
  />
    </div>
<h3 className="font-bold  mb-2 cairo" >  تمرين صوتك الداخلي  </h3>
  </div>
  </div>
  </div>
  </motion.div>
  </>)}
  export default Bookobjectives2