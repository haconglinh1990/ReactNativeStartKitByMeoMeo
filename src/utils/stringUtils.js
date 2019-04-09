
/**
 * Checks email format.
 * See the regex for the format
 * @see https://regexr.com/
 * 
 * @param {string} email 
 */
export function isValidEmail(email) {
  const emailExp = /^[0-9a-zA-Z]([-_+\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,}$/i;

  return email.match(emailExp);
}

/**
 * Removes any non-numeric character and any zero coming after double zero
 * @see https://regexr.com/
 * 
 * @param {string|number} number 
 */
export function formatPhoneNumber(number) {
  return number
    .replace(/[^\d]/g, '')
    .replace(/^(?!00[^0])0/, '');
}

/**
 * Formats the given amount of time to mm:ss (minute:seconds)
 * 
 * @param {number} millisec 
 */
export function formatTimeTommss(millisec) {
  const mins = Math.floor(millisec / (60 * 1000));
  const secs = (millisec % (60 * 1000)) / 1000;

  // mm:ss
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
}

/**
 * Up and down counter
 * 
 * @param {number} period Count interval in millisecond
 * @param {number} dx Tick interval in millisecond
 * @param {Function} onUpdate Callback function which is called at every update tick
 * @param {Function} onEnd Callback function which is called when the counter stops
 */
export function counter(period, dx, onUpdate, onEnd) {
  return {
    period: 0,
    dx,
    handle: null,
    up: () => { // Starts the counter and counts up from the start to end
      this.period = 0;
      this.handle = setInterval(() => {
        this.period += dx;

        if (onUpdate !== undefined && onUpdate instanceof Function) {
          onUpdate(this.period);
        }

        if (this.period >= period) {
          if (onEnd !== undefined && onEnd instanceof Function) {
            onEnd();
          }
          clearInterval(this.handle);
        }
      }, dx);
    },
    down: () => { // Starts the counter and counts down from start to end
      this.period = period;

      this.handle = setInterval(() => {
        this.period -= dx;

        if (onUpdate !== undefined && onUpdate instanceof Function) {
          onUpdate(this.period);
        }
    
        if (this.period <= 0) {
          if (onEnd !== undefined && onEnd instanceof Function) {
            onEnd();
          }
          clearInterval(this.handle);
        }
      }, dx);
    },
    cancel: () => {
      clearInterval(this.handle);
    }
  };
}