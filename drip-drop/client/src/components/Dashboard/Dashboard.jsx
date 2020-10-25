import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import firebase from '../../firebase'


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
            
        </div>
    )

    async function logout() {
		await firebase.logout()
		props.history.push('/')
	}
}

export default Dashboard
