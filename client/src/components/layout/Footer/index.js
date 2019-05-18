import React from "react";
import "./style.css";


function Footer(props){
    return(
        <footer className="page-footer footer1">
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <p className="black-text text-darken-3">You can use rows and columns here to organize your footer content.</p>
            </div>
            <div className="col l4 offset-l2 s12">
              <ul>
                <li><a className="black-text text-darken-2" href="#!">Link 1</a></li>
                <li><a className="black-text text-darken-2" href="#!">Link 2</a></li>
                <li><a className="black-text text-darken-2" href="#!">Link 3</a></li>
                <li><a className="black-text text-darken-2" href="#!">Link 4</a></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright black-text text-darken-3">
          <div className="container centerd">
          © 2019 Copyright Text
    
          </div>
        </div>
      </footer>
          
    );
}
export default Footer