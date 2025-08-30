const theTimer=document.querySelector(".Timer");
let currentTime;


var timer=[0,0,0,0];

function leadingzero(time){
if(time<=9){
    time="0"+time;
}else{
    time=time;
}

}


function runTimer(){
 currentTime=timer[0]+":"+timer[1]+":"+timer[2];
theTimer.innerHTML= currentTime;
timer[3]++;
timer[0] = Math.floor(timer[3]/100/60); // دقیقه
timer[1] = Math.floor(timer[3]/100) % 60; // ثانیه
timer[2] = timer[3] % 100; // صدم ثانیه


}



setInterval(runTimer,10);