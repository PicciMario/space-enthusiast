
const initialState = {
    
};

export default function(state = initialState, action) {
    
    switch (action.type) {
        
        case 'SET_KEY': {
            const {key, value} = action.payload;
            return {
                ...state,
                [key]: value
            }
        }

        case 'RESET_KEY': {
            const {key} = action.payload;
            let newState = {...state};
            delete newState[key];
            return newState;
        }                
        
        default:
            return state;

    }
}
