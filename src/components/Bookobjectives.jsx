
import { X } from 'lucide-react';
import { motion } from "framer-motion";
function Bookobjectives() {
  return (<>
  <motion.div
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
  <div className="py-10">
<div className="flex flex-col items-center justify-center pb-15 gap-3">

  {/* Title with lines */}
  <div className="flex items-center justify-center gap-4">

    <span className="w-20 h-[2px] bg-[#cb9f30] mt-5"></span>

    <h1 className="text-3xl font-bold  text-center tajawal">
    هذا الدليل لكي؟ لان
    </h1>

    <span className="w-20 h-[2px] bg-[#cb9f30] mt-5"></span>

  </div>

  {/* Subtitle under title */}
  <p className=" text-center mt-3 cairo font-bold text-xl text-gray-500 ">
 ..... يمكن مشكلتك مو إنك ما تعرفين نفسك
  </p>

</div>
   <div className="grid grid-cols-1 md:grid-cols-4 gap-6 p-6 justify-center items-center mx-40">

  {/* Card 1 */}
  <div className="group p-6 flex flex-col items-center text-center w-full hover:scale-105 transition-all duration-300
  bg-white/70 backdrop-blur-sm rounded-2xl border border-transparent hover:border-[#e3b723] shadow-sm hover:shadow-xl">

     <div className=" bg-[#fee2e4] p-4 rounded-full mb-4">
       <X
    size={28}
    className="text-[#ed888f]"
    strokeWidth={3.5}
  />
    </div>
<h1 className="font-bold text-xl mb-2 cairo" >  ...تسمعين نفسك  </h1>
    <h2 className="font-bold text-xl mb-2 cairo"> لكن ما تثقين فيها
</h2>
  </div>

  {/* Card 2 */}
  <div className="group p-6 flex flex-col items-center text-center w-full hover:scale-105 transition-all duration-300
  bg-white/70 backdrop-blur-sm rounded-2xl border border-transparent hover:border-[#e3b723] shadow-sm hover:shadow-xl">

     <div className=" bg-[#fee2e4] p-4 rounded-full mb-4">
       <X
    size={28}
    className="text-[#ed888f]"
    strokeWidth={3.5}
  />
    </div>
<h1 className="font-bold text-xl mb-2 cairo" >  ...تحللين  </h1>
<h2 className="font-bold text-xl mb-2 cairo">  وتتعبين</h2>

  </div>

  {/* Card 3 */}
 <div className="group p-6 flex flex-col items-center text-center w-full hover:scale-105 transition-all duration-300
  bg-white/70 backdrop-blur-sm rounded-2xl border border-transparent hover:border-[#e3b723] shadow-sm hover:shadow-xl">

    <div className=" bg-[#fee2e4] p-4 rounded-full mb-4">
       <X
    size={28}
    className="text-[#ed888f]"
    strokeWidth={3.5}
  />
    </div>

  <h1 className="font-bold text-xl mb-2 cairo">...تبدأين</h1>

  <h2 className="font-bold text-xl mb-2 flex items-center justify-center gap-2 cairo">
    وترجعين
  </h2>

</div>
   <div className="group p-6 flex flex-col items-center text-center w-full hover:scale-105 transition-all duration-300
  bg-white/70 backdrop-blur-sm rounded-2xl border border-transparent hover:border-[#e3b723] shadow-sm hover:shadow-xl">

    <div className=" bg-[#fee2e4] p-4 rounded-full mb-4">
       <X
    size={28}
    className="text-[#ed888f]"
    strokeWidth={3.5}
  />
    </div>
<h1 className="font-bold text-xl mb-2 cairo" >  ...تفهمين  </h1>
    <h2 className="font-bold text-xl mb-2 cairo"> لكن ما تتغيرين</h2>
  </div>
  </div>
  <h1 className="font-bold text-xl mb-2 text-center mt-10 text-gray-600 Cairo" > 🤍مو فيك المشكلة…في الطريقة فقط </h1>
  <div><h1 className="font-bold text-7xl mb-2 text-center mt-10 text-gray-600 Cairo"  >هنا فيديو</h1></div>
  </div>
  </motion.div>
  </>)}
  export default Bookobjectives