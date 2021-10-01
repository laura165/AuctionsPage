import styled from "styled-components";
import { FaRegClock } from "react-icons/fa";

export const Clock = styled(FaRegClock)`
  color: #d5d6e5;
  margin-right: 10px;
`;
export const TrendingAuctionsContainer = styled.div`
  padding: 0.5rem calc((90vw - 1000px) / 2);
  margin-top: 200px;
  
`;

export const TrendingAuctionsContent = styled.div`
  line-height: 1.5;
  padding-top: 30px;
`;
export const TrendingAuctionsH4 = styled.p`
  font-size: 15px;
  letter-spacing: 2px;
  color: #d5d6e5;
  font-weight: 100px;
`;

export const TrendingAuctionsDivider = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  background: #17165a;
  height: 1px;
`;

export const LatestAuctions = styled.div``;

export const SliderWrapper = styled.div`
  width: 100%;
 
 
`;

export const SliderBody = styled.div`

  
`;

export const SliderItem = styled.div`
 
`;

export const h2 = styled.h2`
  color: white;
`;

export const Slider = styled.div`
 
`;

export const SliderBg = styled.div`
  background: #091434;
  display: flex;
  align-items: center;
  height: 500px;
  margin-right:10px;
  margin-left:10px;
  z-index:1;
  

`;

export const SliderContent = styled.div`
  background-color: none;
  
 
`;
export const SliderImg = styled.div`
  background: #091434;
  z-index: -1;
  display: flex;
  justify-content: center;
  align-self: center;
`;
export const SliderImgHolder = styled.img`
  width: 300px;
  height: 370px;
  margin-left: 40px;
  margin-top: -30px;
  display: flex;
  align-self: center;
  justify-content:center;
  object-fit: cover;
`;

export const SliderTimer = styled.time`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-left:100px;
  margin-right:100px;
  margin-top:430px;
  z-index:1;

`;

export const SliderP = styled.p`
  color: #d5d6e5;
  background: none;
`;

export const SliderPSmall = styled.p`
  color: #d5d6e5;
  background: none;
`;
