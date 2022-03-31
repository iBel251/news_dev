const footer = document.querySelector('.footer');
fetch('/footer.html')
.then(res=>res.text())
.then(data=>{
    footer.innerHTML=data
})


var dt = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var currentDate =dt.getDate() +' ' + months[dt.getMonth()] +' '+dt.getFullYear();
var currentTime = dt.getHours() + ':' + dt.getMinutes();
document.getElementsByClassName("date")[0].innerHTML=currentDate;
document.getElementsByClassName("date")[1].innerHTML=currentDate;
//document.getElementById('time').innerHTML=currentTime;

