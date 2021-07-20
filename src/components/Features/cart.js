import React, { useMemo } from 'react'
import Table from 'react-bootstrap/Table'
import { useDispatch, useSelector } from 'react-redux'
import { onGetcCartItem, onIncreaseQuantityItem, onDecreaseQuantityItem } from '../../redux/constants/Cart';

const Cart = () => {

    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    console.log(cart.listItem);
    return (
        <div>
            <Table striped bordered hover className="tb-cart">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>Image</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Action</th>
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
                                <td>
                                    <button onClick={() => dispatch(onIncreaseQuantityItem(item.id))}>+</button>
                                    <button onClick={() => dispatch(onDecreaseQuantityItem(item.id))}>-</button>
                                </td>
                            </tr>
                        ))
                    }

                </tbody>
            </Table>
            <hr/>
            <div className="cart-check-out">             
                <button className="btn bg-secondary ml-2">Check out</button>
            </div>
        </div>

    )
}

const CheckOut =()=>{

    

}
export default Cart;