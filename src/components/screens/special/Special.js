import React, { useState, useMemo } from 'react';
import { CakeImage } from '../special/CakeImage';
import loading from '../../../assets/images/loading.gif';
import {  Button } from '@mui/material';
import './Special.css';
import { addToCart, inviteCake } from '../../../redux/actions';
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
    <div className={`container d-flex flex-column py-5 ${showImageOnly || isLoading ? 'no-background' : ''}`} style={{ direction: 'rtl' }}>
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
            <div className="form-check">
              <input className="form-check-input" type="radio" name="decoration" value="4" onChange={(e) => setDecoration(e.target.value)} />
              <label className="form-check-label">סוכריות</label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="decoration" value="5" onChange={(e) => setDecoration(e.target.value)} />
              <label className="form-check-label">פרחים</label>
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
        <div className="fullscreen">
          <img src={loading} alt="Loading..." />
        </div>
      ) : (
        <div className="fullscreen flex-column">
          <img src={imageMap[imageId]} alt="Cake" className="full-image" />

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
