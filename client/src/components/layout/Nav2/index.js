import React from "react";
import "./style.css";

function Nav2(props){
    return(
    <nav>
    <div className="nav-wrapper nav2">
      <ul id="nav-mobile" className="left hide-on-med-and-down">
        <li><a href="/shop/cat/tees">T-Shirts</a></li>
        <li><a href="/shop/cat/dress">Dresses</a></li>
        <li><a href="/shop/cat/swimwear">Swimwear</a></li>
        <li><a href="/shop/cat/matching">Matching</a></li>
      </ul>
    </div>
  </nav>
    );
}
export default Nav2