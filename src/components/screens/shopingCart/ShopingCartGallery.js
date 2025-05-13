
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ShopingCartProduct from './ShopingCartProduct';
import './ShopingCartGallery.css';
import { Link } from 'react-router-dom';
import { Button, Typography } from '@mui/material';

export default function ShopingCartGallery() {
    const invitedCakeList = useSelector((state) => state.invitedCakeList.invitedCakeList);
    const [toPay, setToPay] = useState(0);
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);
    useEffect(() => {
        const total = invitedCakeList.reduce((total, cake) => total + cake.price * cake.amount, 0);
        setToPay(total);
    }, [invitedCakeList]);

    return (
        <div className="container my-5">

            {/* כותרת במרכז */}
            <div style={{ textAlign: 'center', marginBottom: '1rem' }}>
                <Typography variant="h4" fontWeight="bold">
                    🛒 עגלת הקניות שלך
                </Typography>
            </div>

            {/* סכום + כפתור ממורכזים יחד */}
            {toPay > 0 && (
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
                    <Typography variant="h6" sx={{ color: '#E78D8D', fontWeight: 'bold' }}>
                        סה״כ לתשלום: {toPay.toLocaleString()} ₪
                    </Typography>
                    <Button
                        variant="contained"
                        color="primary"
                        component={Link}
                        to={`/Payment/${toPay}`}
                        sx={{ whiteSpace: 'nowrap' }}
                    >
                        למעבר לתשלום
                    </Button>
                </div>
            )}

            {/* תצוגת עוגות */}
            {invitedCakeList.length > 0 ? (
                <div className="product-grid">
                    {invitedCakeList.map(cake => (
                        <ShopingCartProduct key={cake.id} {...cake} />
                    ))}
                </div>
            ) : (
                <div className="alert alert-info text-center mt-5">
                    אין מוצרים בעגלה 🍰
                </div>
            )}
        </div>
    );
}
