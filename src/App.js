import React from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/Homepage/homepage.jsx";
import ShopPage from "./pages/ShopPage/shopPage";
import Header from "./components/Header/header.jsx";
import SignInSignUpPage from "./pages/SignIn-SignUp/signin-signup.jsx";
import { auth } from "./firebase/firebase.utils";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
    });
  }

  //ensures that no memory leaks happen and data does not preserve when app is closed
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/signin" component={SignInSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
