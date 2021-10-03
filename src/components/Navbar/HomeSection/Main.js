import React from "react";
import {
  HomeSectionContainer,
  HomeBg,
  HomeImg,
  ImageHolder,
  HomeContent,
  HomeH1,
  HomeH1Colored,
  HomeP,
  HomeBtnContainer,
  HomeBtn,
  HomeSellBtn,
  HomeH4,
} from "./HomeElements";
import HomeImgAsset from "../../../assets/images/HomeImgAsset.jpeg";

const HomeSection = () => {
  return (
    <HomeSectionContainer id="landing">
      <HomeBg id="transition-1">
        <HomeContent>
          <HomeH4>THE FUTURE OF ART</HomeH4>
          <HomeH1>
            We Always Bring
            <br />
            The New Creative{" "}
          </HomeH1>
          <HomeH1Colored> Economy Chain</HomeH1Colored>
          <HomeP>
            We are bringing digital creators together all around <br />
            the world and collectors to move culture forward.
          </HomeP>
        </HomeContent>
        <HomeBtnContainer>
          <HomeBtn>Explore Popular</HomeBtn>
          <HomeSellBtn>Sell ArtWork</HomeSellBtn>
        </HomeBtnContainer>
      </HomeBg>
      <HomeImg id="transition2">
        <ImageHolder src={HomeImgAsset} />
      </HomeImg>
    </HomeSectionContainer>
  );
};

export default HomeSection;
