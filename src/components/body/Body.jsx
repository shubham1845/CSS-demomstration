import { useEffect, useState } from "react";
import "./body.css";
import imageSlide from "./data";
export default function Body() {
  const [currentState, setCurrentState] = useState(0);
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentState === 2) {
        setCurrentState(0);
      } else {
        setCurrentState(currentState + 1);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentState]);

  const bgImageStyle = {
    backgroundImage: `url(${imageSlide[currentState].url})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundAttachment: "fixed",

    height: "100%",
  };
  const goToNext = () => {
    setCurrentState(currentState);
  };
  return (
    <div className="body">
      {/*  */}
      <div style={bgImageStyle}>
        <div className="carousel-boullt">
          {imageSlide.map((imageSlide, currentState) => (
            <span
              key={currentState}
              onClick={() => goToNext(currentState)}
            ></span>
          ))}
        </div>
      </div>
      <div className="description">
        <h3>Welcome to Aibiz Global</h3>
        <div>
          <p className="des">Strengthening </p>
          <p className="des">Business One Person</p>
          <p className="des">At A Time</p>
        </div>
      </div>
    </div>
  );
}
