import { motion } from "framer-motion";
import { FiShield, FiDownload } from "react-icons/fi";

const CTABanner = () => {
  return (
    <section className="py-16 bg-[#1E2A38] text-white">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="flex justify-center mb-6">
            <FiShield className="text-[#17C3B2] text-4xl" />
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            <span className="block">Protect yourself now.</span>
            <span className="text-[#17C3B2]">Stay one step ahead of fraud.</span>
          </h2>
          
          <p className="text-[#94A3B8] max-w-2xl mx-auto mb-8 text-lg">
            Join thousands of users who've secured their UPI transactions with our trusted protection system.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center bg-[#17C3B2] hover:bg-[#0D9488] text-white px-8 py-3 rounded-lg transition-all shadow-lg font-medium"
            >
              <FiDownload className="mr-2" />
              Download Now
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center border-2 border-white text-white hover:bg-white hover:text-[#1E2A38] px-8 py-3 rounded-lg transition-all font-medium"
            >
              See How It Works
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;