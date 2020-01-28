import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router1 } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './index.css';
import Login from './pages/Login';
import Logout from './pages/Logout';
import Dashboard from './pages/Dashboard';
import Inspections from './pages/Inspections';
import Map1 from './pages/Map';
import AddUser from './pages/AddUser';

const routing = (
  <>
    <Router1>
      <Route exact path="/" component={Dashboard} />
      <Route exact path="/adduser" component={AddUser} />
      <Route exact path="/inspections" component={Inspections} />
      <Route exact path="/map" component={Map1} />
      <Route exact path="/dashboard" component={Dashboard} />
      <Route exact path="/logout" component={Logout} />
      <Route exact path="/login" component={Login} />
    </Router1>
  </>
);
ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.unregister();
