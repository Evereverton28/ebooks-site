import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";
import About from "../components/About";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Testimonials />
      <Pricing />
      <Footer />
    </div>
  );
}

export default LandingPage;
