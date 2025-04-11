import { FiFacebook, FiTwitter, FiInstagram, FiLinkedin, FiShield } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-[#1E2A38] text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Company Info */}
          <div>
            <div className="flex items-center mb-4">
              <FiShield className="text-[#17C3B2] text-2xl mr-2" />
              <span className="text-xl font-bold">UPI Shield</span>
            </div>
            <p className="text-[#94A3B8] mb-4">
              Advanced protection against UPI fraud and scams.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-[#94A3B8] hover:text-[#17C3B2] transition">
                <FiFacebook size={20} />
              </a>
              <a href="#" className="text-[#94A3B8] hover:text-[#17C3B2] transition">
                <FiTwitter size={20} />
              </a>
              <a href="#" className="text-[#94A3B8] hover:text-[#17C3B2] transition">
                <FiInstagram size={20} />
              </a>
              <a href="#" className="text-[#94A3B8] hover:text-[#17C3B2] transition">
                <FiLinkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#94A3B8] hover:text-[#17C3B2] transition">Home</a></li>
              <li><a href="#features" className="text-[#94A3B8] hover:text-[#17C3B2] transition">Features</a></li>
              <li><a href="#how-it-works" className="text-[#94A3B8] hover:text-[#17C3B2] transition">How It Works</a></li>
              <li><a href="#testimonials" className="text-[#94A3B8] hover:text-[#17C3B2] transition">Testimonials</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Support</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-[#94A3B8] hover:text-[#17C3B2] transition">Help Center</a></li>
              <li><a href="#" className="text-[#94A3B8] hover:text-[#17C3B2] transition">Privacy Policy</a></li>
              <li><a href="#" className="text-[#94A3B8] hover:text-[#17C3B2] transition">Terms of Service</a></li>
              <li><a href="#" className="text-[#94A3B8] hover:text-[#17C3B2] transition">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Stay Updated</h4>
            <p className="text-[#94A3B8] mb-4">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="bg-[#0F172A] text-white px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-[#17C3B2] w-full"
              />
              <button className="bg-[#17C3B2] hover:bg-[#0D9488] text-white px-4 py-2 rounded-r-lg transition">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="border-t border-[#334155] pt-8 text-center text-[#94A3B8]">
          <p>© {new Date().getFullYear()} UPI Shield. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;