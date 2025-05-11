import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import WhyChooseUs from "./components/WhyChooseUs";
import Testimonials from "./components/Testimonials";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import ChatWidget from "./components/ChatWidget";

function App() {
  return (
    <div className="min-h-screen dark:bg-gray-900 dark:text-white">
      <Navbar />
      <Hero />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <ContactForm />
      <Footer />
      <ChatWidget />
    </div>
  );
}

export default App;
