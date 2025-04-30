import React from 'react';
import { useSelector } from 'react-redux';
import RecepiesProduct from './RecepiesProduct';

export default function ReceipessGallery() {
    const myRecepiesCakesList = useSelector((state) => state.myRecepiesCakesList.myRecepiesCakesList) || [];

    return (
        <div className="container">
            <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>The Selected Recipes</h3>
            <div className="row">
                <h4>Birthday</h4>
                {myRecepiesCakesList
                    .filter(cake => cake.typeEvent === "birthday")
                    .map(cake => (
                        <div key={cake.id} className="col-2 col-sm-4 col-md-3 mb-4"> {/* Reduced size for the products */}
                            <RecepiesProduct {...cake} />
                        </div>
                    ))}
            </div>

            <div className="row">
                <h4>Bar</h4>
                {myRecepiesCakesList
                    .filter(cake => cake.typeEvent === "bar")
                    .map(cake => (
                        <div key={cake.id} className="col-2 col-sm-4 col-md-3 mb-4">
                            <RecepiesProduct {...cake} />
                        </div>
                    ))}
            </div>

            <div className="row">
                <h4>Wedding</h4>
                {myRecepiesCakesList
                    .filter(cake => cake.typeEvent === "wedding")
                    .map(cake => (
                        <div key={cake.id} className="col-2 col-sm-4 col-md-3 mb-4">
                            <RecepiesProduct {...cake} />
                        </div>
                    ))}
            </div>
        </div>
    );
}