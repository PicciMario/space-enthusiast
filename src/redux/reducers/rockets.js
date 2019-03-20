
const initialState = {
    families: [],
    totalRecords: 0,
    lastRecordReceived: 0    
};

export default function(state = initialState, action) {
    
    switch (action.type) {
        
        case 'ADD_ROCKET_FAMILIES': {
            const {families, lastRecordReceived, totalRecords} = action.payload;
            return {
                ...state,
                families: [...state.families, ...families],
                totalRecords,
                lastRecordReceived
            }
        }     
        
        default:
            return state;

    }
}
