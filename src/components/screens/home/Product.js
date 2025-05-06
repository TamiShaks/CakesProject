import './Product.css';
import React from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
export default function Product(props) {

    const product = useSelector((state) =>
        state.cakesList.cakesList.find((product) => product.id === props.id)
    );
    const isOutOfStock = product.amount === 0;
    return (
        <div className="card" style={{ position: 'relative'}}>
            {/* , width: '18rem', margin: '10px'  */}
            <Link to={`/bigViewe/${props.id}`}>
                <img 
                    src={props.image} 
                    className="card-img-top cake-image" 
                    alt={props.name} 
                    style={{ opacity: isOutOfStock ? 0.4 : 1 }} // Adjust opacity based on quantity
                />
                {isOutOfStock && (
                    <div style={{
                        position: 'absolute', 
                        top: '50%', 
                        left: '50%', 
                        transform: 'translate(-50%, -50%)', 
                        color: 'white', 
                        backgroundColor: 'rgba(0, 0, 0, 0.7)', 
                        padding: '5px', 
                        borderRadius: '5px'
                    }}>
                        אזל מהמלאי
                    </div>
                )}
            </Link >
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
                <p className="card-text"><strong>Price: </strong>${props.price}</p>
                <p className="card-text"><small className="text-muted">ID: {props.id}</small></p>
            </div>
        </div>
    );
}