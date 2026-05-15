import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const data = [
    {
      q: "هل يناسبني لو أنا مبتدئة؟",
      a: "نعم.",
    },
    {
      q: "كم مدته؟",
      a: ".تطبقينه حسب سرعتك ",
    },
    {
      q:  " هل فيه تمارين ؟ ",
      a:   " . نعم، عملية",
    },
    {
  q: "هل أحمله مباشرة؟",
  a: "نعم فور الشراء. النسخة الأولى بسعر الإطلاق 9$، باقي أيام قليلة."
}
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <motion.div
  initial={{ opacity: 0, y: 100 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
>
    <div className="py-20 px-6 md:px-40 ">

  <div className="flex flex-col items-center justify-center pb-20 gap-3">

  {/* Title with lines */}

 <div className="flex items-center justify-center gap-4">

    <span className="w-20 h-[2px] bg-[#cb9f30] mt-3"></span>

    <h1 className="text-3xl font-bold  text-center tajawal">
  الأسئلة الشائعة
    </h1>

    <span className="w-20 h-[2px] bg-[#cb9f30] mt-3"></span>

  </div>
  {/* Subtitle under title */}
</div>
      {/* FAQ */}
      <div className="space-y-4 mx-50">

        {data.map((item, index) => (
          <div
  key={index}
  className="border-[#e3b723] border rounded-4xl p-3 shadow-sm hover:shadow-md transition bg-white text-right"
>

  {/* Question */}
  <div
    onClick={() => toggle(index)}
    className="flex items-center cursor-pointer flex-row-reverse justify-between"
  >

    {/* Question Text */}
    <h2 className="font-semibold text-lg flex-1 text-right cairo">
      {item.q}
    </h2>

    {/* Icon */}
    <ChevronDown
      className={`transition-transform duration-300 text-[#e3b723] ${
        openIndex === index ? "rotate-180" : ""
      }`}
    />

  </div>

  {/* Answer */}
  {openIndex === index && (
    <p className="mt-4 text-gray-600 leading-relaxed text-right cairo">
      {item.a}
    </p>
  )}

</div>
        ))}

      </div>
    </div>
    </motion.div>
  );
}

export default Faq;