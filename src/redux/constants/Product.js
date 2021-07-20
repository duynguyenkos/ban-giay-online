export const productAction = {
    GET_ALL: 'GET_ALL',
    GET_DETAIL: 'GET_DETAIL',
    FIND_ITEM: 'FIND_ITEM'
}

export const onGetAll = () => {
    return {
        type: productAction.GET_ALL
    }
}

export const onGetDetail = (product) => {
    return {
        type: productAction.GET_DETAIL,
        payload: product
    }
}

export const onFindItem = (productInfo) => {
    return {
        type: productAction.FIND_ITEM,
        payload: productInfo
    }

}
