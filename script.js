let hr = mt = sc = ms = `0${0}`, startTime 
const btnStart = document.querySelector(".start")
const btnStop = document.querySelector(".stop")
const btnRestart = document.querySelector(".restart")

let start = () => {
    btnRestart.classList.remove("on")
    btnStop.classList.remove("on")
    btnStart.classList.add("on")

    startTime = setInterval(() => {
        ms++ 
        ms = ms < 10 ? `0${ms}` : ms

        if (ms === 100) {
            sc++
            sc = sc < 10 ? `0${sc}` : sc
            ms = `0${0}`
        }

        if (sc === 60) {
            mt++
            mt = mt < 10 ? `0${mt}` : mt
            sc = `0${0}`
        }
    
        if (mt == 60) {
            hr++
            hr = hr < 10 ? `0${hr}` : hr
            mt = `0${0}`
        }

        insertValue()

    }, 10)   
}

let stopB = () => {
    btnStart.classList.remove("on")
    btnRestart.classList.remove("on")
    clearInterval(startTime)
    btnStop.classList.add("on")
}

let restart = () => {
    btnStart.classList.remove("on")
    btnStop.classList.remove("on")
    clearInterval(startTime)
    hr = mt = sc = ms = `0${0}`
    btnRestart.classList.add("on")
    insertValue()
}

let insertValue = () => {
    document.querySelector(".miliSecond").innerHTML = ms
    document.querySelector(".second").innerHTML = sc
    document.querySelector(".minute").innerHTML = mt
    document.querySelector(".hour").innerHTML = hr
}

btnStart.addEventListener("click", start)
btnStop.addEventListener("click", stopB)
btnRestart.addEventListener("click", restart)