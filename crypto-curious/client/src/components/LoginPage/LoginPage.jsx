import React from 'react'

function LoginPage(props) {

    const {email, setEmail, password, setPassword, loginHandler, signupHandler, hasAccount, setHasAccount,emailError, passwordError} = props;

    return (
        <main>
            <section className="login">
                <div className="login__section">
                    <label className="login__section-label"> User </label>
                    <input className="login__section-input" value={email} type="text" required onChange={(e) =>setEmail(e.target.value)}></input>
                    <p className="login__section-error">{emailError}</p>

                    <label className="login__section-label"> Password </label>
                    <input className="login__section-input" value={password} type="password" required onChange={(e) =>setPassword(e.target.value)}></input>
                    <p className="login__section-error">{passwordError}</p>

                    <div> 
                        {hasAccount ? 
                    (
                        <div>
                            <button onClick={loginHandler}> Sign In </button>
                            <p> No Account? <span onClick={() => setHasAccount(!hasAccount)}>Sign Up</span></p>
                        </div>
                        
                    ) 
                        : 
                    ( 
                        
                        <div>
                            <button onClick={signupHandler}>Sign Up</button>
                            <p> Already have an Account? <span span onClick={() => setHasAccount(!hasAccount)}>Sign-in</span></p>
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
