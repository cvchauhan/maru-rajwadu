import React from "react";

import { SubHeading, MenuItem } from "../../components";

import { images, data } from "../../constants";
import "./SpecialMenu.css";

const SpecialMenu = () => (
  <div className="app__specialMenu flex__center section__padding" id="menu">
    <div className="app__specialMenu-title">
      <SubHeading title="Menu That Fits You Palatte" />
      <h1 className="headtext__cormorant">Today's Special</h1>
    </div>
    <div className="app__specialMenu-menu">
      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">Punjabi</p>
        <div className="app__specialMenu_menu_items">
          {data.punjabi.map((wine, index) => (
            <MenuItem
              key={wine.title + index}
              title={wine.title}
              price={wine.price}
              tags={wine.tags}
            />
          ))}
        </div>
      </div>
      &nbsp;&nbsp;
      {/* <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu img" />
      </div> */}
      <div className="app__specialMenu-menu_chinese flex__center">
        <p className="app__specialMenu-menu_heading">Chinese</p>
        <div className="app__specialMenu_menu_items">
          {data.chinese.map((chinese, index) => (
            <MenuItem
              key={chinese.title + index}
              title={chinese.title}
              price={chinese.price}
              tags={chinese.tags}
            />
          ))}
        </div>
      </div>
    </div>

    <div style={{ marginTop: "15px" }}>
      <button type="button" className="custom__button">
        View More
      </button>
    </div>
  </div>
);

export default SpecialMenu;
