import { SHOWCART, REMOVEFROMCART, REDUCEFROMCART, ADDTOCART } from "./actionTypes";

const InitialInvitedCakesList = {
    invitedCakeList: []
};

export const ShopingCartReducer = (state = InitialInvitedCakesList, action) => {
    console.log("Dispatching Action:", action); // Log the action being dispatched

    switch (action.type) {
        case SHOWCART:
            console.log("Showing Cart. Current State:", state); // Log current state
            return {
                ...state,
            };

        case REMOVEFROMCART:
            const { id: removeId } = action.payload;
            console.log("Removing Cake with ID:", removeId); // Log which ID is being removed
            return {
                ...state,
                invitedCakeList: state.invitedCakeList.filter(cake => {
                    const isRemoved = cake.id !== removeId;
                    console.log("Remaining Cake:", cake.id, isRemoved); // Log remaining cakes
                    return isRemoved;
                }),
            };

        case REDUCEFROMCART:
            const { id: reduceId } = action.payload;
            console.log("Reducing Cake with ID:", reduceId); // Log the ID to reduce
            const existingCakeToReduce = state.invitedCakeList.find(cake => cake.id === parseInt(reduceId));
            
            if (existingCakeToReduce) {
                if (existingCakeToReduce.amount > 1) {
                    console.log("Reducing amount of Cake:", existingCakeToReduce); // Log amount reduction
                    return {
                        ...state,
                        invitedCakeList: state.invitedCakeList.map(cake =>
                            cake.id === parseInt(reduceId) 
                                ? { ...cake, amount: cake.amount - 1 } 
                                : cake
                        ),
                    };
                } else {
                    console.log("Removing Cake as amount is 1 or less:", existingCakeToReduce); // Log removal due to amount
                    return {
                        ...state,
                        invitedCakeList: state.invitedCakeList.filter(cake => cake.id !== parseInt(reduceId)),
                    };
                }
            }
            return state;

        case ADDTOCART: {
            const { myCake } = action.payload; // Destructure myCake from action.payload
            console.log("!!!!!!Adding Product to Cart:", myCake);
            console.log("Received Action:", action); // Log the entire action

            const existingItem = state.invitedCakeList.find(item => item.id === myCake.id);
        
            if (existingItem) {
                console.log("Incrementing amount for existing item:", existingItem);
                return {
                    ...state,
                    invitedCakeList: state.invitedCakeList.map(item =>
                        item.id === myCake.id ? { ...item, amount: item.amount + 1 } : item
                    ),
                };
            } else {
                console.log("Creating new item in cart:", myCake);
                return {
                    ...state,
                    invitedCakeList: [...state.invitedCakeList, { ...myCake, amount: 1 }]
                };
            }
        }

        default:
            console.log("Returning Current State:", state); // Log returning current state if action not recognized
            return state;        
    }
};