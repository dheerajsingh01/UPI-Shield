import { motion } from 'framer-motion';
import { FiShield } from 'react-icons/fi';

const AuthLayout = ({ children, title, subtitle }) => {
  return (
    <div className="min-h-screen bg-[#F8F9FA] flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sm:mx-auto sm:w-full sm:max-w-md"
      >
        <div className="flex justify-center">
          <FiShield className="text-[#17C3B2] text-4xl" />
        </div>
        <h2 className="mt-6 text-center text-3xl font-bold text-[#1E2A38]">
          {title}
        </h2>
        <p className="mt-2 text-center text-sm text-[#4B5563]">
          {subtitle}
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
      >
        <div className="bg-white py-8 px-4 shadow-lg rounded-xl sm:px-10 border border-gray-100">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export default AuthLayout;