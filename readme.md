## Detect if event loop is busy.

## Example

    var busyLoop = require('busy-loop'),

    busyLoop(function(amount) {
        console.log('Loop was busy for', amount, 'ms');
    });

## Api `busy([options], callback)`

Optional options:

    - `max` max time in ms alowed to be busy, default is 50ms
    - `interval` how often to check the state in ms, default is 1000ms

Optional callback is called every time the event loop was busy for longer amount of time than defined in `max`. Passed value is amount of ms the loop was blocked for.
