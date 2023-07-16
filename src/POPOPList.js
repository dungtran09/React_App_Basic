import React from "react";
import POPOPSpace from "./POPOPSpace";

function POPOPList() {
  return (
    <div className="POPOPList">
      <POPOPSpace
        name="600 Montgomery St."
        address="600 Montgomery St"
        image="01_IMG_01.jpeg"
      />
      <POPOPSpace
        name="600 Montgomery St."
        address="600 Montgomery St"
        image="02_IMG_01.jpeg"
      />
      <POPOPSpace
        name="600 Montgomery St."
        address="600 Montgomery St"
        image="03_IMG_01.jpeg"
      />
    </div>
  );
}

export default POPOPList;
