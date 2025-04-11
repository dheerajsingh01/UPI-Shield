import { motion } from 'framer-motion';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook } from 'react-icons/fa';

const AuthSocial = () => {
  return (
    <div className="mt-6 grid grid-cols-2 gap-3">
      <motion.button
        type="button"
        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-[#1E2A38] hover:bg-gray-50"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <FcGoogle className="h-5 w-5" />
        <span className="ml-2">Google</span>
      </motion.button>

      <motion.button
        type="button"
        className="w-full inline-flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-[#1E2A38] hover:bg-gray-50"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
      >
        <FaFacebook className="h-5 w-5 text-blue-600" />
        <span className="ml-2">Facebook</span>
      </motion.button>
    </div>
  );
};

export default AuthSocial;