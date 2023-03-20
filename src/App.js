import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import "./App.css";
import Expenses from "./components/Expenses/Expenses";
import Login from "./components/login/Login";
import Signup from "./components/login/Signup";
import Profile from "./components/profile/Profile";
import AuthContext from "./store/auth-context";

function App() {
  const auth = useContext(AuthContext);
  const login = auth.islogin;
  console.log('login',login)
  return (
    <>
      <Switch>
        <Route exact path="/">
          {login && <Redirect to="/expenses" />}
          {!login && <Signup/>}
          
        </Route>

        <Route exact path="/login">
        {login && <Redirect to="/expenses" />}
          {!login && <Login/> }
         
          
        </Route>
        <Route exact path="/expenses">
          {login && <Expenses />}
          {!login && <Redirect to="/login" />}
        
         
        </Route>

        <Route exact path="/profile">
          {login && <Profile />}
          {!login && <Redirect to="/login" />}
          
        </Route>
      </Switch>
    </>
  );
}

export default App;
