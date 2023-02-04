// The days of the week are: "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"

function getDayName(dateString) {
  return new Date(dateString).toLocaleString("en-US", { weekday: "long" });
}

console.log(getDayName("02/04/2023"));
