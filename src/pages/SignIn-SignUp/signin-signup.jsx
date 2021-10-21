import React from 'react';

import './signin-signup.scss'
import SignIn from '../../components/SignIn/signin';
import SignUp from '../../components/SignUp/signup';

const SignInSignUpPage = (props) => {
    return (
    <div className="sign-in-and-sign-up">
    <SignIn/>
    <SignUp />
    </div>
    );
}

export default SignInSignUpPage;