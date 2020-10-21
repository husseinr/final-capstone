import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import fire from './fire';
import LoginPage from './components/LoginPage/LoginPage';
import PageHeader from './components/LoginPage/LoginPage';
import MainPage from './components/MainPage/MainPage'
import './App.css';

const App = () => {
  let [user, setUser] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [emailError, setEmailError] = useState("Please enter your email");
  let [hasAccount, setHasAccount] = useState(false);
  let [passwordError, setPasswordError] = useState("");

  let clearInputs = () => {
    setEmail('');
    setPassword('');
  }
  
  let clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  }


 let loginHandler = () => {
   clearErrors();
  fire
  .auth()
  .signInWithEmailAndPassword(email, password)
  .catch(err => {
    switch (err.code){
      case "auth/invalid-email":
      case "auth/user-disabled":
      case "auth/user-not-found":
        setEmailError(err.message)
        break;
        case "auth/wrong-password":
          setPasswordError(err.message)
          break;
      }
    }
  )
 }

 let signupHandler = () => {
  clearErrors();
  fire
  .auth()
  .createUserWithEmailAndPassword(email, password)
  .catch(err => {
    switch (err.code){
      case "auth/email-already-in-use":
      case "auth/invalid-email":
        setEmailError(err.message)
        break;
        case "auth/weak-password":
          setPasswordError(err.message)
          break;
      }
    }
  )
 }

 let logoutHandler = () => {
   fire.auth().signOut();
 }

let userExistsListener = () => {
  fire
  .auth()
  .onAuthStateChanged((user => {
      if(user) {
        clearInputs();
        setUser(user)}
      else {
        setUser('')
        }
      }
    )
  )
}

  useEffect(() => {
    userExistsListener();
    },[],
  )



    return (
      <BrowserRouter>
      <div className="App">
        {user ? (
          <MainPage 
            logoutHandler={logoutHandler}/>
        ) : (
          <LoginPage 
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            loginHandler = {loginHandler}
            signupHandler = {signupHandler}
            hasAccount= {hasAccount}
            setHasAccount={setHasAccount}
            emailError = {emailError}
            passwordError = {passwordError}/>
        )}
      </div>
      </BrowserRouter>
    );

}

export default App;
