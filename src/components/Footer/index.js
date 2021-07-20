import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faMailBulk } from '@fortawesome/free-solid-svg-icons';
const Footer = () => {
    return (
        <div className="main-footer">
            <footer>
                <div className="container">
                    <div className="row">
                        <div className="col-6 col-sm-4 col-lg-3">
                            <strong>QUICK LINKS</strong>
                            <ul>
                                <li>About us</li>
                                <li>Home</li>
                                <li>Product</li>
                                <li>Blog</li>
                            </ul>
                        </div>
                        <div className="col-6 col-sm-4 col-lg-3">
                            <strong>CATEGORIES</strong>
                            <ul>
                                <li>Men</li>
                                <li>Women</li>
                                <li>Kid</li>
                                <li>School</li>
                            </ul>
                        </div>
                        <div className="col-6 col-sm-4 col-lg-3">
                            <strong>CONTACT</strong>
                            <div className="row">
                                <div className="col">
                                    <FontAwesomeIcon icon={faHome} /> Binh Khanh, Can Gio District, Ho Chi Minh City
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <FontAwesomeIcon icon={faPhone} /> 0123456789
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <FontAwesomeIcon icon={faMailBulk} /> duynk@gmail.com
                                </div>
                            </div>

                        </div>
                        <div className="col-6 col-sm-4 col-lg-3">
                            <strong>SOCIAL MEDIA</strong>
                            <div className="icon-social">
                                <div>
                                    <img src="http://www.ansonika.com/allaia/img/facebook_icon.svg"></img>
                                </div>
                                <div>
                                    <img src="http://www.ansonika.com/allaia/img/instagram_icon.svg"></img>
                                </div>
                            </div>


                        </div>
                    </div>
                    <hr />
                    <div className="footer-copyright text-center py-3">© 2020 Copyright:
                        <strong>DuyNK</strong>
                    </div>
                </div>

            </footer>


        </div>
    )
}

export default Footer;