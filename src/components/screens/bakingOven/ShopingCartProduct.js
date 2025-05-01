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

    return (
        <div className="card mb-4 shadow-sm w-100">
      <div className="row g-0 align-items-center">

        {/* תמונה בצד שמאל */}
        <div className="col-md-3">
          <Link to={`/bigViewe/${props.id}`}>
            <img
              src={props.image}
              alt={props.name}
              className="img-fluid rounded-start"
              style={{ height: '100%', objectFit: 'cover' }}
            />
          </Link>
        </div>

        {/* תוכן באמצע */}
        <div className="col-md-6 px-3 py-2">
          <h5 className="card-title mb-1">{props.name}</h5>
          <p className="card-text mb-1 text-muted">{props.description}</p>
          <p className="card-text mb-1">כמות: {props.amount}</p>
          <p className="card-text mb-1">סה״כ: ₪{(props.amount * props.price).toLocaleString()}</p>
          <small className="text-muted">מזהה: {props.id}</small>
        </div>

        {/* כפתורים בצד ימין */}
        <div className="col-md-3 text-end pe-4">
          <button className="btn btn-outline-danger btn-sm mb-2 w-100" onClick={() => handleRemoveFromCart(props)}>
            הסר לגמרי
          </button>
          <button className="btn btn-outline-warning btn-sm w-100" onClick={() => handleReduceFromCart(props.id)}>
            הפחת כמות
          </button>
        </div>

      </div>
    </div>
  );
}
