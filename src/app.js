const express=require('express');
const geocode=require('./geocode.js');
const forecast=require('./forecast.js');
const path=require('path')
const hbs=require('hbs')
const port=process.env.PORT || 3000

const app=express()
const stpath=path.join(__dirname,'../public');
app.set('view engine','hbs')

app.set('views',path.join(__dirname,'../hbsviews'));

app.use(express.static(stpath));
hbs.registerPartials(path.join(__dirname,'../partials'))

app.get('/weather',(req,res)=>{
    if(!req.query.address){
        return res.send('Addresss is mandatory')
    }
    else{
        geocode(req.query.address,callback=(error,{latitude,longitude}={})=>{
            if(error){
                res.send(error)
            }
            forecast(latitude,longitude,callback=(error,data)=>{
                if(error){
                    res.send(error)
                }
                else
                res.send({
                    temperature:data.temperature,
                    address:req.query.address
                })
            })
        })
    }
})

// address=process.argv[2];




app.get('', (req, res)=> {
        res.render('index',{
            name:'pramod',
            age:25,
            headerhbs:'Weather'
        });

    })

    app.get('/about', (req, res)=> {
        res.render('about',{
            title:'About Page',
            headerhbs:'ABOUT Weather'
        });

    })

// app.get('',(req,res)=>  
// {
//     res.send('Hello express');
    
// })

// app.get('/about',(req,res)=>{
//     res.send('<h1>ABOUT</h1>')

// })
// app.get('/help',(req,res)=>{
//     res.send({
//         number:908,
//         mob:789
//     })

//})


app.listen(port,()=>console.log('Server is up and running om port'+port));
console.log('Web server is up');