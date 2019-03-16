import RestCache from './RestCache';

const baseUrl = 'https://launchlibrary.net/1.4';

export function launchByID(id){
    return RestCache
        .retrieveUrl(baseUrl + '/launch/' + id);
}

export function nextLaunches(num){
    return RestCache
        .retrieveUrl(baseUrl + '/launch?next=' + num);
}

export function providerByID(num){
    return RestCache
        .retrieveUrl(baseUrl + '/launch/agency/' + num);
}