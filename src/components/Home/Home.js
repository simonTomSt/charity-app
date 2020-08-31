import React from "react";
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeAchievements from "./HomeAchievements/HomeAchievements";
import HomeSteps from "./HomeSteps/HomeSteps";
import HomeAbout from "./HomeAbout/HomeAbout";

const LandingPage = () => {
  return (
    <>
      <HomeHeader />
      <HomeAchievements />
      <HomeSteps />
      <HomeAbout />
    </>
  );
};

export default LandingPage;
