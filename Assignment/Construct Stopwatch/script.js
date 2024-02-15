function StopWatch()
{
  let startTime = 0;
    let endTime = 0;
    let running = false;

    this.start = function() {
        if (running) {
            return "Stopwatch is already running";
        }
        startTime = Date.now();
        running = true;
    };

    this.stop = function() {
        if (!running) {
            return "Stopwatch is not started";
        }
        endTime = Date.now();
        running = false;
    };

    this.reset = function() {
        startTime = 0;
        endTime = 0;
        running = false;
    };

    Object.defineProperty(this, 'duration', {
        get: function() {
            return running ? Date.now() - startTime : endTime - startTime;
        }
    });
}