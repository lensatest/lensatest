/*global require, describe, it, expect, console */

'use strict';

var Event = require('../solution').Event;

describe('Event tests', function() {

    it('should log Hello world', function() {

        var e = new Event();
        var mostRecentCall = '';

        e.on('myevent', function (a, b) {
            console.log(a + ' ' + b);
            mostRecentCall = a + ' ' + b;
        });
        e.trigger('myevent', ['Hello', 'world']);

        expect(mostRecentCall).toBe('Hello world');

    });

    it('should log Hello world', function() {

        var e = new Event();
        var mostRecentCalls = [];

        e.on('hello', function () {
            console.log('Hello');
            mostRecentCalls.push('Hello');
            this.trigger('world');
          }).
          on('world', function () {
            console.log('World');
            mostRecentCalls.push('World');
          }).
          trigger('hello');

        expect(mostRecentCalls[0]).toBe('Hello');
        expect(mostRecentCalls[1]).toBe('World');

    });

});