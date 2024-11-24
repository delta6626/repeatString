const repeatString = require('../repeatString.js');

describe('repeatString', () => {
    test('should repeat the string the specified number of times', () => {
        expect(repeatString('abc', 3)).toBe('abcabcabc');
    });

    test('should repeat the string with the correct delimiter', () => {
        expect(repeatString('abc', 3, '-')).toBe('abc-abc-abc');
    });

    test('should add padding before the repeated string', () => {
        expect(repeatString('abc', 3, '-', '>>>')).toBe('>>>abc-abc-abc');
    });

    test('should return an empty string when count is 0', () => {
        expect(repeatString('abc', 0)).toBe('');
    });

    test('should return an empty string when count is negative', () => {
        expect(repeatString('abc', -3)).toBe('');
    });

    test('should handle non-string delimiters by converting them to strings', () => {
        expect(repeatString('abc', 3, 123)).toBe('abc123abc123abc');
    });

    test('should handle non-string padding by converting it to a string', () => {
        expect(repeatString('abc', 3, '-', 123)).toBe('123abc-abc-abc');
    });

    test('should handle edge case with count as 1 (no delimiter)', () => {
        expect(repeatString('abc', 1)).toBe('abc');
    });

    test('should handle edge case with count as 1 (with delimiter)', () => {
        expect(repeatString('abc', 1, '-')).toBe('abc');
    });

    test('should handle edge case with empty string and non-zero count', () => {
        expect(repeatString('', 3, '-')).toBe('');
    });

    test('should handle large numbers correctly', () => {
        const result = repeatString('x', 1000, ',');
        expect(result).toBe('x,'.repeat(999) + 'x'); // Ensure the output has 1000 x's with 999 commas
    });

    test('should return empty string when non-string input is provided as the string', () => {
        expect(repeatString(123, 3)).toBe('');
        expect(repeatString(null, 3)).toBe('');
    });

    test('should return empty string when non-numeric input is provided as count', () => {
        expect(repeatString('abc', 'three')).toBe('');
        expect(repeatString('abc', null)).toBe('');
        expect(repeatString('abc', {})).toBe('');
    });

    test('should return the string with padding before and after', () => {
        expect(repeatString('abc', 3, '-', '>>>')).toBe('>>>abc-abc-abc');
    });

    test('should handle delimiters with special characters', () => {
        expect(repeatString('abc', 3, '***')).toBe('abc***abc***abc');
    });
});