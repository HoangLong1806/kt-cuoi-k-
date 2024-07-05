import React from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import HomeSectionCard from "../HomeSectionCard/HomeSectionCard";
import Button from '@mui/material/Button';
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";

const HomeSectionCarosel = () => {
  const responsive = {
    0: { items: 1 },
    720: { items: 3 },
    1024: { items: 5 },
  };

  const items = [1, 1, 1, 1, 1].map((item, index) => (
    <HomeSectionCard key={index} />
  ));

  return (
    <div className="relative px-4 lg:px-8">
      <div className="relative p-5">
        <AliceCarousel
          items={items}
          disableButtonsControls
          infinite
          responsive={responsive}
        />
        <Button
          variant="contained"
          style={{
            position: "absolute",
            top: "8rem",
            right: "0",
            transform: "rotate(90deg) translateX(50%)", // Fixed typo and updated order
          }}
          aria-label="next"
        >
          <KeyboardArrowLeftIcon style={{ transform: "rotate(-90deg)" }} />
        </Button>
      </div>
    </div>
  );
};

export default HomeSectionCarosel;
