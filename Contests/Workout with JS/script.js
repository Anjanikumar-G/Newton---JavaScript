const outputDiv = document.getElementById("output");

let personalTrainer = {
  name: "John",
  workouts: ["Pushups", "Situps", "Squats"],
  startWorkout: function (workout) {
    if (this.workouts.includes(workout)) {
      outputDiv.textContent = `${this.name} is starting ${workout}.`;
    } else {
      outputDiv.textContent = `${this.name} doesn't know the ${workout} workout.`;
    }
  },
};

document.getElementById("btn-start").addEventListener("click", () => {
  let workout = document.getElementById("input-workout").value;
  personalTrainer.startWorkout(workout);
});
