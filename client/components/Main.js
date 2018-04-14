import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from './Home';
import Blackjack from './Blackjack';

const Main = () =>{
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route path='/blackjack' component={Blackjack}/>
      </Switch>
    </div>
  )
}

module.exports = Main;
