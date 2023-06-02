import classes from "./Navbar.module.css";

import logo from "../assets/logo.png";
// import NavbarShape from "../assets/navbar-shape.png";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      {/* <svg
        width="1440"
        height="162"
        viewBox="0 0 1440 162"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={classes.svg}
      >
        <path
          d="M-2 -7H1467V31.6343C1467 85.9994 1423.57 130.405 1369.22 131.61L-2 162V-7Z"
          fill="url(#paint0_linear_1_5)"
          fill-opacity="0.87"
        />
        <defs>
          <linearGradient
            id="paint0_linear_1_5"
            x1="732.5"
            y1="-7"
            x2="732.5"
            y2="162"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#736E6E" />
            <stop offset="1" stop-color="#4B4141" />
          </linearGradient>
        </defs>
      </svg> */}
      {/* <img
        arc={NavbarShape}
        alt="navbar polygon"
        className={classes.navbarShape}
      /> */}
      <img src={logo} alt="logo" className={classes.logo} />
    </div>
  );
};

export default Navbar;
