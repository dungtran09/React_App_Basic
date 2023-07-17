import React from "react";
import "./POPOSSpace.css";

function POPOSSpace(props) {
  const { name, image, hours, address } = props;

  return (
    <div className="POPOSSpace">
      <img
        src={`${process.env.PUBLIC_URL}images/${image}`}
        width="300"
        height="300"
        alt="600 Montgomery St."
      />
      <h3>{name}</h3>
      <p>{hours}</p>
      <div>{address}</div>
    </div>
  );
}

export default POPOSSpace;
