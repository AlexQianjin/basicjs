/**
 * Debounce delays a function until calls have stopped for `delay` milliseconds.
 *
 * Each new call clears the previous timer and starts a new one. This is useful
 * for events that can fire very quickly, such as search input, window resizing,
 * and scrolling.
 *
 * @param {Function} callback Function to run after calls have stopped.
 * @param {number} delay Quiet period in milliseconds.
 * @returns {Function} A debounced version of callback.
 */
function debounce(callback, delay) {
  let timerId;

  function debounced(...args) {
    // Restart the quiet period every time the function is called.
    clearTimeout(timerId);

    // An arrow function keeps `this` from the debounced function call.
    timerId = setTimeout(() => {
      callback.apply(this, args);
    }, delay);
  }

  // Allow a pending call to be discarded when it is no longer needed.
  debounced.cancel = function cancel() {
    clearTimeout(timerId);
    timerId = undefined;
  };

  return debounced;
}

// Demo: although the user "types" four times, only the final search runs.
if (require.main === module) {
  const search = debounce((query) => {
    console.log(`Searching for: ${query}`);
  }, 300);

  console.log('Typing: j');
  search('j');

  setTimeout(() => {
    console.log('Typing: ja');
    search('ja');
  }, 100);

  setTimeout(() => {
    console.log('Typing: jav');
    search('jav');
  }, 200);

  setTimeout(() => {
    console.log('Typing: javascript');
    search('javascript');
  }, 300);

  // After 300 ms with no more calls:
  // Searching for: javascript
}

module.exports = debounce;
