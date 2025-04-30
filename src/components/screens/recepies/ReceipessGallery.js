// import React from 'react';
// import { useSelector } from 'react-redux';
// import RecepiesProduct from './RecepiesProduct';

// export default function ReceipessGallery() {
//     const myRecepiesCakesList = useSelector((state) => state.myRecepiesCakesList.myRecepiesCakesList) || [];

//     return (
//         <div className="container">
//             <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>The Selected Recipes</h3>
//             <div className="row">
//                 <h4>Birthday</h4>
//                 {myRecepiesCakesList
//                     .filter(cake => cake.typeEvent === "birthday")
//                     .map(cake => (
//                         <div key={cake.id} className="col-2 col-sm-4 col-md-3 mb-4"> {/* Reduced size for the products */}
//                             <RecepiesProduct {...cake} />
//                         </div>
//                     ))}
//             </div>

//             <div className="row">
//                 <h4>Bar</h4>
//                 {myRecepiesCakesList
//                     .filter(cake => cake.typeEvent === "bar")
//                     .map(cake => (
//                         <div key={cake.id} className="col-2 col-sm-4 col-md-3 mb-4">
//                             <RecepiesProduct {...cake} />
//                         </div>
//                     ))}
//             </div>

//             <div className="row">
//                 <h4>Wedding</h4>
//                 {myRecepiesCakesList
//                     .filter(cake => cake.typeEvent === "wedding")
//                     .map(cake => (
//                         <div key={cake.id} className="col-2 col-sm-4 col-md-3 mb-4">
//                             <RecepiesProduct {...cake} />
//                         </div>
//                     ))}
//             </div>
//         </div>
//     );
// }
import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './ReceipessGallery.css';

export default function ReceipessGallery() {
  const myRecepiesCakesList = useSelector(
    (state) => state.myRecepiesCakesList.myRecepiesCakesList
  ) || [];

  const renderSection = (type, title) => {
    const filtered = myRecepiesCakesList.filter(cake => cake.typeEvent === type);

    if (filtered.length === 0) return null;

    return (
      <div className="recepies-section">
        <h3 className="section-title">{title}</h3>
        <div className="recepies-circle-list">
          {filtered.map(cake => (
            <Link key={cake.id} to={`/recepie/${cake.id}`} className="circle-link">
              <div className="circle-container">
                <img src={cake.image} alt={cake.name} className="circle-image" />
              </div>
            </Link>
          ))}
        </div>
        <div className="section-divider" />
      </div>
    );
  };

  return (
    <div className="recepies-gallery-container">
      {renderSection("birthday", "יום הולדת")}
      {renderSection("bar", "בר מצווה / בת מצווה")}
      {renderSection("wedding", "חתונה")}
    </div>
  );
}
