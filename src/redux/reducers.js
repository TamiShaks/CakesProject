import cakeImage1 from '../assets/images/1.jpg';
import cakeImage2 from '../assets/images/2.jpg';
import cakeImage3 from '../assets/images/3.jpg';
import cakeImage4 from '../assets/images/4.jpg';
import cakeImage5 from '../assets/images/5.jpg';
import cakeImage6 from '../assets/images/6.jpg';
import cakeImage7 from '../assets/images/7.jpg';
import cakeImage8 from '../assets/images/8.jpg';
import cakeImage9 from '../assets/images/9.jpg';
import cakeImage10 from '../assets/images/10.jpg';
import cakeImage11 from '../assets/images/11.jpg';
import cakeImage12 from '../assets/images/12.jpg';
import cakeImage13 from '../assets/images/13.jpg';
import cakeImage14 from '../assets/images/14.jpg';
import cakeImage15 from '../assets/images/15.jpg';
import cakeImage16 from '../assets/images/16.jpg';
import cakeImage17 from '../assets/images/17.jpg';
import cakeImage18 from '../assets/images/18.jpg';
import cakeImage19 from '../assets/images/19.jpg';
import cakeImage20 from '../assets/images/20.jpg';
import cakeImage21 from '../assets/images/21.jpg';
import cakeImage22 from '../assets/images/22.jpg';
import cakeImage23 from '../assets/images/23.jpg';
import cakeImage24 from '../assets/images/24.jpg';
import { SHOWGALLERY ,INVITECAKE} from './actionTypes';


const InitialCakesList = {
    cakesList: [
        {
            id: 1,
            name: "Chocolate Cake",
            image: cakeImage1,  // replace with the actual image path
            description: "A delicious chocolate cake with rich frosting.",
            price: 20.00,
            amount:12
            ,Characteristic:"Fabric ribbons"
            ,shake:" circle",
            color:"pink"

        },
        {
            id: 2,
            name: "Vanilla Cake",
            image: cakeImage2, // replace with the actual image path
            description: "A classic vanilla cake with buttercream icing.",
            price: 20.00,
            amount:5
            ,shake:" circle",
            color:"white"
            ,Characteristic:"solid"
        },
        {
            id: 3,
            name: "Red Velvet Cake",
            image: cakeImage3, // replace with the actual image path
            description: "A moist red velvet cake with cream cheese frosting.",
            price: 25.00,
            amount:6
            ,Characteristic:"Fabric ribbons"
            ,shake:" circle",
            color:"white"
        },
        {
            id: 4,
            name: "Chocolate Cake",
            image: cakeImage4,  // replace with the actual image path
            description: "A delicious chocolate cake with rich frosting.",
            price: 27.00,
            amount:10
            ,shape:" heart",
            color:"white"
            ,Characteristic:"flawers"
        },
        {
            id: 5,
            name: "Vanilla Cake",
            image: cakeImage5, // replace with the actual image path
            description: "A classic vanilla cake with buttercream icing.",
            price: 18.00,
            amount:4
            ,shake:" circle",
            color:"white"
            ,Characteristic:"ribbons"
        },
        {
            id: 6,
            name: "Red Velvet Cake",
            image: cakeImage6, // replace with the actual image path
            description: "A moist red velvet cake with cream cheese frosting.",
            price: 25.00,
            amount:3
            ,shake:" circle",
            color:"white"
            ,Characteristic:"birthday"
        },
        {
            id: 7,
            name: "Chocolate Cake",
            image: cakeImage7,  // replace with the actual image path
            description: "A delicious chocolate cake with rich frosting.",
            price: 20.00,
            amount:2
            ,Characteristic:"Fabric ribbons"
            ,shake:" circle",
            color:"pink"

        },
        {
            id: 8,
            name: "Vanilla Cake",
            image: cakeImage8, // replace with the actual image path
            description: "A classic vanilla cake with buttercream icing.",
            price: 20.00,
            amount:4
            ,shake:" circle",
            color:"white"
            ,Characteristic:"solid"
        },
        {
            id: 9,
            name: "Red Velvet Cake",
            image: cakeImage9, // replace with the actual image path
            description: "A moist red velvet cake with cream cheese frosting.",
            price: 25.00,
            amount:2
            ,Characteristic:"Fabric ribbons"
            ,shake:" circle",
            color:"white"
        },
        {
            id: 10,
            name: "Chocolate Cake",
            image: cakeImage10,  // replace with the actual image path
            description: "A delicious chocolate cake with rich frosting.",
            price: 27.00,
            amount:2
            ,shape:" heart",
            color:"white"
            ,Characteristic:"flawers"
        },
        {
            id: 11,
            name: "Vanilla Cake",
            image: cakeImage11, // replace with the actual image path
            description: "A classic vanilla cake with buttercream icing.",
            price: 18.00,
            amount:2
            ,shake:" circle",
            color:"white"
            ,Characteristic:"ribbons"
        },
        {
            id: 12,
            name: "Red Velvet Cake",
            image: cakeImage12, // replace with the actual image path
            description: "A moist red velvet cake with cream cheese frosting.",
            price: 25.00,
            amount:2
            ,shake:" circle",
            color:"white"
            ,Characteristic:"birthday"
        },
        {
            id: 13,
            name: "Chocolate Cake",
            image: cakeImage13,  // replace with the actual image path
            description: "A delicious chocolate cake with rich frosting.",
            price: 20.00,
            amount:2
            ,Characteristic:"Fabric ribbons"
            ,shake:" circle",
            color:"pink"

        },
        {
            id: 14,
            name: "Vanilla Cake",
            image: cakeImage14, // replace with the actual image path
            description: "A classic vanilla cake with buttercream icing.",
            price: 20.00,
            amount:4
            ,shake:" circle",
            color:"white"
            ,Characteristic:"solid"
        },
        {
            id: 15,
            name: "Red Velvet Cake",
            image: cakeImage15, // replace with the actual image path
            description: "A moist red velvet cake with cream cheese frosting.",
            price: 25.00,
            amount:2
            ,Characteristic:"Fabric ribbons"
            ,shake:" circle",
            color:"white"
        },
        {
            id: 16,
            name: "Chocolate Cake",
            image: cakeImage16,  // replace with the actual image path
            description: "A delicious chocolate cake with rich frosting.",
            price: 27.00,
            amount:2
            ,shape:" heart",
            color:"white"
            ,Characteristic:"flawers"
        },
        {
            id: 17,
            name: "Vanilla Cake",
            image: cakeImage17, // replace with the actual image path
            description: "A classic vanilla cake with buttercream icing.",
            price: 18.00,
            amount:2
            ,shake:" circle",
            color:"white"
            ,Characteristic:"ribbons"
        },
        {
            id: 18,
            name: "Red Velvet Cake",
            image: cakeImage18, // replace with the actual image path
            description: "A moist red velvet cake with cream cheese frosting.",
            price: 25.00,
            amount:2
            ,shake:" circle",
            color:"white"
            ,Characteristic:"birthday"
        },
        {
            id: 19,
            name: "Chocolate Cake",
            image: cakeImage19,  // replace with the actual image path
            description: "A delicious chocolate cake with rich frosting.",
            price: 20.00,
            amount:2
            ,Characteristic:"Fabric ribbons"
            ,shake:" circle",
            color:"pink"

        },
        {
            id: 20,
            name: "Vanilla Cake",
            image: cakeImage20, // replace with the actual image path
            description: "A classic vanilla cake with buttercream icing.",
            price: 20.00,
            amount:4
            ,shake:" circle",
            color:"white"
            ,Characteristic:"solid"
        },
        {
            id: 21,
            name: "Red Velvet Cake",
            image: cakeImage21, // replace with the actual image path
            description: "A moist red velvet cake with cream cheese frosting.",
            price: 25.00,
            amount:2
            ,Characteristic:"Fabric ribbons"
            ,shake:" circle",
            color:"white"
        },
        {
            id: 22,
            name: "Chocolate Cake",
            image: cakeImage22,  // replace with the actual image path
            description: "A delicious chocolate cake with rich frosting.",
            price: 27.00,
            amount:2
            ,shape:" heart",
            color:"white"
            ,Characteristic:"flawers"
        },
        {
            id: 23,
            name: "Vanilla Cake",
            image: cakeImage23, // replace with the actual image path
            description: "A classic vanilla cake with buttercream icing.",
            price: 18.00,
            amount:2
            ,shake:" circle",
            color:"white"
            ,Characteristic:"ribbons"
        },
        {
            id: 24,
            name: "Red Velvet Cake",
            image: cakeImage24, // replace with the actual image path
            description: "A moist red velvet cake with cream cheese frosting.",
            price: 25.00,
            amount:2
            ,shake:" circle",
            color:"white"
            ,Characteristic:"birthday"
        }
    ]
};


export const cakesReducer = (state = InitialCakesList, action) => {
    switch(action.type) {
        case SHOWGALLERY:
            return {
                ...state,
            };
            case INVITECAKE:
                console.log("!!!!!!!!!");
            
                const updatedCakesList = state.cakesList.map((cake, index) => {
                    if (index === action.payload-1) {
                        const newAmount = cake.amount - 1;
                        return {
                            ...cake,
                            amount: Math.max(0, newAmount), // Ensure amount doesn't go below 0
                        };
                    }
            
                    return cake; // Return the unchanged cake
                });
            
                return {
                    ...state,
                    cakesList: updatedCakesList, // Return the new cakesList
                };
        default:
            return state;        
    }
};