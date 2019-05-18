import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Security, SecureRoute, ImplicitCallback } from '@okta/okta-react';
import Navbar from './components/layout/Nav1';
import Home from './components/pages/Home';
import Staff from './components/pages/Staff';
import All from './components/pages/All';
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
        <div className="container">
          <Route exact path="/" component={Home} />
          <Route exact path="/shop" component={All} />
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
