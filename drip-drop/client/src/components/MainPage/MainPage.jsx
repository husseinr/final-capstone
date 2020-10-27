// import React, {useState, useEffect, } from 'react';
// import {Route, Switch, Link, useParams, useRouteMatch} from 'react-router-dom';
// import MainPageItemCards from '../MainPageItemCards/MainPageItemCards';
// import CartPage from '../CartPage/CartPage';
// import axios from 'axios';
// import PageHeader from '../PageHeader/PageHeader';
// import StoreList from '../StoreList/StoreList';
// import CafeMenu from '../CafeMenu/CafeMenu';
// import FixedCafeMenu from '../FixedCafeMenu/FixedCafeMenu';
// import './mainPage.scss';
// import PlacesNearMe from "../PlacesNearMe/PlacesNearMe";
// import CoffeeImage from "../../assets/images/coffee 2.svg"
// import firebase from '../../firebase';

// updates below
// import UpdatedHomePage from '../UpdatedHomePage/UpdatedHomePage';
// import UpdatedLogin from '../UpdatedLogin/UpdatedLogin';
// import Register from '../Register/Register';
// import Profile from '../ProfilePage/ProfilePage';

// function MainPage(props) {

//     const {logoutHandler} = props;

//     let [cards, setCards] = useState([]);


//     let getItemList = () => {
//         axios
//         .get('/items')
//         .then(res => {
//             setCards(res.data)
//             console.log(res.data)
//         })
//         .catch(err => console.log(err))
//     }

//     useEffect (() => {
//         getItemList()
//     }, [], 

//      );



//     return (
//     <>
//     <PageHeader logoutHandler={logoutHandler} />
//     <Switch>
//         <Route exact path="/" component={UpdatedHomePage}/>
//         <Route exact path="/login" component={UpdatedLogin}/>
//         <Route exact path="/register" component={Register}/>
//         <Route exact path="/profile" component={Profile}/>
//         <Route exact path="/cart" component={CartPage}/>
//         <Route exact path="/menu" component={FixedCafeMenu}/>

        {/* <Route path="/" component={home} /> */}
   

        {/* <Route exact path="/cafes/:city" component={StoreList}/>
        <Route exact path="/cafes/:city/:cafe" component={CafeMenu}/> */}

        {/* <Route exact path="/cafes/:city/:cafe" component={CartPage}/> */}
        {/* <Route exact path="/cafes" render ={() =>     <main>
         <section>
             <div>
                 <h1> Where will you be enjoying your Coffee? </h1>
                 <PlacesNearMe/>
             </div>
             <div className="cardItems">
             {cards.map(card => (
                <MainPageItemCards 
                    city={card.name}
                    image={card.image}
                    key={card.id} />
             ))}
             </div>

             <img src = {CoffeeImage}></img>
         </section>
     </main>}
     /> */}

    // </Switch>

    {/* updates below */}
    // <Switch>
        {/* <Route exact path="/" component={HomePage} />
        <Route exact path="/cafes" component={CafeList} />
        <Route exact path="/cart" component={Cart} />
        <Route exact path="/login" component={CafeList} /> */}
       
    // </Switch>
          

    


//      </>
//     )
// }

export default MainPage
