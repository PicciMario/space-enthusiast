import * as LaunchLibrary from '../../services/LaunchLibrary'

export const addUpcomingLaunches = (launches) => ({
    type: 'ADD_UPCOMING_LAUNCHES',
    payload: {
        launches        
    }
});

export const addLaunch = (launch) => ({
    type: 'ADD_LAUNCH',
    payload: {
        launch
    }
});

export const addLaunchStatuses = (statuses) => ({
    type: 'ADD_LAUNCH_STATUSES',
    payload: {
        statuses
    }
});

/**
 * Retrieve upcoming launches.
 */
export function retrieveUpcomingLaunches(){

    return (dispatch, getState) => {

        if (getState().launches.upcoming.length !== 0) return;

        LaunchLibrary
            .nextLaunches(10)
            .then((data) => {

                if (data && data.launches){
                    dispatch(addUpcomingLaunches(
                        data.launches
                    ));
                }
                else {
                    console.error('No data.launches in received payload', data);
                }

            })
            .catch(e => {
                console.error('Error while retrieving upcoming launches', e);
            })        

    }

}

/**
 * Retrieve a launch (if not already cached).
 * @param {*} agency id
 */
export function retrieveLaunch(id){

    return (dispatch, getState) => {

        if (getState().launches.details[id] != null) return;

        LaunchLibrary
            .launchByID(id)
            .then((data) => {
                if (data && data.launches && data.launches.length > 0){
                    dispatch(addLaunch(
                        data.launches[0]
                    ));
                }
                else {
                    console.error('No data.launches in received payload', data);
                }

            })
            .catch(e => {
                console.error('Error while retrieving launch', e);            
            })     

    }

}

/**
 * Retrieve all agency types.
 */
export function retrieveLaunchStatuses(){

    return (dispatch, getState) => {

        if (Object.keys(getState().launches.statuses).length > 0) return;

        LaunchLibrary
            .launchStatuses()
            .then((data) => {
                if (data && data.types){
                    let newTypes = {};
                    data.types.forEach((type) => 
                        newTypes[type.id] = type.name
                    );
                    dispatch(addLaunchStatuses(
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