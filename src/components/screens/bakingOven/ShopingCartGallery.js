import React from 'react';
import { useSelector } from 'react-redux';

import { ShopingCartProduct } from '../ShopingCartProduct';

export default function ShopingCartGallery() {
    const invitedCakeList = useSelector((state) => state.invitedCakeList.invitedCakeList);

    return (
        <div className="container">
            <div className="row">
                {invitedCakeList.map(cake => (
                    <div className="col-md-4" key={cake.id}>
                     <ShopingCartProduct {...cake} />

                  </div>
                ))}
            </div>
            
        </div>
    );
}