// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution()", () => {
   it("Should decode with special characters", () => {
    const expected = "message";
    const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
    expect(actual).to.be.equal(expected);
  });  
  
  it("Should encode with special characters", () => {
    const expected = "y&ii$r&";
    const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
    expect(actual).to.be.equal(expected);
  });  
  
  it("Should maintain spaces throughout", () => {
    const expected = "jrufs cpw";
    const actual = substitution("think ful", "xoyqmcgrukswaflnthdjpzibev", encode = true);
    expect(actual).to.equal(expected);
  });
  it("Should ignore capital letters", () => {
    const expected = "jrufscpw";
    const actual = substitution("tHinkFul", "xoyqmcgrukswaflnthdjpzibev", encode = true);
    expect(expected).to.equal(actual);
  });
  it("Should return false if the alphabet is not a string of exactly 26 characters", () => {
    const expected = false;
    const actual = substitution("abc","xoyqmcgrukswaflthdjpzibev", encode = true);
    expect(expected).to.equal(actual);
  });
  
  it("Should return false if all the characters in the alphabet parameter are not unique", () => {
      const actual = substitution('This is just testing', "ababababababbabsdfsdf");
    expect(actual).to.be.false;  
  });
 });
