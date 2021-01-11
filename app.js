let inputHours = document.querySelector("#hours");
inputHours.addEventListener('input', () => {
    AudioCalculator();
});

let inputMinutes = document.querySelector("#minutes");
inputMinutes.addEventListener('input', () => {
    AudioCalculator();
});

let inputSpeed = document.querySelector("#playSpeed");
inputSpeed.addEventListener('input', () => {
    AudioCalculator();
});

const AudioCalculator = () => {
    let hours = Number(document.querySelector("#hours").value);
    let minutes = Number(document.querySelector("#minutes").value);
    let playSpeed = Number(document.querySelector("#playSpeed").value);

    if (isNaN(hours) || isNaN(minutes) || isNaN(playSpeed)) {
        return;
    }

    let totalMin = (hours * 60) + minutes;
    
    let newSpeedMin = totalMin / playSpeed;
    let newHour = 0;

    while (newSpeedMin >= 60) {
        newSpeedMin = newSpeedMin - 60;
        newHour = newHour + 1;                
    }

    document.querySelector("#resHours").innerHTML = newHour + "h";
    document.querySelector("#resMintutes").innerHTML = Math.round(newSpeedMin) + "min";  
};