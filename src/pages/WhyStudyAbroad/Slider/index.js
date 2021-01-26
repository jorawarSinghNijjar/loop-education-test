import { Paper, Typography, Box, Slide, Fade } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import useStyles from "./styles";
import image1 from "../../../images/slider/1.jpg";
import image2 from "../../../images/slider/2.jpg";
import image3 from "../../../images/slider/3.jpg";
import image4 from "../../../images/slider/4.jpg";
import image5 from "../../../images/slider/5.jpg";
import image6 from "../../../images/slider/6.jpg";
import image7 from "../../../images/slider/7.jpg";
import image8 from "../../../images/slider/8.jpg";
import image9 from "../../../images/slider/9.jpg";
import image10 from "../../../images/slider/10.jpg";

import SlidingAnimation from "../../../components/SlidingAnimation";

const WhyStudyAbroad = (props) => {
  const [currentItem, setCurrentItem] = useState("");
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
  ];
  const text = [
    {
      title: "See the World",
      content:
        "Experience a brand-new country with incredible new outlooks, customs and activities.",
    },
    {
      title: "Education",
      content: "Chance to experience different styles of education",
    },
    {
      title: "Take in a New Culture",
      content:
        "Find incredible new foods, customs, traditions, and social atmospheres",
    },
    { title: "Hone Your Language Skills", content: "Completely immerse yourself in a new language" },
    { title: "Career Opportunities", content: "Return with a new perspective on culture, language skills, a great education, and a willingness to learn" },
    {
      title: "Find New Interests",
      content: "Studying in a different country offers many new activities and interests that you may never have discovered",
    },
    { title: "Make Lifelong Friends", content: "Opportunity to meet new lifelong friends from different backgrounds" },
    { title: "Personal Development", content: "Discover yourself while gaining an understanding of a different culture" },
    {
      title: "Graduate School Admissions",
      content: "Graduate schools regularly look for candidates who will bring a unique aspect to their university",
    },
    { title: "Life Experience", content: "Eventually you will find a job and career, and the opportunity to study abroad may turn out to be a once in a life time opportunity" },
  ];

  const classes = useStyles();
  return (
    <Paper elevation={8} className={classes.box}>
      <SlidingAnimation
        items={images}
        interval={5000}
        type="image"
      ></SlidingAnimation>

      <Box className={classes.contentBox}>
        <SlidingAnimation
          items={text}
          interval={5000}
          type="text"
        ></SlidingAnimation>
      </Box>
    </Paper>
  );
};

export default WhyStudyAbroad;
