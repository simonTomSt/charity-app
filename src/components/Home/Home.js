import React from "react";
import "../../scss/index.scss";
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeAchievements from "./HomeAchievements/HomeAchievements";
import HomeSteps from "./HomeSteps/HomeSteps";
import HomeAbout from "./HomeAbout/HomeAbout";
import HomeActivity from "./HomeActivity/HomeActivity";
import Contact from "../Generic/Contact/Contact";

const LandingPage = () => {
  return (
    <>
      <HomeHeader />
      <HomeAchievements />
      <HomeSteps />
      <HomeAbout />
      <HomeActivity />
      <Contact />
    </>
  );
};

export default LandingPage;
