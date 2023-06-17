import "./about.css";
import ditCircle from "./dotcircle1-removebg-preview.png";
export default function About() {
  return (
    <div className="about">
      <div className="leftContainer">
        <div className="aboutContainer">
          <img src={ditCircle} alt="" className="dotCircle" />

          <div className="detailText">
            <h2>About Us</h2>

            <p>
              Abiz Global is a multi-functional, multi-faculty, cross-industry
              global leading Executive Search firm, headquartered in Mumbai
              (India).
            </p>
            <p>
              We are a brainchild of a team of young aspiring entrepreneurs with
              in-depth industry specific knowledge, who have joined hands to
              cater to the Human Resource needs for various industries.
            </p>
          </div>
        </div>
      </div>
      <div className="rightContainer"></div>
    </div>
  );
}
