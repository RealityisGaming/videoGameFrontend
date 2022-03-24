import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import {FontAweseomeIcon} from "@fortawesome/react-fontawesome";


export default class NavigationContainer extends Component {
    constructor() {
        super();
    }


  render() {
    return (
      <div className='Town'>

        <NavLink exact to='/home'>Home</NavLink>
        <NavLink to='/tavern'>Tavern</NavLink>
        <NavLink to="/fields">Fields</NavLink>
        <NavLink to="/river">River</NavLink>
        <NavLink to="/haunted-woods">Dark Woods</NavLink>
        <NavLink to="/peaceful-woods">Bright Woods</NavLink>
        <NavLink to="/unknown-woods"> Location Unknown</NavLink>
        <NavLink to="/armor-store">Armor Store</NavLink>
        <NavLink to="/items-store">Items Store</NavLink> 
        <NavLink to="/weapons-store">Weapons</NavLink> 
        <NavLink to="/hero-container">Character Sheet</NavLink>
        <NavLink to="/enemy-container">Notes</NavLink>
      </div>
    )
  }
}
