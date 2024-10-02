import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Word" />
      <h1 className="headtext__cormorant">What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className="p__opensans">
            Our Philosophy at Maru Rajwadu.This emphasizes the core values and
            beliefs behind your restaurant's service and experience.
          </p>
        </div>
        <p className="p__opensans">
          At Maru Rajwadu, we believe in serving authentic, flavorful cuisine
          rooted in tradition, providing our guests with an unforgettable dining
          experience. Our commitment is to offer high-quality, fresh ingredients
          and warm hospitality, ensuring that every meal reflects the rich
          cultural heritage we cherish.
        </p>
      </div>

      {/* <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div> */}
    </div>
  </div>
);

export default Chef;
