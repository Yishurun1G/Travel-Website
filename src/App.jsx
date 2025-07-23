import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import TopDestinations from "./components/TopDestinations";
import EasySteps from "./components/EasySteps";
import Testimonials from "./components/Testimonials";
import SubscriptionForm from "./components/Subscription";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="font-sans">
      <Navbar />
      <Hero />
      <Services />
      <TopDestinations />
      <EasySteps />
      <Testimonials />
      <SubscriptionForm />
      <Footer />
    </div>
  );
}

export default App;
