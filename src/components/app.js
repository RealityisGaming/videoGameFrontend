import React, { Component } from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Axios from 'axios';
import { library } from "@fortawesome/fontawesome-svg-core";
import FontAwesomeIcon  from "@fortawesome/react-fontawesome";
import {faHandFist, faStore, faJar} from "@fortawesome/free-solid-svg-icons";

import NavigationContainer from './pages/navigation-container';
import Home from "./pages/home";
import Auth from './pages/auth';
import Tavern from './pages/pub';
import River from './pages/river';
import Fields from './pages/fields-area';
import ArmorStore from './pages/stores/armorStore';
import WeaponsStore from './pages/stores/weaponsStore';
import ItemsStore from './pages/stores/itemStore';
import Spooky from './pages/woodsy/haunted-woods';
import Woods from './pages/woodsy/peaceful-woods';
import Unknown from './pages/woodsy/unknown-woods';
import { HeroContainer } from './charactersheets/hero-container';
import { EnemyContainer } from './enemysheets/enemy-container';

library.add(faHandFist, faStore, faJar);


export default class App extends Component {

  render() {
    return (
      <div className='container'>
        <div>
          <Router>
            <NavigationContainer />
            
            <Switch>
              <Route exact path="/" component={Auth}/>
              <Route exact path="/home" component={Home}/>
              <Route path="/tavern" component={Tavern}/>
              <Route path="/fields" component={Fields}/>
              <Route path="/river" component={River}/> 
              <Route path='/haunted-woods' component={Spooky} />
              <Route path='/peaceful-woods' component={Woods} />
              <Route path='/unknown-woods' component={Unknown} />
              <Route path="/armor-store" component={ArmorStore}/>
              <Route path="/weapons-store" component={WeaponsStore}/>
              <Route path="/items-store" component={ItemsStore}/>
              <Route path="/hero-container" component={HeroContainer}/>
              <Route path="/enemy-container" component={EnemyContainer}/>
            </Switch>
          </Router>
        </div>
    </div>

    );
  }
}