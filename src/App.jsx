import React from "react";
import Services from "./components/Services";
import TopDestinations from "./components/TopDestinations";
import EasySteps from "./components/EasySteps";
import Testimonials from "./components/Testimonials";
import SubscriptionForm from "./components/Subscription";
import Footer from "./components/Footer";
import Home from "./components/Home";
function App() {
  return (
    <div className="font-sans">
      <Home />
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
