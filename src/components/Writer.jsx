import { motion } from "framer-motion";
import { Heart, Sparkles } from "lucide-react";
function Writer (){
return(<>
<motion.div
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
 <div className="  ">

  {/* العنوان */}
 <div className="flex items-center justify-center gap-4">

    <span className="w-20 h-[2px] bg-[#cb9f30] mt-5"></span>

    <h1 className="text-3xl font-bold  text-center tajawal">
    نبذة عن الكاتبة
    </h1>

    <span className="w-20 h-[2px] bg-[#cb9f30] mt-5"></span>

  </div>
{/* المحتوى */}

<div className="grid grid-cols-1 md:grid-cols-4 gap-5 mt-25 items-center">
 {/* القسم الرابع */}
  <div className="text-center">

   <p className="text-gray-700 leading-loose text-lg cairo ">
  كل تمرين داخل هذا الدليل
  جاء من جلسات حقيقية 
</p>

<p className="text-gray-700 leading-loose text-lg cairo ">
  وكل ما ستجدينه داخل هذا الدليل…
  مو معلومات إضافية
  بل أدوات حقيقية 
</p>
<p className="text-gray-700 leading-loose text-lg cairo ">
<Heart className="inline text-[#cb9f30]" size={18} /> خرجت من جلسات وتجارب واقعية
</p>
<p className="text-gray-700 leading-loose text-lg cairo ">
  مئات البنات + <Sparkles className="inline text-[#cb9f30]" size={18} />
</p>

<p className="text-gray-700 leading-loose text-lg cairo ">
   جلسات خاصة <Sparkles className="inline text-[#cb9f30]" size={18} />
</p>

<p className="text-gray-700 leading-loose text-lg cairo ">
   ⁠ويبنار وكورسات <Sparkles className="inline text-[#cb9f30]" size={18} />
</p>

<p className="text-gray-700 leading-loose text-lg cairo ">
  <Sparkles className="inline text-[#cb9f30]" size={18} /> نتائج وتجارب حقيقية <Sparkles className="inline text-[#cb9f30]" size={18} />
</p>


  </div>
  
 {/* القسم الثالث (الصورة) */}
 <div className="flex justify-center relative">

  {/* الخلفية */}
  <div
    className="
      absolute
      w-full max-w-[220px]
      h-full
      -translate-x-3 -translate-y-3
      border-2 border-[#c9a227]
      rounded-3xl
      z-0
    "
  ></div>

  {/* الصورة */}
  <img
    src="/media/WhatsApp Image 2026-05-10 at 8.36.15 PM.jpeg"
    className="
      relative z-10
      w-full max-w-[220px]
      rounded-3xl
      shadow-[0_15px_35px_rgba(201,162,39,0.45)]
      hover:scale-105
      transition-all
      duration-300
    "
  />

</div>
  {/* القسم الثاني */}
  <div className="text-center mt-10">

<p className="text-gray-700 leading-loose text-lg cairo pb-3">
  ومن هنا
  بنيت منهج الوعي بالفطرة 
</p>

<p className="text-gray-700 leading-loose text-lg cairo">
  : منهج عملي يساعدك 
</p>

<p className="text-gray-700 leading-loose text-lg cairo">
  <Sparkles className="inline text-[#cb9f30]" size={18} /> توقفين التحليل الزائد <Sparkles className="inline text-[#cb9f30]" size={18} />
</p>

<p className="text-gray-700 leading-loose text-lg cairo">
  <Sparkles className="inline text-[#cb9f30]" size={18} /> تسمعين نفسك بوضوح <Sparkles className="inline text-[#cb9f30]" size={18} />
</p>

<p className="text-gray-700 leading-loose text-lg cairo">
  <Sparkles className="inline text-[#cb9f30]" size={18} /> وتتحركين… حتى مع وجود مقاومة <Sparkles className="inline text-[#cb9f30]" size={18} />
</p>
        <p className="text-gray-700 leading-loose text-lg cairo pt-3 ">
  أعمل مع البنات يوميًا ...
على فك الأنماط القديمة 
وتحويل الفهم

    </p>
        <p className="text-gray-700 leading-loose text-lg cairo pt-3 ">
. إلى تغيير حقيقي

    </p>
  </div>
 <div className=" text-center mb-16">

    <h2 className="text-4xl font-bold mb-10 cairo">
      أنا غفران
    </h2>

    <p className="text-gray-700 leading-loose text-lg cairo">
   خلال عملي مع البنات في الجلسات الخاصة…
 لاحظت شيء يتكرر كثير  
    </p>
  <p className="text-gray-700 leading-loose text-lg cairo pt-3 px-10">
  يفهمون أنفسهم…
لكن يرجعون لنفس الدائرة 
    </p>
    <p className="text-gray-700 leading-loose text-lg cairo pt-3  px-14">
مو لأنهم ضعيفات…

لكن لأنهم تعلموا
طريقة قديمة في التعامل
مع النفس والمشاعر

    </p>
  </div>
</div>
</div>

</motion.div>
</>)




}
export default Writer