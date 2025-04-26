
import React from 'react';
import { useSelector } from 'react-redux';
import Product from './home/Product';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { inviteCake } from 'C:/Users/1/לימודים/react/פרוייקט/מתמי התחלה/CakesProject/src/redux/actions';
export const EnlargedView = () => {
    const dispatch = useDispatch();
    const { id } = useParams(); 
    const cakeList = useSelector((state) => state.cakesList);
    const myCake = cakeList.find(cake => cake.id === parseInt(id)); 

    const handleInviteCake = () => {
        dispatch(inviteCake(myCake.id)); // Dispatch the action to decrement the amount
    };

    if (!myCake) { 
        return <div>Loading...</div>;
    }

  return (
    <>
  {cakeList
    .filter((cake => (cake.shape === myCake.shape) &&(cake.color === myCake.color))||(cake.Characteristic === myCake.Characteristic))
    .map(cake => (
        <div key={cake.id}>
            <Product {...cake} />
        </div>
    ))}
    </>
  )
}
