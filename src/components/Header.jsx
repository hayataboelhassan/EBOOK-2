import { motion } from "framer-motion";
import { Star } from 'lucide-react';
import { Heart } from 'lucide-react';
import { FileDown } from 'lucide-react';
// import { ArrowDownToLine } from 'lucide-react';
function Header() {
  return (
    <>
   
     <div
  className="
    relative
    flex flex-col md:flex-row
    items-center
    justify-around
    overflow-hidden
    m-15
  "
>

 {/* 🖼 الصورة */}
<motion.div
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  className="relative z-10 w-full md:w-1/2 flex justify-center items-center"
>
  <div className="relative group">

  {/* ✨ شادو ذهبي تحت الصورة */}
  <div
    className="
      absolute
    "
  ></div>

  {/* 📕 الصورة */}
<img
  src="/media/Gemini_Generated_Image_kl411nkl411nkl41.png"
  className="
    w-[420px]
    object-contain
    rounded-4xl
    transition-all
    duration-500
    group-hover:scale-105
    group-hover:-translate-y-2
    drop-shadow-[0_10px_20px_rgba(227,183,35,0.45)]
  "
/>

</div>
</motion.div>

  {/* 📝 الكلام */}
  <motion.div
    initial={{ opacity: 0, y: 80 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1 }}
    className="relative w-full md:w-1/2  text-center "
  >

    <h4 className="font-light border-2 w-28 rounded-full  mb-5 md:ml-100 ml-40 border-[#cb9f30] text-[#cb9f30] cairo">
    الدليل عملى
    </h4>
<h1 className="tajawal text-4xl font-bold mb-4">
 ...تفهمين نفسك
</h1>
    <h1 className="text-3xl md:text-4xl font-bold  mb-6 text-black tajawal text-center"   > لكن    <span className="text-[#ed888f]"> ترجعين</span> لنفس النقطة؟</h1>
    <h6 className="text-gray-700 mb-2 font-bold  tajawal text-[16px] ">
الدليل العملي للرجوع لفطرتك
بدون ما تضيعين في التحليل الزائد    </h6>
<p className="font-bold  tajawal text-gray-700 mb-5">منهج عملي من نفس شغل الجلسات الخاصة لعملائي</p>
<button
  className="
    bg-[#cb9f30]
    text-white
    px-30
    py-2
    rounded-full
    hover:bg-[#222]
    hover:shadow-xl
    hover:scale-105
    transition-all
    duration-300
    flex  gap-3
    Cairo
    items-center
    mb-5
  md:ml-45  "
>
  {/* <ArrowDownToLine className="w-5 h-5" /> */}
  
$ابدئي الآن بـ 9
</button>
<p className="  Cairo font-bold "> سعر الإطلاق لفترة محدودة<span className="text-white bg-[#ed888f] rounded-full px-5 pb-2 pt-1 items-center text-center mr-2"> محدود </span></p>
<p className="Cairo font-bold mt-3 text-lg">
قبل <span className="line-through text-gray-500">$49</span>
</p>
<div className="flex items-center  mt-10 justify-between">
  <div className="flex items-center gap-2">
    <p className="Cairo font-bold text-sm">
      تحميل فوري
    </p>
     <FileDown color="#ed888f" size={20} />
  </div>
 <div className="flex items-center gap-2 ">
   
    <p className="Cairo font-bold text-sm">
      تمرين من واقع الجلسات
    </p>
     <Heart color="#ed888f" size={20} />
  </div>
  <div className="flex items-center gap-2 ">
    <p className="Cairo font-bold text-sm">
      اكثر من 10+ تمارين فعلية تغير واقعك وتنقلك
    </p>
       <Star color="#ed888f" size={20} />
  </div>
  
</div>
  </motion.div>
</div> 
    </>
  )
}

export default Header
{/* <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md shadow-sm">

  <div className="max-w-7xl mx-auto px-6 md:px-12 py-4 flex items-center justify-between">


    <div className="flex items-center gap-6">
          <button
        className="
          bg-[#D4A63C]
          hover:bg-[#D4A63C]
          text-white
          px-6 py-2
          rounded-full
          transition-all duration-300
          shadow-md
          hover:scale-105
          font-semibold
        "
      >
        احصلي على الكتاب
      </button>

      <ul className="hidden md:flex items-center text-lg font-medium">
  <li className="hover:text-[#c9a227] transition duration-300 cursor-pointer px-4 font-light">
          آراء العملاء
        </li>
          <div className="h-6 w-px bg-gray-400"></div>
        <li className="hover:text-[#c9a227] transition duration-300 cursor-pointer px-4 font-light">
          نبذة عن الكاتبة
        </li>
        <div className="h-6 w-px bg-gray-400"></div>
          <li className="hover:text-[#c9a227] transition duration-300 cursor-pointer px-4 font-light">
          أهداف الكتاب
        </li>
         <div className="h-6 w-px bg-gray-400"></div>
   <li className="hover:text-[#c9a227] transition duration-300 cursor-pointer px-4 font-light ">
          الرئيسية
        </li>
      </ul>

    </div>
     <h1 className="text-3xl font-bold font-Cairo text-black cursor-pointer">
      افهمي نفسك
    </h1>

  </div>

</nav> */}