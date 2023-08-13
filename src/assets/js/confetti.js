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
    let delay = 200 // Delay between confettis shots

    let interval = setInterval(() => {
      counter++

      jsConfetti.addConfetti({
        confettiRadius: 5,
        confettiColors: [
          '#8d32fc', '#29cdff', '#6dff33', '#ff335c', '#fcff33', '#ff9233', '#ff33f5'
        ],
        confettiNumber: 200,
      });

      if (counter >= maxLoops) {
        clearInterval(interval);
      }

    }, delay);
  }


  /* FOR DESKTOPS */
  const requiredClicks = 5; // Number of consecutive clicks required
  const maxClickDelay = 500; // Maximum time between clicks in milliseconds
  let clickCount = 0;
  let lastClickTime = 0;

  // Shoots confettis when clicking 5 times in a row on the navbar-brand
  navbarBrand.addEventListener('click', () => {
    const currentTime = new Date().getTime();

    // If we clicked on the navbar-brand again under the provided delay
    if (currentTime - lastClickTime < maxClickDelay) {

      clickCount++; // Increases click count

      // If the click count reaches the required number of clicks
      if (clickCount === requiredClicks) {

        // Shoots the confettis and resets the click count
        confettiBurst();
        clickCount = 0;

      }

    } else {
      clickCount = 1;
    }

    lastClickTime = currentTime;
  });


  /* FOR TOUCHSCREENS */
  const requiredTaps = requiredClicks; // Number of consecutive taps required
  const maxTapDelay = maxClickDelay; // Maximum time between taps in milliseconds
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