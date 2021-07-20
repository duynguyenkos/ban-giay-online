import {productAction} from '../constants/Product';

const initialState ={
    data:[
        {
            "id": "1",
            "name": "Nike 1",
            "image_url": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-c43a9734-8bc6-4390-b321-d123b733714d/react-phantom-run-flyknit-2-mens-running-shoe-ljcDnm.png",
            "size": [41,42,43,44,45],
            "price": 57,
            "des":"NIKE’s athletic footwear products are designed primarily for specific athletic use, although a large percentage of the products are worn for casual or leisure purposes. We place considerable emphasis on high quality construction and innovative design for men, women and children"
        },
        {
            "id": "2",
            "name": "Nike 2",
            "image_url": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5218dd66-7865-48c9-b4d9-87ed201eed2b/zoomx-vaporfly-next-2-mens-racing-shoe-cWdlvG.png",
            "size": [41,42,43,44],
            "price": 83,
            "des":"NIKE’s athletic footwear products are designed primarily for specific athletic use, although a large percentage of the products are worn for casual or leisure purposes. We place considerable emphasis on high quality construction and innovative design for men, women and children"

        },
        {
            "id": "3",
            "name": "Nike 3",
            "image_url": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5287d63c-03d9-48cb-b8ff-da578cdeb0fe/blazer-mid-77-vintage-shoe-lDpLRR.png",
            "size": [41],
            "price": 91,
            "des":"NIKE’s athletic footwear products are designed primarily for specific athletic use, although a large percentage of the products are worn for casual or leisure purposes. We place considerable emphasis on high quality construction and innovative design for men, women and children"

        },
        {
            "id": "4",
            "name": "Nike 4",
            "image_url": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9f2ae2ba-ecd1-4ddf-9bd5-6a2d5e30631c/air-max-270-mens-shoe-KkLcGR.png",
            "size": [41,43],
            "price": 45,
            "des":"NIKE’s athletic footwear products are designed primarily for specific athletic use, although a large percentage of the products are worn for casual or leisure purposes. We place considerable emphasis on high quality construction and innovative design for men, women and children"

        }
    ],
    err:'',
    loading:false
}

const product= (state=initialState,action)=>{

    const{type}= action;
    switch(type){
        case productAction.GET_ALL:
            return {...state,loading:!state.loading}
        case productAction.GET_DETAIL:
            return {data: this.state.data.filter(product => product.id = action.payload),loading:!state.loading, err:''}
        default:
            return state
    }
}

export default product;