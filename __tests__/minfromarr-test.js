/* global jest, describe, it, expect, require */

'use strict';

jest.dontMock('../solution');

describe('minFromArr', function() {

    var solution = require('../solution');

    it('should return 5 from [5,6,7]', function() {
        expect(solution.minFromArr([5,6,7])).toBe(5);
    });

    it('should return 5 from [7,6,5]', function() {
        expect(solution.minFromArr([7,6,5])).toBe(5);
    });

    it('should return 5 from [6,5,7]', function() {
        expect(solution.minFromArr([6,5,7])).toBe(5);
    });

    it('should return -3 from [-3]', function() {
        expect(solution.minFromArr([-3])).toBe(-3);
    });

    it('should return -3 from [3, 3,-3, 3,-3, 3,-3, 3,-3, 3,-3, 3]', function() {
        expect(solution.minFromArr([3, 3,-3, 3,-3, 3,-3, 3,-3, 3,-3, 3])).toBe(-3);
    });

    it('should return 99999 from [99999,99999,99999]', function() {
        expect(solution.minFromArr([99999,99999,99999])).toBe(99999);
    });

});