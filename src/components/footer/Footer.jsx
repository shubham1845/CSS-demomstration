import "./footer.css";
import MailIcon from "@mui/icons-material/Mail";
export default function Footer() {
  return (
    <div className="footer">
      <div className="footerWrapper">
        <div className="row">
          <div className="column">
            <h2>About</h2>
            <p>
              Abiz Global is a multi-functional, multi-faculty, cross-industry
              global leading Executive Search firm, headquartered in Mumbai
              (India).
            </p>
          </div>
          <div className="column">
            <h2>Business hours</h2>
            <p>
              Abiz Global is a multi-functional, multi-faculty, cross-industry
              global leading Executive Search firm, headquartered in Mumbai
              (India).
            </p>
          </div>
          <div className="column">
            <h2>Quick Link</h2>
            <div className="quicklinks">
              <p>
                <a href="">Home</a>
              </p>
              <p>
                <a href="">About</a>
              </p>
              <p>
                <a href="">Testimonial</a>
              </p>
              <p>
                <a href="">Contact</a>
              </p>
            </div>
          </div>
          <div className="column">
            <h2>Contact us</h2>
            <p>
              {" "}
              <MailIcon className="mailIcon" /> shubhamsingh@gmail.com
            </p>
          </div>
        </div>
        <hr />
        <div className="copyright">© Copyright 2023 by </div>
      </div>
    </div>
  );
}
