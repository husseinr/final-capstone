import React, {useState, useEffect} from 'react';
import {stripeProvide, Elements} from '@stripe/react-stripe-js';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {loadStripe} from '@stripe/stripe-js';
import fire from './fire';
import {Provider} from 'react-redux';
import store from './store';
import LoginPage from './components/LoginPage/LoginPage';
import PageHeader from './components/LoginPage/LoginPage';
import MainPage from './components/MainPage/MainPage'
import './App.css';

const stripePromise = loadStripe("pk_test_51Hfv8NExWXMrozUbXJA8P6T4RvVqoWKEol2mEsigT2bFSWANUA4Grtx7HG2ybOIi2bjqslmS1IAG2CwJApJ0NLhw000m3PsCk8")

// zomato API Key 98e4399f6ca42357455570fdf403fa2e

const App = () => {
//   let [user, setUser] = useState("");
//   let [email, setEmail] = useState("");
//   let [password, setPassword] = useState("");
//   let [emailError, setEmailError] = useState("Please enter your email");
//   let [hasAccount, setHasAccount] = useState(false);
//   let [passwordError, setPasswordError] = useState("");


//   let clearInputs = () => {
//     setEmail('');
//     setPassword('');
//   }
  
//   let clearErrors = () => {
//     setEmailError('');
//     setPasswordError('');
//   }


//  let loginHandler = () => {
//    clearErrors();
//   fire
//   .auth()
//   .signInWithEmailAndPassword(email, password)
//   .catch(err => {
//     switch (err.code){
//       case "auth/invalid-email":
//       case "auth/user-disabled":
//       case "auth/user-not-found":
//         setEmailError(err.message)
//         break;
//         case "auth/wrong-password":
//           setPasswordError(err.message)
//           break;
//       }
//     }
//   )
//  }

//  let signupHandler = () => {
//   clearErrors();
//   fire
//   .auth()
//   .createUserWithEmailAndPassword(email, password)
//   .catch(err => {
//     switch (err.code){
//       case "auth/email-already-in-use":
//       case "auth/invalid-email":
//         setEmailError(err.message)
//         break;
//         case "auth/weak-password":
//           setPasswordError(err.message)
//           break;
//       }
//     }
//   )
//  }

//  let logoutHandler = () => {
//    fire.auth().signOut();
//  }

// let userExistsListener = () => {
//   fire
//   .auth()
//   .onAuthStateChanged((user => {
//       if(user) {
//         clearInputs();
//         setUser(user)}
//       else {
//         setUser('')
//         }
//       }
//     )
//   )
// }

//   useEffect(() => {
//     userExistsListener();
//     },[],
//   )



    return (
      <BrowserRouter>
      <stripeProvider apiKey="pk_test_51Hfv8NExWXMrozUbXJA8P6T4RvVqoWKEol2mEsigT2bFSWANUA4Grtx7HG2ybOIi2bjqslmS1IAG2CwJApJ0NLhw000m3PsCk8">
      <Elements stripe={stripePromise}>
      <Provider store={store}>

      <div className="App">
        {/* {user ? (
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
        )} */}
        <MainPage/>
      </div>
      </Provider>
      </Elements>
      </stripeProvider>
      </BrowserRouter>
    );

}

export default App;
