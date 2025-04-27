import { SHOWGALLERY,INVITECAKE,SHOWCART,REMOVEFROMCART,ADDTOCART } from "./actionTypes";

export const show=(id, value)=>({
    type: SHOWGALLERY,
    payload:{ id,value},
});

export const inviteCake=(id)=>({
    type: INVITECAKE,
    payload:id,
});
export const addToCart=(id)=>({
    type: ADDTOCART,
    payload:id,
});
export const removeFromCart=(id)=>({
    type: REMOVEFROMCART,
    payload:id,
});
export const showCart=(id)=>({
    type: SHOWCART,
    payload:id,
});