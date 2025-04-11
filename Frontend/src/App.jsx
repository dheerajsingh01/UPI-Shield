import { motion } from "framer-motion";
import Header from "./componennts/Header.jsx";
import Hero from "./componennts/Hero.jsx";
import Features from "./componennts/Features.jsx";
import HowItWorks from "./componennts/ HowItWorks.jsx";
import Testimonials from "./componennts/Testimonials.jsx";
import FAQ from "./componennts/FAQ.jsx";
import CTABanner from "./componennts/CTABanner.jsx";
import Footer from "./componennts/Footer.jsx";

function App() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <Testimonials />
        <FAQ/>
        <CTABanner/>
      </main>
      <Footer />
    </div>
  );
}

export default App;