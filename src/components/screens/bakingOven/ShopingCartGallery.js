// import React, { useState, useEffect } from 'react';
// import { useSelector } from 'react-redux';
// import { ShopingCartProduct } from '../ShopingCartProduct';

// export default function ShopingCartGallery() {
//     const invitedCakeList = useSelector((state) => state.invitedCakeList.invitedCakeList);
//     const [toPay, setToPay] = useState(0);

//     useEffect(() => {
//         const total = invitedCakeList.reduce((total, cake) => total + cake.price, 0);
//         setToPay(total);
//     }, [invitedCakeList]);

//     return (
//         <div>
//             <div>
//                 {invitedCakeList.length > 0 ? (
//                     invitedCakeList.map(cake => (
//                         <div key={cake.id}>
//                             <ShopingCartProduct {...cake} />
//                         </div>
//                     ))
//                 ) : (
//                     <div>
//                         <p>No items in the cart.</p>
//                     </div>
//                 )}
//             </div>
//             <p>Total to pay: {invitedCakeList.length > 0 ? toPay : 0}</p>
//         </div>
//     );
// }
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ShopingCartProduct from './ShopingCartProduct';

export default function ShopingCartGallery() {
    const invitedCakeList = useSelector((state) => state.invitedCakeList.invitedCakeList);
    const [toPay, setToPay] = useState(0);

    useEffect(() => {
        const total = invitedCakeList.reduce((total, cake) => total + cake.price * cake.amount, 0);
        setToPay(total);
    }, [invitedCakeList]);

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">🛒 עגלת הקניות שלך</h2>

            {invitedCakeList.length > 0 ? (
                <>
                    {invitedCakeList.map(cake => (
                        <ShopingCartProduct key={cake.id} {...cake} />
                    ))}

                    <div className="text-end mt-4">
                        <h4 className="fw-bold">
                            סה״כ לתשלום: <span className="text-success">{toPay.toLocaleString()} ₪</span>
                        </h4>
                    </div>
                </>
            ) : (
                <div className="alert alert-info text-center mt-5">
                    אין מוצרים בעגלה 🍰
                </div>
            )}
        </div>
    );
}
