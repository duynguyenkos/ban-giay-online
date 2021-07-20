import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { faList } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const MainNav = () => {

    const [searchinfo, setSearchInfo] = useState();
    const handleSearch = (event) => {
        const value = event.target.value;
        setSearchInfo(value);
    }

    const state = useSelector(state => state.cart);
    console.log(state.count);

    const [hovered, setHovered] = useState(false);
    const handleHover = () => {
        setHovered(!hovered);
    }
    return (
        <div className="main-nav">
            <div className="container h-100">
                <div className="row h-100 ">
                    <div className="col-sm-4 d-flex align-items-center">
                        <ul className="nav nav-cate ">
                            <li className="nav-item">
                                <span onClick={() => handleHover()}><FontAwesomeIcon icon={faList} className="mr-2" />CATEGORIES</span>
                            </li>
                            <li>
                                <ul className="list-group sub-nav-cate" style={{ display: hovered ? 'block' : 'none' }}>
                                    <li className="list-group-item"><Link to={`/categories/Adi`}>Adidas</Link></li>
                                    <li className="list-group-item"><Link to={`/categories/Nike`}>Nike</Link></li>
                                    <li className="list-group-item"><Link to={`/categories/Puma`}>Puma</Link></li>
                                    <li className="list-group-item"><Link to={`/categories/Conv`}>Converse</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <div className="col-sm-6 d-flex align-items-center">
                        <input className="form-control" placeholder="Tìm kiếm" id="txtSearch" onInput={handleSearch} />
                        <Link to={`/search/${searchinfo}`} className="btn"><FontAwesomeIcon icon={faSearch} /></Link>
                    </div>
                    <div className="col-sm-2 d-flex align-items-center nav-icons">
                        <span><FontAwesomeIcon icon={faUser} /></span>
                        <Link to="/cart"> <span><FontAwesomeIcon icon={faShoppingCart} /><strong className="cart-count" > {state.count}</strong></span></Link>
                        <span><FontAwesomeIcon icon={faHeart} /></span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default MainNav;