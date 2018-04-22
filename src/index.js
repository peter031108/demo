import React from 'react';
import ReactDOM from 'react-dom';
import 'w3-css/3/w3.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './components/App';
import Home from './components/Home';
import Repos from './components/Repos';
import About from './components/About/About';
import User from './components/User/User';
import Contacts from './components/Contacts/Contacts';
import '../res/styles/main.css';

ReactDOM.render(
  <Router>
    <div>
      <Route path="/" component={App} />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/repos/:name" component={Repos} />
        <Route path="/about" component={About} />
        <Route path="/user" component={User} />
        <Route path="/contacts" component={Contacts} />
      </Switch>
    </div>
  </Router>
  ,
  window.document.getElementById('app'),
);

