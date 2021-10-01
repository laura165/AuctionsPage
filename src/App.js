import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import Services from "./pages/Services";
import Signup from "./pages/Signup";
import ContactUs from "./pages/ContactUs";
import { NavDivider } from "./components/Navbar/NavbarElements";
import TrendingAuctions from "./components/Navbar/TrendingAuctions/TrendingAuctions";
import HomeSection from "./components/Navbar/HomeSection/Main";
import MidSection from "./components/MidSection/MidSection";
import Footer, { FooterContainer } from "./components/Footer/Footer";
import Auctions from "./components/Auctions/Auctions";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <NavDivider />
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" component={About}></Route>
          {/* <Route path="/services" component={Services}></Route> */}
          <Route path="/sign-in" component={SignIn}></Route>
          <Route path="/sign-up" component={Signup} ></Route>
          <Route path="/contact-us" component={ContactUs}></Route>
        </Switch>
        <HomeSection />
        <TrendingAuctions />
      </Router>
      <Auctions />

      <MidSection />

      <FooterContainer />
    </div>
  );
}

export default App;
