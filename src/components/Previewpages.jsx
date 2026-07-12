import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { useRef } from "react";

import "swiper/css";
import "swiper/css/effect-coverflow";

const navBtnClass =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#cb9f30] text-white shadow-lg transition hover:scale-110 sm:h-11 sm:w-11 md:h-12 md:w-12";

function PreviewSection() {
  const swiperRef = useRef(null);

  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full overflow-hidden"
      id="preview"
    >
      <h2 className="tajawal mb-5 mt-6 px-4 text-center text-2xl font-bold leading-snug text-black md:mb-8 md:text-3xl">
        تصفحي بعض صفحات الدليل
      </h2>

      <div
        className="
          relative
          flex flex-col items-center
          overflow-hidden
          rounded-3xl
          px-4 py-6
          sm:px-6 sm:py-8
          md:px-8 md:py-10
        "
      >
        {/* Background */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-5"
          style={{
            backgroundImage: "url('media/bg.jpg')",
          }}
        />

        {/* Content */}
        <div className="relative z-10 flex w-full flex-col items-center">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            loop={false}
            slidesPerView={1.2}
            breakpoints={{
              640: {
                slidesPerView: 1.5,
              },
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 2.2,
              },
            }}
            modules={[EffectCoverflow]}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 150,
              modifier: 2,
              scale: 0.9,
              slideShadows: false,
            }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            className="w-full max-w-4xl overflow-hidden"
          >
            {[
              "media/Black and White Bold Minimal Workbook Document (2)_pages-to-jpg-0001.jpg",
              "media/Black and White Bold Minimal Workbook Document (2)_pages-to-jpg-0002.jpg",
              "media/Black and White Bold Minimal Workbook Document (2)_pages-to-jpg-0003.jpg",
              "media/Black and White Bold Minimal Workbook Document (2)_pages-to-jpg-0004.jpg",
            ].map((image, index) => (
              <SwiperSlide key={index}>
                <div
                  className="
                    max-w-full
                    overflow-hidden
                    rounded-2xl
                    bg-white
               shadow-[0_20px_60px_rgba(218,165,32,0.3)]
                    transition-all
                    duration-500
                    hover:scale-[1.02]
                  "
                >
                  <img
                    src={image}
                    alt=""
                    className="
                      h-[260px]
                      w-full
                      object-cover
                      object-center
                      sm:h-[320px]
                      md:h-[380px]
                      lg:h-[420px]
                    "
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              className={navBtnClass}
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              className={navBtnClass}
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default PreviewSection;