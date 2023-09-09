document.addEventListener("DOMContentLoaded", function() {
    // Set the current day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    function updateTime() {
        const currentDate = new Date();
        const currentUTC = new Date(currentDate.toUTCString()); // Convert to UTC time
        
        const currentDayOfWeek = daysOfWeek[currentDate.getUTCDay()];
        document.getElementById("dayOfWeek").textContent = currentDayOfWeek;

        const currentHours = currentDate.getUTCHours();
        const currentMinutes = currentDate.getUTCMinutes();
        const currentSeconds = currentDate.getUTCSeconds();

        document.getElementById("utcTime").textContent = `UTC Time (ms): ${currentUTC.getTime()}`;
    }

    // Initial call to updateTime
    updateTime();

    // Update the time every second
    setInterval(updateTime, 1000);
});
