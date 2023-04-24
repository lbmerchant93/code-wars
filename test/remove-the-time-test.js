const chai = require("chai");
const expect = chai.expect;
const { shortenToDate } = require('../src/remove-the-time');

describe("Tests", () => {
    it("test", () => {
        expect(shortenToDate("Friday May 2, 9am")).to.deep.equal("Friday May 2");
        expect(shortenToDate("Tuesday January 29, 10pm")).to.deep.equal("Tuesday January 29");
        expect(shortenToDate("Monday December 25, 10pm")).to.deep.equal("Monday December 25");
    });
});