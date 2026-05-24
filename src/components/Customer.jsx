
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Star } from "lucide-react";
import { pageWrap } from "../utils/layout";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonials = [
  {
    name: "هند",
    text: "الدليل غيّر طريقة تعاملي مع نفسي. صرت أسمع حدسي أكثر وأقلل التحليل اللي يعطّلني.",
    img: "/EBOOK-2//media/967b8debc3c1c603332bf406080557ed.jpg",
  },
  {
    name: "سارة",
    text: "التمارين عملية وسهلة التطبيق. حسيت بفرق من أول أسبوع في وضوحي وثقتي بنفسي.",
    img: "/EBOOK-2//media/967b8debc3c1c603332bf406080557ed.jpg",
  },
  {
    name: "ريم",
    text: "أخيراً فهمت ليش أرجع لنفس النقطة. الدليل بسيط وواضح وما فيه تحليل زائد يتعبني.",
    img: "/EBOOK-2//media/967b8debc3c1c603332bf406080557ed.jpg",
  },
  {
    name: "ريم",
    text: "أخيراً فهمت ليش أرجع لنفس النقطة. الدليل بسيط وواضح وما فيه تحليل زائد يتعبني.",
    img: "/EBOOK-2//media/967b8debc3c1c603332bf406080557ed.jpg",
  },
  {
    name: "ريم",
    text: "أخيراً فهمت ليش أرجع لنفس النقطة. الدليل بسيط وواضح وما فيه تحليل زائد يتعبني.",
    img: "/EBOOK-2//media/967b8debc3c1c603332bf406080557ed.jpg",
  },
];

function TestimonialCard({ name, text, img }) {
  return (
    <div className="flex h-full flex-col rounded-xl border border-gray-100 bg-white p-4 text-right shadow-sm sm:p-6">
      <div className="mb-3 flex gap-1 text-[#C5A059] sm:mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} size={16} fill="#C5A059" className="text-[#C5A059]" />
        ))}
      </div>
      <p className="mb-4 flex-1 text-sm leading-relaxed text-gray-700 sm:mb-6 sm:text-base cairo">
        {text}
      </p>
      <div className="flex items-center justify-end gap-3 border-t border-gray-50 pt-3 sm:pt-4">
        <h4 className="text-sm font-bold text-black sm:text-base cairo">{name}</h4>
        <img
          src={img}
          alt={name}
          className="h-10 w-10 shrink-0 rounded-full object-cover sm:h-12 sm:w-12"
        />
      </div>
    </div>
  );
}

function Customer() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full min-w-0 overflow-hidden"
    >
      <section id="testimonials" className="w-full py-16 md:py-20">
        <div className={pageWrap}>
          <h2 className="tajawal mb-8 text-center text-2xl font-bold text-black sm:mb-10 sm:text-2xl md:mb-12 md:text-3xl">
            ماذا قالت المشتركات؟
          </h2>

          <Swiper
            modules={[Pagination, Autoplay, Navigation]}
            spaceBetween={16}
            slidesPerView={1}
            pagination={{ clickable: true }}
            navigation={{
              nextEl: ".next-btn",
              prevEl: ".prev-btn",
            }}
            autoplay={{ delay: 3000 }}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1, spaceBetween: 20 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3, spaceBetween: 24 },
            }}
            className="w-full min-w-0 pb-12 sm:pb-16"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={`${t.name}-${index}`}>
                <TestimonialCard {...t} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </motion.div>
  );
}

export default Customer;
