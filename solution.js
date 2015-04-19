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

function zigZag (array) {
    // 3: Egész számok sorozatát akkor nevezzük cikkcakk sorozatnak, ha minden elemére igaz az hogy szigorúan kisebb vagy nagyobb a szomszédos elemeinél.
    // Például a 4 2 3 1 5 3 számsorozat cikkcakk de a 7 3 5 5 2 és 3 8 6 4 5 sorozatok nem.
    // Írd meg azt a függvényt, amely egy egész számokból álló tömbből visszaadja a legnagyobb egybefüggő cikkcakk sorozat hosszát!
    // Írj hozzá teszteket! ("jasmine" paranccsal futtathatóak a tesztek amik a "spec" mappában vannak)

    // Original source:
    // A sequence of integers is called zigzag sequence if each of its elements is either strictly less or strictly greater than its neighbors.
    // For example, the sequence 4 2 3 1 5 3 forms a zigzag, but 7 3 5 5 2 and 3 8 6 4 5 don't.
    // For a given array of integers return the length of its largest (contiguous) subarray that forms a zigzag sequence.
}

exports.minFromArr = minFromArr;
exports.Event      = Event;
