import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import { Home } from './pages/Home';
import {Details} from './pages/Details';
import { NotFound } from './pages/NotFound';
import { MainNavbar } from './Components/Navbar/MainNavbar';
import {ComoLlegar} from './Components/ComoLlegar/ComoLlegar';

class App extends Component {

  render() {
      return (
        <div>
          <MainNavbar />
          <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/details/:id' component={Details} />
          <Route path='/comollegar' component={ComoLlegar} />
          <Route component={NotFound} />
          <Home />
        </Switch>
        </div>
      );
    }
}

export default App;
