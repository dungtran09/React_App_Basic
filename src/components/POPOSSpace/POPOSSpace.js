import React from "react";
import "../POPOSSpace/POPOSSpace.js";
import "./POPOSSpace.css";
import { Link } from "react-router-dom";

function POPOSSpace(props) {
  const { name, image, hours, address, id } = props;

  return (
    <div className="POPOSSpace">
      <img
        src={`${process.env.PUBLIC_URL}images/${image}`}
        width="300"
        height="300"
        alt="600 Montgomery St."
      />
      <Link className="POPOSSpace-title" to={`/details/${id}`}>
        <h3>{name}</h3>
      </Link>
      <div className="POPOSSpace-info">
        <p>{hours}</p>
        <p>{address}</p>
      </div>
    </div>
  );
}

export default POPOSSpace;
