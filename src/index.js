import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router1 } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './scss/index.scss';
import Home from './pages/Home';

const routing = (
  <>
    <Router1>
      <Route exact path="/" component={Home} />
    </Router1>
  </>
);
ReactDOM.render(routing, document.getElementById('root'));
serviceWorker.unregister();
