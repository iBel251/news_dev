const footer = document.querySelector('.footer');
fetch('/footer.html')
    .then(res => res.text())
    .then(data => {
        footer.innerHTML = data
    })

var dt = new Date();
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const monthsEt = ["ታህሳስ", "ጥር", "የካርቲት", "መጋቢት", "ሚያዝያ", "ግንቦት", "ሰኔ", "ሃምሌ", "ነሃሴ", "መስከረም", "ጥቅምት", "ህዳር"];
const dif = [8, 7, 9, 8, 8, 7, 7, 6, 5, 10, 9, 9]; // Date differences at each month
const dateGc = dt.getDate();


let currentMonth = monthsEt[dt.getMonth()];
// Make sure to update the converted month when it is over, it happens at the first half of the gregorian calander
if (dateGc > dif[dt.getMonth()]) {
    currentMonth = monthsEt[dt.getMonth() + 1];

}

// Ethiopian 13th month hard coded between september 6-10
if (months[dt.getMonth()] === "September" && dt.getDate() > 5 && dt.getDate() < 11) {
    currentMonth = "ጷግሜ";
}

//After the 13th month is over we have to reconfigure the date conversion because the difference will be 10 not 5
if (months[dt.getMonth()] === "September" && dt.getDate() > 10) {
    dif[dt.getMonth] = 10;
}
// convert gregorian date to Ethiopian
let currentDay = dateGc - dif[dt.getMonth()];
if (currentDay <= 0) {
    currentDay += 30;
}

var currentDate = currentDay + ' ' + currentMonth + ' ' + 2014;
var currentTime = dt.getHours() + ':' + dt.getMinutes();
document.getElementsByClassName("date")[0].innerHTML = currentDate;
document.getElementsByClassName("date")[1].innerHTML = currentDate;

