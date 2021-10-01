import React from "react";
import faker from "faker";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useMediaQuery } from "react-responsive";
import "../../../App.css";
import {
  SliderWrapper,
  SliderItem,
  SliderBg,
  SliderContent,
  SliderImg,
  SliderImgHolder,
} from "./TrendingAuctiosElements";
import SliderImgAsset from "../../../assets/images/Mountain Sunset.jpg";
import SliderImgAsset1 from "../../../assets/images/lover.jpg";
import SliderImgAsset2 from "../../../assets/images/listentSilence.jpg";
import SliderImgAsset3 from "../../../assets/images/lilacFog.jpg";
import SliderImgAsset4 from "../../../assets/images/cityView.jpg";
import SliderImgAsset5 from "../../../assets/images/pinoPino.jpg";
import SlideTimer from "./SlideTimerElements";

const cards = [
  {
    image: SliderImgAsset,
    date: faker.date.soon(),
   
  },
  {
    image: SliderImgAsset1,
    date: faker.date.soon(),
   
  },
  {
    image: SliderImgAsset2,
    date: faker.date.soon(),
  },
  {
    image: SliderImgAsset3,
    date: faker.date.soon(),
  },
  {
    image: SliderImgAsset4,
    date: faker.date.soon(),
  },
  {
    image: SliderImgAsset5,
    date: faker.date.soon(),
  },
];

export default function SimpleSlider() {
  const isMobile = useMediaQuery({ query: "(max-width: 576px)" });
  const isIpad = useMediaQuery ({query:"(max-width:768px)"})

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <SliderWrapper>
      <Slider {...settings}>
        {cards.map((card, i) => (
          <SliderItem key={i}>
            <SliderBg>
              <SliderImgHolder src={card.image} />
              <SlideTimer startDate={card.date} />
            </SliderBg>
          </SliderItem>
        ))}
      </Slider>
    </SliderWrapper>
  );
}
