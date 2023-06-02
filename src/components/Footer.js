import classes from "./Footer.module.css";

import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className={classes.footer}>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-9 col-12">
            <p className={classes.wannaKnowText}>Wanna know more about us ?</p>
            <p className={classes.contactUsText}>Contact us for more details</p>
          </div>
          <div className={`col-lg-3 col-12 ${classes.footerTopRight}`}>
            <button className={classes.btn}>
              <p className={classes.btnText}>Contact Us</p>
            </button>
          </div>
        </div>
        <div className={`${classes.bottomRow} row mt-3 gx-5`}>
          <div className="col-lg-6 col-12">
            <img src={Logo} className={classes.logo} alt="logo" />
            <p className={classes.tagline}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
              facilisis, leo sit amet suscipit aliquet, tellus tortor tristique
              purus, sit amet
            </p>
          </div>
          <div className="col-lg-3 col-6">
            <p className={classes.contactUsTitle}>Contact Us</p>
            <p className={classes.callUsOn}>Call Us On</p>
            <p className={classes.phoneNumbers}>Sahan +61 449 776 750</p>
            <p className={classes.phoneNumbers}>Ann +61 452 670 045</p>
            <p className={classes.emailTitle}>Email</p>
            <p className={classes.email}>ads@rathnadeepa.au</p>
          </div>
          <div className="col-lg-3 col-6">
            <p className={classes.getInTouch}>Get in Touch</p>
            <p className={classes.socialMedia}>Twitter</p>
            <p className={classes.socialMedia}>Facebook</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
