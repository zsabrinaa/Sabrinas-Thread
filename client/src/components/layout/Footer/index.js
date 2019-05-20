import React from "react";
import "./style.css";


function Footer(props) {
  return (
    <footer className="page-footer footer1">
      <div className="container">
        <div className="row">
          <div className="col l6 s12">
            <p className="black-text text-darken-3">#1 destination for mother-daughter fashion.</p>
          </div>
          <div className="col l4 offset-l2 s12">
            <ul>
              <li><a className="black-text text-darken-2" href="/report">Report Problem</a></li>
              <li><a className="black-text text-darken-2" href="/shop/cat/tees">T-Shirts</a></li>
              <li><a className="black-text text-darken-2" href="/shop/cat/dress">Dresses</a></li>
              <li><a className="black-text text-darken-2" href="/shop/cat/swimwear">Swimwear</a></li>
              <li><a className="black-text text-darken-2" href="/shop/cat/matching">Matching</a></li>
              <li><a className="black-text text-darken-2" href="/staff">Staff</a></li>   
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-copyright black-text text-darken-3">
        <div className="container centerd">
          © 2019 Sabrina's Threads Inc

          </div>
      </div>
    </footer>

  );
}
export default Footer