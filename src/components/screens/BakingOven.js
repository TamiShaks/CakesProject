import React from 'react';
import { useSelector } from 'react-redux';
import ShopingCartProduct  from './ShopingCartProduct';

export default function BakingOven() {
    const invitedCakeList = useSelector((state) => state.invitedCakeList.invitedCakeList);
    console.log("Invited Cake List:", invitedCakeList); // Log the invitedCakeList

    return (
        <div className="container">
            <div className="row">
                {invitedCakeList.length === 0 ? (
                    <p>No items in the shopping cart.</p>
                ) : (
                    invitedCakeList.map((cake, index) => {  // Add index if needed
                        console.log("***Rendering Cake:", cake); // Log each cake being rendered
                        return (
                            <div className="col-md-4" key={cake.id}> {/* Ensure cake.id is unique */}
                                <ShopingCartProduct {...cake}/>
                            </div>
                        );
                    })
                )}
            </div>
        </div>
    );
}