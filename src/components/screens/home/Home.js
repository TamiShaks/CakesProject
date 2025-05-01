import React from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';
import ShopingCartProduct from '../bakingOven/ShopingCartProduct';
import './home.css'; // Ensure this file contains the necessary styles.

export default function Home() {
    const cakeList = useSelector((state) => state.cakesList.cakesList);
    const invitedCakeList = useSelector((state) => state.invitedCakeList.invitedCakeList);

    return (
        <div className="container" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <div className="row">
                {invitedCakeList.length > 0 && ( // Render sidebar only if there are invited products
                    <div className="col-md-3 sidebar">
                        <div className="cart-header">סל הקניות שלך</div>
                        {invitedCakeList.map(cake => (
                            <ShopingCartProduct key={cake.id} {...cake} className="small-cart-product" />
                        ))}
                    </div>
                )}
                <div className={invitedCakeList.length > 0 ? "col-md-9 main-content" : "col-md-12 main-content"}>
                    <div className="row">
                        {cakeList.map(cake => (
                            <div className="col-md-4" key={cake.id}>
                                <Product {...cake} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}