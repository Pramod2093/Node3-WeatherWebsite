const request=require('request');


const geocode=(address,callback)=>{
    const url='https://api.mapbox.com/geocoding/v5/mapbox.places/'+address+'.json?access_token=pk.eyJ1IjoicHJhbW9kMjA5MyIsImEiOiJja2g0c2E2YWgwYjEwMnBuc3U0ODN0aTlsIn0.ugD0m0IMCl5TxzV5DsKG2A';
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('No internet connection',undefined)
        }
        else if(response.body.features.length==0){
            callback('Unable to find location',undefined);
        }
        else{
            callback(undefined,{
                latitude:response.body.features[0].center[1],
                longitude:response.body.features[0].center[0]
            })
        }

    })
}

module.exports=geocode;


