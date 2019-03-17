import RestCache from './RestCache';

const baseUrl = 'https://launchlibrary.net/1.4';

export function nextLaunches(num){
    return RestCache
        .retrieveUrl(baseUrl + '/launch?next=' + num);
}

export function agencies(offset){
    let url = new URL(baseUrl + '/agency');
    url.searchParams.append('mode', 'list');
    if (offset != null) url.searchParams.append('offset', offset);
    return RestCache
        .retrieveUrl(url);
}

export function launchByID(id){
    return RestCache
        .retrieveUrl(baseUrl + '/launch/' + id);
}

export function providerByID(num){
    return RestCache
        .retrieveUrl(baseUrl + '/launch/agency/' + num);
}