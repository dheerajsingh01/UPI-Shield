import { useState } from "react";
import { FiMenu, FiX, FiShield, FiUser, FiArrowRight } from "react-icons/fi";
import { motion } from "framer-motion";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Navigation items
  const navItems = [
    { name: "Features", href: "#features" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 cursor-pointer"
          >
            <FiShield className="text-[#17C3B2] text-2xl" />
            <span className="text-xl font-bold text-[#1E2A38]">UPI Shield</span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="relative text-[#1E2A38] hover:text-[#17C3B2] transition-colors px-3 py-2 font-medium"
                whileHover={{ scale: 1.05 }}
              >
                {item.name}
                <motion.span
                  className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#17C3B2]"
                  whileHover={{ width: "100%" }}
                  transition={{ duration: 0.3 }}
                />
              </motion.a>
            ))}

            {/* Get Started Button (moved to middle) */}
            <motion.button
              className="flex items-center space-x-2 bg-[#1E2A38] hover:bg-[#0F172A] text-white px-5 py-2.5 rounded-lg transition-colors shadow-md font-medium"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 4px 12px rgba(30, 42, 56, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span>Get Started</span>
              <FiArrowRight className="text-lg" />
            </motion.button>

            {/* Login Button (styled like primary button) */}
            <motion.button
              className="flex items-center space-x-2 bg-[#17C3B2] hover:bg-[#0D9488] text-white px-5 py-2.5 rounded-lg transition-colors shadow-md font-medium"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 4px 12px rgba(23, 195, 178, 0.3)"
              }}
              whileTap={{ scale: 0.98 }}
            >
              <FiUser className="text-lg" />
              <span>Login</span>
            </motion.button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#1E2A38] p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <FiX size={24} className="text-[#FF6B6B]" />
            ) : (
              <FiMenu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white py-4 px-4 shadow-lg rounded-b-lg"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-[#1E2A38] hover:text-[#17C3B2] transition-colors px-3 py-2 font-medium border-b border-gray-100"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              <div className="flex flex-col space-y-3 pt-2">
                <button className="flex items-center justify-center space-x-2 bg-[#1E2A38] hover:bg-[#0F172A] text-white px-4 py-2.5 rounded-lg transition-colors shadow-md font-medium">
                  <span>Get Started</span>
                  <FiArrowRight className="text-lg" />
                </button>

                <button className="flex items-center justify-center space-x-2 bg-[#17C3B2] hover:bg-[#0D9488] text-white px-4 py-2.5 rounded-lg transition-colors shadow-md font-medium">
                  <FiUser className="text-lg" />
                  <span>Login</span>
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </header>
  );
};

export default Header;