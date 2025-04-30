import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { ShopingCartProduct } from '../ShopingCartProduct';

export default function ShopingCartGallery() {
    const invitedCakeList = useSelector((state) => state.invitedCakeList.invitedCakeList);
    const [toPay, setToPay] = useState(0);

    useEffect(() => {
        const total = invitedCakeList.reduce((total, cake) => total + cake.price, 0);
        setToPay(total);
    }, [invitedCakeList]);

    return (
        <div>
            <div>
                {invitedCakeList.length > 0 ? (
                    invitedCakeList.map(cake => (
                        <div key={cake.id}>
                            <ShopingCartProduct {...cake} />
                        </div>
                    ))
                ) : (
                    <div>
                        <p>No items in the cart.</p>
                    </div>
                )}
            </div>
            <p>Total to pay: {invitedCakeList.length > 0 ? toPay : 0}</p>
        </div>
    );
}