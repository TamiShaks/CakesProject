// import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import Product from './Product';
// import SmallShopingCartProduct from '../bakingOven/SmallShopingCartProduct';
// import './home.css'; // Ensure this file contains the necessary styles.

// export default function Home() {
//     const cakeList = useSelector((state) => state.cakesList.cakesList);
//     const invitedCakeList = useSelector((state) => state.invitedCakeList.invitedCakeList);
//     const [sortedCakeList, setSortedCakeList] = useState(cakeList);

//     const sortingByPrice = () => {
//         const newCakeList = [...cakeList].sort((a, b) => a.price - b.price);
//         setSortedCakeList(newCakeList);
//     };
//     const sortingByName = () => {
//         const newCakeList = [...cakeList].sort((p1, p2) => {
//             const name1 = p1.name.trim(); // Trim spaces
//             const name2 = p2.name.trim(); // Trim spaces
            
//             return name1.localeCompare(name2); // Use localeCompare for better lexicographical sorting
//         });
//         setSortedCakeList(newCakeList);
//     };
//     const sortingById = () => {
//         const newCakeList = [...cakeList].sort((a, b) => a.id - b.id);
//         setSortedCakeList(newCakeList);
//     };

//     return (
//         <div className="container" style={{ fontFamily: 'Poppins, sans-serif' }}>
//             <div className="row justify-content-center mb-3">
//                 <div className="col-auto">
//                     {/* Centering the Sorting Button */}
//                     <div className="dropdown">
//                         <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
//                             Sorting By Category
//                         </button>
//                         <ul className="dropdown-menu">
//                             <li><button className="dropdown-item" type="button" onClick={sortingByPrice}>Sort by Price</button></li>
//                             <li><button className="dropdown-item" type="button" onClick={sortingByName}>Sort by Name</button></li>
//                             <li><button className="dropdown-item" type="button" onClick={sortingById}>Sort by Id</button></li>
//                         </ul>
//                     </div>
//                 </div>
//             </div>

//             <div className="row">
//                 {invitedCakeList.length > 0 && (
//                     <div className="col-md-3 sidebar">
//                         <div className="cart-header">סל הקניות שלך</div>
//                         {invitedCakeList.map(cake => (
//                             <SmallShopingCartProduct key={cake.id} {...cake} className="small-cart-product" />
//                         ))}
//                     </div>
//                 )}
//                 <div className={invitedCakeList.length > 0 ? "col-md-9 main-content" : "col-md-12 main-content"}>
//                     <div className="row">
//                         {sortedCakeList.map(cake => (
//                             <div className="col-md-4" key={cake.id}>
//                                 <Product {...cake} />
//                             </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// }
import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Product from './Product';
import SmallShopingCartProduct from '../bakingOven/SmallShopingCartProduct';
import './home.css';

export default function Home() {
    const cakeList = useSelector((state) => state.cakesList.cakesList);
    const invitedCakeList = useSelector((state) => state.invitedCakeList.invitedCakeList);
    const [sortedCakeList, setSortedCakeList] = useState(cakeList);

    const sortingByPrice = () => {
        const newCakeList = [...cakeList].sort((a, b) => a.price - b.price);
        setSortedCakeList(newCakeList);
    };

    const sortingByName = () => {
        const newCakeList = [...cakeList].sort((p1, p2) =>
            p1.name.trim().localeCompare(p2.name.trim())
        );
        setSortedCakeList(newCakeList);
    };

    const sortingById = () => {
        const newCakeList = [...cakeList].sort((a, b) => a.id - b.id);
        setSortedCakeList(newCakeList);
    };

    return (
        <div className="container" style={{ fontFamily: 'Poppins, sans-serif' }}>
            <div className="row">
                {invitedCakeList.length > 0 && (
                    <div className="col-md-3 sidebar">
                        <div className="cart-header">סל הקניות שלך</div>
                        {invitedCakeList.map(cake => (
                            <SmallShopingCartProduct key={cake.id} {...cake} className="small-cart-product" />
                        ))}
                    </div>
                )}
                <div className={invitedCakeList.length > 0 ? "col-md-9 main-content" : "col-md-12 main-content"}>
                    {/* Sorting Dropdown */}
                    <div className="row mb-3">
                        <div className="col-auto">
                            <div className="dropdown">
                                <button className="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    סינון לפי קטגוריה
                                </button>
                                <ul className="dropdown-menu">
                                    <li><button className="dropdown-item" type="button" onClick={sortingByPrice}>מחיר</button></li>
                                    <li><button className="dropdown-item" type="button" onClick={sortingByName}>שם</button></li>
                                    <li><button className="dropdown-item" type="button" onClick={sortingById}>מספר מזהה</button></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Product Cards */}
                    <div className="row">
                        {sortedCakeList.map(cake => (
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
