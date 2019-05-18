import React from "react";
import "./style.css";

function Nav2(props){
    return(
    <nav>
    <div className="nav-wrapper nav2">
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><a href="sass.html">T-Shirts</a></li>
        <li><a href="badges.html">Dresses</a></li>
        <li><a href="collapsible.html">Swimwear</a></li>
      </ul>
    </div>
  </nav>
    );
}
export default Nav2