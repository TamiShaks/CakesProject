import React, { useState, useMemo } from 'react';
import CakeImage from '../special/CakeImage';

export default function Special () {
  const [shape, setShape] = useState('');
  const [layers, setLayers] = useState('1'); // ברירת מחדל ל־1
  const [flavor, setFlavor] = useState('');
  const [decoration, setDecoration] = useState('');

  const imageId = useMemo(() => {
    const computedLayers = shape === '1' ? layers : '1';
    return shape + computedLayers + flavor + decoration;
  }, [shape, layers, flavor, decoration]);

  return (
    <div style={{ padding: '20px' }}>
      <h2>בחרי עוגה מיוחדת:</h2>

      {/* צורת עוגה */}
      <div>
        <p>צורה:</p>
        <label><input type="radio" name="shape" value="1" onChange={(e) => setShape(e.target.value)} /> עיגול</label><br />
        <label><input type="radio" name="shape" value="2" onChange={(e) => setShape(e.target.value)} /> מלבן</label><br />
        <label><input type="radio" name="shape" value="3" onChange={(e) => setShape(e.target.value)} /> לב</label>
      </div>

      {/* קומות (רק אם עיגול) */}
      {shape === '1' && (
        <div>
          <p>מספר קומות:</p>
          <label><input type="radio" name="layers" value="1" onChange={(e) => setLayers(e.target.value)} /> 1</label><br />
          <label><input type="radio" name="layers" value="2" onChange={(e) => setLayers(e.target.value)} /> 2</label><br />
          <label><input type="radio" name="layers" value="3" onChange={(e) => setLayers(e.target.value)} /> 3</label>
        </div>
      )}

      {/* טעם */}
      <div>
        <p>טעם:</p>
        <label><input type="radio" name="flavor" value="1" onChange={(e) => setFlavor(e.target.value)} /> וניל</label><br />
        <label><input type="radio" name="flavor" value="2" onChange={(e) => setFlavor(e.target.value)} /> שוקולד</label>
      </div>

      {/* קישוט */}
      <div>
        <p>קישוט:</p>
        <label><input type="radio" name="decoration" value="1" onChange={(e) => setDecoration(e.target.value)} /> פירות</label><br />
        <label><input type="radio" name="decoration" value="2" onChange={(e) => setDecoration(e.target.value)} /> שוקולד</label><br />
        <label><input type="radio" name="decoration" value="3" onChange={(e) => setDecoration(e.target.value)} /> תותים</label><br />
        <label><input type="radio" name="decoration" value="4" onChange={(e) => setDecoration(e.target.value)} /> סוכריות</label><br />
        <label><input type="radio" name="decoration" value="5" onChange={(e) => setDecoration(e.target.value)} /> פרחים</label>
      </div>

      <hr />

      <h3>תמונה מתאימה:</h3>
      {shape && flavor && decoration ? (
        <CakeImage imageId={imageId} />
      ) : (
        <p>יש לבחור לפחות צורה, טעם וקישוט כדי להציג תמונה</p>
      )}
    </div>
  );
};
