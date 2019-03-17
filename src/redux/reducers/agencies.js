
const initialState = {
    list: [],
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

        default:
            console.error('Azione non riconosciuta: ' + action.type);
            return state;

    }
}
