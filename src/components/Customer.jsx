
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";

import {
  Pagination,
  Autoplay,
  Navigation,
} from "swiper/modules";

import {
  Star,
} from "lucide-react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Customer() {
  return (
    <motion.div
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
    <div className="w-full mt-25">
<div className="flex flex-col items-center justify-center pb-20 gap-3">

  {/* Title with lines */}

 <div className="flex items-center justify-center gap-4">

    <span className="w-20 h-[2px] bg-[#cb9f30] mt-3"></span>

    <h1 className="text-3xl font-bold  text-center tajawal">
 ماذا قالت البنات؟
    </h1>

    <span className="w-20 h-[2px] bg-[#cb9f30] mt-3"></span>

  </div>
  {/* Subtitle under title */}
</div>
   
      <Swiper
  modules={[Pagination, Autoplay, Navigation]}
  spaceBetween={20}
  slidesPerView={1}
  pagination={{ clickable: true }}
  navigation={{
    nextEl: ".next-btn",
    prevEl: ".prev-btn",
  }}
  autoplay={{ delay: 3000 }}
  loop={true}

  breakpoints={{
    768: {
      slidesPerView: 2,
    },

    1024: {
      slidesPerView: 3,
    },
  }}

 className="w-full max-w-7xl pb-16"
>
        
        <SwiperSlide>
  <div
    className="
      bg-white/70
      backdrop-blur-sm
      p-8
      rounded-3xl
      shadow-lg
      text-right
      h-full
    "
  >

    {/* فوق */}
    <div className="flex items-center gap-4 mb-3 justify-between">

      <img
        src="/media/d35b1173d505f11be689e7e5119473e8.jpg"
        className="w-16 h-16 rounded-full object-cover"
      />

      <div className="flex gap-1 text-[#ed888f]">
        <Star size={16} fill="#ed888f" />
        <Star size={16} fill="#ed888f" />
        <Star size={16} fill="#ed888f" />
        <Star size={16} fill="#ed888f" />
        <Star size={16} fill="#ed888f" />
      </div>

    </div>

    {/* الاسم */}
    <div className="flex items-center justify-end gap-2 mb-4">

      <span className="text-gray-500 text-sm">
        24 سنة
      </span>

      <h4 className="font-bold text-lg text-[#ed888f]">
        هند ع.
      </h4>

    </div>

    {/* الرأي */}
    <p className="text-gray-700 leading-loose">
      "ما توقعت إن كتاب يأثر فيا بالشكل ده.
      البكاء والتأمل والقرار.
      الكتاب سافر معايا في رحلة حقيقية لجوايا،
      شكراً غفران."
    </p>

  </div>
</SwiperSlide>
<SwiperSlide>
  <div
    className="
      bg-white/70
      backdrop-blur-sm
      p-8
      rounded-3xl
      shadow-lg
      text-right
      h-full
    "
  >

    {/* فوق */}
    <div className="flex items-center gap-4 mb-3 justify-between">

      <img
        src="/media/d35b1173d505f11be689e7e5119473e8.jpg"
        className="w-16 h-16 rounded-full object-cover"
      />

      <div className="flex gap-1 text-[#ed888f]">
        <Star size={16} fill="#ed888f" />
        <Star size={16} fill="#ed888f" />
        <Star size={16} fill="#ed888f" />
        <Star size={16} fill="#ed888f" />
        <Star size={16} fill="#ed888f" />
      </div>

    </div>

    {/* الاسم */}
    <div className="flex items-center justify-end gap-2 mb-4">

      <span className="text-gray-500 text-sm">
        24 سنة
      </span>

      <h4 className="font-bold text-lg text-[#ed888f]">
        هند ع.
      </h4>

    </div>

    {/* الرأي */}
    <p className="text-gray-700 leading-loose">
      "ما توقعت إن كتاب يأثر فيا بالشكل ده.
      البكاء والتأمل والقرار.
      الكتاب سافر معايا في رحلة حقيقية لجوايا،
      شكراً غفران."
    </p>

  </div>
</SwiperSlide>
<SwiperSlide>
  <div
    className="
      bg-white/70
      backdrop-blur-sm
      p-8
      rounded-3xl
      shadow-lg
      text-right
      h-full
    "
  >

    {/* فوق */}
    <div className="flex items-center gap-4 mb-3 justify-between">

      <img
        src="/media/d35b1173d505f11be689e7e5119473e8.jpg"
        className="w-16 h-16 rounded-full object-cover"
      />

      <div className="flex gap-1 text-[#ed888f]">
        <Star size={16} fill="#ed888f" />
        <Star size={16} fill="#ed888f" />
        <Star size={16} fill="#ed888f" />
        <Star size={16} fill="#ed888f" />
        <Star size={16} fill="#ed888f" />
      </div>

    </div>

    {/* الاسم */}
    <div className="flex items-center justify-end gap-2 mb-4">

      <span className="text-gray-500 text-sm">
        24 سنة
      </span>

      <h4 className="font-bold text-lg text-[#ed888f]">
        هند ع.
      </h4>

    </div>

    {/* الرأي */}
    <p className="text-gray-700 leading-loose">
      "ما توقعت إن كتاب يأثر فيا بالشكل ده.
      البكاء والتأمل والقرار.
      الكتاب سافر معايا في رحلة حقيقية لجوايا،
      شكراً غفران."
    </p>

  </div>
</SwiperSlide>
<SwiperSlide>
  <div
    className="
      bg-white/70
      backdrop-blur-sm
      p-8
      rounded-3xl
      shadow-lg
      text-right
      h-full
    "
  >

    {/* فوق */}
    <div className="flex items-center gap-4 mb-3 justify-between">

      <img
        src="/media/d35b1173d505f11be689e7e5119473e8.jpg"
        className="w-16 h-16 rounded-full object-cover"
      />

      <div className="flex gap-1 text-[#ed888f]">
        <Star size={16} fill="#ed888f" />
        <Star size={16} fill="#ed888f" />
        <Star size={16} fill="#ed888f" />
        <Star size={16} fill="#ed888f" />
        <Star size={16} fill="#ed888f" />
      </div>

    </div>

    {/* الاسم */}
    <div className="flex items-center justify-end gap-2 mb-4">

      <span className="text-gray-500 text-sm">
        24 سنة
      </span>

      <h4 className="font-bold text-lg text-[#ed888f]">
        هند ع.
      </h4>

    </div>

    {/* الرأي */}
    <p className="text-gray-700 leading-loose">
      "ما توقعت إن كتاب يأثر فيا بالشكل ده.
      البكاء والتأمل والقرار.
      الكتاب سافر معايا في رحلة حقيقية لجوايا،
      شكراً غفران."
    </p>

  </div>
</SwiperSlide>
      </Swiper>
      
    </div>
    </motion.div>
  );
}

export default Customer;