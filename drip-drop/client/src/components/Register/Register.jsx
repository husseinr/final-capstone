import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import firebase from '../../firebase'

export default function Register(props) {
    const[email, setEmail] = useState('')
    const[name, setName] = useState('')
    const[password, setPassword] = useState('')
    return (
        <div>
            <form onSubmit={e => e.preventDefault() && false}>
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="name"></input>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="email"></input>
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="password"></input>
                <button type="submit" onClick={onRegister}>Submit</button>
            </form>
            
        </div>
    )
    async function onRegister() {
        try {
            await firebase.register(name, email, password)
            props.history.replace('./dashboard')
        }
        catch(error) {
            alert(error.message)
        }
    }
}
