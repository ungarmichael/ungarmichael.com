import React, {useRef, useState, useEffect} from "react";
import {useSpring, animated as a, config} from "react-spring";
import './about.scss'
import useOnScreen from "../../../utils/useOnScreen.jsx"


const UgAboutCard = (props) => {
  const ref = useRef()
  const isVisible = useOnScreen(ref)

  useEffect(() => {
    console.log(isVisible?"visi":"nope")
    return () => {
      
    }
  }, [isVisible])

  const springProps = useSpring({opacity: isVisible ? 1 : 0, marginLeft: isVisible?0: -500, config:config.molasses})

  return (
    <a.div style={springProps} ref={ref}>
      <div className="ug-foyer-about">
        <div className="ug-foyer-about-heading">
          <span>{props.heading}</span>
        </div>
        <div className="ug-foyer-about-divider"></div>
        <div className="ug-foyer-about-description">
          <p>{props.description}</p>
        </div>
      </div>
    </a.div>
  );
};

export default UgAboutCard;