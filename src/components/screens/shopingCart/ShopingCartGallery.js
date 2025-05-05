import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ShopingCartProduct from './ShopingCartProduct';
import './ShopingCartGallery.css'; // Ensure you have a CSS file for styles
import { Link } from 'react-router-dom';
import CakeImage from '../special/CakeImage';
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
                        <ShopingCartProduct key={cake.id} {...cake} className="full-width-product" />
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
            {toPay>0&&(<div>
                <Link to={`/Payment/${toPay}`} className="btn btn-primary mt-3">
                <p>למעבר לתשלום</p>
                </Link>
            </div>)}
        </div>
    );
}
