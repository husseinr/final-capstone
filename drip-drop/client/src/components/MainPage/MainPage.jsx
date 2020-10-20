import React, {useState, useEffect} from 'react';
import axios from 'axios';
import PageHeader from '../PageHeader/PageHeader';


function MainPage(props) {

    const {logoutHandler} = props;

    return (
    <>
    <PageHeader logoutHandler={logoutHandler} />
     <main>
         <section>
             <div>


             </div>
         </section>
     </main>
     </>
    )
}

export default MainPage
