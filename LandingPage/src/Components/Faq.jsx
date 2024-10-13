import React, { useState } from 'react';

function Faq() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const questions = [
    {
      question: "Who Should Enroll?",
      answer:
        "Students of psychology, counseling psychologists, mental health professionals, psychotherapists, clinical psychologists, psychiatric social workers, psychiatrists, and anyone interested in the field of mental health.",
    },
    {
      question: "What is the Dutarion of This Course?",
      answer:
        "The course is one hour in online mode.",
    },
    {
      question: "Who Should I Contact If I Have Additional Details?",
      answer:
        "For any additional query or more details you may contact us on +91 8128751100.",
    },
   
  ];

  return (
    <section className="text-[#19575B] bg-background py-10 px-4 md:px-8">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-10 ">FAQ's</h1>

      <div className="max-w-3xl mx-auto space-y-4">
        {questions.map((item, index) => (
          <div key={index} className="border-b border-orange">
            <button
              className="w-full bg-background flex justify-between items-center py-4 px-3 text-lg md:text-xl font-semibold focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span>{item.question}</span>
              <i
                className={`fas fa-chevron-down transform transition-transform duration-300 ${
                  openIndex === index ? 'rotate-180' : ''
                }`}
              ></i>
            </button>
            <p
              className={`text-lg transition-all duration-500 overflow-hidden ${
                openIndex === index ? 'max-h-40 opacity-100 py-4 px-3' : 'max-h-0 opacity-0'
              }`}
            >
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Faq;
