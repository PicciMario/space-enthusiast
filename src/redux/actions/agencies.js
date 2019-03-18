import * as LaunchLibrary from '../../services/LaunchLibrary'

export const addAgencies = (agencies, lastRecordReceived, totalRecords) => ({
    type: 'ADD_AGENCIES',
    payload: {
        agencies,
        lastRecordReceived,
        totalRecords        
    }
});

export const addAgency = (agency) => ({
    type: 'ADD_AGENCY',
    payload: {
        agency
    }
});

export const addAgencyTypes = (types) => ({
    type: 'ADD_AGENCY_TYPES',
    payload: {
        types
    }
});

/**
 * Retrieve all the agencies. This thunk is called recursively until all the
 * agencies have been retrieved (by checking the "count", "offset" and "total" 
 * fields in the received data). When called without the offset parameter it 
 * checks if the list is already populated, if yes it just returns.
 * @param {*} offset 
 */
export function retrieveAgencies(offset){

    return (dispatch, getState) => {

        // If initial request (no offset specified) and already populated list
        // just skip (no use reloading everything anytime).
        if (offset == null && getState().agencies.list.length !== 0) return;

        LaunchLibrary
            .agencies(offset)
            .then((data) => {

                if (data && data.agencies){
                    let lastRecordReceived = Number(data.offset) + Number(data.count);
                    let totalRecords = Number(data.total)
                    dispatch(addAgencies(
                        data.agencies, 
                        lastRecordReceived,
                        totalRecords
                    ));

                    // Other elements are available in the API. Calls itself
                    // with the right offset.
                    if (lastRecordReceived < totalRecords){
                        dispatch(retrieveAgencies(
                            lastRecordReceived
                        ))
                    }     

                }
                else {
                    console.error('No data.agencies in received payload', data);
                }

            })
            .catch(e => {
                console.error('Error while retrieving agencies', e);
            })        

    }

}

/**
 * Retrieve an agency (if not already cached).
 * @param {*} agency id
 */
export function retrieveAgency(id){

    return (dispatch, getState) => {

        if (getState().agencies.details[id] != null) return;

        LaunchLibrary
            .agencyByID(id)
            .then((data) => {
                if (data && data.agencies && data.agencies.length > 0){
                    dispatch(addAgency(
                        data.agencies[0]
                    ));
                }
                else {
                    console.error('No data.agencies in received payload', data);
                }

            })
            .catch(e => {
                console.error('Error while retrieving agencies', e);            
            })     

    }

}

/**
 * Retrieve all agency types.
 */
export function retrieveAgencyTypes(){

    return (dispatch, getState) => {

        if (Object.keys(getState().agencies.types).length > 0) return;

        LaunchLibrary
            .agencyTypes()
            .then((data) => {
                if (data && data.types){
                    let newTypes = {};
                    data.types.forEach((type) => 
                        newTypes[type.id] = type.name
                    );
                    dispatch(addAgencyTypes(
                        newTypes
                    ));
                }
                else {
                    console.error('No data.types in received payload', data);
                }

            })
            .catch(e => {
                console.error('Error while retrieving agency types', e);            
            })     

    }

}