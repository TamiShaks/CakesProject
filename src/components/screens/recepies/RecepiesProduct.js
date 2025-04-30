// import '../home/Product.css';
// import React from 'react';
// import { Link } from "react-router-dom";
// import MyRaiting from './MyRaiting';

// export default function RecepiesProduct(props) {
//     return (
//         <div
//         className="card"
//         style={{
//           width: '18rem',
//           margin: '10px',
//           textAlign: 'center',
//           backgroundColor: '#ffe5e0', // רקע ורדרד אפרסקי
//           border: '1px solid #f3cccc',
//           borderRadius: '12px',
//           boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
//         }}
//       >
      
//       <Link to={`/Recepie/${props.id}`}>                
//       <img
//                     src={props.image}
//                     className="card-img-top"
//                     alt={props.name}
//                     style={{
//                         width: '120px',
//                         height: '120px',
//                         borderRadius: '50%',
//                         objectFit: 'cover',
//                         margin: '20px auto 10px',
//                         transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//                     }}
//                     onMouseOver={e => e.currentTarget.style.transform = 'scale(1.15)'}
//                     onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
//                 />
//             </Link>

//             <div className="card-body">
//                 <h5 className="card-title">{props.name}</h5>
//                 <p className="card-text">{props.description}</p>

//                 <MyRaiting id={props.id} />

//             </div>
//         </div>
//     );
// }
import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { reduceFromCart, removeFromCart } from '../../../redux/actions';
import '../home/Product.css'; // רק אם יש לך CSS נוסף שרלוונטי

export default function ShopingCartProduct(props) {
    const dispatch = useDispatch();

    const handleReduceFromCart = (id) => {
        dispatch(reduceFromCart(id));
    };

    const handleRemoveFromCart = (id) => {
        dispatch(removeFromCart(id));
    };

    return (
        <div className="card mb-4 shadow-sm" style={{ flexDirection: 'row', minHeight: '200px' }}>
            <div className="row g-0 w-100 align-items-center">
                <div className="col-md-4">
                    <Link to={`/bigViewe/${props.id}`}>
                        <img
                            src={props.image}
                            alt={props.name}
                            className="img-fluid rounded-start"
                            style={{ objectFit: 'cover', width: '100%', height: '200px' }}
                        />
                    </Link>
                </div>

                <div className="col-md-8">
                    <div className="card-body">
                        <h5 className="card-title mb-2">{props.name}</h5>
                        <p className="card-text mb-1 text-muted">{props.description}</p>
                        <p className="card-text mb-1"><strong>כמות:</strong> {props.amount}</p>
                        <p className="card-text mb-1"><strong>מחיר:</strong> ₪{(props.price * props.amount).toLocaleString()}</p>
                        <p className="card-text"><small className="text-muted">מזהה מוצר: {props.id}</small></p>

                        <div className="d-flex justify-content-between mt-3">
                            <button className="btn btn-outline-danger btn-sm" onClick={() => handleRemoveFromCart(props.id)}>
                                הסר לגמרי
                            </button>
                            <button className="btn btn-outline-warning btn-sm" onClick={() => handleReduceFromCart(props.id)}>
                                הפחת כמות
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


