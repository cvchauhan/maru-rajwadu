import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Maru Rajwadu brings the rich heritage of Gujarati and Punjabi royal
          cuisine to your plate. Our dishes are crafted using traditional
          recipes and the finest ingredients, offering an authentic dining
          experience that reflects the warmth and flavors of India's regal past.
          Join us for a memorable meal where taste and tradition meet in a royal
          setting.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.knife} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our History</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Since 2014, Maru Rajwadu has been a cherished destination for those
          seeking authentic Gujarati and Punjabi cuisine. Over the years, we
          have stayed true to our roots, preserving traditional recipes and
          offering a royal dining experience. With a commitment to quality and
          hospitality, we've grown to become a beloved name for food lovers who
          appreciate the flavors of India's royal past.
        </p>
        <button type="button" className="custom__button">
          Know More
        </button>
      </div>
    </div>
  </div>
);

export default AboutUs;
