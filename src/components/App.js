import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Navbar from "./layout/Navbar/Navbar";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import IeltsOnline from "./pages/IeltsOnline";
import StudyInAustralia from "./pages/StudyInAustralia";
import StudyInCanada from "./pages/StudyInCanada";
import WhyStudyAbroad from "./pages/WhyStudyAbroad";

import '../sass/main.scss'

class App extends Component {

  render() {
    return (
      <>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route exact path="/about">
              <About />
            </Route>
            <Route exact path="/contact-us">
              <ContactUs />
            </Route>
            <Route exact path="/ielts-online">
              <IeltsOnline />
            </Route>
            <Route exact path="/study-in-australia">
              <StudyInAustralia />
            </Route>
            <Route exact path="/study-in-canada">
              <StudyInCanada />
            </Route>
            <Route exact path="/why-study-abroad">
              <WhyStudyAbroad />
            </Route>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </>
    );
  }
}

export default App;
