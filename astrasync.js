

function sleep(ms) {
    var start = Date.now(),
        now = start;
    while (now - start < ms) {
      now = Date.now();
    }
  }

// SECTION Exported things
var promiseStatus = {
    value: null,
    resolved: false
}

// NOTE Checking for (timeout) seconds the promise status 
function waitForAsync(timeout) {
    var timer = 0
    while(!promiseStatus.resolved) {
        // Sleeping half second before checking again
        sleep(100)
        // Increasing timeout timer
        timer += 1
        // In case of timeout, return false and register unsolved on 99
        if (timer >= (timeout*10)) { // Multiply by 10 because of the 100ms sleep
            promiseStatus.value = null
            promiseStatus.resolved = false
            return false
        }
    }
    // If promise status is resolved, return the value 
    let value = promiseStatus.value
    promiseStatus.value = null
    promiseStatus.resolved = false
    return value

}
// !SECTION Exported things

// Exporting the functions
export { waitForAsync, promiseStatus }