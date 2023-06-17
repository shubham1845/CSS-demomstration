import "./navbar.css";
// import MenuIcon from "@mui/icons-material/Menu";

export default function Navbar() {
  return (
    <>
      <div className="navbar">
        <div className="leftNav">
          <img
            src="https://abizglobal.com/wp-content/uploads/2019/05/Abiz-Global-Logo-2.png"
            alt=""
            className="logo"
          />
        </div>
        <div className="rightNav">
          <div className="rightNavLink">
            <span className="navbarLink">Home</span>
            <span className="navbarLink">About</span>
            <span className="navbarLink">Testimonial</span>
            <span className="navbarLink">Contact</span>
            {/* <button className="nav-btn nav-close-btn" onClick={showNavbar}>
              <MenuIcon className="humberg" />
            </button>
            <button className="nav-btn" onClick={showNavbar}>
              FAB{" "}
            </button> */}
            {/* <div className="hamburger">
              <span className="bar"></span>
              <span className="bar"></span>
              <span className="bar"></span>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
