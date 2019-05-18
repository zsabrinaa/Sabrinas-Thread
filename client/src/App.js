import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Navbar from './components/layout/Nav1';
import Nav2 from './components/layout/Nav2';
import Home from './components/pages/Home';
import Staff from './components/pages/Staff';
import All from './components/pages/All';
import Detail from './components/pages/Details';
import Cart from './components/pages/Cart';
import Login from './components/auth/Login';
import './App.css';

function onAuthRequired({history}) {
  history.push('/login');
}

function App() { 
  return (
    <Router>
     <Security issuer='https://dev-252251.okta.com/oauth2/default'
                  client_id='0oalyqe85RrkfxnRJ356'
                  redirect_uri={window.location.origin + '/implicit/callback'}
                  onAuthRequired={onAuthRequired} >
      <div className="App">
        <Navbar />
        <Nav2/>
        <div className="container-fluid">
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={All} />
          <Route exact path="/shop/:id" component={Detail} />
          <Route exact path="/cart" component={Cart} />
          <SecureRoute exact path="/staff" component={Staff} />
          <Route path='/login' render={() => <Login baseUrl='https://dev-252251.okta.com' />} />
          <Route path='/implicit/callback' component={ImplicitCallback} />
        </div>
      </div>
      </Security>
    </Router>
  );
}

export default App;
