import React from "react";
import TrendingAuctions from "../components/Navbar/TrendingAuctions/TrendingAuctions";
import HomeSection from "../components/Navbar/HomeSection/Main";
import MidSection from "../components/MidSection/MidSection";
import { FooterContainer } from "../components/Footer/Footer";
import Auctions from "../components/Auctions/Auctions";

const Home = () => {
  return (
    <>
      <HomeSection />
      <TrendingAuctions />
      <Auctions />
      <MidSection />
      <FooterContainer />
    </>
  );
};

export default Home;
