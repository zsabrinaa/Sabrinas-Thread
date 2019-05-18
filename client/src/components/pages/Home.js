import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';
import {Image} from '../Img'

export default withAuth(class Home extends Component {
  state = { authenticated: null };
    

   checkAuthentication = async() => {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  async componentDidMount() {
    this.checkAuthentication();
  }

  async componentDidUpdate() {
    this.checkAuthentication();
  }

   login = async() => {
    this.props.auth.login('/');
  }

   logout =async() => {
    this.props.auth.logout('/');
  }

  render() {
    if (this.state.authenticated === null) return null;

    const button = this.state.authenticated ?
      <button onClick={this.logout}>Logout</button> :
      <button onClick={this.login}>Login</button>;

    return (
      <div>
        <Link to='/'>Home</Link><br/>
        <Link to='/protected'>Protected</Link><br/>
        {button}
        <div className="container-fluid">
        <main>
    
          <div className="row">
          </div>
          <div className='row'>
            <div className="col m12">
              <Image
                src={"http://mcflysoftware.com/sabrina/sabrina_cover.png?fbclid=IwAR2biDqoWdq6sMuVkHKD13YRT4ApeH3AlldZtxAK9BXdVHeOj58ip3naVmI"}
              />
              <a href="/shop"><button
                // onClick={props.handleFormSubmit} 
                className="btn">Shop Now</button></a>
            </div>
          </div>
          {/* end top img */}
          <div className="row">
            <div className="col m12 canterd">
              <h1>Shop by type</h1>
            </div>
          </div>
          {/* end text */}
          <div className="row">
            <div className="col m3">
              <Image
                src={"https://ae01.alicdn.com/kf/HTB1hdwWRpXXXXa5XXXXq6xXFXXXh/2017-Hot-Selling-Mother-and-Daughter-Dress-Summer-Denim-T-shirt-Tops-Leopard-Skirt-Woman-Clothes.jpg_640x640.jpg"}
              />
            </div>
            <div className="col m3">
              <Image
                src={"https://ae01.alicdn.com/kf/HTB1GoDedAfb_uJkSmRyq6zWxVXa0/Family-Matching-Outfits-Father-Mother-Daughter-Son-Clothes-Look-tshirt-daddy-mommy-and-me-dress-mom.jpg_640x640.jpg"}
              />
            </div>
            <div className="col m3">
              <Image
                src={"https://ae01.alicdn.com/kf/HTB1lDY4XsfrK1RkSmLyq6xGApXa4/Mother-daughter-dresses-2019-Vintage-Floral-Mini-Dress-Mom-and-daughter-dress-Mother-and-daughter-clothes.jpg_640x640.jpg"}
              />
            </div>
            <div className="col m3">
              <Image
                src={"https://ae01.alicdn.com/kf/HTB1sYwkXHuWBuNjSszgq6z8jVXav/Family-Matching-Outfits-Mother-and-Daughter-swimsuit-Clothing-Mom-Girls-Swimwear-mommy-me-bikini-look-dresses.jpg_640x640.jpg"}
              />
            </div>

          </div>
        </main>
      </div>
      </div>
    );
  }
});