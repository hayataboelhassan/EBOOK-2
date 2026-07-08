import {
  RotateCcw,
  Volume2,
  CircleDashed,
  Brain,
  HelpCircle,
  Play,
} from "lucide-react";
import { motion } from "framer-motion";
import { pageWrap } from "../utils/layout";
import { useRef } from "react";
const problems = [
  {
    icon: RotateCcw,
    text: "تبدين وما تستمرين وترجعين لنفس النقطة؟",
  },
  {
    icon: Volume2,
    text: "تلومين نفسك وصوتك الداخلي أعلى من حدسك؟",
  },
  {
    icon: CircleDashed,
    text: "تائهة.. وتعيدين النفس الدائرة؟",
  },
  {
    icon: Brain,
    text: "تحللين كثير وتتعبين أكثر",
  },
  {
    icon: HelpCircle,
    text: "تفهمين كل شيء بس ما يتغير شيء؟",
  },
];

function Bookobjectives() {
  const videoRef = useRef(null);
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="w-full min-w-0 overflow-x-hidden "
    >
      <section id="objectives" className="py-16 md:py-12 m-0">
        <div className={pageWrap}>
          <h2 className="tajawal mb-12 text-center text-2xl font-bold text-black md:text-3xl">
            يمكن هذي مشكلتك...
          </h2>

          <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
            {problems.map(({ icon: Icon, text }, index) => (
  <div
    key={text}
    className={`
      flex min-w-0 flex-col items-center rounded-xl border border-gray-100 bg-white p-5 text-center shadow-sm transition hover:shadow-md
      
      ${index === 4 ? "col-span-2 mx-auto w-[70%] sm:w-full lg:col-span-1" : ""}
    `}
  >
    <div className="mb-4 flex h-12 w-12 items-center justify-center">
      <Icon className="h-8 w-8 text-[#C5A059]" strokeWidth={1.5} />
    </div>

    <p className="text-base font-semibold leading-relaxed text-gray-800 sm:text-lg cairo">
      {text}
    </p>
  </div>
))}
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div
          className={`${pageWrap} flex min-w-0 flex-col items-center gap-10 md:flex-row md:gap-16`}
        >
          <div className="w-full min-w-0 text-center md:w-1/2 md:justify-center">
          
            <span className="mb-5 inline-block rounded-full border font-semibold border-[#C5A059] px-4 py-1 text-sm  text-[#C5A059] cairo">
           شاهدي كيف
          </span>
            <h2 className="tajawal mb-4 text-2xl font-bold text-black md:text-3xl">
              يعلمك هذا الدليل طريقة مختلفة للتعامل مع نفسك
            </h2>
            <p className="mb-6 leading-relaxed text-gray-600 cairo font-semibold">
              فيديو قصير يوضح لك الفكرة الأساسية للدليل وكيف ممكن يغير طريقة
              تفكيرك وحياتك.
            </p>
          <button
  type="button"
  onClick={() => videoRef.current?.play()}
  className="mx-auto flex max-w-full items-center gap-2 rounded-4xl bg-black px-6 py-3 font-bold text-white transition hover:bg-gray-800 sm:px-8 cairo"
>
  <Play className="h-4 w-4 fill-white" />
  شاهدي الفيديو الآن
</button>
          </div>

         <div className="relative w-full min-w-0 md:w-1/2">
  <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
    
    <video
    ref={videoRef}
      src="media/copy_CACC8A8D-A65A-4D0A-A12D-3AAA1C7076F6.mov"
      controls
      className="aspect-video w-full object-cover"
    />

  </div>
</div>
        </div>
      </section>
    </motion.div>
  );
}

export default Bookobjectives;
