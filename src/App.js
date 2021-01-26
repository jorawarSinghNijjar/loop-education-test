import React, { Component } from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";

import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import IeltsOnline from "./pages/IeltsOnline";
import StudyInAustralia from "./pages/StudyInAustralia";
import StudyInCanada from "./pages/StudyInCanada";
import WhyStudyAbroad from "./pages/WhyStudyAbroad";
import BookAppointment from "./components/BookAppointment";

import theme from "./Theme";
import { Grid, CssBaseline } from "@material-ui/core";
import { ThemeProvider } from "@material-ui/core/styles";
import './Theme/animation.css';
import Posts from "./pages/Posts";
import StudyIn from "./pages/StudyIn";

class App extends Component {
  render() {
    return (
      <CssBaseline>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Grid
              container
              direction="column"
              justify="flex-start"
              alignItems="stretch"
            >
              <Grid item>
                <Navbar />
              </Grid>
              <Grid item>
                <Switch>
                  <Route exact path="/posts">
                    <Posts />
                  </Route>
                  <Route exact path="/about">
                    <About />
                  </Route>
                  <Route exact path="/contact-us">
                    <ContactUs />
                  </Route>
                  <Route exact path="/ielts-online">
                    <IeltsOnline />
                  </Route>
                  <Route exact path="/study-in">
                    <StudyIn />
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
                  <Route exact path="/book-app">
                    <BookAppointment />
                  </Route>
                  <Route exact path="/">
                    <Home />
                  </Route>
                </Switch>
              </Grid>
              <Grid item>
                <Footer />
              </Grid>
            </Grid>
          </BrowserRouter>
        </ThemeProvider>
      </CssBaseline>
    );
  }
}

export default App;
