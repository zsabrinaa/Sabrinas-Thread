import React, { Component } from "react";
import { Link } from "react-router-dom";
import API from "../../utils/API";
import { Image } from "../Img";
import M from 'materialize-css';
class Detail extends Component {
    state = {
        item: {},
        src: "",
        quantity: "",
        size: "",
        price: "",
        id: "",
        selectedSize: ""
    };

    instance;


    
    componentDidMount() {
        API.getItem(this.props.match.params.id)
            .then(({ data }) => {
                this.setState({
                    item: data
                })
                M.FormSelect.init(document.querySelectorAll('select'));
                this.instance = M.FormSelect.getInstance(document.getElementById("size-stuff"));
            }).catch((err => console.log(err)))


    }
    render() {
        console.log(this.state)
        return (
            <div className="container">
                <div className="row">
                    <div className="col s6">
                        <Image key={this.state.item._id}
                            src={this.state.item.src}
                        />
                    </div>
                    <div className="col s6">
                        <h3>{this.state.item.name}</h3>
                        <div className="input-field col s12">
                            <select
                                id="size-stuff"
                                onChange={(e)=>{
                                    this.setState({
                                        selectedSize: e.target.value
                                    })
                                }}
                                >
                                <option value="" disabled selected>Size</option>
                                {this.state.item.size ? (
                                    Object.keys(this.state.item.size).map((size, i) => {
                                        const price = this.state.item.size[size]
                                        return <option value={size + " " + price}>{size}=  ${price}</option>
                                    })
                                ) : ""}
                            </select>
                            <label>Select Size</label>
                        </div>
                        <button
                            onClick={() => {
                                let resultsArray = this.state.selectedSize;
                                console.log(resultsArray)
                                let result = resultsArray
                                let size = result.split(" ");
                                let image = this.state.item.src;
                                let itemName = this.state.item.name;
                                let quantity = 1;
                                let productSize = size[0];
                                let price = size[1];
                                let productId = this.state.item._id;

                                // Save item details in a JSON object
                                let itemJson = {
                                    "itemName": itemName,
                                    "productSize": productSize,
                                    "price": price,
                                    "image": image,
                                    "quantity": quantity,
                                    "producId": productId
                                };
                                console.log("item selected" + JSON.stringify(itemJson));

                                // Local Storage is empty
                                if (localStorage.getItem("cart") === null) {
                                    console.log("local storage is empty");
                                    let cart = [];
                                    cart.push(itemJson);
                                    localStorage.setItem("cart", JSON.stringify(cart));
                                // Local Storage has something in it
                                } else {
                                    console.log("local storage is NOT empty");
                                    console.log("current local storage: " + localStorage.getItem("cart"));
                                    let currentCart = JSON.parse(localStorage.getItem("cart"));
                                    currentCart.push(itemJson);
                                    localStorage.setItem("cart", JSON.stringify(currentCart));
                                }
                            }}
                            type="submit"
                            className="addbtn"> Add To Cart <i class="material-icons">
                                shopping_cart
                        </i></button>
                    </div>
                </div>
            </div>
        )
    }
}
export default Detail;