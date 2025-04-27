
const InitialInvitedCakesList = {
    invitedCakeList: []
}

export const ShopingCartReducer = (state = InitialInvitedCakesList, action) => {
    switch(action.type) {

        case SHOWCART:
            return {
                ...state,
            };
        case REMOVEFROMCART:
            return {
                ...state,
            };
         case ADDTOCART:
                console.log("!!!!!!!!!");
                const { id, amount } = action.payload;
                const existingItem = state.invitedCakeList.find(item => item.id === id);
          
                if (existingItem) {
                  existingItem.amount += amount;
                } else {
                  state.items.push({ id, amount });
                }
        default:
            return state;        
    }
};