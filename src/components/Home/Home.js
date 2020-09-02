import React from "react";
import "../../scss/index.scss";
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeAchievements from "./HomeAchievements/HomeAchievements";
import HomeSteps from "./HomeSteps/HomeSteps";
import HomeAbout from "./HomeAbout/HomeAbout";
import HomeActivity from "./HomeActivity/HomeActivity";
import HomeContact from "./HomeContact/HomeContact";

const LandingPage = () => {
  return (
    <>
      <HomeHeader />
      <HomeAchievements />
      <HomeSteps />
      <HomeAbout />
      <HomeActivity />
      <HomeContact />
    </>
  );
};

export default LandingPage;
