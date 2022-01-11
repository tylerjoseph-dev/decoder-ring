const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("Caesar() tests written by the Student:", () => {
   
    describe("Error Handling:", () =>{
       it("Should return false if the shift value is equal to 0", () =>{
           const shift = 0;
           const message = "Unsupplied";
           const actual = caesar(message, shift);
           expect(actual).to.be.false;
       })
       it("Should return false if the shift value is less that -25", () =>{
            const shift = -256;
            const message = "Unsupplied but still copy and pasted";
            const actual = caesar(message, shift, true);
            expect(actual).to.be.false;
        })
        it("Should return false if the shift value is greater than 25", () =>{
            const shift = 256;
            const message = "This time it wasn't copy and pasted, but it's still unused :(";
            const actual = caesar(message, shift, false)
            expect(actual).to.be.false;
        })
        it("Should return false if the shift value is not present", () => {
            const message = "Rather Obtuse";
            const actual = caesar(message);
            expect(actual).to.be.false;
        })
   })

   describe("Encoding:", () => {
       it("Should ignore capital letters", () => {
           const message = "FaNg";
           const shift = 14;
           const expected = "tobu";
           const actual = caesar(message, shift, true);
           expect(actual).to.be.eql(expected);
       })
       it("Should appropriately handle wrapping shift values", () =>{
        const message = "zzxyzvw";
        const shift = 25;
        const expected = "yywxyuv";
        const actual = caesar(message, shift, true);
        expect(actual).to.be.eql(expected);
       })
       it("Should appropriately maintain spaces and special characters", () =>{
        const message = "z$x%z v!";
        const shift = 25;
        const expected = "y$w%y u!";
        const actual = caesar(message, shift, true);
        expect(actual).to.be.eql(expected);
       })
   })

   describe("Decoding:", () => {
    it("Should ignore capital letters", () => {
        const message = "FaNg";
        const shift = -14;
        const expected = "rmzs";
        const actual = caesar(message, shift, true);
        expect(actual).to.be.eql(expected);
    })
    it("Should appropriately handle wrapping shift values", () =>{
     const message = "aabacabd";
     const shift = -25;
     const expected = "bbcbdbce";
     const actual = caesar(message, shift, true);
     expect(actual).to.be.eql(expected);
    })
    it("Should appropriately maintain spaces and special characters", () =>{
     const message = "a $b%c d!";
     const shift = -25;
     const expected = "b $c%d e!";
     const actual = caesar(message, shift, true);
     expect(actual).to.be.eql(expected);
    })
})
})