// the data layer
export const initialState = { 
    cart: [], 
    user: null,
}

// update the price using Selector
export const getCartTotal = (cart) =>
    cart?.reduce((amount, item) => item.price + amount, 0);

// listen for changes to cart
const reducer = (state, action) => {
    switch (action.type) {
        
        // when passed add to cart
        // take the current state of cart
        // and update it with selected item
        case "ADD_TO_CART":
            return {
                ...state, 
                cart: [...state.cart, action.item],
            };

        case "RESET_CART":
            return {
                ...state,
                cart: []
            };

        // remove item from cart
        case "REMOVE_FROM_CART":
            // find index of item you want to remove
            const index = state.cart.findIndex(
                (cartItem) => cartItem.id === action.id
            );
            let newCart = [...state.cart];
            
            // if there are more than 0 products in your cart
            // when the remove item is clicked this will splice off
            // the specific item
            if (index >= 0) {
                newCart.splice(index, 1); 

            } else {
                console.warn(
                    `Can't remove product (id: ${action.id}) as it's not in the cart!`
                )
            }
            return {
                ...state,
                cart: newCart
            }
        
        // login or log out user
        case "SET_USER":
            return {
                ...state,
                user: action.user
            }

        // need default state for cart to function
        default:
            return state;
    }
}

export default reducer;