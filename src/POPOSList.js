import React from "react";
import "./POPOSList.css";
import POPOSSpace from "./POPOSSpace";
import data from "./sfpopos-data.json";

function POPOSList() {
  const spaces = data.map(({ title, address, hours, images }) => {
    return (
      <POPOSSpace
        key={title}
        name={title}
        hours={hours}
        address={address}
        image={images[0]}
      />
    );
  });

  return <div className="POPOSList">{spaces}</div>;
}

export default POPOSList;
