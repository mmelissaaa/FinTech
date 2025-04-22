import React from "react";
import About from "./About";
import Discover from "./Discover";
import Services from "./Services";
import Header from "./Header";
import VisionSection from "./VisionSection";

const Home = () => {
  return (
    <div>
      <Header />
      <About />
      <VisionSection />
      <Services />
    </div>
  );
};

export default Home;
