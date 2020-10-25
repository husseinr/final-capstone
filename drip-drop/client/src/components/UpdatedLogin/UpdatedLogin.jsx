import React, {useState, useEffect} from 'react';
import firebase from '../../firebase';
import {Link} from 'react-router-dom';

function UpdatedLogin(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    return (
        <div>
            <form onSubmit={e=> e.preventDefault() && false}>
                <input  type="text" value={email} placeholder="email" onChange={e => setEmail(e.target.value)}/>
                <input type="password" value={password} placeholder="password" onChange={e =>setPassword(e.target.value)}/>
                <input type="text"/>
                <button type="submit" onClick={login}>Sign In</button>
                <Link to='/register'><button type="submit" onClick={login}>Register</button></Link>
            </form>
        </div>
    )

    async function login() {
        try {
            await firebase.login(email, password)
            props.history.replace('./dashboard')
        }
        catch(error) {
            alert(error.message)
        }
    }
}

export default UpdatedLogin
