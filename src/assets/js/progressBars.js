// Function to load a progress bar
import skillsShortnames from '@/assets/js/skills-shortnames.js';

function loadProgressBar(skillId) {

  // Selects the progress bar wanted
  var progressBar = document.querySelector(skillId + ' .progress-bar');
  // Sets the width of the progress bar to 0% to cancel the width given by the CSS
  progressBar.style.width = 0 + '%';
  // Width at which the bar begins to load
  var width = 0;
  // Calls the frame function every 15ms until it's cleared
  var id = setInterval(frame, 15);
  // Gets the percentage from the HTML element
  var percentage = progressBar.innerHTML.replace('%', '');

  function frame() {
    // If the progress bar has finished loading, we clear the interval
    if (width >= percentage) {
      clearInterval(id);
    } else {
      // If not, we keep loading it
      width++
      progressBar.style.width = width + '%';
      progressBar.innerHTML = width + '%';
    }
  }

}

function docReady(fn) {
  // see if DOM is already available
  if (document.readyState === "complete" || document.readyState === "interactive") {
    // call on next available tick
    setTimeout(fn, 1);
  } else {
    document.addEventListener("DOMContentLoaded", fn);
  }
}

docReady(function () {
  // DOM is loaded and ready for manipulation here

  // -- Intersection observer for the progress bars -- //
  let options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
  }

  // Callback function called when a progress bar intersects the viewport
  let callback = (entries, observer) => {

    // For each progress bar
    entries.forEach(entry => {

      if (entry.isIntersecting === true) {

        // Gets the skill id from the progress bar
        let skillId = entry.target.closest("li").id;

        // Loads the progress bar
        loadProgressBar('#' + skillId);

        // Unobserve that progress bar so the animation doesn't repeat
        observer.unobserve(document.querySelector('#' + skillId + '> .progress'));

      }

    });
  };

  // Creates the intersection observer with the callback function and the options
  let observer = new IntersectionObserver(callback, options);

  // For each skill
  Object.values(skillsShortnames).forEach(shortname => {

    // Sets the skill's progress bar as a target of the observer
    observer.observe(document.querySelector(`#skill-${shortname} > .progress`));

  });

});
