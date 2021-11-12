const daysEle=document.getElementById('days');
const hoursEle=document.getElementById('hours');
const minutesEle=document.getElementById('minutes');
const secondsEle=document.getElementById('seconds');

const newYears='1 Jan 2022';
// 4272834015 ms
function countdown(){
    const newYearsDate=new Date(newYears);
    const currentDate=new Date;
    
    const totalSeconds=(newYearsDate-currentDate)/1000;
    
    const days=Math.floor(totalSeconds/3600/24);
    const hours=Math.floor(totalSeconds/3600)%24;
    const minutes=Math.floor(totalSeconds/60)%60;
    const seconds=Math.floor(totalSeconds%60);
    
    daysEle.innerHTML=formatTime(days);
    hoursEle.innerHTML=formatTime(hours);
    minutesEle.innerHTML=formatTime(minutes);
    secondsEle.innerHTML=formatTime(seconds);
    // console.log(days,hours,minutes,seconds);   
}

//For 01 to 09
function formatTime(time){
    return time < 10 ? (`0${time}`) : time;
}

//initial call
countdown();
setInterval(countdown,1000);