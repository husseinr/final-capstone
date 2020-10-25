import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import firebase from '../../firebase';
import PlacesNearMe from '../PlacesNearMe/PlacesNearMe';
import './profilePage.scss';


function Dashboard(props) {

    // const [name, setName] = useState('')

    // useEffect(() => {
	// 	firebase.getCurrentUsername().then(setName)
	// })

	// if(!firebase.getCurrentUsername()) {
	// 	// not logged in
	// 	alert('Please login first')
	// 	props.history.replace('/login')
	// 	return null
    // }
    const [name, setName] = useState ('');
    // useEffect(() => {
    //     firebase.getCurrentUsername().then(value => {
    //         setName(value)
    //     })
    // })

    if(!firebase.getCurrentUsername()) {
        alert('login first')
        props.history.replace('/login')
        return null
    }

    return (
        <div>
            <h1>Welcome, {firebase.getCurrentUsername()}!</h1>
            <div className="profile-hero">
                <PlacesNearMe/>

            </div>
            <button onClick={logout}>Log Out</button>
            
        </div>
    )

    async function logout() {
		await firebase.logout()
		props.history.push('/')
	}
}

export default Dashboard
