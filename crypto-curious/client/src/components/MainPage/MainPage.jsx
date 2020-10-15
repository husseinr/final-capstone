import React from 'react'

function MainPage(props) {

    const {logoutHandler} = props;
    return (
     <main>
         <section>
             <nav>
                 <h2>Logo</h2>
                 <button onClick={logoutHandler}>Log Out</button>
             </nav>
             <div>
                 <h1>Hello!</h1>
             </div>
         </section>
     </main>
    )
}

export default MainPage
