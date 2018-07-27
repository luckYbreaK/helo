import React, { Component } from 'react';
import axios from "axios";

class Auth extends Component {
    constructor() {
        super();

        this.state = {
            username: "",
            password: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.register = this.register.bind(this);
        this.login = this.login.bind(this);
    }

    handleChange(inputField, val) {       
        switch (inputField) {
            case "username":
                this.setState({
                    username: val
                });
                break;
            case "password":
                this.setState({
                    password: val
                });
                break;
            default:
                break;
        }
    }

    login() {
        let {username, password} = this.state;
        axios.post("/api/auth/login", {username, password}).then(res => {
            if(res.data) {
                window.location = "http://localhost:3000/#/dashboard";
            }      
        })
    }

    register() {
        let {username, password} = this.state
        axios.post("/api/auth/register", {username,password}).then(res => {
            window.location = "http://localhost:3000/#/dashboard";
        });
    }

    render() {
      
        return (
            <div>
                <div>
                    <h1>Helo</h1>
                </div>
                <div>
                    Username:<input
                        type="text"
                        onChange={(e) => this.handleChange("username", e.target.value)}
                    />
                </div>
                <div>
                    Password:<input
                        type="text"
                        onChange={(e) => this.handleChange("password", e.target.value)}
                    />
                </div>
                <div>
                    <button onClick={this.login}>Login</button>
                    <button onClick={this.register}>Register</button>
                </div>

            </div>
        );
    }
}

export default Auth;