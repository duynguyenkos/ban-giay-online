
export const cartAction = {
    ADD_TO_CART: 'ADD_TO_CART',
    GET_CART_ITEM: 'GET_CART_ITEM',
    INCREASE_QUANTITY_ITEM: 'INCREASE_QUANTITY_ITEM',
    DECREASE_QUANTITY_ITEM: 'DECREASE_QUANTITY_ITEM',
    CHECKOUT_ITEM:'CHECKOUT_ITEM'
}

export const onAddToCart = (product) => {
    return {
        type: cartAction.ADD_TO_CART,
        payload: product
    };
};

export const onGetcCartItem = () => {
    return {
        type: cartAction.GET_CART_ITEM
    }
}

export const onIncreaseQuantityItem = (prouductId) => {
    return {
        type: cartAction.INCREASE_QUANTITY_ITEM,
        payload: prouductId
    }
}

export const onDecreaseQuantityItem = (prouductId) => {
    return {
        type: cartAction.DECREASE_QUANTITY_ITEM,
        payload: prouductId
    }
}

export const onCheckoutItem =() =>{
    return {
        type:cartAction.CHECKOUT_ITEM
    }
}