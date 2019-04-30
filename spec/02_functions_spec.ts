describe('functions', () => {
    describe('params', () => {
        it('can do optonal parameters', () => {
            type Char = string;
            function formatName(first: string, last: string, mi?: Char) {
                let fullName = `${last}, ${first}`;
                if (mi != undefined) {
                    fullName += ` ${mi}.`;
                }
                return fullName;
            }

            expect(formatName('Han', 'Solo')).toBe('Solo, Han');

            expect(formatName('Han', 'Solo', 'D')).toBe('Solo, Han D.');

        });

        it('default values', () => {
            function add(a: number = 10, b: number = 5) {
                return a + b;
            }

            expect(add(2, 2)).toBe(4);
            expect(add(9)).toBe(14);
            expect(add(undefined, 10)).toBe(20);
        });

        it('arbitrary number of arguments', () => {

            function add(a: number, b: number, ...rest: number[]) {
                const firstTwo = a + b;
                return rest.reduce((s, n) => s + n, firstTwo);
            }

            expect(add(2, 2)).toBe(4);
            expect(add(1, 2, 3, 4, 5, 6, 7, 8, 9)).toBe(45);
        });

        it('has an array spread operator', () => {
            const numbers = [2, 3, 4, 5];
            let newNumbers = [1, ...numbers, 6];
            expect(newNumbers).toEqual([1, 2, 3, 4, 5, 6]);

            const point = { x: 12, y: 13 };
            expect(point).toEqual({ x: 12, y: 13 });
        });
    });
});