/* global jest, describe, it, expect, require, console */

'use strict';

jest.dontMock('../solution');

describe('Event tests', function() {

    var Event = require('../solution').Event;

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