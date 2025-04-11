import { FiDownload, FiUserCheck, FiShield } from "react-icons/fi";
import { motion } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      icon: <FiDownload className="text-[#17C3B2] text-2xl" />,
      title: "Download the App",
      description: "Install our app from Play Store or App Store",
      color: "bg-[#17C3B2]",
    },
    {
      icon: <FiUserCheck className="text-[#17C3B2] text-2xl" />,
      title: "Link Your UPI ID",
      description: "Securely connect your UPI accounts in minutes",
      color: "bg-[#1E2A38]",
    },
    {
      icon: <FiShield className="text-[#17C3B2] text-2xl" />,
      title: "Stay Protected",
      description: "Our AI monitors all transactions for suspicious activity",
      color: "bg-[#FF6B6B]",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-[#1E2A38] mb-4">How It Works</h2>
          <p className="text-[#4B5563] max-w-2xl mx-auto">
            Getting protected from UPI fraud is quick and easy with our simple three-step process.
          </p>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-12 md:space-y-0 md:space-x-8 lg:space-x-12">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center max-w-xs relative"
            >
              {/* Step number */}
              <div className={`absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 ${step.color} text-white rounded-full flex items-center justify-center font-bold`}>
                {index + 1}
              </div>
              
              <div className="bg-white p-4 rounded-full shadow-lg mb-6 border-2 border-gray-100">
                {step.icon}
              </div>
              <div className="bg-[#F8F9FA] p-6 rounded-xl shadow-sm w-full border border-gray-200">
                <h3 className="text-xl font-semibold text-[#1E2A38] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#4B5563]">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;