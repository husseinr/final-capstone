import React, {useState, useEffect} from 'react';
import firebase from '../../firebase';
import './register.scss';

export default function Register(props) {
    const[email, setEmail] = useState('')
    const[name, setName] = useState('')
    const[password, setPassword] = useState('')
    return (
        <main className="register-main">
            <div className="register">
                <form className="register__form" onSubmit={e => e.preventDefault() && false}>
                    <input className="register__form-input" type="text" value={name} onChange={e => setName(e.target.value)} placeholder="name"></input>
                    <input className="register__form-input" type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="email"></input>
                    <input className="register__form-input" type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="password"></input>
                    <button className="register__form-button" type="submit" onClick={onRegister}>Submit</button>
                </form>
            </div>
        </main>
    )
    async function onRegister() {
        try {
            await firebase.register(name, email, password)
            props.history.replace('./profile')
        }
        catch(error) {
            alert(error.message)
        }
    }
}
