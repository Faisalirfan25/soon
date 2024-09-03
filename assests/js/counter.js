function getTimeRemaining(endtime) {
    const total = Date.parse(endtime) - Date.parse(new Date());
    const minutes = Math.floor((total / 1000 / 60) % 60);
    const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
    const days = Math.floor(total / (1000 * 60 * 60 * 24));

    return {
        total,
        days,
        hours,
        minutes
    };
}

function initializeClock(endtime) {
    const daysTens = document.getElementById('days-tens');
    const daysOnes = document.getElementById('days-ones');
    const hoursTens = document.getElementById('hours-tens');
    const hoursOnes = document.getElementById('hours-ones');
    const minutesTens = document.getElementById('minutes-tens');
    const minutesOnes = document.getElementById('minutes-ones');

    function updateClock() {
        const t = getTimeRemaining(endtime);

        daysTens.innerHTML = Math.floor(t.days / 10);
        daysOnes.innerHTML = t.days % 10;
        hoursTens.innerHTML = Math.floor(t.hours / 10);
        hoursOnes.innerHTML = t.hours % 10;
        minutesTens.innerHTML = Math.floor(t.minutes / 10);
        minutesOnes.innerHTML = t.minutes % 10;

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    const timeinterval = setInterval(updateClock, 1000);
}

// Get the stored end time or set a new one
let deadline = localStorage.getItem('countdownEndtime');
if (!deadline) {
    // Set the countdown to start from 20 days, 22 hours, 56 minutes from now
    deadline = new Date(Date.parse(new Date()) + 20 * 24 * 60 * 60 * 1000 + 22 * 60 * 60 * 1000 + 56 * 60 * 1000);
    localStorage.setItem('countdownEndtime', deadline);
}

initializeClock(deadline);