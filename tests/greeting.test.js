const greeting = require("../script")

describe("greeting", () => {
    test("Should be a function", () =>  {
        expect(typeof greeting).toBe("function")
    });

    test("Should return 'Hello World!'", ()=> {
        expect(greeting()).toBe("Hello World!")
    })
})