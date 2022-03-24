import React, { Component } from 'react'
import Login from './login';
import loginImg from "../../../static/assets/images/auth/digital-illustration-forest-magic-portal-forest-174302813.jpg"

export default class Auth extends Component {
  render() {
    return (
        <div className='auth-container'>
            <div 
                className='left'
                style={{
                    backgroundImage: `url(${loginImg})`
                }}
            />
            <div className='right'>
                <Login />
            </div>
        </div>
    );
  }
}
