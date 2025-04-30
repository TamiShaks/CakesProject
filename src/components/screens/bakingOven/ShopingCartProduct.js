import '../home/Product.css';
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addAllReturn, addReturn, reduceFromCart, removeFromCart } from '../../../redux/actions';

export default function ShopingCartProduct(props) {
    const dispatch = useDispatch();

    const handleReduceFromCart = (id) => {
          console.log("id:  ======",id);
            dispatch(reduceFromCart(id)); // Dispatch the action to decrement the amount
            dispatch(addReturn(id))
    };
    
    const handleRemoveFromCart = (props) => {
            
            dispatch(removeFromCart(props.id)); // Dispatch the action to remove the product
            dispatch(addAllReturn({...props}))
        
    };
    
    console.log("))))((((a",props.amount);

    return (
        <div className="card mb-4">
            <Link to={`/bigViewe/${props.id}`}>
                <img src={props.image} alt={props.name} className="card-img-top cake-image"/>
            </Link>
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
                <p className="card-text"><strong>Price: </strong>${props.price*props.amount}</p>
                <p className="card-text"><strong>Quantity Ordered: </strong>{props.amount}</p> {/* Displaying the ordered quantity */}
                <p className="card-text"><small>ID: {props.id}</small></p>
                <div className="d-flex justify-content-between">
                    <button className="btn btn-danger" onClick={() => handleRemoveFromCart(props)}>Remove Product Completely</button>
                    <button className="btn btn-warning" onClick={() => handleReduceFromCart(props.id)}>Reduce Quantity Ordered</button>
                </div>
            </div>
        </div>
    );
}