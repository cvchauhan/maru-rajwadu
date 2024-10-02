import React from "react";
import { FiFacebook, FiTwitter, FiInstagram } from "react-icons/fi";

import { images } from "../../constants";
import { FooterOverlay, Newsletter } from "../../components";
import "./Footer.css";

const Footer = () => (
  <div className="app__footer section__padding">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Contact Us</h1>
        <p className="p__opensans">
          Malavada Chokdi, Limbasi, Limbasi, Gujarat 387520, India
        </p>
        <p className="p__opensans">+91 8866764366</p>
        <p className="p__opensans">+91 8140209024</p>
      </div>

      <div className="app__footer-links_logo">
        <img src={images.maru_rajwadu} alt="footer_logo" />
        <p className="p__opensans">
          &quot;The best way to find yourself is to lose yourself in the service
          of others.&quot;
        </p>
        <img
          src={images.spoon}
          className="spoon__img"
          style={{ marginTop: 15 }}
        />
        <div className="app__footer-links_icons">
          <FiFacebook />
          <FiTwitter />
          <FiInstagram />
        </div>
      </div>

      <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">10:00 am - 3:00 pm & 5:00 pm to 11 pm</p>
      </div>
    </div>
    <div className="footer__copyright">
      <p className="p__opensans">
        &copy; 2024 Maru Rajwadu. All Rights reserved.
      </p>
    </div>
  </div>
);

export default Footer;
