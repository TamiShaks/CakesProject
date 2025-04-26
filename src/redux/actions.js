import { SHOWGALLERY,INVITECAKE } from "./actionTypes";

export const show=(id, value)=>({
    type: SHOWGALLERY,
    payload:{ id,value},
});

export const inviteCake=(id)=>({
    type: INVITECAKE,
    payload:id,
});