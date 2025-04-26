
// import React from 'react';
// import { useSelector } from 'react-redux';
// import Product from './home/Product';
// import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { inviteCake } from'../../redux/actions';
// export const EnlargedView = () => {
//     const dispatch = useDispatch();
//     const { id } = useParams(); 
//     const cakeList = useSelector((state) => state.cakesList);
//     const myCake = cakeList.find(cake => cake.id === parseInt(id)); 

//     const handleInviteCake = () => {
//         dispatch(inviteCake(myCake.id)); // Dispatch the action to decrement the amount
//     };

//     if (!myCake) { 
//         return <div>Loading...</div>;
//     }

//   return (
//     <>
//   {cakeList
//     .filter(cake => ((cake.shape === myCake.shape) &&(cake.color === myCake.color))||(cake.Characteristic === myCake.Characteristic))
//     .map(cake => (
//         <div key={cake.id}>
//             <Product {...cake} />
//         </div>
//     ))}
//     </>
//   )
// }






import React from 'react';
import { useSelector } from 'react-redux';
import Product from './home/Product';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { inviteCake } from'../../redux/actions';
export const EnlargedView = () => {
    const dispatch = useDispatch();
    const { id } = useParams(); 
    const cakeList = useSelector((state) => state.cakesList);
    const myCake = cakeList.find(cake => cake.id === parseInt(id)); 

    const handleInviteCake = () => {
        dispatch(inviteCake(myCake.id)); // Dispatch the action to decrement the amount
    };

    if (!myCake) { 
        return <div>Loading...</div>;
    }

    return (
        <div className="container my-4">
            <div className="text-center mb-4">
                {/* Increased size for the main cake image */}
                <img src={myCake.image} alt={myCake.name} className="img-fluid rounded" style={{ maxHeight: '600px', objectFit: 'cover' }} />
            </div>
            <div className="text-center">
                <h3>{myCake.name}</h3>
                <p>{myCake.description}</p>
                <p>Price: <strong>${myCake.price}</strong></p>
                <p>Amount: <strong>{myCake.amount}</strong></p>
                <button onClick={handleInviteCake} className="btn btn-primary">Invite</button>
            </div>

            <h4 className="mt-4">You might also like:</h4>
            <div className="row">
                {cakeList
                    .filter(cake => ((cake.shape === myCake.shape) &&(cake.color === myCake.color))||(cake.Characteristic === myCake.Characteristic)) // Avoid showing the same cake
                    .map(cake => (
                        <div key={cake.id} className="col-2 col-sm-4 col-md-3 mb-4"> {/* Reduced size for the products */}
                            <Product {...cake} />
                        </div>
                    ))}
            </div>
        </div>
    );
};