const dayNameMap = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getDayName(dateString) {
  const day = new Date(dateString).getDay();

  return dayNameMap[day] || "Invalid";
}

console.log(getDayName("02/04/2023"));
