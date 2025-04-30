// // import React from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import Product from './Product';

// // export default function Home() {
// //      const cakeList=useSelector((state)=>state.cakesList);

// //     return (
// //      <>
// //         {cakeList.map(cake => (
// //                 <Product {...cake} />
// //             ))}
// //      </>
// //     );
// // }


import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Product from './Product';
import Nav from "../../nav";
import { EnlargedView } from './EnlargedView';

export default function Home() {
    const cakeList = useSelector((state) => state.cakesList.cakesList);

    return (
        <div className="container"style={{ fontFamily: 'Poppins, sans-serif' }}>
            <div className="row">
                {cakeList.map(cake => (
                    <div className="col-md-4" key={cake.id}>
                        <Product {...cake} />
                    </div>
                ))}
               {/* <EnlargedView {...cakeList[1]}/>  */}
            </div>
            
        </div>
    );
}

  
  
 

 
