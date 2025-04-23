// import React from 'react';

// export default function Product(props) {
  
//     return (
//      <>
//        <p>{props.id}</p>
//        <p>{props.name}</p>
//        <img src={props.image}></img>
//        <p>{props.description}</p>
//        <p>{props.price}</p>
//      </>
//     );
// }



import React from 'react';

export default function Product(props) {
    return (
        <div className="card" style={{ width: '18rem', margin: '10px' }}>
            <img src={props.image} className="card-img-top" alt={props.name} />
            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>
                <p className="card-text"><strong>Price: </strong>${props.price}</p>
                <p className="card-text"><small className="text-muted">ID: {props.id}</small></p>
            </div>
        </div>
    );
}