const clockContainer = document.querySelector("#clock");
const switchContainer = document.querySelector("#switch");

let is24HoursFormate = true;



function clockUpdate(){
    let now = new Date;
    let hours = now.getHours();
    let minute = String(now.getMinutes()).padStart(2, '0');
    let second = String(now.getSeconds()).padStart(2, '0');
    let period = "";
if(!is24HoursFormate) {
     period = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
   
}
hours = String(hours).padStart(2, '0');
clockContainer.textContent = `${hours} : ${minute} : ${second} ${period}`;
}

function toggle (){
    is24HoursFormate = !is24HoursFormate
    if(is24HoursFormate) {
        switchContainer.textContent = 'switch to is 12-Hours formate'
    } else {
         switchContainer.textContent = 'switch to is 24-Hours formate'
    }
    clockUpdate();
    }
    switchContainer.addEventListener("click", toggle);



setInterval(clockUpdate, 1000);
clockUpdate();
toggle()
