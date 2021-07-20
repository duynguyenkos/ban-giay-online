import React , {Children, useReducer}  from 'react'
import Product from '../components/Main/product';

const initialState = [
    {
        "id": 1,      
        "name": "Nike 1",
        "image_url": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/i1-c43a9734-8bc6-4390-b321-d123b733714d/react-phantom-run-flyknit-2-mens-running-shoe-ljcDnm.png",
        "size": [41,42,43,44,45],
        "price": 57,
        "brand":"Nike",
        "des":"NIKE’s athletic footwear products are designed primarily for specific athletic use, although a large percentage of the products are worn for casual or leisure purposes. We place considerable emphasis on high quality construction and innovative design for men, women and children"
    },
    {
        "id": 2,      
        "name": "Nike 2",
        "image_url": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5218dd66-7865-48c9-b4d9-87ed201eed2b/zoomx-vaporfly-next-2-mens-racing-shoe-cWdlvG.png",
        "size": [41,42,43,44],
        "price": 83,
        "brand":"Nike",
        "des":"NIKE’s athletic footwear products are designed primarily for specific athletic use, although a large percentage of the products are worn for casual or leisure purposes. We place considerable emphasis on high quality construction and innovative design for men, women and children"

    },
    {
        "id": 3,     
        "name": "Nike 3",
        "image_url": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5287d63c-03d9-48cb-b8ff-da578cdeb0fe/blazer-mid-77-vintage-shoe-lDpLRR.png",
        "size": [41],
        "price": 91,
        "brand":"Nike",
        "des":"NIKE’s athletic footwear products are designed primarily for specific athletic use, although a large percentage of the products are worn for casual or leisure purposes. We place considerable emphasis on high quality construction and innovative design for men, women and children"

    },
    {
        "id": 4,    
        "name": "Nike 4",
        "image_url": "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/9f2ae2ba-ecd1-4ddf-9bd5-6a2d5e30631c/air-max-270-mens-shoe-KkLcGR.png",
        "size": [41,43],
        "price": 45,
        "brand":"Nike",
        "des":"NIKE’s athletic footwear products are designed primarily for specific athletic use, although a large percentage of the products are worn for casual or leisure purposes. We place considerable emphasis on high quality construction and innovative design for men, women and children"

    },
    {
        "id": 5,    
        "name": "Adi 1",
        "image_url": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/e1aecacc9ed94cf0a85faca601130ae7_9366/Giay_UltraBoost_21_DJen_FY0378_01_standard.jpg",
        "size": [41,43],
        "price": 45,
        "brand":"Adi",
        "des":"NIKE’s athletic footwear products are designed primarily for specific athletic use, although a large percentage of the products are worn for casual or leisure purposes. We place considerable emphasis on high quality construction and innovative design for men, women and children"

    },
    {
        "id": 6,    
        "name": "Adi 2",
        "image_url": "https://assets.adidas.com/images/h_840,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/33a1f66c4e0b41c4b9d2ac91005f9db9_9366/Giay_UltraBoost_21_DJen_FY0306_01_standard.jpg",
        "size": [41,43],
        "price": 45,
        "brand":"Adi",
        "des":"NIKE’s athletic footwear products are designed primarily for specific athletic use, although a large percentage of the products are worn for casual or leisure purposes. We place considerable emphasis on high quality construction and innovative design for men, women and children"

    },
    {
        "id": 7,    
        "name": "Adi 3",
        "image_url": "https://product.hstatic.net/200000025394/product/ultraboost_pb_shoes_grey_fv8366_01_standard_c29b7ef8c90d434288d268d42cb557e5_master.jpg",
        "size": [41,43],
        "price": 45,
        "brand":"Adi",
        "des":"NIKE’s athletic footwear products are designed primarily for specific athletic use, although a large percentage of the products are worn for casual or leisure purposes. We place considerable emphasis on high quality construction and innovative design for men, women and children"

    },
    {
        "id": 8,    
        "name": "Adi 4",
        "image_url": "https://assets.adidas.com/images/w_320,f_auto,q_auto:sensitive,fl_lossy,c_fill,g_auto/91247bb15adb4f8c9b18ab2100f47cdb_9366/Giay_Ultraboost_PB_trai_cam_EG0429_01_standard.jpg",
        "size": [41,43],
        "price": 45,
        "brand":"Adi",
        "des":"NIKE’s athletic footwear products are designed primarily for specific athletic use, although a large percentage of the products are worn for casual or leisure purposes. We place considerable emphasis on high quality construction and innovative design for men, women and children"

    },
    {
        "id": 9,    
        "name": "Puma 1",
        "image_url": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/306796/02/sv01/fnd/EEA/fmt/png/Scuderia-Ferrari-Speedcat-Motorsport-Shoes",
        "size": [41,43],
        "price": 45,
        "brand":"Puma",
        "des":"NIKE’s athletic footwear products are designed primarily for specific athletic use, although a large percentage of the products are worn for casual or leisure purposes. We place considerable emphasis on high quality construction and innovative design for men, women and children"
    }
    ,
    {
        "id": 10,    
        "name": "Puma 2",
        "image_url": "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/192775/06/sv01/fnd/EEA/fmt/png/Uproar-Core-Men's-Basketball-Shoes",
        "size": [41,43],
        "price": 45,
        "brand":"Puma",
        "des":"NIKE’s athletic footwear products are designed primarily for specific athletic use, although a large percentage of the products are worn for casual or leisure purposes. We place considerable emphasis on high quality construction and innovative design for men, women and children"

    },
    {
        "id": 11,    
        "name": "Conv 1",
        "image_url": "https://www.converse.com/dw/image/v2/BCZC_PRD/on/demandware.static/-/Sites-cnv-master-catalog/default/dwba20e88b/images/d_08/561676C_D_08X1.jpg?sw=406",
        "size": [41,43],
        "price": 45,
        "brand":"Conv",
        "des":"NIKE’s athletic footwear products are designed primarily for specific athletic use, although a large percentage of the products are worn for casual or leisure purposes. We place considerable emphasis on high quality construction and innovative design for men, women and children"
    }
    ,
    {
        "id": 12,    
        "name": "Conv 2",
        "image_url": "https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/yctyhdx34g9c7azsg4az/converse-chuck-taylor-all-star-low-top-shoe-NLRAok.png",
        "size": [41,43],
        "price": 45,
        "brand":"Conv",
        "des":"NIKE’s athletic footwear products are designed primarily for specific athletic use, although a large percentage of the products are worn for casual or leisure purposes. We place considerable emphasis on high quality construction and innovative design for men, women and children"

    }


];

const ProductContext=React.createContext(initialState);

export const ProductProvider =({children})=>{

    return(
        <ProductContext.Provider value={initialState}>
            {children}
        </ProductContext.Provider>
    )
}

export default ProductContext;

