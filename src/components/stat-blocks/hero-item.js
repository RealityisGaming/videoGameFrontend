import React from 'react'

export default function(props) {
  return (
    <div className='hero-time'>
        <div className='sheet-hero'>
          <div className='hero-base'>
            {props.name}

            <img src="../../../static/assets/images/characters/Mage.jpg"/>
            {props.type}
            {props.level}
            {props.skills}
            {props.xp}
          </div>
        </div>
    </div>
  )
}
