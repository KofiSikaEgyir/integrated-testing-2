const { sum, subtract, multiply,divide } = require("./math")

beforeAll(() => {
    console.log("Before All Test");
});

describe('Function', () => {
    beforeEach(() => {
        console.log("Before Each");
    });

    it("should sum two number", () => {
        expect(sum(2, 3)).toBe(5);
    });
    it("should divide two number", () => {
        expect(divide(20, 2)).toBe(10);
    });
    it("should subtract two number", () => {
        expect(subtract(5, 3)).toBe(2);
    });
    it("should multiply two number", () => {
        expect(multiply(3, 3)).toBe(9);
    });
    afterEach(() => {
        console.log("Before Each");
    });
});

afterAll(() => {
    console.log("Run After All Test")
})