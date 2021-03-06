
const initialState = {
    upcoming: [],
    details: {},
    statuses: {}
};

export default function(state = initialState, action) {
    
    switch (action.type) {
        
        case 'ADD_UPCOMING_LAUNCHES': {
            const {launches} = action.payload;
            return {
                ...state,
                upcoming: launches
            }
        }

        case 'ADD_LAUNCH': {
            const {launch} = action.payload;
            return {
                ...state,
                details: {...state.details, [launch.id]: launch}
            }
        }              
        
        case 'ADD_LAUNCH_STATUSES': {
            const {statuses} = action.payload;
            return {
                ...state,
                statuses
            }
        }       
        
        default:
            return state;

    }
}
