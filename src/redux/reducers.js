import cakeImage1 from '../assets/images/1.jpg';
import cakeImage2 from '../assets/images/2.jpg';
import cakeImage3 from '../assets/images/3.jpg';
import cakeImage4 from '../assets/images/4.jpg';
import cakeImage5 from '../assets/images/5.jpg';
import cakeImage6 from '../assets/images/6.jpg';
import { SHOWGALLERY } from './actionTypes';


const InitialCakesList = {
    cakesList: [
        {
            id: 1,
            name: "Chocolate Cake",
            image: cakeImage1,  // replace with the actual image path
            description: "A delicious chocolate cake with rich frosting.",
            price: 20.00,
            amount:2
        },
        {
            id: 2,
            name: "Vanilla Cake",
            image: cakeImage2, // replace with the actual image path
            description: "A classic vanilla cake with buttercream icing.",
            price: 18.00,
            amount:2

        },
        {
            id: 3,
            name: "Red Velvet Cake",
            image: cakeImage3, // replace with the actual image path
            description: "A moist red velvet cake with cream cheese frosting.",
            price: 25.00,
            amount:2

        },
        {
            id: 4,
            name: "Chocolate Cake",
            image: cakeImage4,  // replace with the actual image path
            description: "A delicious chocolate cake with rich frosting.",
            price: 20.00,
            amount:2
        },
        {
            id: 5,
            name: "Vanilla Cake",
            image: cakeImage5, // replace with the actual image path
            description: "A classic vanilla cake with buttercream icing.",
            price: 18.00,
            amount:2

        },
        {
            id: 6,
            name: "Red Velvet Cake",
            image: cakeImage6, // replace with the actual image path
            description: "A moist red velvet cake with cream cheese frosting.",
            price: 25.00,
            amount:2

        }
    ]
};


export const cakesReducer = (state = InitialCakesList, action) => {
    switch(action.type) {
        case SHOWGALLERY:
            return {
                ...state,
            };
      
        default:
            return state;        
    }
};