import React, {useState, useEffect} from 'react';
import {Route, Switch, Link, useParams, useRouteMatch} from 'react-router-dom';
import firebase from '../../firebase';
import PlacesNearMe from '../PlacesNearMe/PlacesNearMe';
import './profilePage.scss';
import PageHeader from '../PageHeader/PageHeader';


function Profile(props) {

    const [name, setName] = useState ('');


    if(!firebase.getCurrentUsername()) {
        alert('please login first')
        props.history.replace('/login')
        return null
    }

    return (
        <>
        <PageHeader username={firebase.getCurrentUsername()} logout={logout}/>
        <Route exact path="/profile" render ={() => {
            return (
            <main className="profile-main">
                <div className="profile-main__hero">
                    <PlacesNearMe className="profile-main__places"/>
                </div>
            </main>
            )
        }}/>
        </>
    )

    async function logout() {
		await firebase.logout()
		props.history.push('/')
	}
}

export default Profile
