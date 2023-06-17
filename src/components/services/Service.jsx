import "./service.css";
import "css-doodle";
import Icon from "./icon.png";
import Trunkey from "./Trunkey.png";
import Search from "./Search.png";
import training from "./training.png";
import intrim from "./intrim.png";
import cxo from "./CXO.png";
export default function Service() {
  return (
    <>
      <div className="service">
        <div className="serviceWrapper">
          <div className="doodle">
            <css-doodle>
              @grid: 16 / 320px; @size: 1px calc(141.4% + 1px); transform:
              rotate(@p(±45deg)); background: #f4e2e1; margin: auto;
            </css-doodle>
          </div>
          <h1>Our Services/Offerings</h1>

          <h2>
            Human capital is the most important asset for any business
            organization.
          </h2>
          <div className="paragraph">
            <p>
              Abiz Global is an innovative, fresh and state of the art firm,
              delivering human resource solutions that are well researched and
              within deadlines. Whether you want us to run a Single HR process
              or the entire employee lifecycle, we have a Solution for you. Our
              services include but are not limited to
            </p>
          </div>
          <div className="serviceCards">
            <div className="row">
              <div className="box">
                <img src={Icon} alt="" className="icon" />
                <h2>HR Consulting</h2>
              </div>
              <div className="box">
                <img src={cxo} alt="" className="icon" />
                <h2>CXO Hiring</h2>
              </div>

              <div className="box">
                <img src={Trunkey} alt="" className="icon" />
                <h2>HR Consulting</h2>
              </div>
            </div>
            <div className="row">
              <div className="box">
                <img src={Search} alt="" className="icon" />
                <h2>Executive search and selection</h2>
              </div>
              <div className="box">
                <img src={training} alt="" className="icon" />
                <h2>Training and Development</h2>
              </div>
              <div className="box">
                <img src={intrim} alt="" className="icon" />
                <h2>Intrim Management</h2>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="secondRapper">
        <div className="imgClass">
          <img
            src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
            alt=""
            className="img"
          />
        </div>
        <div className="">
          <h2>What are they saying. </h2>
        </div>
        <div className="rowSlogan">
          <div className="slogans ">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
              dolor deleniti voluptas praesentium ullam quas dicta voluptatem
              ratione voluptate exercitationem, nemo nam facilis, repellat
              voluptatibus laudantium fugiat eum! Nemo, debitis.
            </p>
            <div className="info">
              <h3>HR Director</h3>
              <h4>Gangalal Subedi, Nepal</h4>
            </div>
          </div>
          <div className="slogans ">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
              dolor deleniti voluptas praesentium ullam quas dicta voluptatem
              ratione voluptate exercitationem, nemo nam facilis, repellat
              voluptatibus laudantium fugiat eum! Nemo, debitis.
            </p>
            <div className="info">
              <h3>HR Director</h3>
              <h4>Gangalal Subedi, Nepal</h4>
            </div>
          </div>
          <div className="slogans ">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse
              dolor deleniti voluptas praesentium ullam quas dicta voluptatem
              ratione voluptate exercitationem, nemo nam facilis, repellat
              voluptatibus laudantium fugiat eum! Nemo, debitis.
            </p>
            <div className="info">
              <h3>HR Director</h3>
              <h4>Gangalal Subedi, Nepal</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
