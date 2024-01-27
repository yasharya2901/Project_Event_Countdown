
// Get today's date
let today = new Date();
let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0');
let yyyy = today.getFullYear();

today = yyyy + '-' + mm + '-' + dd;

// Set the min attribute of the date input to today's date
document.querySelector("#date-picker").setAttribute("min", today);



let intervalFunction;
document.querySelector("#start").addEventListener("click", () => {
    // ensures that the countdown doesn't start again if the start button is clicked multiple times
    if (intervalFunction) {
        clearInterval(intervalFunction);
    }
    intervalFunction = setInterval(() => start(), 1000);
})



document.querySelector("#reset").addEventListener("click", reset)
document.querySelector('#stop').addEventListener("click", () => {clearInterval(intervalFunction)});


function start() {
    // fetches the date from date input
    const date = document.querySelector("#date-picker").value;
    // fetches time from the time input
    const time = document.querySelector("#time-picker").value;

    const endTime = new Date(date +" "+ time)

    if(isNaN(endTime)) {
        alert("Please enter a valid date and time.");
        clearInterval(intervalFunction);
        return;
    }

    if(time === "") {
        alert("Please enter a valid time.");
        clearInterval(intervalFunction);
        return;
    }

    const currentTime = new Date();
    
    const days = document.querySelector('#days');
    const hours = document.querySelector('#hours');
    const minutes = document.querySelector('#minutes');
    const seconds = document.querySelector('#seconds');

    // converts the time from milliseconds to seconds
    const timeLeft = (endTime - currentTime)/1000;

    if (timeLeft < 0) {
        alert("Countdown Complete!");
        reset();
        return;
    }
    
    days.innerText = Math.floor(timeLeft / (24 * 60 * 60));
    hours.innerText = Math.floor((timeLeft / (60 * 60)) % 24);
    minutes.innerText = Math.floor((timeLeft / 60) % 60);
    seconds.innerText = Math.floor(timeLeft%60);
}

function reset() {
    clearInterval(intervalFunction)
    
    const days = document.querySelector('#days');
    const hours = document.querySelector('#hours');
    const minutes = document.querySelector('#minutes');
    const seconds = document.querySelector('#seconds');

    days.innerText = "0"
    hours.innerText = "0"
    minutes.innerText = "0"
    seconds.innerText = "0"
}