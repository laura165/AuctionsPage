import React, { useState } from "react";
import faker, { name } from "faker";
import SlideTimer from "../Navbar/TrendingAuctions/SlideTimerElements";
import SliderImgAsset11 from "../../assets/images/listentSilence.jpg";
import SliderImgAsset6 from "../../assets/images/field.jpg";
import SliderImgAsset7 from "../../assets/images/lilacFog.jpg";
import SliderImgAsset8 from "../../assets/images/Mountain Sunset.jpg";
import SliderImgAsset9 from "../../assets/images/cityView.jpg";
import SliderImgAsset10 from "../../assets/images/lilac.jpg";
import SliderImgAsset12 from "../../assets/images/sarah.png";
import SliderImgAsset13 from "../../assets/images/piano.jpg";
import SliderImgAsset14 from "../../assets/images/lover.jpg";
import SliderImgAsset15 from "../../assets/images/violin.jpg";
import SliderImgAsset16 from "../../assets/images/pinoPino.jpg";
import SliderImgAsset17 from "../../assets/images/lavender.jpg";
import ReactModal from "react-modal";
import { AnimateSharedLayout } from "framer-motion";
import { MotionAdvancedProps } from "framer-motion";

import {
  AuctionsWrapper,
  AuctionItem,
  AuctionsBg,
  AuctionTimer,
  AuctionImgHolder,
  AuctionImg,
  AuctionsContent,
  AuctionsDivider,
  AuctionsList,
  AuctionText,
  AuctionProfile,
  AuctionP,
  Shuffle,
  ModalP,
  ModalButton,
  ModalImg,
  ModalContent,
  ModalBtnText,
  bidInput,
  ModalInformationText,
  ModalInformation,
  CloseIcon,
  SeeMore,
} from "./AuctionsElements";
import { Card } from "material-ui";

function numberRandom() {
  const min = 2;
  const max = 15;
  return Math.floor(min + Math.random() * (max - min));
}

function highsetBid() {
  const min = 100;
  const max = 1000000;
  return Math.floor(min + Math.random() * (max - min));
}
const Ankands = [
  {
    image: SliderImgAsset11,
    date: faker.date.soon(),
    name: faker.name.firstName(),
    lastname: faker.name.lastName(),
    avatarProfile: faker.image.avatar(),
    daysLeft: numberRandom(),
    text: "Highest Bid: " + highsetBid() + "$",
  },
  {
    image: SliderImgAsset6,
    date: faker.date.soon(),
    name: faker.name.firstName(),
    lastname: faker.name.lastName(),
    avatarProfile: faker.image.avatar(),
    daysLeft: numberRandom(),
    text: "Highest Bid: " + highsetBid() + "$",
  },
  {
    image: SliderImgAsset7,
    date: faker.date.soon(),
    name: faker.name.firstName(),
    lastname: faker.name.lastName(),
    avatarProfile: faker.image.avatar(),
    daysLeft: numberRandom(),
    text: "Highest Bid: " + highsetBid() + "$",
  },
  {
    image: SliderImgAsset8,
    date: faker.date.soon(),
    name: faker.name.firstName(),
    lastname: faker.name.lastName(),
    avatarProfile: faker.image.avatar(),
    daysLeft: numberRandom(),
    text: "Highest Bid: " + highsetBid() + "$",
  },
  {
    image: SliderImgAsset9,
    date: faker.date.soon(),
    name: faker.name.firstName(),
    lastname: faker.name.lastName(),
    avatarProfile: faker.image.avatar(),
    daysLeft: numberRandom(),
    text: "Highest Bid: " + highsetBid() + "$",
  },
  {
    image: SliderImgAsset10,
    date: faker.date.soon(),
    name: faker.name.firstName(),
    lastname: faker.name.lastName(),
    avatarProfile: faker.image.avatar(),
    daysLeft: numberRandom(),
    text: "Highest Bid: " + highsetBid() + "$",
  },

  {
    image: SliderImgAsset12,
    date: faker.date.soon(),
    name: faker.name.firstName(),
    lastname: faker.name.lastName(),
    avatarProfile: faker.image.avatar(),
    daysLeft: numberRandom(),
    text: "Highest Bid: " + highsetBid() + "$",
  },
  {
    image: SliderImgAsset13,
    date: faker.date.soon(),
    name: faker.name.firstName(),
    lastname: faker.name.lastName(),
    avatarProfile: faker.image.avatar(),
    daysLeft: numberRandom(),
    text: "Highest Bid: " + highsetBid() + "$",
  },
  {
    image: SliderImgAsset14,
    date: faker.date.soon(),
    name: faker.name.firstName(),
    lastname: faker.name.lastName(),
    avatarProfile: faker.image.avatar(),
    daysLeft: numberRandom(),
    text: "Highest Bid: " + highsetBid() + "$",
  },

  {
    image: SliderImgAsset15,
    date: faker.date.soon(),
    name: faker.name.firstName(),
    lastname: faker.name.lastName(),
    avatarProfile: faker.image.avatar(),
    daysLeft: numberRandom(),
    text: "Highest Bid: " + highsetBid() + "$",
  },

  {
    image: SliderImgAsset16,
    date: faker.date.soon(),
    name: faker.name.firstName(),
    lastname: faker.name.lastName(),
    avatarProfile: faker.image.avatar(),
    daysLeft: numberRandom(),
    text: "Highest Bid:" + highsetBid() + "$",
  },

  {
    image: SliderImgAsset17,
    date: faker.date.soon(),
    name: faker.name.firstName(),
    lastname: faker.name.lastName(),
    avatarProfile: faker.image.avatar(),
    daysLeft: numberRandom(),
    text: "Highest Bid:" + highsetBid() + "$",
  },
];

const Auctions = () => {
  const sortedAnkands = Ankands.sort((a, b) =>
    a.daysLeft > b.daysLeft ? 1 : b.daysLeft > a.daysLeft ? -1 : 0
  );
  const [showModal, setShowModal] = useState(false);
  const [selectedCard, setSelectedCard] = useState();

  const handleOpenModal = (i) => {
    setShowModal(true);
    setSelectedCard(i);
  };

  const handleCloseModal = (e) => {
    e.stopPropagation();
    setShowModal(false);
    setSelectedCard(null);
  };

  const selectedAnkand = sortedAnkands[selectedCard];

  return (
    <AuctionsWrapper layout id="latest">
      <AuctionsContent>Latest Auctions</AuctionsContent>
      <AuctionsDivider />
      <AuctionsList>
        {sortedAnkands.map((Ankand, i) => (
          <AuctionItem key={i} onClick={() => handleOpenModal(i)}>
            <AuctionImgHolder>
              <AuctionImg src={Ankand.image} />
              <SeeMore>See More</SeeMore>
              {/* <AuctionTimer/> */}
            </AuctionImgHolder>
            <AuctionText>
              <AuctionProfile src={Ankand.avatarProfile} />
              {Ankand.name} {Ankand.lastname}
            </AuctionText>
            <AuctionP> {Ankand.daysLeft} days left</AuctionP>
            {/* <Shuffle/> */}
          </AuctionItem>
        ))}
      </AuctionsList>

      {showModal && (
        <ReactModal
          isOpen={showModal}
          contentLabel="onRequestClose Example"
          onRequestClose={handleCloseModal}
          style={{
            overlay: {
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: "rgba(9, 8, 37, 0.8)",
            },

            content: {
              padding: "0px",

              position: "absolute",
              borderRadius: "40px",
              top: "90px",
              // left: "690px",
              // right: "690px",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              bottom: "20px",
              width: "500px",
              height: "800px",
              border: "1px solid #070722",
              boxShadow:
                " rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;",
              background: "#091437",
              overflow: "hidden",
              WebkitOverflowScrolling: "touch",
              outline: "none",
              transition: "all 0.2s ease-in-out",
            },
          }}
        >
          <div
            id="modalTransition"
            style={{ overflow: "auto", height: "100%" }}
          >
            <CloseIcon onClick={(e) => handleCloseModal(e)} />
            <ModalImg src={selectedAnkand.image} />
            <ModalContent>
              <ModalP>{selectedAnkand.text}</ModalP>
              <ModalButton>
                <ModalBtnText>
                  <form className="formInput">
                    <input className="bidInput" type="number" />
                    <input
                      className="buttonBidInp"
                      type="submit"
                      value="Place Bid"
                    />
                  </form>
                </ModalBtnText>
              </ModalButton>
            </ModalContent>
            <ModalInformation>
              <ModalInformationText>
                Old Master Drawings are often intricately linked with the
                history of the country in which they were produced: in the 17th
                century, for example, the Netherlands was an iconoclastic
                Protestant country, so there were almost no commissions for
                religious paintings — and, with no real aristocracy, King or
                court, most art was bought privately. Drawings of landscapes or
                genre scenes were often viewed not as sketches but as highly
                finished works of art. Most of these drawn works tended to
                feature the artist’s signature.Drawings of landscapes or genre
                scenes were often viewed not as sketches but as highly finished
                works of art. Most of these drawn works tended to feature the
                artist’s signature.Drawings of landscape or genrescenes were
                often viewed not as sketches but as highly finished works of
                art. Most of these drawn works tended to feature the artist’s
                signature.
              </ModalInformationText>
            </ModalInformation>
          </div>
        </ReactModal>
      )}
    </AuctionsWrapper>
  );
};

export default Auctions;
