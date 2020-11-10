console.log('JS File Loaded')




 const weatherForm1=document.querySelector('form')
 const location1=document.querySelector('input')
 const result=document.querySelector('#rs1')
 const rs2=document.querySelector('#rs2')

weatherForm1.addEventListener('submit',(e)=>{
    e.preventDefault()

    
    const loc=location1.value

    fetch('http://localhost:3000/weather?address='+loc).then((response)=>{
    response.json().then((data)=>{
        result.textContent=data.temperature;
        rs2.textContent=data.address
        console.log(data)
    })
})
}
    )
