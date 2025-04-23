<<<<<<< HEAD
// import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import Product from './Product';

// export default function Home() {
//      const cakeList=useSelector((state)=>state.cakesList);

//     return (
//      <>
//         {cakeList.map(cake => (
//                 <Product {...cake} />
//             ))}
//      </>
//     );
// }


import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product';

export default function Home() {
    const cakeList = useSelector((state) => state.cakesList);

    return (
        <div className="container">
            <div className="row">
                {cakeList.map(cake => (
                    <div className="col-md-4" key={cake.id}>
                        <Product {...cake} />
                    </div>
                ))}
            </div>
        </div>
    );
=======
import Nav from "../../nav";


 export default function Home()
{ 
   return(
    <>
    <h1>hhhhi to home</h1>
    </>
   );
>>>>>>> origin/main
}