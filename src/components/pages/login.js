import axios from 'axios';
import React, { Component } from 'react';


export default class Login extends Component {
    constructor(props) {
        super(props);
        

        this.state = [
            {email: '', unqiue: true},
            {password: ''}
        ]


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            email: this.state.email.filter( item => {
                return `"Email already in use ${item.email === filter}"`
            })
        })
    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {

        axios.post("", {
            client: {
                email: this.state.email,
                password: this.state.password
            }, 
        },
        {withCredentials: true}
    ).then(response => {
        console.log('response', response)
    })


        event.preventDefault();
        // if (this.state.email === /*db.users.userlogin.email*/) {
        //     console.log("Account Created")
        // } else {
        //     console.log("Create an account")
        // }
    }

  render() {
    return (
        <div>
            <h1>Login</h1>

            <form onSubmit={this.handleSubmit}>
                <input 
                    type="email"
                    name="email"
                    placeholder='Your email'
                    value={this.state.email}
                    onChange={this.handleChange}
                />
                <input 
                    type="password"
                    name="password"
                    placeholder='Your password'
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <div>
                    <button type="submit">Login</button>
                </div>

            </form>
        </div>
    );
  }
}
