const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("Tests written by the Student:", () =>{
    describe("Error Handling", () =>{
        it("Should return false if the substitution alphabet is not exactly 26 characters long", () =>{
            const alphabet = "abcdefghijklmnopqrstuvwxyz!";
            const message = "message";
            const actual = substitution(message, alphabet);
            expect(actual).to.be.false;
        
        })

        it("Should return false if the substitution alphabet contains duplicate characters", () =>{
            const alphabet = "abcdefghijklmopqrstuvwxyza";
            const message = "message";
            const actual = substitution(message, alphabet);
            expect(actual).to.be.false;
        })
    })

    describe("Encoding:", () =>{
        it("Should correctly encode a message", () =>{
            const alphabet = "bcdefghijklmnopqrstuvwxyza";
            const message = "malcolm";
            const expected = "nbmdpmn";
            const actual = substitution(message, alphabet);
            expect(actual).to.be.eql(expected);
        })

        it("Should correctly handle spaces while encoding", () =>{
            const alphabet = "bcdefghijklmnopqrstuvwxyza";
            const message = "mal colm";
            const expected = "nbm dpmn";
            const actual = substitution(message, alphabet);
            expect(actual).to.be.eql(expected);
        })

        it("Should correctly ignore handle capital letters", () =>{
            const alphabet = "bcdefghijklmnopqrstuvwxyza";
            const message = "MAL COLM";
            const expected = "nbm dpmn";
            const actual = substitution(message, alphabet);
            expect(actual).to.be.eql(expected);
        })
    })

    describe("Decoding:", () =>{
        it("Should correctly decode a message", () =>{
            const alphabet = "bcdefghijklmnopqrstuvwxyza";
            const message = "nbmdpmn";
            const expected = "malcolm";
            const actual = substitution(message, alphabet, false);
            expect(actual).to.be.eql(expected);
        })

        it("Should correctly handle spaces while encoding", () =>{
            const alphabet = "bcdefghijklmnopqrstuvwxyza";
            const message = "nbm dpmn";
            const expected = "mal colm";
            const actual = substitution(message, alphabet, false);
            expect(actual).to.be.eql(expected);
        })

        it("Should correctly handle capital letters", () =>{
            const alphabet = "bcdefghijklmnopqrstuvwxyza";
            const message = "NBM dpmn";
            const expected = "mal colm";
            const actual = substitution(message, alphabet, false);
            expect(actual).to.be.eql(expected);
        })
    })
})