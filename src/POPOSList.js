import React from "react";
import "./POPOSList.css";
import POPOSSpace from "./POPOSSpace";

function POPOSList() {
  return (
    <div className="POPOSList">
      <POPOSSpace
        name="600 Montgomery St."
        address="600 Montgomery St"
        image="01_IMG_01.jpeg"
      />
      <POPOSSpace
        name="600 Montgomery St."
        address="600 Montgomery St"
        image="02_IMG_01.jpeg"
      />
      <POPOSSpace
        name="600 Montgomery St."
        address="600 Montgomery St"
        image="03_IMG_01.jpeg"
      />
      <POPOSSpace
        name="600 Montgomery St."
        address="600 Montgomery St"
        image="04_IMG_01.jpeg"
      />
      <POPOSSpace
        name="600 Montgomery St."
        address="600 Montgomery St"
        image="05_IMG_01.jpeg"
      />
      <POPOSSpace
        name="600 Montgomery St."
        address="600 Montgomery St"
        image="06_IMG_01.jpeg"
      />
    </div>
  );
}

export default POPOSList;
