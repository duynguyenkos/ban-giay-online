import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { faTruck } from '@fortawesome/free-solid-svg-icons';
import Table from 'react-bootstrap/Table'
const TrackingFlow = () => {
    const data_local_storage = localStorage.getItem('checkoutCart');
    let listItem;
    let dateCheckout;
    let dateDelivery;
    let dateReceived;
    if (data_local_storage) {
        dateCheckout = JSON.parse(data_local_storage).dateCheckout || "";
        dateDelivery= JSON.parse(data_local_storage).dateDelivery || "";
        dateReceived=JSON.parse(data_local_storage).dateReceived || "";
        listItem = JSON.parse(data_local_storage).listItem || [];
    }
    return (
        <div>
            <TrackingDetail listItem={listItem} dateCheckout={dateCheckout} dateDelivery={dateDelivery} dateReceived={dateReceived} />
        </div>
    )
}
const TrackingDetail = props => {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="d-flex flex-row justify-content-between align-items-center order">
                    <div className="d-flex flex-column order-details"><span>Your order has been delivered</span><span className="date">by DHFL on {props.dateDelivery}</span></div>
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
                        <div className="d-flex flex-column align-items-start"><span>{props.dateCheckout}</span><span>Order placed</span></div>
                        <div className="d-flex flex-column align-items-center"><span>{props.dateDelivery}</span><span>Out for delivery</span></div>
                        <div className="d-flex flex-column align-items-end"><span>{props.dateReceived}</span><span>Delivered</span></div>
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
                            props.listItem.map((item, index) => (
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