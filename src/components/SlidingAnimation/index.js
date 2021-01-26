import React, { useState, useEffect } from "react";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import {Typography,makeStyles} from '@material-ui/core';
import "../../Theme/animation.css";

const useStyles = makeStyles((theme) => ({
  title:{
    color: theme.palette.primary.dark,
    fontWeight: "bold",
  },
  content:{
    color: theme.palette.primary.dark,
    fontWeight: "bold",
  }
}) );

const SlidingAnimation = (props) => {

  const [currentItem, setCurrentItem] = useState(0);
  const [count, setCount] = useState(1);
  const items = props.items;
  const interval = props.interval;

  useEffect(() => {
    const myInterval = setInterval(() => {
      setCount((prevCount) => {
        if (prevCount < items.length - 1) {
          return prevCount + 1;
        } else {
          return 0;
        }
      });
    }, interval);

    return () => {
      clearInterval(myInterval);
    };
  }, []);

  useEffect(() => {
    setCurrentItem(items[count]);
  }, [count]);

  const renderElement = (type, currentItem) => {
    switch (type) {
      case "image":
        return (
          <img
            src={currentItem}
            style={{
              position: "absolute",
              width: "100%",
              height: "100%",
              borderRadius: "15px",
              objectFit: "cover",
            }}
          />
        );

      case "text":
        return (
          <div style={{ position: "absolute"}}>
            <Typography variant="h4" className={classes.title}>
              {currentItem.title}
            </Typography>
            <Typography variant="h6" className={classes.content}>
              {currentItem.content}
            </Typography>
          </ div>
        );
    }
  };

  const classes = useStyles();

  return (
    <>
      <TransitionGroup component={null}>
        <CSSTransition key={count} timeout={interval} classNames="item">
          {renderElement(props.type, currentItem)}
        </CSSTransition>
      </TransitionGroup>
    </>
  );
};

export default SlidingAnimation;
