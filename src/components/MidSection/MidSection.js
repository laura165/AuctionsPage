import React from "react";
import Video from "../../assets/images/purpleVideo.mp4";
import {
  MidSectionContainer,
  MidSectionBg,
  VideoBg,
} from "./MidSectionElements";

const MidSection = () => {
  return (
    <MidSectionContainer>
      <MidSectionBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </MidSectionBg>
    </MidSectionContainer>
  );
};

export default MidSection;
