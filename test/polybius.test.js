const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("Polybius() tests written by the student", () =>{

    describe("Encoding:", () =>{
        it("Should translate i and j to 42", () =>{
            const expected = "42";
            const input = "i";
            const actual = polybius(input, true);

            expect(actual).to.include(expected);
        })
        it("Should ignore capital letters", () =>{
            const expected = "11";
            const input = "A";
            const actual = polybius(input, true);

            expect(actual).to.be.equal(expected);
        })
        it("Should maintain spaces throughout", () =>{
            const expected = "11 11 11 11 21";
            const input = "A a A a B";
            const actual = polybius(input, true);

            expect(actual).to.be.equal(expected);
        })
    })

    describe("Decoding:", () =>{
        it("Should translate 42 to (i/j)", () =>{
            const expected = "(i/j)";
            const input = "42";
            const actual = polybius(input, false);
            expect(actual).to.include("i");
            expect(actual).to.include("j");
        })
        
        it("Should maintain spaces throughout", () =>{
            const expected = "a a a ab";
            const input = "11 11 11 1121";
            const actual = polybius(input, false);

            expect(actual).to.be.equal(expected);
        })
        
    })
})