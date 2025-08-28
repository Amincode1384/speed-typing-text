const theTimer=document.querySelector(".timer")



var time=[0,0,0,0];




function runTimer(){
let currentTime=timer[0]+":"+timer[1]+":"+timer[2];
theTimer.innerHTML= currentTime;
timer[3]++;
timer[0]=timer[3]/100/60;

}



setInterval(runTimer,10);