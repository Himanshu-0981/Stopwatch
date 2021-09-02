
let hr = 0;
let min = 0;
let sec = 0;
let mil = 0;

let timer = false;


let start = ()=>{
    timer = true;
    stopWatch();
}

let Stop = ()=>{
    timer = false;
    stopWatch();
}

let reset = ()=>{
    timer = false;
    hr = 0;
    min = 0;
    sec = 0;
    mil = 0;

    document.getElementById("hr").innerHTML = "00";
    document.getElementById("min").innerHTML = "00";
    document.getElementById("sec").innerHTML = "00";
    document.getElementById("mil").innerHTML = "00";
}

let stopWatch =()=>{

    if(timer == true){
        mil = mil+1;
       
        if(mil == 100){
            sec = sec+1;
            mil = 0;
        }

        if(sec == 60){
            min = min + 1;
            sec = 0;
        }

        if(min == 60){
            hr = hr+1;
            min = 0;
            sec = 0;
        }


        let hrString = hr;
        let minString = min;
        let secString = sec;
        let milString = mil;

        if(hr < 10){
            hrString = "0" + hr
        }
        if(min < 10){
            minString = "0" + min
        }
        if(sec < 10){
            secString = "0" + sec
        }
        if(mil < 10){
            milString = "0" + mil
        }


        document.getElementById("hr").innerHTML = hrString;
        document.getElementById("min").innerHTML = minString;
        document.getElementById("sec").innerHTML = secString;
        document.getElementById("mil").innerHTML = milString;


        setTimeout("stopWatch()",10)
    }
}