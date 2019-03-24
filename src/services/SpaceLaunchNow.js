import RestCache from './RestCache';

const baseUrl = 'https://spacelaunchnow.me/api/3.3.0';

// ----- Launches -------------------------------------------------------------

export function launchByLibraryID(id){
    let url = new URL(baseUrl + '/launch');
    url.searchParams.append('launch_library_id', id);
    return RestCache
        .retrieveUrl(url);
}