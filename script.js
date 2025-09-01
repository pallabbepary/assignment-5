// calendar-card

const dayElement = document.querySelector(".day");
const dateElement = document.querySelector(".date");

// Date formatting options
const optionsDay = { weekday: "short" };
const optionsDate = { month: "short", day: "2-digit", year: "numeric" };

// Get today's date
const today = new Date();

// Insert values into DOM
dayElement.textContent = today.toLocaleDateString("en-US", optionsDay) + " ,";
dateElement.textContent = today.toLocaleDateString("en-US", optionsDate);