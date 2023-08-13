import JSConfetti from 'js-confetti';

function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === "complete" || document.readyState === "interactive") {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

// When DOM is loaded and ready
docReady(() => {

  const navbarBrand = document.querySelector('.navbar-brand');

  const jsConfetti = new JSConfetti();

  // Shoots confettis on an interval
  const confettiBurst = () => {
    let counter = 0;
    let maxLoops = 3 // Amount of confettis shots
    let delay = 700 // Delay between confettis shots

    let interval = setInterval(() => {
      counter++

      jsConfetti.addConfetti();

      if (counter >= maxLoops) {
        clearInterval(interval);
      }

    }, delay);
  }

  /* FOR DESKTOPS */
  // Shoots confettis when clicking 5 times in a row on the navbar-brand
  navbarBrand.addEventListener('click', (event) => {
    if (event.detail === 5) {

      confettiBurst();

    }
  });

  /* FOR TOUCHSCREENS */
  const requiredTaps = 5; // Number of consecutive taps required
  const maxTapDelay = 500; // Maximum time between taps in milliseconds
  let tapCount = 0;
  let lastTapTime = 0;

  // Shoots confettis when tapping 5 times in a row on the navbar-brand
  navbarBrand.addEventListener("touchstart", () => {
    const currentTime = new Date().getTime();

    // If we tapped on the navbar-brand again under the provided delay
    if (currentTime - lastTapTime < maxTapDelay) {

      tapCount++; // Increases tap count

      // If the tap count reaches the required number of taps
      if (tapCount === requiredTaps) {

        // Shoots the confettis and resets the tap count
        confettiBurst();
        tapCount = 0;

      }

    } else {
      tapCount = 1;
    }

    lastTapTime = currentTime;
  });

});