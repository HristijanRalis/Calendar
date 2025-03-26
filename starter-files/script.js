// CALENDAR

const dayNumberCurrent = document.getElementById("day-number");
const dayNameCurrent = document.getElementById("day-name");
const monthNameCurrent = document.getElementById("month-name");
const yearCurrent = document.getElementById("year");

const today = new Date();
// const dayNum = today.getDate();
// const day = today.toLocaleDateString("un-US", { weekday: "long" });
// const monthName = today.toLocaleDateString("en-US", { month: "long" });
// const year = today.getFullYear();
const dateOptions = {
  dayNum: today.getDate(),
  day: today.toLocaleDateString("en-US", { weekday: "long" }),
  monthName: today.toLocaleDateString("en-US", { month: "long" }),
  year: today.getFullYear(),
};

dayNumberCurrent.textContent = dateOptions.dayNum;
dayNameCurrent.textContent = dateOptions.day;
monthNameCurrent.textContent = dateOptions.monthName;
yearCurrent.textContent = dateOptions.year;
