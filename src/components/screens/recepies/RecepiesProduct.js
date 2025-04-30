import '../home/Product.css';
import React from 'react';
import { Link } from "react-router-dom";
import MyRaiting from './MyRaiting';
import { Rating } from '@mui/material';
export default function RecepiesProduct(props) {
    return (
        <div
        className="card"
        style={{
          width: '18rem',
          margin: '10px',
          textAlign: 'center',
          backgroundColor: '#ffe5e0', // רקע ורדרד אפרסקי
          border: '1px solid #f3cccc',
          borderRadius: '12px',
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
        }}
      >
      
      <Link to={`/Recepie/${props.id}`}>                
      <img
                    src={props.image}
                    className="card-img-top"
                    alt={props.name}
                    style={{
                        width: '120px',
                        height: '120px',
                        borderRadius: '50%',
                        objectFit: 'cover',
                        margin: '20px auto 10px',
                        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}
                    onMouseOver={e => e.currentTarget.style.transform = 'scale(1.15)'}
                    onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
                />
            </Link>

            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
              {/* <Rating></Rating> */}
                <MyRaiting id={props.id} />

            </div>
        </div>
    );
}


