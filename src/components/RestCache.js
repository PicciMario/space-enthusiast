class RestCache{

    async retrieveUrl(url){

        console.log('Retrieve url: ' + url)

        let val = await fetch(
            url
        )        
        .then((data) => {
            return data.json();
        })
        .then((data) => {
            console.log('Terminata fetch di ' + url, data);
            return data;
        })        

        return val;

    }

}

export default new RestCache();