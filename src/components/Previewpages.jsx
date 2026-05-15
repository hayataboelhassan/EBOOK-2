import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";

function PreviewSection() {

  const swiperRef = useRef(null);

  return (
<motion.div
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
    <div
      className="
        relative
        py-20
        overflow-hidden
        flex flex-col items-center
      rounded-4xl
     drop-shadow-[0_10px_20px_rgba(227,183,35,0.45)]
     m-15

      "
    >

      {/* Background Image */}
      <div
        className="
          absolute inset-0
          bg-cover
          bg-center
          opacity-10
        "
        style={{
          backgroundImage: "url('/media/bg.jpg')",
        }}
      ></div>

      {/* Overlay */}
      {/* Content */}
      <div className="relative z-10 w-full flex flex-col items-center">

        <h2 className="text-4xl font-bold text-center mb-14">
          Preview Pages
        </h2>

        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
         loop={false}
          modules={[EffectCoverflow]}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 180,
            modifier: 2.5,
            scale: 0.9,
            slideShadows: false,
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          className="w-full max-w-6xl"
        >

          {[
            "/media/ScreenShot Tool -20260513043523.png",
            "/media/ScreenShot Tool -20260513044202.png",
            "/media/ScreenShot Tool -20260513044056.png",
            "/media/ScreenShot Tool -20260513043732.png",
          ].map((image, index) => (

            <SwiperSlide
              key={index}
              className="!w-[300px] md:!w-[360px]"
            >

              <div
                className="
                  rounded-[28px]
                  overflow-hidden
                  bg-white
                  shadow-[0_15px_40px_rgba(0,0,0,0.18)]
                  hover:scale-105
                  transition-all
                  duration-500
                "
              >
                <img
                  src={image}
                  className="w-full h-[500px] object-cover"
                />
              </div>

            </SwiperSlide>

          ))}

        </Swiper>

        {/* Buttons */}
        <div className="flex items-center gap-5 mt-10">

          <button
          onClick={() => swiperRef.current?.slidePrev()}
            className="
              w-14 h-14
              rounded-full
              bg-[#cb9f30]
              text-white
              flex items-center justify-center
              shadow-lg
              hover:scale-110
              transition
            "
          >
            <ChevronLeft size={28} />
          </button>

          <button
          onClick={() => swiperRef.current?.slideNext()}
            className="
              w-14 h-14
              rounded-full
              bg-[#cb9f30]
              text-white
              flex items-center justify-center
              shadow-lg
              hover:scale-110
              transition
            "
          >
            <ChevronRight size={28} />
          </button>

        </div>

      </div>
    </div>
    </motion.div>
  );
}

export default PreviewSection;