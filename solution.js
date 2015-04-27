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
}

exports.minFromArr = minFromArr;
exports.Event      = Event;
