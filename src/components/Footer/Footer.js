import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="Footer">
      <p>© {new Date().getFullYear()} General . All rights reserved.</p>
    </div>
  );
}

export default Footer;
