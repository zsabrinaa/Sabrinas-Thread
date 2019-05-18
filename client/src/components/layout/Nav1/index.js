import React, {Component} from "react";
import {Link} from 'react-router-dom';
import "./style.css";

class Navbar extends Component {
    render(){
    return (
        <div>
            <header>
                <nav>
                    <div className="nav-wrapper sabNav">
                        <Link to="/" className="brand-logo logo">Sabrina</Link>
                        <Link to="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
                        <ul className="right hide-on-med-and-down ">
                            <li><Link className="blackfont badge" to="/cart"><i className="material-icons">
                                shopping_cart
                            </i></Link></li>
                            
                            <li><Link className="blackfont" to="/staff">Staff</Link></li>
                        </ul>
                    </div>
                </nav>   
                <ul className="sidenav" id="mobile-demo">
                    <li><Link to="sass.html">Sass</Link></li>
                    <li><Link to="badges.html">Components</Link></li>
                    <li><Link to="collapsible.html">Javascript</Link></li>
                    <li><Link to="mobile.html">Mobile</Link></li>
                </ul>
            </header>
        </div>
    );
}
}
export default Navbar;