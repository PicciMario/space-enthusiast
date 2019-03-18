
const initialState = {
    list: [],
    details: {},
    types: {},
    totalRecords: 0,
    lastRecordReceived: 0
};

export default function(state = initialState, action) {
    
    switch (action.type) {
        
        case 'ADD_AGENCIES': {
            const {agencies, lastRecordReceived, totalRecords} = action.payload;
            return {
                ...state,
                lastRecordReceived,
                totalRecords,
                list: [...state.list, ...agencies]
            }
        }

        case 'ADD_AGENCY': {
            const {agency} = action.payload;
            return {
                ...state,
                details: {...state.details, [agency.id]: agency}
            }
        }      
        
        case 'ADD_AGENCY_TYPES': {
            const {types} = action.payload;
            return {
                ...state,
                types: types
            }
        }        

        default:
            console.error('Azione non riconosciuta: ' + action.type);
            return state;

    }
}
