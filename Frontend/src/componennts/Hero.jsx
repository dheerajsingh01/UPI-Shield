import { motion } from "framer-motion";
import { FiPlay, FiShield, FiAlertTriangle } from "react-icons/fi";

const Hero = () => {
  return (
    <section className="py-16 md:py-24 bg-[#F8F9FA]">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        {/* Left Content */}
        <div className="md:w-1/2 mb-12 md:mb-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center mb-4"
          >
            <FiShield className="text-[#17C3B2] text-2xl mr-2" />
            <span className="text-sm font-medium text-[#1E2A38] bg-[#17C3B2]/10 px-3 py-1 rounded-full">
              UPI Fraud Protection
            </span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-[#1E2A38] mb-6 leading-tight"
          >
            Stay Safe. Stay Smart.<br />
            <span className="text-[#17C3B2]">Detect UPI Frauds Instantly.</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg text-gray-600 mb-8 max-w-lg"
          >
            Our intelligent system helps you identify and prevent UPI scams in real time.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4"
          >
            <button className="bg-[#1E2A38] text-white px-8 py-3 rounded-lg hover:bg-[#1E2A38]/90 transition font-medium shadow-md">
              Get Started
            </button>
            <button className="border border-[#1E2A38] text-[#1E2A38] px-8 py-3 rounded-lg hover:bg-[#1E2A38]/10 transition font-medium">
              Learn More
            </button>
            <button className="flex items-center justify-center text-[#1E2A38] px-6 py-3 rounded-lg hover:bg-gray-100 transition font-medium">
              <FiPlay className="mr-2 text-[#17C3B2]" />
              Try Demo
            </button>
          </motion.div>
          
          {/* Fraud Alert Badge */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8 bg-[#FF6B6B]/10 p-4 rounded-lg border-l-4 border-[#FF6B6B]"
          >
            <div className="flex items-start">
              <FiAlertTriangle className="text-[#FF6B6B] mt-1 mr-3 flex-shrink-0" />
              <p className="text-sm text-gray-700">
                <span className="font-semibold text-[#FF6B6B]">Warning:</span> UPI frauds increased by 47% in last quarter. Protect yourself now.
              </p>
            </div>
          </motion.div>
        </div>
        
        {/* Right Content */}
        <div className="md:w-1/2">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Demo Video Placeholder */}
            <div className="bg-white p-1 rounded-2xl shadow-xl overflow-hidden">
              <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-xl overflow-hidden relative">
                {/* Video placeholder with play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-16 h-16 bg-[#17C3B2] rounded-full flex items-center justify-center text-white shadow-lg">
                    <FiPlay className="text-2xl ml-1" />
                  </div>
                </div>
              </div>
              
              {/* Demo UI Elements */}
              <div className="absolute -bottom-4 -right-4 bg-white p-3 rounded-lg shadow-md border border-gray-200">
                <div className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-[#FF6B6B] mr-2"></div>
                  <span className="text-xs font-medium text-[#1E2A38]">Fraud Detected</span>
                </div>
              </div>
            </div>
            
            {/* Animated floating elements */}
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute -top-6 -left-6 bg-[#17C3B2]/10 p-3 rounded-full"
            >
              <div className="w-12 h-12 bg-[#17C3B2] rounded-full flex items-center justify-center text-white">
                <FiShield className="text-xl" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;