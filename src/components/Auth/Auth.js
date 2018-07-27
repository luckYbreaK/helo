import React, { Component } from 'react';
import {Link} from "react-router-dom";
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

    }

    register() {
        let {username, password} = this.state
        axios.post("/api/auth/register", {username,password}).then(res => {
            console.log(res.data);    
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
                    <button>Login</button>
                    <Link to="/dashboard"><button onClick={this.register}>Register</button></Link>
                </div>

            </div>
        );
    }
}

export default Auth;