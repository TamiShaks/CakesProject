// import React, { useState, useMemo } from 'react';
// import { CakeImage } from '../special/CakeImage';
// import loading from '../../../assets/images/loading.gif';
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

//   return (
//     <div className={`container d-flex flex-column py-5 ${showImageOnly || isLoading ? 'no-background' : ''}`} style={{ direction: 'rtl' }}>

//       {!showImageOnly && !isLoading ? (
//         <>
//       <h2 className="text-center mb-4">  בחר בעיצוב כמו שאתה אוהב...</h2>
//           {/* Shape selection */}
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

//           {/* Layers selection (only if circle) */}
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

//           {/* Flavor selection */}
//           <div className="form-group mb-4">
//             <p className="fw-bold">בחרי טעם:</p>
//             <div className="form-check">
//               <input className="form-check-input" type="radio" name="flavor" value="1" onChange={(e) => setFlavor(e.target.value)} />
//               <label className="form-check-label">וניל</label>
//             </div>
//             <div className="form-check">
//               <input className="form-check-input" type="radio" name="flavor" value="2" onChange={(e) => setFlavor(e.target.value)} />
//               <label className="form-check-label">שוקולד</label>
//             </div>
//           </div>

//           {/* Decoration selection */}
//           <div className="form-group mb-4">
//             <p className="fw-bold">בחרי קישוט:</p>
//             <div className="form-check">
//               <input className="form-check-input" type="radio" name="decoration" value="1" onChange={(e) => setDecoration(e.target.value)} />
//               <label className="form-check-label">פירות</label>
//             </div>
//             <div className="form-check">
//               <input className="form-check-input" type="radio" name="decoration" value="2" onChange={(e) => setDecoration(e.target.value)} />
//               <label className="form-check-label">שוקולד</label>
//             </div>
//             <div className="form-check">
//               <input className="form-check-input" type="radio" name="decoration" value="3" onChange={(e) => setDecoration(e.target.value)} />
//               <label className="form-check-label">תותים</label>
//             </div>
//             <div className="form-check">
//               <input className="form-check-input" type="radio" name="decoration" value="4" onChange={(e) => setDecoration(e.target.value)} />
//               <label className="form-check-label">סוכריות</label>
//             </div>
//             <div className="form-check">
//               <input className="form-check-input" type="radio" name="decoration" value="5" onChange={(e) => setDecoration(e.target.value)} />
//               <label className="form-check-label">פרחים</label>
//             </div>
//           </div>

//           <div className="text-center mb-4">
//             {shape && flavor && decoration ? (
//               <button className="btn btn-primary" onClick={handleShowImage}>
//                 הצג תמונה
//               </button>
//             ) : (
//               <p className="text-danger">יש לבחור לפחות צורה, טעם וקישוט כדי להציג תמונה</p>
//             )}
//           </div>
//         </>
//       ) : isLoading ? (
//         <div className="fullscreen d-flex justify-content-center align-items-center">
//           <img src={loading} alt="Loading..." />
//         </div>
//       ) : (
//         <div className="fullscreen d-flex flex-column align-items-center justify-content-center">
//           <h2 className="text-center mb-4">  כך העוגה שלך תראה לאחר היציאה מהתנור</h2>
//           <CakeImage imageId={imageId} className="full-image" />
//           <button className="btn btn-secondary mt-4" onClick={handleReset}>
//             חזרה לבחירה
//           </button>
//           <button
//             className="btn btn-secondary mt-4"
//             onClick={() =>
//               handleInviteCake({
//                 id: imageId,
//                 name: 'special cake',
//                 image: imageMap[imageId],
//                 description: 'This is a special cake',
//                 price: 250.0,
//                 amount: 1,
//               })
//             }
//           >
//             Invite
//           </button>
//         </div>
//       )}
//     </div>
//   );
// }

import React, { useState, useMemo } from 'react';
import { CakeImage } from '../special/CakeImage';
import loading from '../../../assets/images/loading.gif';
import {  Button } from '@mui/material';
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
    '1': 'שוקולד',
    '2': 'וניל',

  };
  
  const decorationDescriptions = {
    '1': 'קישוטי שוקולד',
    '2': 'קישוטי סוכריות',
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
    <div style={{ direction: 'rtl' }}>
      {!showImageOnly && !isLoading ? (
        <>
          <h2>בחר בעיצוב כמו שאתה אוהב...</h2>
          {/* Shape selection */}
          <div>
            <p>בחרי צורה:</p>
            <div>
              <input type="radio" name="shape" value="1" onChange={(e) => setShape(e.target.value)} />
              <label>עיגול</label>
            </div>
            <div>
              <input type="radio" name="shape" value="2" onChange={(e) => setShape(e.target.value)} />
              <label>מלבן</label>
            </div>
            <div>
              <input type="radio" name="shape" value="3" onChange={(e) => setShape(e.target.value)} />
              <label>לב</label>
            </div>
          </div>

          {/* Layers selection (only if circle) */}
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
          

          {/* Flavor selection */}
          <div>
            <p>בחרי טעם:</p>
            <div>
              <input type="radio" name="flavor" value="1" onChange={(e) => setFlavor(e.target.value)} />
              <label>וניל</label>
            </div>
            <div>
              <input type="radio" name="flavor" value="2" onChange={(e) => setFlavor(e.target.value)} />
              <label>שוקולד</label>
            </div>
          </div>

          {/* Decoration selection */}
          <div>
            <p>בחרי קישוט:</p>
            <div>
              <input type="radio" name="decoration" value="1" onChange={(e) => setDecoration(e.target.value)} />
              <label>פירות</label>
            </div>
            <div>
              <input type="radio" name="decoration" value="2" onChange={(e) => setDecoration(e.target.value)} />
              <label>שוקולד</label>
            </div>
            <div>
              <input type="radio" name="decoration" value="3" onChange={(e) => setDecoration(e.target.value)} />
              <label>תותים</label>
            </div>
            <div>
              <input type="radio" name="decoration" value="4" onChange={(e) => setDecoration(e.target.value)} />
              <label>סוכריות</label>
            </div>
            <div>
              <input type="radio" name="decoration" value="5" onChange={(e) => setDecoration(e.target.value)} />
              <label>פרחים</label>
            </div>
          </div>

          <div>
            {shape && flavor && decoration ? (
              <button onClick={handleShowImage}>
                הצג תמונה
              </button>
            ) : (
              <p>יש לבחור לפחות צורה, טעם וקישוט כדי להציג תמונה</p>
            )}
          </div>
        </>
      ) : isLoading ? (
        <div>
          <img src={loading} alt="Loading..." />
        </div>
      ) : (
        <div>
        <h2>כך העוגה שלך תראה לאחר היציאה מהתנור</h2>
        <CakeImage imageId={imageId} />
        <button onClick={handleReset}>
          חזרה לבחירה
        </button>

          <Button
            className="btn btn-primary mt-3"
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
            Invite
          </Button>
        </div>
      )}
    </div>
  );
}