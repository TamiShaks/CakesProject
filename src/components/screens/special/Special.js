// // import React, { useState, useMemo } from 'react';
// // import { CakeImage } from '../special/CakeImage';
// // import loading from '../../../assets/images/loading.gif';
// // import './Special.css';
// // import { addToCart } from '../../../redux/actions';
// // import { useDispatch } from 'react-redux';
// // import imageMap from './CakeImage';

// // export default function Special() {
// //   const [shape, setShape] = useState('');
// //   const [layers, setLayers] = useState('1');
// //   const [flavor, setFlavor] = useState('');
// //   const [decoration, setDecoration] = useState('');
// //   const [showImageOnly, setShowImageOnly] = useState(false);
// //   const [isLoading, setIsLoading] = useState(false);
// //   const dispatch = useDispatch();

// //   const imageId = useMemo(() => {
// //     const computedLayers = shape === '1' ? layers : '1';
// //     return shape + computedLayers + flavor + decoration;
// //   }, [shape, layers, flavor, decoration]);

// //   const handleInviteCake = (myCake) => {
// //     dispatch(addToCart({ myCake }));
// //   };

// //   const handleShowImage = () => {
// //     setIsLoading(true);
// //     setTimeout(() => {
// //       setIsLoading(false);
// //       setShowImageOnly(true);
// //     }, 3000);
// //   };

// //   const handleReset = () => {
// //     setShape('');
// //     setLayers('1');
// //     setFlavor('');
// //     setDecoration('');
// //     setShowImageOnly(false);
// //     setIsLoading(false);
// //   };

// //   return (
// //     <div className={`container d-flex flex-column py-5 ${showImageOnly || isLoading ? 'no-background' : ''}`} style={{ direction: 'rtl' }}>

// //       {!showImageOnly && !isLoading ? (
// //         <>
// //       <h2 className="text-center mb-4">  בחר בעיצוב כמו שאתה אוהב...</h2>
// //           {/* Shape selection */}
// //           <div className="form-group mb-4">
// //             <p className="fw-bold">בחרי צורה:</p>
// //             <div className="form-check">
// //               <input className="form-check-input" type="radio" name="shape" value="1" onChange={(e) => setShape(e.target.value)} />
// //               <label className="form-check-label">עיגול</label>
// //             </div>
// //             <div className="form-check">
// //               <input className="form-check-input" type="radio" name="shape" value="2" onChange={(e) => setShape(e.target.value)} />
// //               <label className="form-check-label">מלבן</label>
// //             </div>
// //             <div className="form-check">
// //               <input className="form-check-input" type="radio" name="shape" value="3" onChange={(e) => setShape(e.target.value)} />
// //               <label className="form-check-label">לב</label>
// //             </div>
// //           </div>

// //           {/* Layers selection (only if circle) */}
// //           {shape === '1' && (
// //             <div className="form-group mb-4">
// //               <p className="fw-bold">בחרי מספר קומות:</p>
// //               <div className="form-check">
// //                 <input className="form-check-input" type="radio" name="layers" value="1" onChange={(e) => setLayers(e.target.value)} />
// //                 <label className="form-check-label">1</label>
// //               </div>
// //               <div className="form-check">
// //                 <input className="form-check-input" type="radio" name="layers" value="2" onChange={(e) => setLayers(e.target.value)} />
// //                 <label className="form-check-label">2</label>
// //               </div>
// //               <div className="form-check">
// //                 <input className="form-check-input" type="radio" name="layers" value="3" onChange={(e) => setLayers(e.target.value)} />
// //                 <label className="form-check-label">3</label>
// //               </div>
// //             </div>
// //           )}

// //           {/* Flavor selection */}
// //           <div className="form-group mb-4">
// //             <p className="fw-bold">בחרי טעם:</p>
// //             <div className="form-check">
// //               <input className="form-check-input" type="radio" name="flavor" value="1" onChange={(e) => setFlavor(e.target.value)} />
// //               <label className="form-check-label">וניל</label>
// //             </div>
// //             <div className="form-check">
// //               <input className="form-check-input" type="radio" name="flavor" value="2" onChange={(e) => setFlavor(e.target.value)} />
// //               <label className="form-check-label">שוקולד</label>
// //             </div>
// //           </div>

// //           {/* Decoration selection */}
// //           <div className="form-group mb-4">
// //             <p className="fw-bold">בחרי קישוט:</p>
// //             <div className="form-check">
// //               <input className="form-check-input" type="radio" name="decoration" value="1" onChange={(e) => setDecoration(e.target.value)} />
// //               <label className="form-check-label">פירות</label>
// //             </div>
// //             <div className="form-check">
// //               <input className="form-check-input" type="radio" name="decoration" value="2" onChange={(e) => setDecoration(e.target.value)} />
// //               <label className="form-check-label">שוקולד</label>
// //             </div>
// //             <div className="form-check">
// //               <input className="form-check-input" type="radio" name="decoration" value="3" onChange={(e) => setDecoration(e.target.value)} />
// //               <label className="form-check-label">תותים</label>
// //             </div>
// //             <div className="form-check">
// //               <input className="form-check-input" type="radio" name="decoration" value="4" onChange={(e) => setDecoration(e.target.value)} />
// //               <label className="form-check-label">סוכריות</label>
// //             </div>
// //             <div className="form-check">
// //               <input className="form-check-input" type="radio" name="decoration" value="5" onChange={(e) => setDecoration(e.target.value)} />
// //               <label className="form-check-label">פרחים</label>
// //             </div>
// //           </div>

// //           <div className="text-center mb-4">
// //             {shape && flavor && decoration ? (
// //               <button className="btn btn-primary" onClick={handleShowImage}>
// //                 הצג תמונה
// //               </button>
// //             ) : (
// //               <p className="text-danger">יש לבחור לפחות צורה, טעם וקישוט כדי להציג תמונה</p>
// //             )}
// //           </div>
// //         </>
// //       ) : isLoading ? (
// //         <div className="fullscreen d-flex justify-content-center align-items-center">
// //           <img src={loading} alt="Loading..." />
// //         </div>
// //       ) : (
// //         <div className="fullscreen d-flex flex-column align-items-center justify-content-center">
// //           <h2 className="text-center mb-4">  כך העוגה שלך תראה לאחר היציאה מהתנור</h2>
// //           <CakeImage imageId={imageId} className="full-image" />
// //           <button className="btn btn-secondary mt-4" onClick={handleReset}>
// //             חזרה לבחירה
// //           </button>
// //           <button
// //             className="btn btn-secondary mt-4"
// //             onClick={() =>
// //               handleInviteCake({
// //                 id: imageId,
// //                 name: 'special cake',
// //                 image: imageMap[imageId],
// //                 description: 'This is a special cake',
// //                 price: 250.0,
// //                 amount: 1,
// //               })
// //             }
// //           >
// //             Invite
// //           </button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

// import React, { useState, useMemo } from 'react';
// import { CakeImage } from '../special/CakeImage';
// import loading from '../../../assets/images/loading.gif';
// import {  Button } from '@mui/material';
// import './Special.css';
// import { addToCart } from '../../../redux/actions';
// import { useDispatch } from 'react-redux';
// import imageMap from './CakeImage';

// export default function Special() {
//   const [shape, setShape] = useState('');
//   const [layers, setLayers] = useState('1');
//   const [flavor, setFlavor] = useState('');
//   const [decoration, setDecoration] = useState('');
//   const [showImageOnly, setShowImageOnly] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const dispatch = useDispatch();

//   const imageId = useMemo(() => {
//     const computedLayers = shape === '1' ? layers : '1';
//     return shape + computedLayers + flavor + decoration;
//   }, [shape, layers, flavor, decoration]);

//   const handleInviteCake = (myCake) => {
//     dispatch(addToCart({ myCake }));
//   };

//   const handleShowImage = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setIsLoading(false);
//       setShowImageOnly(true);
//     }, 3000);
//   };

//   const handleReset = () => {
//     setShape('');
//     setLayers('1');
//     setFlavor('');
//     setDecoration('');
//     setShowImageOnly(false);
//     setIsLoading(false);
//   };

//   const shapeDescriptions = {
//     '1': 'עוגה עגולה',
//     '2': 'עוגה מרובעת',
//     '3': 'עוגה בצורת לב',
//   };
  
//   const flavorDescriptions = {
//     '1': 'שוקולד',
//     '2': 'וניל',

//   };
  
//   const decorationDescriptions = {
//     '1': 'קישוטי שוקולד',
//     '2': 'קישוטי סוכריות',
//     '3': 'קישוטי תותים',
//     '4': 'קישוטי סוכריות צבעוניות',
//     '5': 'קישוטי פרחים יפיפיים',
//   };
//   const getDescription = () => {
//     const shapeText = shapeDescriptions[shape] || 'צורה לא נבחרה';
//     const flavorText = flavorDescriptions[flavor] || 'טעם לא נבחר';
//     const decorationText = decorationDescriptions[decoration] || 'קישוט לא נבחר';
  
//     return ` ${shapeText} עם ${flavorText} ו-${decorationText}`;
//   };
//   return (
//     <div className={`container d-flex flex-column py-5 ${showImageOnly || isLoading ? 'no-background' : ''}`} style={{ direction: 'rtl' }}>
//     <div style={{ direction: 'rtl' }}>
//       {!showImageOnly && !isLoading ? (
//         <>
//           <h2>בחר בעיצוב כמו שאתה אוהב...</h2>
//           {/* Shape selection */}


//           <div className="form-group mb-4">
//               <p className="fw-bold">בחרי צורה:</p>
//               <div className="form-check">
//                 <input className="form-check-input" type="radio" name="layers" value="1" onChange={(e) => setLayers(e.target.value)} />
//                 <label className="form-check-label">עיגול</label>
//               </div>
//               <div className="form-check">
//                 <input className="form-check-input" type="radio" name="layers" value="2" onChange={(e) => setLayers(e.target.value)} />
//                 <label className="form-check-label">מלבן</label>
//               </div>
//               <div className="form-check">
//                 <input className="form-check-input" type="radio" name="layers" value="3" onChange={(e) => setLayers(e.target.value)} />
//                 <label className="form-check-label">לב</label>
//               </div>
//             </div>
          
//           <div>
//             <p>בחרי צורה:</p>
//             <div>
//               <input type="radio" name="shape" value="1" onChange={(e) => setShape(e.target.value)} />
//               <label>עיגול</label>
//             </div>
//             <div>
//               <input type="radio" name="shape" value="2" onChange={(e) => setShape(e.target.value)} />
//               <label>מלבן</label>
//             </div>
//             <div>
//               <input type="radio" name="shape" value="3" onChange={(e) => setShape(e.target.value)} />
//               <label>לב</label>
//             </div>
//           </div>

//           {/* Layers selection (only if circle) */}
//             <div className="form-group mb-4">
//               <p className="fw-bold">בחרי מספר קומות:</p>
//               <div className="form-check">
//                 <input className="form-check-input" type="radio" name="layers" value="1" onChange={(e) => setLayers(e.target.value)} />
//                 <label className="form-check-label">1</label>
//               </div>
//               <div className="form-check">
//                 <input className="form-check-input" type="radio" name="layers" value="2" onChange={(e) => setLayers(e.target.value)} />
//                 <label className="form-check-label">2</label>
//               </div>
//               <div className="form-check">
//                 <input className="form-check-input" type="radio" name="layers" value="3" onChange={(e) => setLayers(e.target.value)} />
//                 <label className="form-check-label">3</label>
//               </div>
//             </div>
          

//           {/* Flavor selection */}
//           <div className="form-group mb-4">
//               <p className="fw-bold">בחרי טעם:</p>
//               <div className="form-check">
//                 <input className="form-check-input" type="radio" name="layers" value="1" onChange={(e) => setFlavor(e.target.value)} />
//                 <label className="form-check-label">וניל</label>
//               </div>
//               <div className="form-check">
//                 <input className="form-check-input" type="radio" name="layers" value="2" onChange={(e) => setFlavor(e.target.value)} />
//                 <label className="form-check-label">שוקולד</label>
//               </div>
//             </div>
          



//           {/* Decoration selection */}
//           <div className="form-group mb-4">
//               <p className="fw-bold">בחרי קישוט:</p>
//               <div className="form-check">
//                 <input className="form-check-input" type="radio" name="layers" value="1" onChange={(e) => setDecoration(e.target.value)} />
//                 <label className="form-check-label">פירות</label>
//               </div>
//               <div className="form-check">
//                 <input className="form-check-input" type="radio" name="layers" value="2" onChange={(e) => setDecoration(e.target.value)} />
//                 <label className="form-check-label">שוקולד</label>
//               </div>
//               <div className="form-check">
//                 <input className="form-check-input" type="radio" name="layers" value="3" onChange={(e) => setDecoration(e.target.value)} />
//                 <label className="form-check-label">תותים</label>
//               </div>
//               <div className="form-check">
//                 <input className="form-check-input" type="radio" name="layers" value="3" onChange={(e) => setDecoration(e.target.value)} />
//                 <label className="form-check-label">סוכריות</label>
//               </div>
//               <div className="form-check">
//                 <input className="form-check-input" type="radio" name="layers" value="3" onChange={(e) => setDecoration(e.target.value)} />
//                 <label className="form-check-label">פרחים</label>
//               </div>
//             </div>
        
     

          
//       ) : isLoading ? (
//         <div>
//           <img src={loading} alt="Loading..." />
//         </div>
//       ) : (
//         <div>
//         <h2>כך העוגה שלך תראה לאחר היציאה מהתנור</h2>
//         <CakeImage imageId={imageId} />
//         <Button onClick={handleReset}>
//           חזרה לבחירה
//         </Button>

//           <Button
//             className="btn btn-primary mt-3"
//             onClick={() =>
//               handleInviteCake({
//                 id: parseInt(imageId, 10),
//                 name: 'special cake',
//                 image: imageMap[imageId],
//                 description: getDescription(),
//                 price: 250.0,
//                 amount: 1,
//               })
//             }
//           >
//             Invite
//           </Button>
    
//         </div>
      
//             <div>
//     </div>
//   ); </>
//       }
// import React, { useState, useMemo } from 'react';
// import { CakeImage } from '../special/CakeImage';
// import loading from '../../../assets/images/loading.gif';
// import { Button } from '@mui/material';
// import './Special.css';
// import { addToCart } from '../../../redux/actions';
// import { useDispatch } from 'react-redux';
// import imageMap from './CakeImage';

// export default function Special() {
//   const [shape, setShape] = useState('');
//   const [layers, setLayers] = useState('1');
//   const [flavor, setFlavor] = useState('');
//   const [decoration, setDecoration] = useState('');
//   const [showImageOnly, setShowImageOnly] = useState(false);
//   const [isLoading, setIsLoading] = useState(false);
//   const dispatch = useDispatch();

//   const imageId = useMemo(() => {
//     const computedLayers = shape === '1' ? layers : '1';
//     return shape + computedLayers + flavor + decoration;
//   }, [shape, layers, flavor, decoration]);

//   const handleInviteCake = (myCake) => {
//     dispatch(addToCart({ myCake }));
//   };

//   const handleShowImage = () => {
//     setIsLoading(true);
//     setTimeout(() => {
//       setIsLoading(false);
//       setShowImageOnly(true);
//     }, 3000);
//   };

//   const handleReset = () => {
//     setShape('');
//     setLayers('1');
//     setFlavor('');
//     setDecoration('');
//     setShowImageOnly(false);
//     setIsLoading(false);
//   };

//   const shapeDescriptions = {
//     '1': 'עוגה עגולה',
//     '2': 'עוגה מרובעת',
//     '3': 'עוגה בצורת לב',
//   };

//   const flavorDescriptions = {
//     '1': 'שוקולד',
//     '2': 'וניל',
//   };

//   const decorationDescriptions = {
//     '1': 'קישוטי שוקולד',
//     '2': 'קישוטי סוכריות',
//     '3': 'קישוטי תותים',
//     '4': 'קישוטי סוכריות צבעוניות',
//     '5': 'קישוטי פרחים יפיפיים',
//   };

//   const getDescription = () => {
//     const shapeText = shapeDescriptions[shape] || 'צורה לא נבחרה';
//     const flavorText = flavorDescriptions[flavor] || 'טעם לא נבחר';
//     const decorationText = decorationDescriptions[decoration] || 'קישוט לא נבחר';
//     return ` ${shapeText} עם ${flavorText} ו-${decorationText}`;
//   };

//   return (
    
//     <div
//       className={`container d-flex flex-column py-5 ${
//         showImageOnly || isLoading ? 'no-background' : ''
//       }`}
//       style={{ direction: 'rtl' }}
//     >
//       {!showImageOnly && !isLoading ? (
//         <>
//           <h2>בחר בעיצוב כמו שאתה אוהב...</h2>

//           {/* Shape */}
//           <div className="form-group mb-4">
//             <p className="fw-bold">בחרי צורה:</p>
//             <div className="form-check">
//               <input className="form-check-input" type="radio" name="shape" value="1" onChange={(e) => setShape(e.target.value)} />
//               <label className="form-check-label">עיגול</label>
//             </div>
//             <div className="form-check">
//               <input className="form-check-input" type="radio" name="shape" value="2" onChange={(e) => setShape(e.target.value)} />
//               <label className="form-check-label">מלבן</label>
//             </div>
//             <div className="form-check">
//               <input className="form-check-input" type="radio" name="shape" value="3" onChange={(e) => setShape(e.target.value)} />
//               <label className="form-check-label">לב</label>
//             </div>
//           </div>

//           {/* Layers (if circle) */}
//           {shape === '1' && (
//             <div className="form-group mb-4">
//               <p className="fw-bold">בחרי מספר קומות:</p>
//               <div className="form-check">
//                 <input className="form-check-input" type="radio" name="layers" value="1" onChange={(e) => setLayers(e.target.value)} />
//                 <label className="form-check-label">1</label>
//               </div>
//               <div className="form-check">
//                 <input className="form-check-input" type="radio" name="layers" value="2" onChange={(e) => setLayers(e.target.value)} />
//                 <label className="form-check-label">2</label>
//               </div>
//               <div className="form-check">
//                 <input className="form-check-input" type="radio" name="layers" value="3" onChange={(e) => setLayers(e.target.value)} />
//                 <label className="form-check-label">3</label>
//               </div>
//             </div>
//           )}

//           {/* Flavor */}
//           <div className="form-group mb-4">
//             <p className="fw-bold">בחרי טעם:</p>
//             <div className="form-check">
//               <input className="form-check-input" type="radio" name="flavor" value="1" onChange={(e) => setFlavor(e.target.value)} />
//               <label className="form-check-label">שוקולד</label>
//             </div>
//             <div className="form-check">
//               <input className="form-check-input" type="radio" name="flavor" value="2" onChange={(e) => setFlavor(e.target.value)} />
//               <label className="form-check-label">וניל</label>
//             </div>
//           </div>

//           {/* Decoration */}
//           <div className="form-group mb-4">
//             <p className="fw-bold">בחרי קישוט:</p>
//             <div className="form-check">
//               <input className="form-check-input" type="radio" name="decoration" value="1" onChange={(e) => setDecoration(e.target.value)} />
//               <label className="form-check-label">שוקולד</label>
//             </div>
//             <div className="form-check">
//               <input className="form-check-input" type="radio" name="decoration" value="2" onChange={(e) => setDecoration(e.target.value)} />
//               <label className="form-check-label">סוכריות</label>
//             </div>
//             <div className="form-check">
//               <input className="form-check-input" type="radio" name="decoration" value="3" onChange={(e) => setDecoration(e.target.value)} />
//               <label className="form-check-label">תותים</label>
//             </div>
//             <div className="form-check">
//               <input className="form-check-input" type="radio" name="decoration" value="4" onChange={(e) => setDecoration(e.target.value)} />
//               <label className="form-check-label">סוכריות צבעוניות</label>
//             </div>
//             <div className="form-check">
//               <input className="form-check-input" type="radio" name="decoration" value="5" onChange={(e) => setDecoration(e.target.value)} />
//               <label className="form-check-label">פרחים</label>
//             </div>
//           </div>

//           {/* Show Image */}
//           <div className="text-center">
//             {shape && flavor && decoration ? (
//               <Button variant="contained" onClick={handleShowImage}>הצג תמונה</Button>
//             ) : (
//               <p className="text-danger">יש לבחור לפחות צורה, טעם וקישוט כדי להציג תמונה</p>
//             )}
//           </div>
//         </>
//      ) : isLoading ? (
//   <Box display="flex" justifyContent="center" alignItems="center" minHeight="60vh">
//   <CircularProgress />
// </Box>
// ) : (
// <Box textAlign="center">
//   <Typography variant="h5" gutterBottom>
//     כך העוגה שלך תראה לאחר היציאה מהתנור
//   </Typography>
//   <CakeImage imageId={imageId} />
//   <Box mt={4}>
//     <Button variant="outlined" onClick={handleReset} sx={{ mr: 2 }}>
//       חזרה לבחירה
//     </Button>
//     <Button
//       variant="contained"
//       onClick={() =>
//         handleInviteCake({
//           id: parseInt(imageId, 10),
//           name: 'special cake',
//           image: imageMap[imageId],
//           description: getDescription(),
//           price: 250.0,
//           amount: 1,
//         })
//       }
//           >
//             Invite
//           </Button>
//         </div>
//       )}
//     </div>
//   );
// }

 import { CakeImage } from '../special/CakeImage';
 import loading from '../../../assets/images/loading.gif';


import React, { useState, useMemo } from 'react';
import { Button } from '@mui/material';
import './Special.css';
import { addToCart } from '../../../redux/actions';
import { useDispatch } from 'react-redux';
import imageMap from './CakeImage';

export default function Special() {
  const [shape, setShape] = useState('');
  const [layers, setLayers] = useState('1');
  const [flavor, setFlavor] = useState('');
  const [decoration, setDecoration] = useState('');
  const [showImageOnly, setShowImageOnly] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const imageId = useMemo(() => {
    const computedLayers = shape === '1' ? layers : '1';
    return shape + computedLayers + flavor + decoration;
  }, [shape, layers, flavor, decoration]);

  const handleInviteCake = (myCake) => {
    dispatch(addToCart({ myCake }));
  };

  const handleShowImage = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setShowImageOnly(true);
    }, 3000);
  };

  const handleReset = () => {
    setShape('');
    setLayers('1');
    setFlavor('');
    setDecoration('');
    setShowImageOnly(false);
    setIsLoading(false);
  };

  const shapeDescriptions = {
    '1': 'עוגה עגולה',
    '2': 'עוגה מרובעת',
    '3': 'עוגה בצורת לב',
  };

  const flavorDescriptions = {
    '1': 'וניל',
    '2': 'שוקולד',
  };

  const decorationDescriptions = {
    '1':'קישוטי פירות',
    '2':  'קישוטי שוקולד',
    '3': 'קישוטי תותים',
    '4': 'קישוטי סוכריות צבעוניות',
    '5': 'קישוטי פרחים יפיפיים',
  };

  const getDescription = () => {
    const shapeText = shapeDescriptions[shape] || 'צורה לא נבחרה';
    const flavorText = flavorDescriptions[flavor] || 'טעם לא נבחר';
    const decorationText = decorationDescriptions[decoration] || 'קישוט לא נבחר';
    return ` ${shapeText} עם ${flavorText} ו-${decorationText}`;
  };

  return (
    <div
      className={`container d-flex flex-column py-5 ${showImageOnly || isLoading ? 'no-background' : ''}`}
      style={{ direction: 'rtl' }}
    >
      {!showImageOnly && !isLoading ? (
        <>
          <h2>בחר בעיצוב כמו שאתה אוהב...</h2>

          {/* Shape */}
          <div className="form-group mb-4">
            <p className="fw-bold">בחרי צורה:</p>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="shape" value="1" onChange={(e) => setShape(e.target.value)} />
              <label className="form-check-label">עיגול</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="shape" value="2" onChange={(e) => setShape(e.target.value)} />
              <label className="form-check-label">מלבן</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="shape" value="3" onChange={(e) => setShape(e.target.value)} />
              <label className="form-check-label">לב</label>
            </div>
          </div>

          {/* Layers (if circle) */}
          {shape === '1' && (
            <div className="form-group mb-4">
              <p className="fw-bold">בחרי מספר קומות:</p>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="layers" value="1" onChange={(e) => setLayers(e.target.value)} />
                <label className="form-check-label">1</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="layers" value="2" onChange={(e) => setLayers(e.target.value)} />
                <label className="form-check-label">2</label>
              </div>
              <div className="form-check">
                <input className="form-check-input" type="radio" name="layers" value="3" onChange={(e) => setLayers(e.target.value)} />
                <label className="form-check-label">3</label>
              </div>
            </div>
          )}

          {/* Flavor */}
          <div className="form-group mb-4">
            <p className="fw-bold">בחרי טעם:</p>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flavor" value="1" onChange={(e) => setFlavor(e.target.value)} />
              <label className="form-check-label">וניל</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flavor" value="2" onChange={(e) => setFlavor(e.target.value)} />
              <label className="form-check-label">שוקולד</label>
            </div>
          </div>

          {/* Decoration */}
          <div className="form-group mb-4">
            <p className="fw-bold">בחרי קישוט:</p>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="decoration" value="1" onChange={(e) => setDecoration(e.target.value)} />
              <label className="form-check-label">פירות</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="decoration" value="2" onChange={(e) => setDecoration(e.target.value)} />
              <label className="form-check-label">שוקולד</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="decoration" value="3" onChange={(e) => setDecoration(e.target.value)} />
              <label className="form-check-label">תותים</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="decoration" value="4" onChange={(e) => setDecoration(e.target.value)} />
              <label className="form-check-label">סוכריות צבעוניות</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="decoration" value="5" onChange={(e) => setDecoration(e.target.value)} />
              <label className="form-check-label">פרחים</label>
            </div>
          </div>

          {/* Show Image */}
          <div className="text-center">
            {shape && flavor && decoration ? (
              <Button variant="contained" onClick={handleShowImage}>הצג תמונה</Button>
            ) : (
              <p className="text-danger">יש לבחור לפחות צורה, טעם וקישוט כדי להציג תמונה</p>
            )}
          </div>
        </>
      ) : isLoading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
          <img src={loading} alt="loading" />
        </div>
      ) : (
        <div className="text-center">
          <h5>כך העוגה שלך תראה לאחר היציאה מהתנור</h5>
          <CakeImage imageId={imageId} />
          <div style={{ marginTop: '20px' }}>
            <Button variant="outlined" onClick={handleReset} style={{ marginRight: '10px' }}>
              חזרה לבחירה
            </Button>
            <Button
              variant="contained"
              onClick={() =>
                handleInviteCake({
                  id: parseInt(imageId, 10),
                  name: 'special cake',
                  image: imageMap[imageId],
                  description: getDescription(),
                  price: 250.0,
                  amount: 1,
                })
              }
            >
              הזמנה
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
