let time;
let i=0;
function timeNow() {
    time = new Date();
};

function wrongTime() {
    time.setMinutes(time.getMinutes() + 12);
    time.setSeconds(time.getSeconds() + 30);
    time.setHours(time.getHours() + 9);
};

let flag = true

function fullTime() {
    timeNow();
    if (flag){
    wrongTime();
    }
    const Hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours();
    const Minutes = time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes();
    const Seconds = time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
    totalTime.value = Hours + ":" + Minutes + ":" + Seconds
    setTimeout('fullTime()', 1000);
}
fullTime()
setTimeout(function(){
location.reload();
}, 5000);
setTimeout(function(){
    window.close();
    }, 30000);
