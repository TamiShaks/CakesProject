// import React from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { useParams, Link } from 'react-router-dom';
// import { reduceFromCart, removeFromCart } from '../../redux/actions';

// export const ShopingCartProduct = (product) => { // Destructure to access product directly
//     const dispatch = useDispatch();
//     const cakeList = useSelector((state) => state.invitedCakeList.invitedCakeList);
    
//     // Log the product to trace issues
//     console.log("Received product:", product);

//     // Validate product
//     if (!product) {
//         return <p>No product provided.</p>; // Handling case where no product is passed
//     }

//     const myCake = cakeList.find(cake => cake.id === product.id);

//     const handleReduceFromCart = () => {
//         if (myCake) {
//             dispatch(reduceFromCart(myCake.id)); // Dispatch the action to decrement the amount
//         }
//     };

//     const handleRemoveFromCart = () => {
//         if (myCake) {
//             dispatch(removeFromCart(myCake.id)); // Dispatch the action to remove the product
//         }
//     };

//     if (!myCake) {
//         return <p>Product not found.</p>; // Handling case where product is not found
//     }

//     return (
//         <div className="card" style={{ width: '18rem', margin: '10px' }}>
//             <Link to={`/bigViewe/${myCake.id}`}>
//                 <img src={myCake.image} className="card-img-top cake-image" alt={myCake.name} />
//             </Link>
//             <div className="card-body">
//                 <h5 className="card-title">{myCake.name}</h5>
//                 <p className="card-text">{myCake.description}</p>
//                 <p className="card-text">
//                     <strong>Price: </strong>${myCake.price} * {myCake.amount}
//                 </p>
//                 <p className="card-text"><small className="text-muted">ID: {myCake.id}</small></p>
//                 <button onClick={handleRemoveFromCart}>Remove Product Completely</button>
//                 <button onClick={handleReduceFromCart}>Reduce Quantity Ordered</button>
//             </div>
//         </div>
//     );
// };


import '../home/Product.css';

import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { reduceFromCart, removeFromCart } from '../../../redux/actions';

export default function ShopingCartProduct(props) {
    const dispatch = useDispatch();

    const handleReduceFromCart = (id) => {
          console.log("id:  ======",id);
            dispatch(reduceFromCart(id)); // Dispatch the action to decrement the amount
       
    };
    
    const handleRemoveFromCart = (id) => {
        console.log("id:  ======",id);

            dispatch(removeFromCart(id)); // Dispatch the action to remove the product
        
    };

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
                    <button className="btn btn-danger" onClick={() => handleRemoveFromCart(props.id)}>Remove Product Completely</button>
                    <button className="btn btn-warning" onClick={() => handleReduceFromCart(props.id)}>Reduce Quantity Ordered</button>
                </div>
            </div>
        </div>
    );
}