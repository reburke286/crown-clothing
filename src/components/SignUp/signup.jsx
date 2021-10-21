import React from 'react';
import './signup.scss'

import FormInput from '../FormInput/formInput';
import CustomButtom from '../CustomButton/customButton';

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils'

class SignUp extends React.Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state

        if (password !== confirmPassword) {
            alert("Passowrds don't match")
            return;
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, {displayName})
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: ''
            })
        } catch (err) {
            console.log(err)
        }

    }

    handleChange = event => {
        event.preventDefault();
        const {value, name} = event.target;
        this.setState({[name]: value})
    }
    render() {
        const {displayName, email, password, confirmPassword} = this.state
    return (
        <div className="sign-up">
        <h2 className="title">I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
            <FormInput
            type="text"
            name="displayName"
            value= {displayName}
            onChange={this.handleChange}
            label="Display Name"
            required></FormInput>
             <FormInput  
            type="text"
            name="email"
            value= {email}
            onChange={this.handleChange}
            label="Email"
            required></FormInput>
            <FormInput
            type="password"
            name="password"
            value= {password}
            onChange={this.handleChange}
            label="Password"
            required></FormInput>
            <FormInput
            type="password"
            name="confirmPassword"
            value= {confirmPassword}
            onChange={this.handleChange}
            label="Confirm Password"
            required></FormInput>
            <CustomButtom
            type="submit"
            >Sign Up</CustomButtom>
           

        </form>
        </div>
    )
    }
}

export default SignUp;