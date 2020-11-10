const request=require('request')

const forecast=(lat,long,callback)=>{
    const url='http://api.weatherstack.com/current?access_key=38c3ff266099546cb42cc2eaaf1806c7&query='+lat+','+long;
    request({url:url,json:true},(error,response)=>{
        if(error){
            callback('Internet not connecetd',undefined)

        }
        else{
            callback(undefined,{
                temperature:response.body.current.temperature
            })

        }
    })
}

module.exports=forecast;