import React from "react";

import {
  TrendingAuctionsContainer,
  TrendingAuctionsH4,
  TrendingAuctionsDivider,
  LatestAuctions,
  TrendingAuctionsContent,
} from "./TrendingAuctiosElements";

import SimpleSlider from "./Swiper";

const TrendingAuctions = () => {
  return (
    <TrendingAuctionsContainer>
      <TrendingAuctionsContent id="trending">
        <TrendingAuctionsH4>TRENDIG AUCTIONS</TrendingAuctionsH4>
        <TrendingAuctionsDivider></TrendingAuctionsDivider>
        <LatestAuctions>
          <SimpleSlider />
        </LatestAuctions>
      </TrendingAuctionsContent>
    </TrendingAuctionsContainer>
  );
};

export default TrendingAuctions;
