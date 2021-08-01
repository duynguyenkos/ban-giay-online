import React, { useMemo, useState } from 'react'
import Table from 'react-bootstrap/Table'
import { useDispatch, useSelector } from 'react-redux'
import { onGetcCartItem, onIncreaseQuantityItem, onDecreaseQuantityItem, onCheckoutItem } from '../../redux/constants/Cart';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Alert, AlertTitle } from '@material-ui/lab';

const Cart = () => {
    const cart = useSelector(state => state.cart);
    const [isCheckOut, setCheckOut] = useState(false);
    const dispatch = useDispatch();
    const total = cart.listItem.reduce((acc, curr) => {
        return acc + curr.quantity * curr.price;
    }, 0)
    const [open, setOpen] = useState(false);
    const [isSuccess, setSuccess] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const addItemToLocalStorage =(items)=>{
        const dateCheckout= new Date();
        const dateDelivery= new Date();
        dateDelivery.setDate(dateCheckout.getDate()+15);
        const dateReceived = new Date();
        dateReceived.setDate(dateDelivery.getDate()+15);
        localStorage.clear();
        const checkoutCart={
            dateCheckout:dateCheckout.toLocaleDateString("en-US",{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
            dateDelivery:dateDelivery.toLocaleDateString("en-US",{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
            dateReceived:dateReceived.toLocaleDateString("en-US",{ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }),
            listItem:items
        }
        localStorage.setItem('checkoutCart', JSON.stringify(checkoutCart));
    }

    const handleCheckOut = () => {
        addItemToLocalStorage(cart.listItem);
        setCheckOut(true);
        setTimeout(() => {
            setCheckOut(false);
            setOpen(false);
            setSuccess(true);
            dispatch(onCheckoutItem());
        }, 5000);
        
    }
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
            <hr />
            {total > 0 && <div className="cart-check-out">
                <h3>Total: {total} $</h3>
                <button className="btn bg-secondary ml-2" onClick={()=>handleClickOpen()}>Go to Check out</button>
            </div>
            }
            {isSuccess && <Alert severity="success">
                <AlertTitle>Thank you for your purchase !</AlertTitle>
            </Alert>
            }
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">CheckOut</DialogTitle>
                {isCheckOut && <LinearProgress color="secondary" />}             
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
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Close
                    </Button>
                    <Button onClick={handleCheckOut} color="primary" autoFocus>
                        Check Out
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
}
export default Cart;