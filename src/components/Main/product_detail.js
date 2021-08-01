import React, { useContext } from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import ProductContext from '../../common/ProductContext';
import { useDispatch } from 'react-redux';
import { onAddToCart } from '../../redux/constants/Cart';

const ProductDetail = () => {
    const { productId } = useParams();
    const listProduct = useContext(ProductContext);
    const product = listProduct.filter(p => p.id == productId);
    const dispatch = useDispatch();
    return (
        <div className="container ">
            {product.map(p => (
                <div key={p.id} className="row">
                    <div className="col-sm-4 image-product p-10">

                        <img src={p.image_url}></img>

                    </div>
                    <div className="col-sm-4 image-product p-10">
                        <img src={p.image_url}></img>
                    </div>
                    <div className="col-sm-4  bg-light">

                        <h3>{p.name}</h3>
                        <span className="new-price">{p.price}$</span>
                        <p>{p.des}</p>
                        <h3>Size: {p.size}</h3>
                        <button className="btn bg-secondary ml-2" onClick={()=>{dispatch(onAddToCart({img:p.image_url,id:p.id,name:p.name,price:p.price}))}}>ADD TO CART <FontAwesomeIcon icon={faShoppingCart} /></button>
                    </div>

                </div>
            ))
            }
        </div>
    )
}

export default ProductDetail;