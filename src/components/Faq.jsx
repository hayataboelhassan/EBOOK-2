import { useState } from "react";

import { ChevronDown } from "lucide-react";

import { motion } from "framer-motion";

import { pageWrap } from "../utils/layout";



function Faq() {

  const [openIndex, setOpenIndex] = useState(null);



  const data = [

    {

      q: "هل يناسبني حتى لو كنت مبتدئة؟",

      a: "نعم، الدليل مصمم بطريقة بسيطة وعملية تناسب جميع المستويات.",

    },

    {

      q: "كم يستغرق إنهاء الدليل؟",

      a: "تطبقينه على وتيرتك الخاصة، بدون ضغط زمني.",

    },

    {

      q: "هل يحتوي على تمارين عملية؟",

      a: "نعم، تمارين تطبيقية من واقع الجلسات.",

    },

    {

      q: "هل أستلم الدليل مباشرة بعد الشراء؟",

      a: "نعم، تحصلين على رابط التحميل فوراً بعد إتمام الدفع.",

    },

  ];



  const toggle = (index) => {

    setOpenIndex(openIndex === index ? null : index);

  };



  return (

    <motion.div

      initial={{ opacity: 0, y: 80 }}

      whileInView={{ opacity: 1, y: 0 }}

      transition={{ duration: 0.8 }}

      viewport={{ once: true }}

      className="w-full min-w-0 overflow-x-hidden"

    >

      <section className="py-16 md:py-15">

        <div className={`${pageWrap} mx-auto max-w-3xl min-w-0`}>

          <h2 className="tajawal mb-10 text-center text-2xl font-bold text-black md:text-3xl">

            الأسئلة الشائعة

          </h2>



          <div className="space-y-3 md:px-30">

            {data.map((item, index) => (

              <div

                key={index}

                className="overflow-hidden rounded-xl border border-gray-100 bg-white shadow-sm  "

              >

                <button

                  type="button"

                  onClick={() => toggle(index)}

                  className="flex w-full cursor-pointer items-center justify-between gap-4 px-5 py-4 text-right"

                >

                  <span className="min-w-0 flex-1 text-base font-semibold text-black cairo">

                    {item.q}

                  </span>

                  <ChevronDown

                    className={`h-5 w-5 shrink-0 text-gray-400 transition-transform duration-300 ${

                      openIndex === index ? "rotate-180" : ""

                    }`}

                  />

                </button>



                {openIndex === index && (

                  <p className="border-t border-gray-50 px-5 pb-4 text-right leading-relaxed text-gray-600 cairo">

                    {item.a}

                  </p>

                )}

              </div>

            ))}

          </div>

        </div>

      </section>

    </motion.div>

  );

}



export default Faq;


