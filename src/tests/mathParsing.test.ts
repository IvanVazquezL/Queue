import { MathParser } from "./mathParsing";

describe('mathParsing.ts', () => {
    test('Should solve correctly all expressions', () => {
        const mathParser = new MathParser("1 * 2 + 3 * 5 * 6 + 7 + 9 - 8");
        expect(mathParser.evaluateExpression()).toBe(100);

        mathParser.setExpression("4 * 3 + 6 * 2 + 8 + 5 - 7");
        expect(mathParser.evaluateExpression()).toBe(30);

        mathParser.setExpression("9 * 2 * 4");
        expect(mathParser.evaluateExpression()).toBe(72);

        mathParser.setExpression("7 * 5");
        expect(mathParser.evaluateExpression()).toBe(35);

        mathParser.setExpression("3 * 6 + 4 * 8 * 2 + 7 + 11 - 5 * 5");
        expect(mathParser.evaluateExpression()).toBe(75);

        mathParser.setExpression("8 * 7 + 5 * 6 * 4 + 9 + 3");
        expect(mathParser.evaluateExpression()).toBe(188);
    });
});