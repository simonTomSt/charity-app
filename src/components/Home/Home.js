import React from "react";
import "../../scss/index.scss";
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeAchievements from "./HomeAchievements/HomeAchievements";
import HomeSteps from "./HomeSteps/HomeSteps";
import HomeAbout from "./HomeAbout/HomeAbout";
import HomeActivity from "./HomeActivity/HomeActivity";

const LandingPage = () => {
  return (
    <>
      <HomeHeader />
      <HomeAchievements />
      <HomeSteps />
      <HomeAbout />
      <HomeActivity />
    </>
  );
};

export default LandingPage;
