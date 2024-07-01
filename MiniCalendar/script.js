const monthNameEl = document.getElementById("month-name");
const dayNameEL = document.getElementById("day-name");
const dayNumEl = document.getElementById("day-number");
const yearEl = document.getElementById("year");

const date = new Date();

monthNameEl.innerHTML = date.toLocaleString("cs",{
    month:"long"
});


dayNameEL.innerHTML = date.toLocaleString("cs", {
    weekday: "long"
});

dayNumEl.innerHTML = date.getDate();

yearEl.innerHTML = date.getFullYear();




