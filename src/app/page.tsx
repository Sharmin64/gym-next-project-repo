import React from "react";
import Banner from "./components/homeui/Banner";
import FitnessHighlights from "./components/homeui/FitnessHighlights";
import CallToAction from "./components/homeui/CallToAction";

const HomePage = () => {
  return (
    <>
      <Banner />
      <FitnessHighlights />
      <CallToAction />
    </>
  );
};

export default HomePage;
