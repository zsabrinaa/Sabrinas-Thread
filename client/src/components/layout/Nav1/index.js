import React, { Component } from "react";
import { Link } from 'react-router-dom';
import M from 'materialize-css';
import "./style.css";

class Navbar extends Component {
    componentDidMount() {
        var elem = document.querySelector(".sidenav");
        var instance = M.Sidenav.init(elem, {
            edge: "left",
            inDuration: 250
        });
    }
    render() {
        return (
            <div>
                <header>
                    <nav>
                        <div className="nav-wrapper sabNav">
                            <Link to="/" className="brand-logo logo"><img className="responsive-img" id="logo" src="http://sabrinaharrison.com/wp-content/uploads/2016/01/sabrina-web-logo-black.png" /></Link>
                            <Link to="/" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
                            <ul className="right hide-on-med-and-down ">
                                <li><Link className="blackfont badge" to="/cart"><i className="material-icons">
                                    shopping_cart
                            </i></Link></li>

                                <li><Link className="blackfont" to="/staff">Staff</Link></li>
                            </ul>
                        </div>
                    </nav>
                </header>
                <ul className="sidenav" id="mobile-demo"> <img className="responsive-img" id="logo" src="http://sabrinaharrison.com/wp-content/uploads/2016/01/sabrina-web-logo-black.png" />
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/cart">Cart</Link></li>
                    <li><Link to="/shop/cat/tees">T-Shirts</Link></li>
                    <li><Link to="/shop/cat/dress">Dresses</Link></li>
                    <li><Link to="/shop/cat/swimwear">Swimwear</Link></li>
                    <li><Link to="/shop/cat/matching">Matching</Link></li>
                    <li><Link to="/staff">Staff</Link></li>
                </ul>
            </div>
        );
    }
}
export default Navbar;