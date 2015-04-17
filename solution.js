/* global exports */

'use strict';

function minFromArr (array) {
    //1: Írj függvényt ami egy tömbből visszaadja a legkissebb számot.

}

function Event () {
    //2/a: Implementálj egy olyan Event osztályt, ami az alábbi kódra:

    // var e = new Event();
    // e.on('myevent', function (a, b) {
    //     console.log(a + ' ' + b);
    // });
    // e.trigger('myevent', ['Hello', 'world']);

    // Az alábbi eredményt fogja kiírni: Hello world

    //2/b Az előző implementáció feleljen meg az alábbi kódnak is:

    // e.on('hello', function () {
    //     console.log('Hello');
    //     this.trigger('world');
    //   }).
    //   on('world', function () {
    //     console.log('World');
    //   }).
    //   trigger('hello');

    // Az alábbi eredményt fogja kiírni:
    //Hello
    //World

}

exports.minFromArr = minFromArr;
exports.Event      = Event;
