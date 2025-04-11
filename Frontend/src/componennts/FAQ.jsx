import { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronDown, FiChevronUp, FiShield, FiAlertCircle, FiLock } from "react-icons/fi";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Is it safe?",
      answer: "Absolutely. Our app uses bank-grade encryption and never stores your UPI PIN or sensitive credentials. We only monitor transaction patterns to detect anomalies.",
      icon: <FiShield className="text-[#17C3B2] text-xl" />
    },
    {
      question: "How does it detect fraud?",
      answer: "Our AI analyzes transaction patterns, sender details, and payment requests against known fraud patterns. It alerts you immediately if anything suspicious is detected.",
      icon: <FiAlertCircle className="text-[#17C3B2] text-xl" />
    },
    {
      question: "Do I need to share personal data?",
      answer: "We only require basic information to link your UPI IDs. We don't access your transaction history or account balances - we only monitor payment requests in real-time.",
      icon: <FiLock className="text-[#17C3B2] text-xl" />
    }
  ];

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-[#1E2A38] mb-4">Frequently Asked Questions</h2>
          <p className="text-[#4B5563] max-w-2xl mx-auto">
            Get answers to common questions about UPI Shield and how it protects you.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="mb-4 border border-gray-200 rounded-xl overflow-hidden hover:shadow-md transition-all"
            >
              <button
                className="flex items-center justify-between w-full p-6 text-left focus:outline-none"
                onClick={(e) => {
                  e.preventDefault();
                  toggleFAQ(index);
                }}
                aria-expanded={activeIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex items-center">
                  <div className="mr-4">
                    {faq.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[#1E2A38]">
                    {faq.question}
                  </h3>
                </div>
                {activeIndex === index ? (
                  <FiChevronUp className="text-[#17C3B2] text-xl" />
                ) : (
                  <FiChevronDown className="text-[#17C3B2] text-xl" />
                )}
              </button>
              
              <motion.div
                id={`faq-answer-${index}`}
                initial={{ opacity: 0, height: 0 }}
                animate={activeIndex === index ? 
                  { opacity: 1, height: 'auto' } : 
                  { opacity: 0, height: 0 }
                }
                transition={{ duration: 0.3 }}
                className="px-6 pb-6 ml-12 text-[#4B5563]"
              >
                {faq.answer}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;