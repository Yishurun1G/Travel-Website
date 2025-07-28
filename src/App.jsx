import React from "react";
import Services from "./components/Services";
import TopDestinations from "./components/TopDestinations";
import EasySteps from "./components/EasySteps";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";
import Home from "./components/Home";
import BrandSection from "./components/Brands";
import SubscribeSection from "./components/Subscription";
function App() {
  return (
    <div className="font-sans">
      <Home />
      <Services />
      <TopDestinations />
      <EasySteps />
      <Testimonials />
      <BrandSection />
      <SubscribeSection />
      <Footer />
    </div>
  );
}

export default App;
