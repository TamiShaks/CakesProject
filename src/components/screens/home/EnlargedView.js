

// import React from 'react';
// import { useSelector } from 'react-redux';
// import Product from './Product';
// import { useDispatch } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { addToCart, inviteCake } from'../../../redux/actions';
// export const EnlargedView = () => {
//     const dispatch = useDispatch();
//     const { id } = useParams(); 
//     const cakeList = useSelector((state) => state.cakesList.cakesList);
//     const myCake = cakeList.find(cake => cake.id === parseInt(id)); 

//     const handleInviteCake = () => {
//         dispatch(inviteCake(myCake.id));
//         if(myCake.amount>0)
//            dispatch(addToCart({myCake})) // Dispatch the action to decrement the amount
//         else
//            alert("This product is out of stock")
//     };

//     if (!myCake) { 
//         return <div>Loading...</div>;
//     }

//     return (
//         <div className="container my-4">
//             <div className="text-center mb-4">
//                 {/* Increased size for the main cake image */}
//                 <img src={myCake.image} alt={myCake.name} className="img-fluid rounded" style={{ maxHeight: '600px', objectFit: 'cover' }} />
//             </div>
//             <div className="text-center">
//                 <h3>{myCake.name}</h3>
//                 <p>{myCake.description}</p>
//                 <p>Price: <strong>${myCake.price}</strong></p>
//                 <p>Amount: <strong>{myCake.amount}</strong></p>
//                 <button onClick={handleInviteCake} className="btn btn-primary">Invite</button>
//             </div>

//             <h4 className="mt-4">You might also like:</h4>
//             <div className="row">
//                 {cakeList
//                     .filter(cake => ((cake.shape === myCake.shape) &&(cake.color === myCake.color))||(cake.Characteristic === myCake.Characteristic)) // Avoid showing the same cake
//                     .map(cake => (
//                         <div key={cake.id} className="col-2 col-sm-4 col-md-3 mb-4"> {/* Reduced size for the products */}
//                             <Product {...cake} />
//                         </div>
//                     ))}
//             </div>
//         </div>
//     );
// };
























// // import React, { useState } from 'react';
// // import { useSelector, useDispatch } from 'react-redux';
// // import { useParams } from 'react-router-dom';
// // import { inviteCake } from '../../redux/actions';

// // export const EnlargedView = () => {
// //     const dispatch = useDispatch();
// //     const { id } = useParams();
// //     const cakeList = useSelector((state) => state.cakesList);
// //     const originalCake = cakeList.find(cake => cake.id === parseInt(id));

// //     const [selectedCake, setSelectedCake] = useState(originalCake); // כאן נוסיף בחירה דינמית

// //     const handleInviteCake = () => {
// //         dispatch(inviteCake(selectedCake.id));
// //     };

// //     if (!originalCake) {
// //         return <div>Loading...</div>;
// //     }

// //     return (
// //         <div className="container my-4">
// //             <div className="text-center mb-4">
// //                 {/* תצוגת העוגה שנבחרה */}
// //                 <img 
// //                     src={selectedCake.image} 
// //                     alt={selectedCake.name} 
// //                     className="img-fluid rounded" 
// //                     style={{ maxHeight: '600px', objectFit: 'cover' }} 
// //                 />
// //             </div>

// //             <div className="text-center">
// //                 <h3>{selectedCake.name}</h3>
// //                 <p>{selectedCake.description}</p>
// //                 <p>Price: <strong>${selectedCake.price}</strong></p>
// //                 <p>Amount: <strong>{selectedCake.amount}</strong></p>
// //                 <button onClick={handleInviteCake} className="btn btn-primary">Invite</button>
// //             </div>

// //             {/* תמונות קטנות עם אפשרות לבחור */}
// //             <h4 className="mt-4">You might also like:</h4>
// //             <div className="p-4 mt-3" style={{ backgroundColor: '#f8f9fa', borderRadius: '12px', border: '1px solid #dee2e6' }}>
// //                 <div className="row">
// //                     {cakeList
// //                         .filter(cake => ((cake.shape === originalCake.shape) && (cake.color === originalCake.color)) || (cake.Characteristic === originalCake.Characteristic))
// //                         .map(cake => (
// //                             <div 
// //                                 key={cake.id} 
// //                                 className="col-4 col-sm-3 col-md-2 mb-3 text-center"
// //                                 onClick={() => setSelectedCake(cake)} // פעולה בלחיצה
// //                                 style={{ cursor: 'pointer' }}
// //                             >
// //                                 <img 
// //                                     src={cake.image} 
// //                                     alt={cake.name} 
// //                                     style={{ width: '100px', height: '100px', objectFit: 'cover', borderRadius: '8px' }} 
// //                                 />
// //                             </div>
// //                         ))}
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // };
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Typography, Button, Container, Box, Grid } from '@mui/material';
import Product from './Product';
import { addToCart, inviteCake } from '../../../redux/actions';

export const EnlargedView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const cakeList = useSelector((state) => state.cakesList.cakesList);
  const myCake = cakeList.find(cake => cake.id === parseInt(id));

  const handleInviteCake = () => {
    dispatch(inviteCake(myCake.id));
    if (myCake.amount > 0) {
      dispatch(addToCart({ myCake }));
    } else {
      alert("This product is out of stock");
    }
  };

  if (!myCake) return <Typography>Loading...</Typography>;

  return (
    <Container sx={{ mt: 4, pb: 6 }}>
      <Box textAlign="center" mb={4}>
        <img
          src={myCake.image}
          alt={myCake.name}
          style={{ maxHeight: '500px', borderRadius: '12px', objectFit: 'cover' }}
        />
      </Box>

      <Box textAlign="center" mb={3}>
        <Typography variant="h4" color="primary" fontWeight="bold" gutterBottom>
          {myCake.name}
        </Typography>
        <Typography variant="body1" color="text.secondary" gutterBottom>
          {myCake.description}
        </Typography>
        <Typography variant="body1">
          Price: <strong>${myCake.price}</strong>
        </Typography>
        <Typography variant="body1">
          Amount: <strong>{myCake.amount}</strong>
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{
            mt: 2,
            px: 4,
            py: 1,
            fontWeight: 'bold',
            borderRadius: 2,
          }}
          onClick={handleInviteCake}
        >
          Invite
        </Button>
      </Box>

      <Typography variant="h6" fontWeight="bold" gutterBottom sx={{ fontFamily: 'Poppins, sans-serif' }}>

        You might also like:
      </Typography>
      {/* <Grid container spacing={2} justifyContent="center">
        {cakeList
          .filter(cake => ((cake.shape === myCake.shape) && (cake.color === myCake.color)) || (cake.Characteristic === myCake.Characteristic))
          .map(cake => (
            <Grid item xs={6} sm={4} md={3} key={cake.id}>
              <Product {...cake} />
            </Grid>
          ))}
      </Grid> */}
      <Grid container spacing={2} justifyContent="center">
  {cakeList
    .filter(cake => ((cake.shape === myCake.shape) && (cake.color === myCake.color)) || (cake.Characteristic === myCake.Characteristic))
    .map(cake => (
      <Grid item xs={4} sm={3} md={2} key={cake.id} textAlign="center">
        <a href={`/bigViewe/${cake.id}`} style={{ textDecoration: 'none' }}>
          <img
            src={cake.image}
            alt={cake.name}
            style={{
              width: '100px',
              height: '100px',
              objectFit: 'cover',
              borderRadius: '10px',
              border: '2px solid #fbd4c6',
              transition: 'transform 0.3s ease',
            }}
            onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
            onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
          />
        </a>
      </Grid>
    ))}
</Grid>
    </Container>
  );
};
