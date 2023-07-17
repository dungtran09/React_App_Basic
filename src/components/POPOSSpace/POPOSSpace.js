import React from "react";
import "../POPOSSpace/POPOSSpace.js";
import { Link } from "react-router-dom";

function POPOSSpace(props) {
  const { name, image, hours, address, id } = props;

  return (
    <div className="POPOSSpace">
      <Link to={`/details/${id}`}>
        <img
          src={`${process.env.PUBLIC_URL}images/${image}`}
          width="300"
          height="300"
          alt="600 Montgomery St."
        />
        <h3>{name}</h3>
      </Link>
      <p>{hours}</p>
      <div>{address}</div>
    </div>
  );
}

export default POPOSSpace;
