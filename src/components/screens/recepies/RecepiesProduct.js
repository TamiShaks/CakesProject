
import '../home/Product.css';
import React from 'react';
import { Link, Route, Routes } from "react-router-dom";
import { EnlargedView } from './EnlargedView';
import Special from '../special/Special';
import BakingOven from '../bakingOven/BakingOven';

export default function RecepiesProduct(props) {
    return (
        <div className="card" style={{ width: '18rem', margin: '10px' }}>
            <Link to={`/EnlargedViewRecepie/${props.id}`}>
            <img src={props.image} className="card-img-top cake-image" alt={props.name} />
            </Link >
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
            </div>
           
        </div>
    );
}