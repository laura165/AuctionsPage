import styled from "styled-components";
import { GiClick } from "react-icons/gi";
import { motion } from "framer-motion";
import { GrClose } from "react-icons/gr";
export const Shuffle = styled(GiClick)`
  color: #d5d6e5;
  width: 25px;
  height: 25px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 20px;
`;

export const CloseIcon = styled(GrClose)`
  color: #8862e0;
  position: absolute;
  display: flex;
  font-weight: bolder;
  justify-content: flex-end;
  background: transparent;
  z-index: 1;
  width: 25px;
  height: 25px;
  right: 19px;
  top: 25px;
`;

export const AuctionsWrapper = styled(motion.div)`
  padding: 0.5rem calc((90vw - 1000px) / 2);
`;

export const AuctionItem = styled(motion.div)`
  background: #091434;
  height: 490px;
  width: 350px;
  opacity: 1;

  /* &:hover {
    opacity: 0.8;
  } */
`;

export const AuctionsBg = styled.div``;

export const AuctionsList = styled(motion.div)`
  display: grid;
  grid-template-columns: 100px 100px 100px;
  grid-template-rows: auto auto;
  column-gap: 300px;
  row-gap: 50px;

  @media screen and (max-width: 768px) {
    display: grid;
    grid-template-columns: 100px;
    grid-template-rows: auto auto;
    column-gap: 300px;
    row-gap: 50px;
  }
`;

export const AuctionImgHolder = styled.div`
  background: #091434;
  margin-top: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;
  --o-object-fit: cover;
`;

export const AuctionImg = styled.img`
  width: 280px;
  height: 350px;
  opacity: 1;

  &:hover {
    -webkit-transform: scale(0.6);
    -ms-transform: scale(1);
    transform: scale(0.9);
    transition: all 0.2s ease-in-out;
    opacity: 0.7;
    display: block;
  }
`;

export const SeeMore = styled.p`
  color: #fff;
  position: absolute;
  background: transparent;
  display: none;
  &:hover {
    display: block;
  }
`;

export const AuctionsDivider = styled.div`
  margin-top: 30px;
  margin-bottom: 30px;
  background: #17165a;
  height: 1px;
`;

export const AuctionsContent = styled.div`
  font-size: 15px;
  letter-spacing: 2px;
  color: #d5d6e5;
  font-weight: 100px;
  text-transform: uppercase;
  padding-top: 200px;
`;

export const AuctionText = styled.p`
  font-size: 15px;
  color: #dedbed;
  font-weight: 100px;
  padding-left: 25px;
  padding-top: 20px;
  background: none;
`;

export const AuctionProfile = styled.img`
  width: 30px;
  height: 30px;
  object-fit: cover;
  margin-bottom: -8px;
  margin-right: 8px;
  border-radius: 50px;
`;

export const AuctionP = styled.p`
  font-size: 15px;
  color: #9594aa;
  font-weight: 100px;
  padding-left: 65px;
  padding-top: 10px;
  background: none;
`;

export const ModalP = styled.p`
  color: #dedbed;
  z-index: 1;
  background: #091437;
  padding-top: 30px;
  padding-left: 20px;
`;

export const ModalButton = styled.div`
  z-index: 1;
  background: #091434;
`;

export const ModalImg = styled.img`
  width: 100%;
  height: 650px;
  display: flex;
  justify-content: center;
  align-self: center;
  object-fit: cover;
`;

export const ModalContent = styled.div`
  display: flex;
  justify-content: space-between;
  background: #091437;
`;

export const ModalBtnText = styled.p`
  color: #dedbed;
  background: #091437;
`;

export const ModalInformationText = styled.p`
  color: #dedbed;
  background: #091437;
`;

export const ModalInformation = styled.div`
  background: #091437;
  padding-top: 150px;
  padding-right: 30px;
  padding-bottom: 50px;
  padding-left: 30px;
  word-spacing: 2px;
  letter-spacing: 0.5px;
  box-sizing: border-box;
  line-height: 25px;
`;
