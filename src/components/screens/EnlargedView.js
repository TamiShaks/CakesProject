import React from 'react'
import {  useSelector } from 'react-redux';
import Product from './home/Product';
export const EnlargedView = (myCake) => {
    const cakeList = useSelector((state) => state.cakesList);

  return (
    <>
  {cakeList
    .filter(cake => ((cake.shape === myCake.shape) &&(cake.color === myCake.color))||(cake.Characteristic === myCake.Characteristic))
    .map(cake => (
        <div key={cake.id}>
            <Product {...cake} />
        </div>
    ))}
    </>
  )
}
