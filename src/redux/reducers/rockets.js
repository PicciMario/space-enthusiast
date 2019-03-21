
const initialState = {
    families: [],    
    totalRecords: 0,
    lastRecordReceived: 0,
    rocketsByFamily: {}
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
        
        case 'ADD_ROCKETS_BY_FAMILY': {
            const {familyID, rockets} = action.payload;
            return {
                ...state,
                rocketsByFamily: {...state.rocketsByFamily, [familyID]: rockets}
            }
        }            
        
        default:
            return state;

    }
}
