const theTimer=document.querySelector(".Timer");
let currentTime;
const testarea=document.querySelector("#test-area");

var timer=[0,0,0,0];

function leadingzero(time){
if(time<=9){
    time="0"+time;
}else{
    time=time;
}
return time;

}


function runTimer(){
 currentTime= leadingzero(timer[0])+":"+leadingzero(timer[1])+":"+leadingzero(timer[2]);
theTimer.innerHTML= currentTime;
timer[3]++;
timer[0] = Math.floor(timer[3]/100/60); // دقیقه
timer[1] = Math.floor(timer[3]/100) % 60; // ثانیه
timer[2] = timer[3] % 100; // صدم ثانیه


}

function start(){
    let textinteredLength=testarea.aria.ValueMax.

setInterval(runTimer,10);

}



testarea.addEventListener("keypress",start);
  

