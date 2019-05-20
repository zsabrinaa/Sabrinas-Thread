import React, { Component } from "react";
import StripeCheckout from 'react-stripe-checkout';

import { Link } from "react-router-dom";
import { Image } from "../Img";
import DelBtn from "../DelBtn"
import axios from "axios";
import M from 'materialize-css';


class Cart extends Component {
    state = {
        items: [],


    };
    componentDidMount() {
        this.loadCart();
        M.FormSelect.init(document.querySelectorAll('select'));
    }
    getSubtotal = () => {
        // Get current cart
        const currentCart = JSON.parse(localStorage.getItem("cart"));
        let subtotal = 0

        currentCart.map(item => {
            subtotal = subtotal + parseFloat(item.price)
        })
        return subtotal;

    }
    getTax = () => {
        // Get current cart
        const currentCart = JSON.parse(localStorage.getItem("cart"));
        let subtotal = 0

        currentCart.map(item => {
            subtotal = subtotal + parseFloat(item.price)
        })
        return Number((subtotal * 1.0825) - subtotal).toFixed(2);

    }
    getTotal = () => {
        return Number(this.getSubtotal() * 1.0825 + 10).toFixed(2);
    }


    loadCart = () => {
        this.setState({
            items: JSON.parse(localStorage.getItem("cart")),
        })
    }
    deleteItem = id => {
        // Get current cart
        const currentCart = JSON.parse(localStorage.getItem("cart"));

        // Create object to hold our new cart
        let newCart = [];

        // Loop through current cart and any item that does not have the product ID that 
        // we want to delete
        currentCart.map(item => {
            if (item.producId != id) {
                newCart.push(item);
            }
        })
        // Clear everything in local storage
        localStorage.clear();
        // Set cart in local storage to our new cart object
        localStorage.setItem("cart", JSON.stringify(newCart));
        this.loadCart()
    }

    handleToken = (token) => {
        console.log({ token })
        const response = axios.post(
            "https://e63d4.sse.codesandbox.io/checkout",
            { token, }
        );
        const { status } = response.data;
        console.log("Response:", response.data);
        if (status === "success") {
            M.toast("Success! Check email for details", { type: "success" });
        } else {
            M.toast("Something went wrong", { type: "error" });
        }
    };
    render() {
        return (
            <main>
                <div className="container ">
                    <div className="row"></div>
                    <div className="row">
                        <table className="responsive-table">
                            <thead>
                                <tr>
                                    <th className="col s2"></th>
                                    <th className="col s2">Item Name</th>
                                    <th className="col s2">Quantity</th>
                                    <th className="col s2">Item Size</th>
                                    <th className="col s2">Item Price</th>
                                </tr>
                            </thead>
                            {this.state.items.length ? (
                                this.state.items.map(item => {
                                    return (
                                        <tbody>
                                            <tr>
                                                <DelBtn onClick={() => this.deleteItem(item.producId)} />
                                                <Link to={"/shop/" + item.producId}>  <td className="col s2"> <Image key={item.producId}
                                                    src={item.image}
                                                /></td></Link>
                                                <td className="col s2 cartText">{item.itemName}</td>
                                                <td className="col s2 cartText">{item.quantity}</td>
                                                <td className="col s2 cartText">size:{item.productSize}</td>
                                                <td className="col s2 cartText">${item.price}</td>
                                            </tr>
                                        </tbody>
                                    )
                                })
                            ) : (
                                    <h1>No Results to Display</h1>
                                )}
                        </table>
                    </div>
                    {this.state.items.length ? (
                        <div className="row">
                            <div className="row">
                                <div className="col s5 push-s7">
                                    <p>Subtotal: ${this.getSubtotal()}</p>
                                    <p>Tax: ${this.getTax()}</p>
                                    <p>Shipping: $10</p>
                                    <h4>Total: ${this.getTotal()}</h4>
                                </div>
                            </div>
                            <div className="col s5 push-s7">
                                <StripeCheckout
                                    stripeKey="pk_test_ghF466uME2tEX5zsqi6ix7iU00yBuJ4Wur"
                                    description="Sabrina Clothing"
                                    label="Pay with 💳"
                                    token={this.handleToken}
                                    billingAddress
                                    shippingAddress
                                    amount={this.getTotal() * 100}
                                />
                            </div>
                        </div>
                    ) : (""

                        )}
                </div>
            </main>
        )
    }
}

export default Cart;