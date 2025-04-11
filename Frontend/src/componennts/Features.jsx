import { FiShield, FiAlertCircle, FiBell, FiLock } from "react-icons/fi";
import { motion } from "framer-motion";

const Features = () => {
  const features = [
    {
      icon: <FiShield className="text-[#17C3B2] text-3xl" />,
      title: "Real-time Protection",
      description: "Our AI monitors transactions 24/7 to detect and block suspicious activity instantly.",
    },
    {
      icon: <FiAlertCircle className="text-[#17C3B2] text-3xl" />,
      title: "Fraud Alerts",
      description: "Get instant notifications when potential fraud is detected on your account.",
    },
    {
      icon: <FiBell className="text-[#17C3B2] text-3xl" />,
      title: "Transaction Verification",
      description: "Verify unknown transactions with our two-step confirmation system.",
    },
    {
      icon: <FiLock className="text-[#17C3B2] text-3xl" />,
      title: "Secure Encryption",
      description: "All your data is encrypted end-to-end for maximum security and privacy.",
    },
  ];

  return (
    <section id="features" className="py-16 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-[#1E2A38] mb-4">Advanced Protection Features</h2>
          <p className="text-[#4B5563] max-w-2xl mx-auto">
            Our app provides comprehensive protection against all types of UPI fraud and scams.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.3 }
              }}
              className="relative"
            >
              {/* Teal background that appears on hover */}
              <motion.div
                className="absolute inset-0 bg-[#17C3B2] rounded-xl"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.1 }}
                transition={{ duration: 0.3 }}
              />
              
              {/* Main card content */}
              <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 relative z-10 h-full">
                <div className="mb-6 bg-[#17C3B2]/10 p-3 rounded-full w-fit">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-[#1E2A38] mb-3">
                  {feature.title}
                </h3>
                <p className="text-[#4B5563]">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;