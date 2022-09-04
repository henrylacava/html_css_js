var sec = 0
var min = 0
var hour = 0
var tempo = 0
var time = document.getElementById('time')

function start(){
    tempo = setInterval(timer,1000)
}

function pause(){
    clearInterval(tempo)
}

function reset(){
    clearInterval(tempo)
    sec = 0
    min = 0
    hour = 0
    time.innerText='00:00:00'
}

function timer(){
    sec++
    if(sec == 60){
        min++
        sec = 0
    }
    if(min == 60){
        hour++
        min = 0
    }
    time.innerText= zeros(hour) + ':' + zeros(min) + ':' + zeros(sec)
}

function zeros(zero){
    if(zero < 10){
        return('0' + zero)
    }else{
        return(zero)
    }
}