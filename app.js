document.addEventListener('DOMContentLoaded', () => {
    const lights = document.querySelectorAll('.light');
    const timerElement = document.getElementById('timer');
    let currentIndex = 0;
    const cycle = [
        { color: 'red', duration: 5000 },
        { color: 'yellow', duration: 2000 },
        { color: 'green', duration: 5000 }
    ];

    function updateLights() {
        lights.forEach(light => light.classList.remove('active'));
        const { color } = cycle[currentIndex];
        document.querySelector(`.${color}`).classList.add('active');
    }

    function startTimer(duration) {
        let remainingTime = duration / 1000;
        timerElement.textContent = remainingTime;
        const interval = setInterval(() => {
            remainingTime -= 1;
            timerElement.textContent = remainingTime;
            if (remainingTime <= 0) {
                clearInterval(interval);
            }
        }, 1000);
    }

    function changeLight() {
        updateLights();
        const { color, duration } = cycle[currentIndex];
        startTimer(duration);
        currentIndex = (currentIndex + 1) % cycle.length;
        setTimeout(changeLight, duration);
    }

    updateLights();
    startTimer(cycle[currentIndex].duration);
    setTimeout(changeLight, cycle[currentIndex].duration);
});
