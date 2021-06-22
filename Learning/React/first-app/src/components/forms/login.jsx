import React, { Component } from 'react';
import Joi from 'joi-browser';
import Form from './form';

class Login extends Form {
    state = {
        data : {email: "", password:""},
        errors: {}
    }

    schema = {
        email: Joi.string().required().label('Email'),
        password: Joi.string().required().label('Password')
    }

    doSubmit = ()=>{
        // call the server
        console.log("submitted")
    }

    render() {
        return (
            <div>
                <h1>Login</h1>
                <form onSubmit={this.handleSubmit}>
                    {this.renderInput("email","Email","email")}
                    {this.renderInput("password","Password","password")}
                    {this.renderButton("Login")}
                </form>
            </div>
        )
    }
}

export default Login;