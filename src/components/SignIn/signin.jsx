import React from 'react';
import './signin.scss'

import FormInput from '../FormInput/formInput';
import CustomButton from '../CustomButton/customButton';

class SignIn extends React.Component {
    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();
        this.setState({email: '', password: ''})
    }

    handleChange = event => {
        event.preventDefault();
        const {name, value} = event.target; 
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput name="email" type="email" label="email" value={this.state.email} handleChange={this.handleChange} required/>
                  
                    <FormInput name="password" type="password" label="password" value= {this.state.password} handleChange={this.handleChange} required />
            
                    <CustomButton type="submit"> Sign In </CustomButton>
                </form>
            </div>
        )
    }
}

export default SignIn;