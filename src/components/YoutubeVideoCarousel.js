import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import YoutubeVideos from "./YoutubeVideos";

import "./YoutubeVideoCarousel.css";

const YoutubeVideoCarousel = () => {
  const [sliderRef, setSliderRef] = useState(null);

  const settings = {
    arrows: false,
    dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 770,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="carouselContainer container">
      <div className="controls">
        <span
          class="material-symbols-outlined prevIcon"
          onClick={sliderRef?.slickPrev}
        >
          arrow_back_ios
        </span>
        <span
          class="material-symbols-outlined nextIcon"
          onClick={sliderRef?.slickNext}
        >
          arrow_forward_ios
        </span>
      </div>
      <Slider ref={setSliderRef} {...settings}>
        <YoutubeVideos embedId="q0mbKsKG-ng" />
        <YoutubeVideos embedId="PmIpYS59hQg" />
        <YoutubeVideos embedId="xWmw6MyEnB8" />
        <YoutubeVideos embedId="r6HTCiPwJr8" />
      </Slider>
    </div>
  );
};

export default YoutubeVideoCarousel;
