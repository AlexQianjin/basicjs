/**
 * Throttle limits a function to at most one execution per `delay` milliseconds.
 *
 * Calls made during the waiting period are grouped together. When the period
 * ends, the callback runs once more with the latest arguments. This is useful
 * for frequently fired events such as scrolling, resizing, and mouse movement.
 *
 * @param {Function} callback Function whose execution should be limited.
 * @param {number} delay Minimum time between executions, in milliseconds.
 * @returns {Function} A throttled version of callback.
 */
function throttle(callback, delay) {
  let lastExecutionTime = 0;
  let timerId;

  function throttled(...args) {
    const now = Date.now();
    const remainingTime = delay - (now - lastExecutionTime);

    if (remainingTime <= 0) {
      clearTimeout(timerId);
      timerId = undefined;
      lastExecutionTime = now;
      callback.apply(this, args);
      return;
    }

    // Keep only the latest call made during the waiting period.
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      lastExecutionTime = Date.now();
      timerId = undefined;
      callback.apply(this, args);
    }, remainingTime);
  }

  // Allow a pending trailing call to be discarded.
  throttled.cancel = function cancel() {
    clearTimeout(timerId);
    timerId = undefined;
    lastExecutionTime = 0;
  };

  return throttled;
}

// Demo: events happen every 100 ms, but the handler runs at most every 300 ms.
if (require.main === module) {
  const handleScroll = throttle((position) => {
    console.log(`Handled scroll position: ${position}`);
  }, 300);

  let position = 0;

  const eventTimer = setInterval(() => {
    position += 100;
    console.log(`Scroll event at: ${position}`);
    handleScroll(position);

    if (position === 1000) {
      clearInterval(eventTimer);
    }
  }, 100);
}

module.exports = throttle;
