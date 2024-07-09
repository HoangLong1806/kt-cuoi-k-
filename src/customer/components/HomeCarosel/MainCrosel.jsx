import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MainCaroselData } from "./MainCaroselData";

const MainCrosel = () => {
  const items = MainCaroselData.map((item, index) => (
    <div key={index} className="cursor-pointer object-center">
      <img
        className="block w-full h-[25rem] object-cover object-scale-down"
        src={item.image}
        alt={item.altText}
      />
    </div>
  ));

  return (
    <AliceCarousel
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={1000}
      infinite
    />
  );
}

export default MainCrosel;
