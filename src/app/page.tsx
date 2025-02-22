import React from "react";
import Banner from "./components/homeui/Banner";
import FitnessHighlights from "./components/homeui/FitnessHighlights";
import CallToAction from "./components/homeui/CallToAction";
import Sponsor from "./components/homeui/Sponsor";

const HomePage = () => {
  return (
    <>
      <Banner />
      <FitnessHighlights />
      <CallToAction />
      <Sponsor />
    </>
  );
};

export default HomePage;
