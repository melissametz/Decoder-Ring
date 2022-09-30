// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar()", () => {
  
  it("Should return false if shift is equal to 0", () => {
    const input = "life is amazing";
    const shift = 0;
    const actual = caesar(input, shift);

    expect(actual).to.be.false;
  });

  it("Should return false if shift is less than -25", () => {
    const input = "life is amazing";
    const shift = -26;
    const actual = caesar(input, shift);

    expect(actual).to.be.false;
  });

  it("Should return false if shift is greater than 25", () => {
    const input = "life is amazing";
    const shift = 26;
    const actual = caesar(input, shift);

    expect(actual).to.be.false;
  });

  it("Should return false if shift is not present", () => {
    const input = "life is amazing";
    const actual = caesar(input);

    expect(actual).to.be.false;
  });

    it("Should maintain spaces and symbols thoughout when encoding", () => {
      const message = "a message.";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "d phvvdjh.";

      expect(actual).to.equal(expected);
    });

    it("Should ignore capital letters", () => {
    const lowercaseInput = "LIFE IS AMAZING";
    const uppercaseInput = "life is amazing";
    const shift = 3;
    const lowercaseCall = caesar(lowercaseInput, shift);
    const uppercaseCall = caesar(uppercaseInput, shift);

    expect(lowercaseCall).to.equal(uppercaseCall);
  });

    it("Should wrap around to the front of the alphabet at the end of the alphabet", () => {
    const input = "z";
    const shift = 3;
    const actual = caesar(input, shift);
    const expected = "c";

    expect(actual).to.equal(expected);
  });
});