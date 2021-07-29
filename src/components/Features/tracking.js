import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import Table from 'react-bootstrap/Table'
const TrackingFlow = () => {

    const checkoutCart = JSON.parse(localStorage.getItem('checkoutCart')) || [];
    const cart= checkoutCart.listItem;

    return (
        <div className="container mt-5">
            <div className="row">
                <div className="d-flex flex-row justify-content-between align-items-center order">
                    <div className="d-flex flex-column order-details"><span>Your order has been delivered</span><span className="date">by DHFL on 21 Jan, 2020</span></div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12">
                    <div className="d-flex flex-row justify-content-between align-items-center align-content-center">
                        <span className="dot"></span>
                        <hr className="flex-fill track-line" />
                        <span><FontAwesomeIcon className="check-done" icon={faTruck} /></span>
                        <hr className="flex-fill track-line" />
                        <span><FontAwesomeIcon className="check-done" icon={faCheckSquare} /></span>
                    </div>
                    <div className="d-flex flex-row justify-content-between align-items-center align-content-center">
                        <div className="d-flex flex-column align-items-start"><span>15 Mar</span><span>Order placed</span></div>
                        <div className="d-flex flex-column align-items-center"><span>15 Mar</span><span>Out for delivery</span></div>
                        <div className="d-flex flex-column align-items-end"><span>15 Mar</span><span>Delivered</span></div>
                    </div>
                </div>
            </div>
            <div className="row">
                <strong>List Item</strong>
                <Table striped bordered hover className="tb-cart">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Product</th>
                            <th>Image</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                      {
                           cart.listItem.map((item, index) => (
                            <tr key={index}>
                                <td>{index + 1}</td>
                                <td> {item.name} </td>
                                <td> <img src={item.img} ></img></td>
                                <td> {item.quantity} </td>
                                <td> {item.price} </td>
                            </tr>
                        ))
                      }
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

export default TrackingFlow;