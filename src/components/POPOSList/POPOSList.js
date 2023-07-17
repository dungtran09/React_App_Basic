import React, { useState } from "react";
import "./POPOSList.css";
import POPOSSpace from "../POPOSSpace/POPOSSpace";
import data from "../../sfpopos-data.json";
function POPOSList() {
  const spaces = data.map(({ title, address, hours, images }, i) => {
    return (
      <POPOSSpace
        id={i}
        key={title}
        name={title}
        hours={hours}
        address={address}
        image={images[0]}
      />
    );
  });

  const [query, setQuery] = useState("");
  return (
    <div className="POPOSList">
      <form>
        <input
          value={query}
          placeholder="Search"
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
      {spaces}
    </div>
  );
}

export default POPOSList;
