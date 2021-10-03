import React from "react";
import "./App.css";
import Navbar from "./components/Navbar/index";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import Signup from "./pages/Signup";
import ContactUs from "./pages/ContactUs";
import { NavDivider } from "./components/Navbar/NavbarElements";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <NavDivider />
        <Switch>
          <Route path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          {/* <Route path="/services" component={Services}></Route> */}
          <Route path="/sign-in" component={SignIn}></Route>
          <Route path="/sign-up" component={Signup}></Route>
          <Route path="/contact-us" component={ContactUs}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
