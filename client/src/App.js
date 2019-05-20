import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Navbar from './components/layout/Nav1';
import Nav2 from './components/layout/Nav2';
import Footer from './components/layout/Footer';
import Home from './components/pages/Home';
import Staff from './components/pages/Staff';
import All from './components/pages/All';
import Category from './components/pages/Category';
import Detail from './components/pages/Details';
import Cart from './components/pages/Cart';
import ReportPage from './components/pages/Report';
import Login from './components/auth/Login';
import './App.css';

function onAuthRequired({ history }) {
  history.push('/login');
}

function App() {
  return (
    <Router>
      <Security issuer='https://dev-252251.okta.com/oauth2/default'
        client_id='0oalyqe85RrkfxnRJ356'
        redirect_uri={window.location.origin + '/implicit/callback'}
        onAuthRequired={onAuthRequired} >
        <div className="App Site">
          
          <Navbar />
          <Nav2 />   
          <div className="container-fluid Site-content">
              <Route exact path="/" component={Home} />
              <Route exact path="/shop" component={All} />
              <Route exact path="/shop/:id" component={Detail} />
              <Route exact path="/shop/cat/:category" component={Category} />
              <Route exact path="/cart" component={Cart} />
              <Route exact path="/report" component={ReportPage} />
              <SecureRoute exact path="/staff" component={Staff} />
              <Route path='/login' render={() => <Login baseUrl='https://dev-252251.okta.com' />} />
              <Route path='/implicit/callback' component={ImplicitCallback} />
            </div>
         
          <Footer />
        </div>
      </Security>
    </Router>
  );
}

export default App;
