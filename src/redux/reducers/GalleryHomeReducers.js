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
import cakeImage25 from '../assets/images/41.jpg';
import cakeImage26 from '../assets/images/42.jpg';
import cakeImage27 from '../assets/images/43.jpg';
import cakeImage28 from '../assets/images/44.jpg';
import cakeImage29 from '../assets/images/45.jpg';
import cakeImage30 from '../assets/images/46.jpg';
import cakeImage31 from '../assets/images/47.jpg';
import cakeImage32 from '../assets/images/48.jpg';
import cakeImage33 from '../assets/images/33.jpg';

import { SHOWGALLERY ,INVITECAKE} from '../actionTypes';
import { addToCart } from '../actions';
import { useDispatch } from 'react-redux';


const InitialCakesList = {
    cakesList: [
     
        {
            
                id: 1,
                name: "Berry Blush Celebration Cake",
                image: cakeImage11, // replace with the actual image path
                description: "A vibrant two-tier cake with pink drips, fresh berries, buttercream flowers, and golden decorations.",
                price: 18.00,
                amount:2
                ,shake:" circle",
                color:"pink"
                ,Characteristic:"fruts"
            },
            {
                id: 2,
                name: " Rosette Romance Cake",
                image: cakeImage12, // replace with the actual image path
                description: "Minimalist two-tier cake with soft blush rosettes and golden accents. ",
                price: 34.00,
                amount:2
                ,shake:" circle",
                color:"white"
                ,Characteristic:"Tiered"
            },
            {
                id: 3,
                name: "Blush Rose Drip Cake",
                image: cakeImage13,  // replace with the actual image path
                description: "A tall boutique cake in soft blush and chocolate tones, topped with elegant sugar flowers and glossy chocolate drips. ",
                price: 26.00,
                amount:3
                ,shake:" circle",
                color:"Light brown"
                ,Characteristic:"elegant"
            },
            {
                id: 4,
                name: "Pink Raspberry Drizzle Cake",
                image: cakeImage19,  // replace with the actual image path
                description: " A luscious pink drip cake topped with raspberry goodness and a sweet, delicate glaze. ",
                price: 14.00,
                amount:6
                ,shake:" circle",
                color:"pink"
                ,Characteristic:"fruts"
    
            },
            {
                id: 5,
                name: " Pastel Sprinkle Birthday Cake",
                image: cakeImage26,  // replace with the actual image path
                description: "Pastel birthday cake with pink swirls, sprinkles & golden message.",
                price: 21.00,
                amount:2            
                ,shake:" circle",
                color:"pink"
                ,Characteristic:"Sprinkle Birthday"
    
            }
            ,
            {
                id: 6,
                name: "Rainbow Celebration Cake",
                image: cakeImage16,  // replace with the actual image path
                description: "A fun and colorful rainbow-layered cake with vibrant sprinkles and playful candles.",
                price: 27.00,
                amount:2
                ,shape:" circle",
                color:"colorfull"
                ,Characteristic:"Sprinkle Birthday"
            },
        {
            id: 7,
            name: "  Vanilla Sprinkle Delight",
            image: cakeImage28,  // replace with the actual image path
            description: " Light vanilla cream cake with rainbow sprinkles." ,
            price: 14.00,
            amount:6           
            ,shake:" circle",
            color:"white"
            ,Characteristic:"Sprinkle Birthday"

        },
        {
            id: 8,
            name: "Mango Mirror Cake",
            image: cakeImage7,  // replace with the actual image path
            description: "A minimalist mousse cake with a vibrant mango glaze. ",
            price: 14.00,
            amount:4
            ,shake:" circle",
            color:"orange"
            ,Characteristic:"solid"

        },
        {
            id: 9,
            name: "Pearl Elegance",
            image: cakeImage30,  // replace with the actual image path
            description: "A luxurious white-tiered cake adorned with sugar pearls and delicate roses. "         ,
            price: 47.00,
            amount:1            
            ,shake:" circle",
            color:"white"
            ,Characteristic:"Tiered"

        },
        {
            id: 10,
            name: " Classic Mille-Feuille",
            image: cakeImage31,  // replace with the actual image path
            description: "A delicate French pastry with layers of crisp puff pastry and smooth vanilla cream, dusted with powdered sugar. "           ,
            price: 27.00,
            amount:1           
            ,shake:" rectangle",
            color:"white"
            ,Characteristic:"layers"

        },
        {
            id: 11,
            name: "Citrus Berry Delight",
            image: cakeImage32,  // replace with the actual image path
            description: "A refreshing cake topped with tangy orange slices, fresh blueberries, and a hint of mint, all over a smooth cream frosting. " ,
            price: 15.00,
            amount:2            
            ,shake:" circle",
            color:"orange"
            ,Characteristic:"fruts"

        },
        {
            id: 12,
            name: "Chocolate Fruit Celebration Cake",
            image: cakeImage23, // replace with the actual image path
            description: "A festive chocolate cake topped with fresh fruits and glistening jelly.",
            price: 16.00,
            amount:2
            ,shake:" circle",
            color:"Light brown"
            ,Characteristic:"fruts"
        },
        {
            id: 13,
            name: " Elegant Vanilla Blossom Cake",
            image: cakeImage33,  // replace with the actual image path
            description: "A classic tiered cake with smooth vanilla frosting and delicate floral accents in soft dusty pink. " ,
            price: 28.00,
            amount:2
            ,shake:" circle",
            color:"cream" 
            ,Characteristic:"Tiered"

        },
        {
            id: 14,
            name: "legant Monochrome Bow Cake",
            image: cakeImage14, // replace with the actual image path
            description: " A chic, minimalistic birthday cake adorned with elegant black bows and delicate white frosting. ",
            price: 13.00,
            amount:6
            ,shake:" circle",
            color:"black"
            ,Characteristic:"Fabric ribbons"
        },
        {
            id: 15,
            name: "Back to School Birthday Cake",
            image: cakeImage15, // replace with the actual image path
            description: "A fun two-tier birthday cake decorated with school-themed fondant accents. ",
            price: 14.00,
            amount:6
            ,shake:" circle",
            color:"colorful"
            ,Characteristic:"Sprinkle Birthday"
        },
        {
            id: 16,
            name: "Gothic Rose Cake",
            image: cakeImage21, // replace with the actual image path
            description: "A dramatic black-and-white cake adorned with black roses and dripping ganache",
            price: 40.00,
            amount:2
            ,shake:" circle",
            color:"black"
            ,Characteristic:"Tiered"
        },
        {
            id: 17,
            name: "Silver Sparkle Cake",
            image: cakeImage17, // replace with the actual image path
            description: "A sophisticated silver glitter cake with a shimmering finish, ideal for an elegant celebration.",
            price: 18.00,
            amount:3
            ,shake:" circle",
            color:"gray"
            ,Characteristic:"romantic"
        },
        {
            id: 18,
            name: "Midnight Sparkle Cake",
            image: cakeImage18, // replace with the actual image path
            description: "A stunning blue cake with silver sugar pearls, creating a festive and elegant vibe. ",
            price: 22.00,
            amount:2
            ,shake:" circle",
            color:"blue"
            ,Characteristic:"romantic"
        },
        {
            id:19,
            name: "Elegant Rose Cake",
            image: cakeImage4,  // replace with the actual image path
            description: " A classic and romantic cake with delicate buttercream roses and soft, creamy details.",
            price: 27.00,
            amount:2
            ,shape:" heart",
            color:"white"
            ,Characteristic:"flawers"
        },
        {
            id: 20,
            name: "Timeless Bow Cake",
            image: cakeImage5, // replace with the actual image path
            description: "A refined cake with a satin-like ribbon design and elegant candles.",
            price: 22.00,
            amount:3
            ,shake:" circle",
            color:"white"
            ,Characteristic:"ribbons"
        },
        {
            id:21,
            name: "Whimsical Ribbons Cake",
            image: cakeImage6, // replace with the actual image path
            description: "A charming birthday cake adorned with white ribbon details and soft piped icing.",
            price: 25.00,
            amount:2
            ,shake:" circle",
            color:"white"
            ,Characteristic:"Fabric ribbons"
        },
        {
            id: 22,
            name: "Strawberry Layer Cake",
            image: cakeImage22,  // replace with the actual image path
            description: "A light and fresh cake with layers of chocolate, cream, and fresh strawberries. ",
            price:20,
            amount:8
            ,shape:"circle",
            color:"red"
            ,Characteristic:"layers"
        },
        {
            id: 23,
            name: "Birthday Wishes Cake",
            image: cakeImage3, // replace with the actual image path
            description: "A minimalistic cake with a bold 'It's My Birthday!' message, perfect for a fun and modern birthday celebration.",
            price: 25.00,
            amount:2
            ,shake:" circle",
            color:"pink"
            ,Characteristic:"modernbirthday"
        },
        {
            id: 24,
            name: "  Dark Chocolate Berry Bliss",
            image: cakeImage27,  // replace with the actual image path
            description: "Dark chocolate cake with berries & pomegranate.",
            price: 16.00,
            amount:5          
            ,shake:" circle",
            color:"Light brown"
            ,Characteristic:"fruts"
        }
        ,
        {
            id: 25,
            name: "Forest Mushroom Cake",
            image: cakeImage20, // replace with the actual image path
            description: "A nature-inspired cake topped with edible mushrooms and earthy accents.",
            price: 19.00,
            amount:4
            ,shake:" circle",
            color:"brown"
            ,Characteristic:"vegetable"
        },
        {
            id: 26,
            name: "Hazelnut Mocha Drizzle Cake",
            image: cakeImage25,  // replace with the actual image path
            description: "A decadent mocha cake with silky hazelnut cream swirls, crunchy caramelized nuts, and a rich chocolate ganache drip. Elegance and flavor in every bite.",
            price: 21.00,
            amount:2
            ,shake:" circle",
            color:"moka"
            ,Characteristic:"nuts"

        },
        {
            id: 27,
            name: " Golden Bloom Cake",
            image: cakeImage24, // replace with the actual image path
            description: "Elegant two-tier white cake adorned with handcrafted white flowers and golden leaves.",
            price: 38,
            amount:2
            ,shake:" circle",
            color:"white"
            ,Characteristic:"Tiered"
        },
        {
            id: 28,
            name: " Romantic Heart Cake",
            image: cakeImage1,  // replace with the actual image path
            description: "A charming cake decorated with soft pink buttercream, small black heart sprinkles, and delicate ribbon details. ",
            price: 17.00,
            amount:4 
            ,shake:" circle",
            color:"pink"
            ,Characteristic:"Fabric ribbons"

        },
        {
            id: 29,
            name: "Sweet Sixteen Bliss",
            image: cakeImage8, // replace with the actual image path
            description: "A beautiful pastel pink cake adorned with fresh flowers and a shiny '16'",
            price: 20.00,
            amount:4
            ,shake:" circle",
            color:"pink"
            ,Characteristic:"flawers"
        },
        {
            id: 30,
            name: "Sprinkle Celebration Cake",
            image: cakeImage9, // replace with the actual image path
            description: "A fun, colorful cake topped with chocolate balls and colorful sprinkles",
            price: 25.00,
            amount:2
            ,shake:" circle",
            color:"brown"   
            ,Characteristic:"Sprinkle Birthday"
        },
        {
            id: 31,
            name: "Berry Bliss Cake",
            image: cakeImage10,  // replace with the actual image path
            description: "Luscious berry-topped cake with rich whipped frosting and fresh mint accents. ",
            price: 27.00,
            amount:2
            ,shape:" circle",
            color:"white"
            ,Characteristic:"fruts"
        },
        {
            id: 32,
            name: "  Berry Cheesecake",
            image: cakeImage29,  // replace with the actual image path
            description: "Light cheesecake with mixed berries and physalis" ,
            price: 25.00,
            amount:4
            ,shake:" circle",
            color:"white"
            ,Characteristic:"cheesecake"

        },
        {
            id: 33,
            name: "solid birthday Cake",
            image: cakeImage2, // replace with the actual image path
            description: "A delightful pink cake with elegant ruffles",
            price: 20.00,
            amount:4
            ,shake:" circle",
            color:"pink"
            ,Characteristic:"modernbirthday"
        },
    ]
};


export const cakesReducer = (state = InitialCakesList, action) => {

    switch(action.type) {
        
        case SHOWGALLERY:
            return {
                ...state,
            };
            case INVITECAKE:
    console.log("Inviting Cake. Current Cakes List:", state.cakesList); // Log current cakes list
    const updatedCakesList = state.cakesList.map((cake, index) => {
        if (index === action.payload - 1) {
            console.log("Inviting Cake Index:", index); // Log the index being modified
            const newAmount = cake.amount - 1;

            if (newAmount < 0) {
                return cake; // Return unchanged cake
            }

            console.log("Adding to cart for cake:", cake); // Log the cake being added to cart
            return {
                ...cake,
                amount: newAmount // Update the amount
            };
        }
        return cake; // Return the unchanged cake
    });

    console.log("Updated Cakes List:", updatedCakesList); // Log the updated cakes list
    return {
        ...state,
        cakesList: updatedCakesList, // Return the new cakesList
    };
        default:
            return state;        
    }
};