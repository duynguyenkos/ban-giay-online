import { cartAction } from '../constants/Cart'

const initialState = {
    count: 0,
    listItem: []
}

const cart = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            if (state.listItem.length === 0) {
                return { count: state.count + 1, listItem: [...state.listItem, { ...action.payload, quantity: 1 }] }
            }
            else {
                let checkExist = false;
                state.listItem.map((item) => {
                    if (item.id === action.payload.id) {
                        checkExist = true;
                        item.quantity++;
                    }
                })
                if (!checkExist) {
                    return { count: state.count + 1, listItem: [...state.listItem, { ...action.payload, quantity: 1 }] }
                }

                return {
                    count: state.count + 1,
                    listItem: state.listItem
                }

            }
        case 'INCREASE_QUANTITY_ITEM':
            state.listItem.map((item) => {
                if (item.id === action.payload) {
                    item.quantity++;
                }
            })
            return {
                count: state.count + 1,
                listItem: state.listItem
            }

        case 'DECREASE_QUANTITY_ITEM':
            state.listItem.map((item) => {
                if (item.id === action.payload && item.quantity > 0) {
                    item.quantity--;
                    state.count--;
                }
            })
            return {
                count: state.count,
                listItem: state.listItem.filter(p => p.quantity > 0)
            }
        case 'CHECKOUT_ITEM':
            return {
                count: 0,
                listItem: []
            }
        default:
            return state
    }
}

export default cart;