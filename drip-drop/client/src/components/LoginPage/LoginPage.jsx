import React from 'react';
import './loginPage.scss';

function LoginPage(props) {

    const {email, setEmail, password, setPassword, loginHandler, signupHandler, hasAccount, setHasAccount,emailError, passwordError} = props;

    return (
        <main className="main">
            <section className="login">
                <div className="login__section">
                    <label className="login__section-label"> </label>
                    <input className="login__section-input" placeholder="User" value={email} type="text" required onChange={(e) =>setEmail(e.target.value)}></input>
                    <p className="login__section-error">{emailError}</p>

                    <label className="login__section-label"> </label>
                    <input className="login__section-input" placeholder="Password" value={password} type="password" required onChange={(e) =>setPassword(e.target.value)}></input>
                    <p className="login__section-error">{passwordError}</p>

                    <div className="login__section-options"> 
                        {hasAccount ? 
                    (
                        <div className="login__section-options-items">
                            <button className="login__section-options-items-button" onClick={loginHandler}> Sign In </button>
                            <p className="login__section-options-items-text"> No Account? <button className="login__section-options-items-text-selector" onClick={() => setHasAccount(!hasAccount)}>Sign Up</button></p>
                        </div>
                        
                    ) 
                        : 
                    ( 
                        
                        <div className="login__section-options-items">
                            <button className="login__section-options-items-button" onClick={signupHandler}>Sign Up</button>
                            <p className="login__section-options-items-text"> Already have an Account? <button className="login__section-options-items-text-selector" onClick={() => setHasAccount(!hasAccount)}>Sign-in</button></p>
                        </div>
                    ) 
                    }
                    </div>
                </div>

            </section>
            
        </main>
    )
}

export default LoginPage
