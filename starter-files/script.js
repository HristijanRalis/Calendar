// CALENDAR

const dayNumberCurrent = document.getElementById("day-number");
const dayNameCurrent = document.getElementById("day-name");
const monthNameCurrent = document.getElementById("month-name");
const yearCurrent = document.getElementById("year");

const today = new Date();
const dayNum = today.getDate();
const day = today.toLocaleDateString("un-US", { weekday: "long" });
const monthName = today.toLocaleDateString("en-US", { month: "long" });
const year = today.getFullYear();
// function getDayName(today, locale) {
//   let dateDay = new Date(today);
//   return dateDay.toLocaleDateString(locale, { weekday: "long" });
// }

dayNumberCurrent.textContent = dayNum;
dayNameCurrent.textContent = day;
monthNameCurrent.textContent = monthName;
yearCurrent.textContent = year;
