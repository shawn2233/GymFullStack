const check = document.getElementsByClassName("fa-solid fa-square-check");
const deleteBtn = document.getElementsByClassName("fa-solid fa-delete-left");


Array.from(check).forEach(function(element) {
      element.addEventListener('click', function(){
        const wk = this.parentNode.parentNode.childNodes[1].innerText
        const set = this.parentNode.parentNode.childNodes[3].innerText
        const rep = this.parentNode.parentNode.childNodes[5].innerText
        const check = this.parentNode.parentNode.childNodes[7].innerText
        fetch('completed', {
          method: 'put',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            'wk': wk,
            "set" : set,
            "rep": rep,
            'check':check
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});


Array.from(deleteBtn).forEach(function(element) {
      element.addEventListener('click', function(){
        const wk = this.parentNode.parentNode.childNodes[1].innerText
        const set = this.parentNode.parentNode.childNodes[3].innerText
        const rep = this.parentNode.parentNode.childNodes[5].innerText
        const name = document.getElementById("name").innerText
        fetch('workout', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            "name":name,
            'wk': wk,
            "set":set,
            "rep":rep
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});


            //person trainer

document.querySelector('.inputBtn').addEventListener('click', coachMe)

function coachMe(){

const random1 = Math.floor((Math.random()*5))
const random2 = Math.floor((Math.random()*5))
const random3 = Math.floor((Math.random()*5))
const random4 = Math.floor((Math.random()*5))
const random5 = Math.floor((Math.random()*5))
const random6 = Math.floor((Math.random()*5))
const random7 = Math.floor((Math.random()*5))
const random8 = Math.floor((Math.random()*5))


const Chest = ["Chest- Decline Bench Press","Chest- Close-Grip Bench Press","Chest- Dumbbell Chest Fly","Chest- Incline Dumbbell Press","Chest- 100 Push-Ups"]
const Shoulder = ["Shoulders- Dumbbell Front Raises","Shoulders- Machine Shoulder Press","Shoulders- Seated Dumbbell Shoulder Press","Shoulders- Cable Lateral Raises","Shoulders- Barbell Upright Rows"]
const Arms = ["Arms- Barbell Curls","Arms- Hammer Curls","Arms- Bench Dips","Arms- Tricep Pushdowns With Rope","Arms- Dumbbell Curls"]
const Legs = ["Legs- Box Squats","Legs- Body Weight Lunges","Legs- Leg Press","Legs- Dumbbell Lunges","Legs- Dumbbell Squats"]
const Back = ["Back- Back Extensions","Back- Barbell Rows","Back- Deadlifts","Back- 10 Pull-Ups","Back- One-Handed Lat Pulldown"]
const Glute = ["Glute- Fire Hydrants","Glute- Hip Thrust","Glute- Glute Bridges","Glute- Banded Side Kicks","Glute- Machine Glute Kickbacks"]
const Abs = ["Abs- 50 Machine Crunches","Abs- 2min Plank","Abs- 50 Lying Leg Raises","Abs- 50 Sit-Ups","Abs- 20 Mountain Climbers"]
const Cardio = ["Stairmaster for 30mins","Run for 30mins","Run for 40mins","Walk for 60mins","Jog for 50mins"]

document.querySelector("#results").innerText = Chest[random1]
document.querySelector("#results2").innerText = Shoulder[random2]
document.querySelector("#results3").innerText = Arms[random3]
document.querySelector("#results4").innerText = Legs[random4]
document.querySelector("#results5").innerText = Back[random5]
document.querySelector("#results6").innerText = Glute[random6]
document.querySelector("#results7").innerText = Abs[random7]
document.querySelector("#results8").innerText = Cardio[random8]


console.log(Chest[random1])
console.log(Shoulder[random2])
console.log(Arms[random3])
console.log(Legs[random4])
console.log(Back[random5])
console.log(Glute[random6])
console.log(Abs[random7])
console.log(Cardio[random8])

}

        //Timer

  // Initialize variables
  let startTime, endTime, elapsed, timerInterval;
  let display = document.getElementById("display");
  let startButton = document.getElementById("startButton");
  let stopButton = document.getElementById("stopButton");
  let resetButton = document.getElementById("resetButton");

  // Start the stopwatch
  startButton.addEventListener("click", function() {
    startTime = new Date();
    timerInterval = setInterval(updateTime, 10);
  });

  // Stop the stopwatch
  stopButton.addEventListener("click", function() {
    clearInterval(timerInterval);
    endTime = new Date();
    elapsed = (endTime.getTime() - startTime.getTime()) / 1000;
    display.textContent = formatTime(elapsed);
  });

  // Reset the stopwatch
  resetButton.addEventListener("click", function() {
    clearInterval(timerInterval);
    display.textContent = "00:00:00";
  });

  // Update the stopwatch display
  function updateTime() {
    elapsed = (new Date().getTime() - startTime.getTime()) / 1000;
    display.textContent = formatTime(elapsed);
  }

  // Format the elapsed time as "HH:MM:SS"
  function formatTime(timeInSeconds) {
    let hours = Math.floor(timeInSeconds / 3600);
    let minutes = Math.floor((timeInSeconds - (hours * 3600)) / 60);
    let seconds = Math.floor(timeInSeconds - (hours * 3600) - (minutes * 60));
    let hoursString = (hours < 10 ? "0" : "") + hours.toString();
    let minutesString = (minutes < 10 ? "0" : "") + minutes.toString();
    let secondsString = (seconds < 10 ? "0" : "") + seconds.toString();
    return hoursString + ":" + minutesString + ":" + secondsString;
  }

