import { FiStar } from "react-icons/fi";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Small Business Owner",
    content: "This app saved me from a fraudulent transaction of ₹15,000. The instant alert gave me time to cancel the payment. Highly recommended!",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Priya Patel",
    role: "Freelancer",
    content: "I was skeptical at first, but after it detected a suspicious payment link, I'm a believer. The peace of mind is worth it.",
    rating: 5,
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Amit Joshi",
    role: "College Student",
    content: "Easy to use and effective. The transaction verification feature has saved me multiple times from fake UPI payment requests.",
    rating: 4,
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-16 bg-[#F8F9FA]">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-[#1E2A38] mb-4">What Our Users Say</h2>
          <p className="text-[#4B5563] max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our users have to say about our UPI fraud protection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition-all"
            >
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <FiStar
                    key={i}
                    className={`${i < testimonial.rating ? "text-[#FFB800] fill-[#FFB800]" : "text-gray-300"}`}
                  />
                ))}
              </div>
              <p className="text-[#4B5563] mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.name} 
                  className="w-12 h-12 rounded-full mr-4 object-cover"
                />
                <div>
                  <h4 className="font-semibold text-[#1E2A38]">{testimonial.name}</h4>
                  <p className="text-[#6B7280] text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;