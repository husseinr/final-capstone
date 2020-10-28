import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import firebase from './firebase';
import UpdatedLogin from './components/UpdatedLogin/UpdatedLogin';
import Register from './components/Register/Register';
import UpdatedHomePage from './components/UpdatedHomePage/UpdatedHomePage';
import Profile from './components/ProfilePage/ProfilePage';
import Menu from './components/FixedCafeMenu/FixedCafeMenu';
import CartPage from './components/CartPage/CartPage';

export default function App() {

    const [firebaseIntialized, setFirebaseIntialized] = useState(false)

    useEffect(() => {
        firebase.isInitialized().then(value => {
            setFirebaseIntialized(value)
        })
    })
    return firebaseIntialized !== false ? (
        <div>
            <BrowserRouter>
              <Provider store={store}>
                    <Switch>
                        <Route exact path="/" component={UpdatedHomePage}/>
                        <Route exact path="/login" component={UpdatedLogin}/>
                        <Route exact path="/register" component={Register}/>
                        <Route exact path="/profile" component={Profile}/>
                        <Route exact path="/menu" component={Menu}/>
                        <Route exact path="/cart" component={CartPage}/>
                    </Switch>
              </Provider>
            </BrowserRouter>
            
        </div>
    ) : <h2>Loading... </h2>
}
