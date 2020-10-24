import {ADD_PRODUCT_CART, GET_QTY_CART, INCREASE_QUANTITY, DECREASE_QUANTITY, DELETE_ITEM} from '../actions/types';

let initialState = {
    cartQty: 0,
    cartCost: 0,
    products: {

        dripCoffee: {
            item: "drip coffee",
            price: 2.99,
            cream: 0,
            sugar: 0,
            qty: 0,
            id: "0500",
            inCart: false
        },

        latte: {
            item: "latte",
            price: 2.99,
            cream: 0,
            sugar: 0,
            qty: 0,
            id: "0501",
            inCart: false
        },

        cappucino: {
            item: "cappucino",
            price: 2.99,
            cream: 0,
            sugar: 0,
            qty: 0,
            id: "0502",
            inCart: false
        },

        coldBrew: {
            item: "cold brew",
            price: 2.99,
            cream: 0,
            sugar: 0,
            qty: 0,
            id: "0503",
            inCart: false
        },

        espresso: {
            item: "espresso",
            price: 2.99,
            cream: 0,
            sugar: 0,
            qty: 0,
            id: "0504",
            inCart: false
        },

    },
}

export default (state = initialState, action) => {
    let selectedItem = ''
    switch(action.type) {
        case ADD_PRODUCT_CART:
            selectedItem = {...state.products[action.payload]}
            selectedItem.qty += 1;
            selectedItem.inCart = true;
            console.log(selectedItem)
            return {
                ...state,
                cartQty: state.cartQty + 1,
                cartCost: state.cartCost + state.products[action.payload].price,
                products: {
                    ...state.products,
                    [action.payload]: selectedItem
                }
            }
            case GET_QTY_CART:
                return {
                    ...state
                }

            case INCREASE_QUANTITY:
                selectedItem = {...state.products[action.payload]}
                selectedItem.qty += 1;
                return {
                    ...state,
                    cartQty: state.cartQty + 1,
                    cartCost: state.cartCost + state.products[action.payload].price,
                    products: {
                        ...state.products,
                        [action.payload]: selectedItem
                    }
                }

            case DECREASE_QUANTITY:
                selectedItem = {...state.products[action.payload]}
                let newCartCost = 0;
                let newCartQty = 0;
                if(selectedItem.qty === 0) {
                    selectedItem.qty=0
                    newCartCost = state.cartCost
                    newCartQty = state.cartQty
                }
                else {
                    selectedItem.qty -=1;
                    newCartCost = state.cartCost - state.products[action.payload].price
                    newCartQty = state.cartQty - 1
                    
                }
                return {
                    ...state,
                    cartQty: state.cartQty - 1,
                    cartCost: newCartCost,
   
                    products: {
                        ...state.products,
                        [action.payload]: selectedItem
                    }
                }

                case DELETE_ITEM:
                    selectedItem = {...state.products[action.payload]};
                    let priorQty = selectedItem.qty;
                    selectedItem.qty = 0;
                    selectedItem.inCart = false
                    return {
                        ...state,
                        cartQty: state.cartQty - priorQty,
                        cartCost: state.cartCost - (priorQty * selectedItem.price),
                        products: {
                            ...state.products,
                            [action.payload]: selectedItem
                        }
                    }

            default:
                return state;
    }
}