import "css-doodle";
import circle from "./circle1@.png";
import "./benith.css";
export default function Benith() {
  return (
    <>
      <div className="benith">
        <div className="mainImg">
          <img
            src="
          https://images.unsplash.com/photo-1520155346-36773ab29479?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1031&q=80
          "
            alt=""
            className="benithImg"
          />
        </div>
        <div className="animatedCircle">
          <img
            // src="
            //   https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfBegLe84TQOHun2LDFR9x0G1aiBgCHPoSpQ&usqp=CAU
            //   "
            src={circle}
            alt=""
            className="circleImg"
            // id="no-background"
          />
        </div>
        <div className="qotes">
          <h3>We Handpick The Best </h3>
          <h3>Among The Rest</h3>
        </div>
      </div>
    </>
  );
}
