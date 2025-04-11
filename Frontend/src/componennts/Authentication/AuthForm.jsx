import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiLock, FiUser } from 'react-icons/fi';

const AuthForm = ({ type, onSubmit, loading }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {type === 'signup' && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <label htmlFor="name" className="block text-sm font-medium text-[#1E2A38]">
            Full Name
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <FiUser className="h-5 w-5 text-[#17C3B2]" />
            </div>
            <input
              id="name"
              name="name"
              type="text"
              required
              value={formData.name}
              onChange={handleChange}
              className="focus:ring-[#17C3B2] focus:border-[#17C3B2] block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2 border"
              placeholder="John Doe"
            />
          </div>
        </motion.div>
      )}

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-[#1E2A38]">
          Email address
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiMail className="h-5 w-5 text-[#17C3B2]" />
          </div>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            value={formData.email}
            onChange={handleChange}
            className="focus:ring-[#17C3B2] focus:border-[#17C3B2] block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2 border"
            placeholder="you@example.com"
          />
        </div>
      </div>

      <div>
        <label htmlFor="password" className="block text-sm font-medium text-[#1E2A38]">
          Password
        </label>
        <div className="mt-1 relative rounded-md shadow-sm">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiLock className="h-5 w-5 text-[#17C3B2]" />
          </div>
          <input
            id="password"
            name="password"
            type="password"
            autoComplete={type === 'signup' ? 'new-password' : 'current-password'}
            required
            value={formData.password}
            onChange={handleChange}
            minLength={type === 'signup' ? 6 : 1}
            className="focus:ring-[#17C3B2] focus:border-[#17C3B2] block w-full pl-10 sm:text-sm border-gray-300 rounded-md py-2 border"
            placeholder={type === 'signup' ? 'At least 6 characters' : 'Your password'}
          />
        </div>
      </div>

      {type === 'login' && (
        <div className="flex items-center justify-end">
          <div className="text-sm">
            <a href="#" className="font-medium text-[#17C3B2] hover:text-[#0D9488]">
              Forgot your password?
            </a>
          </div>
        </div>
      )}

      <div>
        <motion.button
          type="submit"
          className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#17C3B2] hover:bg-[#0D9488] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#17C3B2]"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          disabled={loading}
        >
          {loading ? (
            'Processing...'
          ) : type === 'login' ? (
            'Sign in'
          ) : (
            'Create account'
          )}
        </motion.button>
      </div>
    </form>
  );
};

export default AuthForm;