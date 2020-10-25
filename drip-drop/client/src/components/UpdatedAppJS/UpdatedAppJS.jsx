import React, {useState, useEffect} from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import firebase from '../../firebase';
import UpdatedLogin from '../UpdatedLogin/UpdatedLogin';
import Register from '../Register/Register';
import UpdatedHomePage from '../UpdatedHomePage/UpdatedHomePage';
import Dashboard from '../Dashboard/Dashboard';

export default function UpdatedAppJS() {

    const [firebaseIntialized, setFirebaseIntialized] = useState(false)

    useEffect(() => {
        firebase.initialized().then(value => {
            setFirebaseIntialized(value)
        })
    })
    return firebaseIntialized !== false ? (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={UpdatedHomePage}/>
                    <Route exact path="/login" component={UpdatedLogin}/>
                    <Route exact path="/register" component={Register}/>
                    <Route exact path="/dashboard" component={Dashboard}/>
                </Switch>
            </BrowserRouter>
            
        </div>
    ) : <h2>Loading... get loadingstyle </h2>
}
