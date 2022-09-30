// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius()", () => {
  it("Should only include letters and spaces", () => {
      const input = "1234567890*$!";
      const actual = polybius(input, false);
      expect(actual).to.be.false;
    });
  
    it("Should output a string when encoding", () => {
      const expected = "112131";
      const actual = polybius("abc", true);
    expect(actual).to.equal(expected);
    });

  it("Should return false if the number of characters in the string excluding spaces are not even when decoding", () => {
    const expected = false;
    const actual = polybius("12 11212", false);
    expect(actual).to.equal(expected);
  });
  
  it("Should maintain spaces throughout", () => {
    const expected = "11 21 31";
    const actual = polybius("a b c", true);
    expect(actual).to.equal(expected);
  });
    
   it("Should ignore capital letters", () => {
    const expected = "112131";
    const actual = polybius("ABC", true);
    expect(actual).to.equal(expected);
  });
  
   it("Should convert both letters i and j to 42 when encoding", () => {
    const input = "ij";
    const expected = polybius(input);
    const actual = "4242";

    expect(actual).to.equal(expected);
  });
  
  it("Should somehow show the letters 'i' and 'j' when decoding", () => {
    const expected = "(i/j)(i/j)";
    const actual = polybius("4242", false);
    expect(actual).to.equal(expected);
  });
});
