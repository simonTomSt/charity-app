import React from "react";
import HomeHeader from "./HomeHeader/HomeHeader";
import HomeAchievements from "./HomeAchievements/HomeAchievements";
import HomeSteps from "./HomeSteps/HomeSteps";

const LandingPage = () => {
  return (
    <>
      <HomeHeader />
      <HomeAchievements />
      <HomeSteps />
    </>
  );
};

export default LandingPage;
