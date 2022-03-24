import React, { Component } from 'react';


import HeroItem from '../stat-blocks/hero-item';

export class HeroContainer extends Component {
  constructor() {
    super();
    
    this.state = {
      pageTitle: "Character Sheet",
      isLoading: false,
      sheet: [
        {name: "Character Name: Markeus"},
        {type: "Class: Thief"},
        {level: "Level: 1"},
        {xp: "XP: 0"}
      ],
      multi: [
        {type: "Thief"},
        {type: "Mage"},
        {type: "Warrior"}
      ],
      skills: [
        {first: "Strike"},
        {second: ""},
        {third: ''}
      ]
    };

  }


  heroSheet(){
    return this.state.sheet.map(basic => {
      return <HeroItem name={basic.name} type={basic.type} level={basic.level} xp={basic.xp} skills={basic.skills}/>;
    });
  }

  render() {

    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div>
          <h2>{this.state.pageTitle}</h2>
          <hr/>


          <h4>{this.heroSheet()}</h4>
      </div>
    )
  }
}
