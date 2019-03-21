import * as LaunchLibrary from '../../services/LaunchLibrary'

export const addRocketFamilies = (families, lastRecordReceived, totalRecords) => ({
    type: 'ADD_ROCKET_FAMILIES',
    payload: {
        families,
        lastRecordReceived,
        totalRecords             
    }
});

export const addRocketsByFamily = (familyID, rockets) => ({
    type: 'ADD_ROCKETS_BY_FAMILY',
    payload: {
        familyID,
        rockets    
    }
});

/**
 * Retrieve upcoming launches.
 */
export function retrieveRocketFamilies(offset){

    return (dispatch, getState) => {

        if (getState().rockets.families.length !== 0 && offset == null) return;

        LaunchLibrary
            .rocketFamilies(offset)
            .then((data) => {

                if (data && data.RocketFamilies){

                    let lastRecordReceived = Number(data.offset) + Number(data.count);
                    let totalRecords = Number(data.total)
                    dispatch(addRocketFamilies(
                        data.RocketFamilies, 
                        lastRecordReceived,
                        totalRecords
                    ));

                    // Other elements are available in the API. Calls itself
                    // with the right offset.
                    if (lastRecordReceived < totalRecords){
                        dispatch(retrieveRocketFamilies(
                            lastRecordReceived
                        ))
                    } 


                }
                else {
                    console.error('No data.RocketFamilies in received payload', data);
                }

            })
            .catch(e => {
                console.error('Error while retrieving upcoming launches', e);
            })        

    }

}

/**
 * Retrieve upcoming launches.
 */
export function retrieveRocketsByFamily(id){

    return (dispatch, getState) => {

        LaunchLibrary
            .rocketsByFamily(id)
            .then((data) => {

                if (data && data.rockets){

                    dispatch(addRocketsByFamily(
                        id,
                        data.rockets, 
                    ));

                }
                else {
                    console.error('No data.rockets in received payload', data);
                }

            })
            .catch(e => {
                console.error('Error while retrieving rockets', e);
            })        

    }

}