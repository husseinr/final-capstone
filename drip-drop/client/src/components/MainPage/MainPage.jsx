import React, {useState, useEffect} from 'react';
import MainPageItemCards from '../MainPageItemCards/MainPageItemCards';
import axios from 'axios';
import PageHeader from '../PageHeader/PageHeader';
import './mainPage.scss'

function MainPage(props) {

    const {logoutHandler} = props;

    let [cards, setCards] = useState([]);

    let getItemList = () => {
        axios
        .get('/items')
        .then(res => {
            setCards(res.data)
            console.log(res.data)
        })
        .catch(err => console.log(err))
    }

    useEffect (() => {
        getItemList()
    }, [] );

    return (
    <>
    <PageHeader logoutHandler={logoutHandler} />
     <main>
         <section>
             <div>
                 <h1> What are you looking for today? </h1>
                 <input type="text" placeholder="location"></input>
             </div>
             <div className="cardItems">
             {cards.map(card => (
                <MainPageItemCards 
                    name={card.name}
                    image={card.image}
                    key={card.id} />
             ))}

             </div>
        

         </section>
     </main>
     </>
    )
}

export default MainPage
