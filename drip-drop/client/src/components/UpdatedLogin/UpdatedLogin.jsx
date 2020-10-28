import React, {useState, useEffect} from 'react';
import firebase from '../../firebase';
import './login.scss';

function UpdatedLogin(props) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    return (
        <main className="login-main">
            <div className="login">
  
                <form className="login-form" onSubmit={e=> e.preventDefault() && false}>
                    <h2 className="login-form__title">Sign In</h2>
                    <input className="login-form__input"  type="text" value={email} placeholder="email" onChange={e => setEmail(e.target.value)}/>
                    <input className="login-form__input" type="password" value={password} placeholder="password" onChange={e =>setPassword(e.target.value)}/>
                    <button className="login-form__button" type="submit" onClick={login}>Sign In</button>
                </form>
            </div>
        </main>
    )

    async function login() {
        try {
            await firebase.login(email, password)
            props.history.replace('./profile')
        }
        catch(error) {
            alert(error.message)
        }
    }
}

export default UpdatedLogin
