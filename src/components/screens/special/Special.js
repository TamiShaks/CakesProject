// // // import React, { useState, useMemo } from 'react';
// // // import CakeImage from '../special/CakeImage';
// // // import loading from '../../../assets/loading.gif';
// // // // import 'bootstrap/dist/css/bootstrap.min.css';

// // // export default function Special() {
// // //   const [shape, setShape] = useState('');
// // //   const [layers, setLayers] = useState('1'); // ברירת מחדל ל־1
// // //   const [flavor, setFlavor] = useState('');
// // //   const [decoration, setDecoration] = useState('');
// // //   const [showImageOnly, setShowImageOnly] = useState(false); // מצב תצוגת תמונה בלבד

// // //   const imageId = useMemo(() => {
// // //     const computedLayers = shape === '1' ? layers : '1';
// // //     return shape + computedLayers + flavor + decoration;
// // //   }, [shape, layers, flavor, decoration]);

// // //   const handleShowImage = () => {
// // //     setShowImageOnly(true); // מעבר לתצוגת תמונה בלבד
// // //   };

// // //   const handleReset = () => {
// // //     setShape('');
// // //     setLayers('1');
// // //     setFlavor('');
// // //     setDecoration('');
// // //     setShowImageOnly(false); // חזרה לבחירה
// // //   };

// // //   return (

    
// // //     <div className="container py-5">
      
// // //       {!showImageOnly ? (
// // //         <>
// // //           <h2 className="text-center mb-4">בחרי עוגה מיוחדת:</h2>

// // //           {/* צורת עוגה */}
// // //           <div className="mb-4">
// // //             <p className="fw-bold">צורה:</p>
// // //             <div className="form-check">
// // //               <input className="form-check-input" type="radio" name="shape" value="1" onChange={(e) => setShape(e.target.value)} />
// // //               <label className="form-check-label">עיגול</label>
// // //             </div>
// // //             <div className="form-check">
// // //               <input className="form-check-input" type="radio" name="shape" value="2" onChange={(e) => setShape(e.target.value)} />
// // //               <label className="form-check-label">מלבן</label>
// // //             </div>
// // //             <div className="form-check">
// // //               <input className="form-check-input" type="radio" name="shape" value="3" onChange={(e) => setShape(e.target.value)} />
// // //               <label className="form-check-label">לב</label>
// // //             </div>
// // //           </div>

// // //           {/* קומות (רק אם עיגול) */}
// // //           {shape === '1' && (
// // //             <div className="mb-4">
// // //               <p className="fw-bold">מספר קומות:</p>
// // //               <div className="form-check">
// // //                 <input className="form-check-input" type="radio" name="layers" value="1" onChange={(e) => setLayers(e.target.value)} />
// // //                 <label className="form-check-label">1</label>
// // //               </div>
// // //               <div className="form-check">
// // //                 <input className="form-check-input" type="radio" name="layers" value="2" onChange={(e) => setLayers(e.target.value)} />
// // //                 <label className="form-check-label">2</label>
// // //               </div>
// // //               <div className="form-check">
// // //                 <input className="form-check-input" type="radio" name="layers" value="3" onChange={(e) => setLayers(e.target.value)} />
// // //                 <label className="form-check-label">3</label>
// // //               </div>
// // //             </div>
// // //           )}

// // //           {/* טעם */}
// // //           <div className="mb-4">
// // //             <p className="fw-bold">טעם:</p>
// // //             <div className="form-check">
// // //               <input className="form-check-input" type="radio" name="flavor" value="1" onChange={(e) => setFlavor(e.target.value)} />
// // //               <label className="form-check-label">וניל</label>
// // //             </div>
// // //             <div className="form-check">
// // //               <input className="form-check-input" type="radio" name="flavor" value="2" onChange={(e) => setFlavor(e.target.value)} />
// // //               <label className="form-check-label">שוקולד</label>
// // //             </div>
// // //           </div>

// // //           {/* קישוט */}
// // //           <div className="mb-4">
// // //             <p className="fw-bold">קישוט:</p>
// // //             <div className="form-check">
// // //               <input className="form-check-input" type="radio" name="decoration" value="1" onChange={(e) => setDecoration(e.target.value)} />
// // //               <label className="form-check-label">פירות</label>
// // //             </div>
// // //             <div className="form-check">
// // //               <input className="form-check-input" type="radio" name="decoration" value="2" onChange={(e) => setDecoration(e.target.value)} />
// // //               <label className="form-check-label">שוקולד</label>
// // //             </div>
// // //             <div className="form-check">
// // //               <input className="form-check-input" type="radio" name="decoration" value="3" onChange={(e) => setDecoration(e.target.value)} />
// // //               <label className="form-check-label">תותים</label>
// // //             </div>
// // //             <div className="form-check">
// // //               <input className="form-check-input" type="radio" name="decoration" value="4" onChange={(e) => setDecoration(e.target.value)} />
// // //               <label className="form-check-label">סוכריות</label>
// // //             </div>
// // //             <div className="form-check">
// // //               <input className="form-check-input" type="radio" name="decoration" value="5" onChange={(e) => setDecoration(e.target.value)} />
// // //               <label className="form-check-label">פרחים</label>
// // //             </div>
// // //           </div>

// // //           <hr />

// // //           <h3 className="text-center mb-4">תמונה מתאימה:</h3>
// // //           {shape && flavor && decoration ? (
// // //             <div className="text-center">
// // //               <button className="btn btn-primary" onClick={handleShowImage}>
// // //                 הצג תמונה
// // //               </button>
// // //             </div>
// // //           ) : (
// // //             <p className="text-center text-danger">יש לבחור לפחות צורה, טעם וקישוט כדי להציג תמונה</p>
// // //           )}
// // //         </>
// // //       ) : (
// // //         <div className="text-center">
// // //           <CakeImage imageId={imageId} />
// // //           <button className="btn btn-secondary mt-4" onClick={handleReset}>
// // //             חזרה לבחירה
// // //           </button>
// // //         </div>
// // //       )}
// // //     </div>
// // //   );
// // // }
// // import React, { useState, useMemo } from 'react';
// // import CakeImage from '../special/CakeImage';
// // import loading from '../../../assets/images/loading.gif'; // ייבוא ה-GIF

// // export default function Special() {
// //   const [shape, setShape] = useState('');
// //   const [layers, setLayers] = useState('1'); // ברירת מחדל ל־1
// //   const [flavor, setFlavor] = useState('');
// //   const [decoration, setDecoration] = useState('');
// //   const [showImageOnly, setShowImageOnly] = useState(false); // מצב תצוגת תמונה בלבד
// //   const [isLoading, setIsLoading] = useState(false); // מצב טעינה

// //   const imageId = useMemo(() => {
// //     const computedLayers = shape === '1' ? layers : '1';
// //     return shape + computedLayers + flavor + decoration;
// //   }, [shape, layers, flavor, decoration]);

// //   const handleShowImage = () => {
// //     setIsLoading(true); // הפעלת מצב טעינה
// //     setTimeout(() => {
// //       setIsLoading(false); // סיום מצב טעינה
// //       setShowImageOnly(true); // מעבר לתצוגת תמונה בלבד
// //     }, 3000); // השהייה של 3 שניות
// //   };

// //   const handleReset = () => {
// //     setShape('');
// //     setLayers('1');
// //     setFlavor('');
// //     setDecoration('');
// //     setShowImageOnly(false); // חזרה לבחירה
// //     setIsLoading(false); // איפוס מצב טעינה
// //   };

// //   return (
// //     <div className="container py-5">
// //       {!showImageOnly && !isLoading ? (
// //         <>
// //           <h2 className="text-center mb-4">בחרי עוגה מיוחדת:</h2>

// //           {/* צורת עוגה */}
// //           <div className="mb-4">
// //             <p className="fw-bold">צורה:</p>
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

// //           {/* קומות (רק אם עיגול) */}
// //           {shape === '1' && (
// //             <div className="mb-4">
// //               <p className="fw-bold">מספר קומות:</p>
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

// //           {/* טעם */}
// //           <div className="mb-4">
// //             <p className="fw-bold">טעם:</p>
// //             <div className="form-check">
// //               <input className="form-check-input" type="radio" name="flavor" value="1" onChange={(e) => setFlavor(e.target.value)} />
// //               <label className="form-check-label">וניל</label>
// //             </div>
// //             <div className="form-check">
// //               <input className="form-check-input" type="radio" name="flavor" value="2" onChange={(e) => setFlavor(e.target.value)} />
// //               <label className="form-check-label">שוקולד</label>
// //             </div>
// //           </div>

// //           {/* קישוט */}
// //           <div className="mb-4">
// //             <p className="fw-bold">קישוט:</p>
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
// //           </div>

// //           <hr />

// //           <h3 className="text-center mb-4">תמונה מתאימה:</h3>
// //           {shape && flavor && decoration ? (
// //             <div className="text-center">
// //               <button className="btn btn-primary" onClick={handleShowImage}>
// //                 הצג תמונה
// //               </button>
// //             </div>
// //           ) : (
// //             <p className="text-center text-danger">יש לבחור לפחות צורה, טעם וקישוט כדי להציג תמונה</p>
// //           )}
// //         </>
// //       ) : isLoading ? (
// //         <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
// //           <img src={loading} alt="Loading..." />
// //         </div>
// //       ) : (
// //         <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: '100vh' }}>
// //           <CakeImage imageId={imageId} />
// //           <button className="btn btn-secondary mt-4" onClick={handleReset}>
// //             חזרה לבחירה
// //           </button>
// //         </div>
// //       )}
// //     </div>
// //   );
// // }

import React, { useState, useMemo } from 'react';
import CakeImage from '../special/CakeImage';
import loading from '../../../assets/images/loading.gif'; 
import './Special.css'; // Importing the CSS file

export default function Special() {
  const [shape, setShape] = useState('');
  const [layers, setLayers] = useState('1'); // Default to 1
  const [flavor, setFlavor] = useState('');
  const [decoration, setDecoration] = useState('');
  const [showImageOnly, setShowImageOnly] = useState(false); // Image display mode
  const [isLoading, setIsLoading] = useState(false); // Loading state

  const imageId = useMemo(() => {
    const computedLayers = shape === '1' ? layers : '1';
    return shape + computedLayers + flavor + decoration;
  }, [shape, layers, flavor, decoration]);

  const handleShowImage = () => {
    setIsLoading(true); // Activate loading state
    setTimeout(() => {
      setIsLoading(false); // End loading state
      setShowImageOnly(true); // Switch to image display only
    }, 3000); // 3 seconds delay
  };

  const handleReset = () => {
    setShape('');
    setLayers('1');
    setFlavor('');
    setDecoration('');
    setShowImageOnly(false); // Return to selection
    setIsLoading(false); // Reset loading state
  };

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">בחרי עוגה מיוחדת:</h2>
      {!showImageOnly && !isLoading ? (
        <>
          {/* Shape selection */}
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

          {/* Layers selection (only if circle) */}
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

          {/* Flavor selection */}
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

          {/* Decoration selection */}
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
          </div>

          <div className="text-center mb-4">
            {shape && flavor && decoration ? (
              <button className="btn btn-primary" onClick={handleShowImage}>
                הצג תמונה
              </button>
            ) : (
              <p className="text-danger">יש לבחור לפחות צורה, טעם וקישוט כדי להציג תמונה</p>
            )}
          </div>
        </>
      ) : isLoading ? (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
          <img src={loading} alt="Loading..." />
        </div>
      ) : (
        <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: '100vh' }}>
          <CakeImage imageId={imageId} />
          <button className="btn btn-secondary mt-4" onClick={handleReset}>
            חזרה לבחירה
          </button>
        </div>
      )}
    </div>
  );
}
