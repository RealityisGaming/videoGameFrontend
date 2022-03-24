import React, { Component } from 'react'

import EnemyItem from "../stat-blocks/enemy-item.js"

export class EnemyContainer extends Component {
  constructor() {
    super();

    this.state = {
      pageTitle: "Notes on Monsters",
      enemies: [
        {name: "Slime"}, 
        {name: "Red Slime"},
        {name: "Purple Slime"}, 
        {name: "Goblin"},
        {name: "Goblin Boss"}, 
        {name: "Goblin Leader"}, 
        {name: "Lizdaran"},
        {name: "Lizdaran Shaman"},
        {name: "Lizdaran Chieftan"}
      ],
      types: [
        {type: "Slime family"},
        {type: "Goblin family"},
        {type: "Lizdaran family"}
      ],
      // stats: [

      // ]
    };
  }

  enemyName(){
    return this.state.enemies.map(item => {
      return <EnemyItem name={item.name}/*stats={stats}*/ />;
    })
  }
  enemyType(){
    return this.state.types.map(item => {
      return <EnemyItem type={item.type} /*== "slime" &&"red slime" && "purple slime" ? */ />;
    })
  }

  render() {
    return (
      <div>
          <h2>{this.state.pageTitle}</h2>
          <h4>{this.enemyName()}</h4>
          <h4>{this.enemyType()}</h4>
      </div>
    )
  }
}
