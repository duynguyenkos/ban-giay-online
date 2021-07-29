import React from 'react';
import { Link } from 'react-router-dom'

const MainHeader = () => {
    return (
        <div className="main-header">
            <div className="container h-100">
                <div className="row h-100">
                    <div className="col-sm-4 d-sm-flex align-items-center">
                        <div id="logo">
                            <span>BANGIAYONLINE</span>
                        </div>
                    </div>
                    <div className="col-sm-8 d-sm-flex align-items-center">
                        <ul className="nav nav-bar">
                            <li className="nav-item">
                                <Link to="/"><p className="nav-link text-white active">Home</p></Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/shopall" ><p className="nav-link text-white">Shop All</p></Link>
                            </li>
                         
                            <li className="nav-item">
                                <Link to="/contact" ><p className="nav-link text-white">Contact</p></Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default MainHeader;