// import '../home/Product.css';
// import React from 'react';
// import { Link } from "react-router-dom";
// import MyRaiting from './MyRaiting';

// export default function RecepiesProduct(props) {
//     return (
//         <div
//         className="card"
//         style={{
//           width: '18rem',
//           margin: '10px',
//           textAlign: 'center',
//           backgroundColor: '#ffe5e0', // רקע ורדרד אפרסקי
//           border: '1px solid #f3cccc',
//           borderRadius: '12px',
//           boxShadow: '0 2px 8px rgba(0,0,0,0.05)'
//         }}
//       >
      
//       <Link to={`/Recepie/${props.id}`}>                
//       <img
//                     src={props.image}
//                     className="card-img-top"
//                     alt={props.name}
//                     style={{
//                         width: '120px',
//                         height: '120px',
//                         borderRadius: '50%',
//                         objectFit: 'cover',
//                         margin: '20px auto 10px',
//                         transition: 'transform 0.3s ease, box-shadow 0.3s ease',
//                     }}
//                     onMouseOver={e => e.currentTarget.style.transform = 'scale(1.15)'}
//                     onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}
//                 />
//             </Link>

//             <div className="card-body">
//                 <h5 className="card-title">{props.name}</h5>
//                 <p className="card-text">{props.description}</p>

//                 <MyRaiting id={props.id} />

//             </div>
//         </div>
//     );
// }
import React from 'react';
import { Link } from "react-router-dom";
import RadioGroupRating from './RadioGroupRating';

export default function RecepiesProduct(props) {
    return (
        <div className="card mb-4 shadow-sm" style={{ flexDirection: 'row', minHeight: '200px' }}>
            <div className="row g-0 w-100 align-items-center">
                <div className="col-md-4">
                    <Link to={`/bigViewe/${props.id}`}>
                        <img
                            src={props.image}
                            alt={props.name}
                            className="img-fluid rounded-start"
                            style={{ objectFit: 'cover', width: '100%', height: '200px' }}
                        />
                    </Link>
                </div>

            <div className="card-body">
                <h5 className="card-title">{props.name}</h5>
                <p className="card-text">{props.description}</p>

                <RadioGroupRating id={props.id} />

            </div>
        </div>
        </div>
    );
}

