import {fn} from "../sources/lus";
import "mocha";
import {expect} from "chai";

describe('simple test', function() {
  it('should pass', function() {
    expect(fn(1)).to.be.eq(false);
  })
});
