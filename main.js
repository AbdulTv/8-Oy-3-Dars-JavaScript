const startButton = document.getElementById('startButton');
const timerDisplay = document.getElementById('timer');
const alarmSound = document.getElementById('alarmSound');


function startTimer() {

    let hours = prompt("Necha soat davom etsin?");
    hours = parseInt(hours);


    let minutes = prompt("Necha daqiqa davom etsin?");
    minutes = parseInt(minutes);


    let seconds = prompt("Necha sekund davom etsin?");
    seconds = parseInt(seconds);


    let totalTimeInSeconds = (hours * 3600) + (minutes * 60) + seconds;


    if (totalTimeInSeconds > 0) {
        let remainingTime = totalTimeInSeconds;


        let interval = setInterval(function() {
            let displayMinutes = Math.floor(remainingTime / 60);
            let displaySeconds = remainingTime % 60;


            timerDisplay.textContent = `${displayMinutes}:${displaySeconds < 10 ? '0' : ''}${displaySeconds}`;
            
            remainingTime--;


            if (remainingTime < 0) {
                clearInterval(interval);
                timerDisplay.textContent = "Vaqt tugadi!";
                alarmSound.play();
            }
        }, 1000);
    } else {
        alert("Iltimos, Bironta vaqt kirg'izing");
    }
}


startButton.addEventListener('click', startTimer);
