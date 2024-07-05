import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { MainCaroselData } from "./MainCaroselData";
import HeightIconIcon from '@mui/icons-material/Height';



const MainCrosel = () => {
  // const navigate = use
  const items = MainCaroselData.map((item) => <img className="cursor-pointer w-full h-96" role="presentation"  src={item.image} alt="" />);
  return (
    <AliceCarousel
      justifyContent="center"
      items={items}
      disableButtonsControls
      autoPlay
      autoPlayInterval={1000}
      infinite       
    />
  );
}
export default MainCrosel;
