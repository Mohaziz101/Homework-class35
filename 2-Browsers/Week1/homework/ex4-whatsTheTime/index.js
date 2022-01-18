'use strict';
/*------------------------------------------------------------------------------
Full description at: https://github.com/HackYourFuture/Homework/tree/main/2-Browsers/Week1#exercise-4-whats-the-time

1. Inside the `index.js`, complete the `addCurrentTime` to add the current time 
  to the webpage. Make sure it's written in the HH:MM:SS notation (hour, minute,
  second). Use `setInterval()` to make sure the time stays current.
2. Have the function execute when it's loading in the browser.
------------------------------------------------------------------------------*/
function addCurrentTime() {
  const display = new Date().toLocaleTimeString();
  document.body.textContent = display;
  document.body.setAttribute(
    'style',
    'font-size: 60px; background:#add8e6; display: flex; flex-wrap:  wrap; padding: 30px; margin: 40vh auto; justify-content: center;  width: calc(100% - 40px); '
  );
}

window.addEventListener('load', () => {
  setInterval(addCurrentTime, 0);
});