import React from "react";
import MainCrosel from "../components/HomeCarosel/MainCrosel";
import HomeSectionCarosel from "../components/HomeSectionCarosel/HomeSectionCarosel";


const HomePage = () => {
  return (
    <div>
      <MainCrosel />
      <div className="space-y-10 py-20 flex flex-col justify-center">
        <HomeSectionCarosel />
        <HomeSectionCarosel />
        <HomeSectionCarosel />
        
      </div>
    </div>
  );
};

export default HomePage;
