const button = document.getElementById('danceButton');

button.addEventListener('click', () => {
    button.style.animation = 'danceAnimation 1s ease-in-out infinite';
});

// To stop the animation after a certain duration (e.g., 5 seconds), you can use setTimeout
setTimeout(() => {
    button.style.animation = '';
}, 5000);
