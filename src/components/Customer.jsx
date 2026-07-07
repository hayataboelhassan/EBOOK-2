
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import { Star ,Quote} from "lucide-react";
import { pageWrap } from "../utils/layout";
import { useState } from "react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// const testimonials = [
//   { image: "media/WhatsApp Image 2026-06-30 at 11.58.39 PM (2).jpeg" },
//   { image: "media/WhatsApp Image 2026-06-30 at 11.58.39 PM (1).jpeg" },
//   { image: "media/WhatsApp Image 2026-06-30 at 11.58.39 PM.jpeg" },
//   { image: "media/WhatsApp Image 2026-06-30 at 11.58.38 PM (2).jpeg" },
//   { image: "media/WhatsApp Image 2026-06-30 at 11.58.38 PM (1).jpeg" },
//   { image: "media/WhatsApp Image 2026-06-30 at 11.58.38 PM.jpeg" },
//  { image: "media/WhatsApp Image 2026-06-30 at 11.58.37 PM.jpeg" },

// ];
const testimonials = [
  { text: "حبيبتى حابه اشكرك كتير على هالجائزه يلى كانت قيمتها اكبر بكتير ,شكرالوقتك وجهدك وكلامك الله يوفقك يارب " },
   { text:"والله بجد كتير غيرلى تفكيرى .كلامك"  },
   { text:"سبحان الله دماغ الانسان كيف عنيده يحاول يلاقى تبرير عالتمرين اللى قلتيه امس ,تمرين فعلا فعال ولكن يجى يقول بالله فيه"  },
   { text:"الله يبارك فرزقك وعملك,قبل يومين جهزت اهداف السنه الجديده طلع لى هدف غريب عجيب ودى اجرب الغوص" },
   { text:"انا مرا فخوره فى نفسى مرا فوق ماتتخيلى باقى دحين افوز  مع الكلاينت واقفلها ,واول ماجانى دا الاحساس انتى اول وحده فكرت اكلمها واشاركها الموضوع لانو ساعدتينى مرا كتير وربى رسلك ليا فى الوقت المناسب , ودا لو كان فخر ليا كمان فخر ليكى كمان انو بتصنعى اثر وبتساعدى وتعبك ما بيروح على الفاضى هذا غير الاجر"  },
   { text:"طبعا كل الشكر لغفران الى خلتنى ارجع لفطرتى السليمه فعلا رأسى فاضى "  },
   { text:"انى متاكده لو خديتها الجلسه مع مدرب تانى كان حيقولى عندك صدمات وبدك وبدك وبدك هك كانت حالتى حتتازم بينما انتى سهلتيييه بطريقه عجيبه وكانت فعاله فعلا فعلا انى زى ماقلتى عنى  , الله الله الله سبحان الله ماابسط الحل كله بفضل الله ثم انتى ,الله يسعدك الله يسعدك غفورة جزاك الله كل خير مستحيل اتفكرك وما ادعيلك سهلتى حياتى " },


];

// function TestimonialCard({  image}) {
//   return (
// //       <motion.div
// //   className="flex h-full flex-col items-center justify-between rounded-2xl border border-neutral-200/80 bg-white px-5 py-7 text-center shadow-[0_1px_3px_rgba(0,0,0,0.04)] sm:px-4 sm:py-10"
// //   initial="rest"
// //   whileHover="hover"
// // >
// //   <Quote
// //     className="h-6 w-6 text-[#C5A059]"
// //     strokeWidth={1.5}
// //   />

// //   <p className="flex-1 my-6 text-sm leading-relaxed text-neutral-700 sm:text-base cairo">
// //     {text}
// //   </p>

// //   <div className="flex items-center justify-center gap-0.5">
// //     {Array.from({ length: 5 }).map((_, i) => (
// //       <Star
// //         key={i}
// //         size={16}
// //         fill="#C5A059"
// //         className="text-[#C5A059]"
// //       />
// //     ))}
// //   </div>
// // </motion.div>
//      <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
//       <img
//         src={image}
//         alt="Customer Review"
//         className="h-full w-full object-cover"
//       />
//     </div>
//   );
// }
function TestimonialCard({ text }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
className={`flex flex-col rounded-2xl border border-neutral-200/80 bg-white p-6 text-center shadow-[0_1px_3px_rgba(0,0,0,0.04)] ${
  expanded ? "h-auto" : "h-[250px]"
}`}
layout      whileHover={{ y: -5 }}
      transition={{ duration: 0.25 }}
    >
      <Quote
        className="mx-auto mb-5 h-6 w-6 text-[#C5A059]"
        strokeWidth={1.5}
      />

    <div className="flex-1">
      <p
  className={`text-sm leading-8 text-neutral-700 sm:text-base cairo ${
    expanded ? "" : "line-clamp-5"
  }`}
>
  {text}
</p>

        {text.length > 120 && (
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-3 text-sm font-semibold text-[#C5A059] transition hover:underline"
          >
            {expanded ? "عرض أقل" : "اقرأ المزيد"}
          </button>
        )}
      </div>

      <div className="mt-5 flex justify-center gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={16}
            fill="#C5A059"
            className="text-[#C5A059]"
          />
        ))}
      </div>
    </motion.div>
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
