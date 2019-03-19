import RestCache from './RestCache';

const baseUrl = 'https://launchlibrary.net/1.4';

// ----- Launches -------------------------------------------------------------

export function nextLaunches(num){
    let url = new URL(baseUrl + '/launch/falcon');
    //url.searchParams.append('next', num);
    url.searchParams.append('mode', 'list');
    return RestCache
        .retrieveUrl(url);
}

export function launchByID(id){
    let url = new URL(baseUrl + '/launch/' + id);
    url.searchParams.append('mode', 'verbose');
    return RestCache
        .retrieveUrl(url);
}

export function launchEventsByID(id){
    let url = new URL(baseUrl + '/launchevent');
    url.searchParams.append('parentid', id);
    url.searchParams.append('mode', 'verbose');
    return RestCache
        .retrieveUrl(url);
}

export function launchStatuses(){
    let url = new URL(baseUrl + '/launchstatus');
    return RestCache
        .retrieveUrl(url);
}

// ----- Agencies -------------------------------------------------------------

export function agencies(offset){
    let url = new URL(baseUrl + '/agency');
    url.searchParams.append('mode', 'list');
    if (offset != null) url.searchParams.append('offset', offset);
    return RestCache
        .retrieveUrl(url);
}

export function agencyByID(id){
    let url = new URL(baseUrl + '/agency/' + id);
    url.searchParams.append('mode', 'verbose');
    return RestCache
        .retrieveUrl(url);
}

export function agencyTypes(){
    let url = new URL(baseUrl + '/agencytype');
    return RestCache
        .retrieveUrl(url);
}