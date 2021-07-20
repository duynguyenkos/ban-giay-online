import React,{ useContext } from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import ProductContext from '../../common/ProductContext';
import {useDispatch, useSelector} from 'react-redux';
import { onAddToCart } from '../../redux/constants/Cart';
import {Link} from 'react-router-dom';

const CATEGORIES =()=>{
    const {cateName}= useParams();
    const product = useContext(ProductContext);
    const listProduct = product.filter(p=>p.brand==cateName);
    const dispatch = useDispatch();

    return(
        <div className="product">
        <div className="row">
            {
                listProduct.map((product) =>(
                <div key={product.id} className="col-6 col-sm-4 col-lg-3">
                    <div className="grid-item">
                        <div className="image-product p-10">
                            <img alt="Nike-01" src={product.image_url} />
                        </div>
                        <div className="info-product">
                         <Link to={`/products/${product.id}`} ><h3>{product.name}</h3> </Link>
                            <span className="new-price">${product.price}</span>
                        </div>
                        <div className="add-to-cart">
                            <button className="btn bg-secondary ml-2" onClick={()=>{dispatch(onAddToCart({img:product.image_url,id:product.id,name:product.name,price:product.price}))}}> Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
                            <button className="btn bg-light text-dark ml-2">View Detail <FontAwesomeIcon icon={faShoppingBag} /></button>
                        </div>
                    </div>
                </div>
                ))
            }
        </div>
    </div>
    )
}
export default CATEGORIES;