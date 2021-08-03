import React, { useContext } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import ProductContext from '../../common/ProductContext';
import { useDispatch, useSelector } from 'react-redux';
import { onAddToCart } from '../../redux/constants/Cart';
import { Link, useParams } from 'react-router-dom';

const Search = () => {
    const { productInfo } = useParams();
    const product = useContext(ProductContext);
    const dispatch = useDispatch();

    const resultArr = product.filter(p => p.name === productInfo);

    if (resultArr.length > 0) {

        return (
            <div className="product">
                <div className="row">
                    {
                        resultArr.map((product) => (
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
                                        <button className="btn bg-secondary ml-2" onClick={() => { dispatch(onAddToCart({ img: product.image_url, id: product.id, name: product.name, price: product.price })) }}> Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
                                 
                                    </div>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>
        )
    }
    else {
        return (
            <div className="product">
                <p className="top-sell-title text-center">KHÔNG TÌM THẤY KẾT QUẢ</p>
            </div>
        )
    }

}
export default Search;
