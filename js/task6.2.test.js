const fac = require('./task6.2');

describe('tests for factorial function', () => {
    it('incorrect value', () => {
            expect(fac("abc")).toBe(undefined);
        }),
        it('value > 0', () => {
            expect(fac(5)).toBe(120);
        }),
        it('value = 0', () => {
            expect(fac(0)).toBe(1);
        }),
        it('value < 0', () => {
            expect(fac(-5)).toBe(-120);
        }),
        it('value n.123..', () => {
            expect(fac(5.3)).toBe(undefined);
        })
})