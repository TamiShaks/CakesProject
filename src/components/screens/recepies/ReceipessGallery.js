import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product';
import Nav from "../../nav";
import { EnlargedView } from './EnlargedView';
import RecepiesProduct from './RecepiesProduct';

export default function ReceipessGallery() {
    const myRecepiesCakesList = useSelector((state) => state.RecepiesCakesList.RecepiesCakesList);

    return (
        <div className="container">
            <div className="row">
               <p>birthday</p>
                {myRecepiesCakesList.filter(cake => (cake.typeEvent =="birthday") 
                    .map(cake => (
                        <div key={cake.id} className="col-2 col-sm-4 col-md-3 mb-4"> {/* Reduced size for the products */}
                            <RecepiesProduct {...cake} />
                        </div>
        ) ))}
               
            </div>
            
        </div>
    );
}

 

 
