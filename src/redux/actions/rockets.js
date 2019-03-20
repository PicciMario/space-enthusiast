import * as LaunchLibrary from '../../services/LaunchLibrary'

export const addRocketFamilies = (families, lastRecordReceived, totalRecords) => ({
    type: 'ADD_ROCKET_FAMILIES',
    payload: {
        families,
        lastRecordReceived,
        totalRecords             
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