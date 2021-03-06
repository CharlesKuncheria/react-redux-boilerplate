var initialState = [];

export default function cartReducer(state=initialState, action) {
    switch(action.type) {
        case 'ADD_TO_CART':
            return [...state, action.payload];
        case 'REMOVE_FROM_CART':
            return state.filter((id) => { 
                return (id != action.payload)
            });
        default:
            return state;
    }
} 