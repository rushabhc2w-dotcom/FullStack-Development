const result=document.getElementById('result');
const currentTime = Date.now();
const olympicTime = new Date(2028,6,14).getTime();
let timer = olympicTime-currentTime;

//millisecond
const day = Math.floor((timer)/(1000*60*60*24));
timer %= 100060*60*24;


const hour = Math.floor((timer)/(1000*60*60));
timer %= 100060*60;


const minute = Math.floor((timer)/(1000*60));
timer %= 1000*60;


const second = Math.floor((timer)/(1000));
timer %= 1000;


result.textContent=`${day}:days ${hour}:hour ${minute}:minute ${second}:Second`;