function getFullData(){
    let txtdata = document.getElementById('data')
    let txttime = document.getElementById('time')
    let date = new Date()
    let day = date.getDate()
    let month = date.getMonth()
    let year = date.getFullYear()
    let days = ['Domingo',
        'Segunda-Feira',
        'Terça-Feira',
        'Quarta-Feira',
        'Quinta-Feira',
        'Sexta-Feira',
        'Sábado']
    let indexDay = date.getDay()
    txtdata.innerHTML = `${numberCorrect(day)}/${numberCorrect(month)}/${year},${days[indexDay]}`
    let hour = date.getHours()
    let minutes = date.getMinutes()
    let seconds = date.getSeconds()
    txttime.innerHTML = `${numberCorrect(hour)}:${numberCorrect(minutes)}:${numberCorrect(seconds)}`
    
}
function numberCorrect(number){
    if(number < 10){
        return '0'+number
    }else{
        return number
    }
}
getFullData()
setInterval(() => {
   getFullData()
},1000)