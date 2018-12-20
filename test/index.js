/* global ngModule inject */
const angular = require('angular');
const expect = require('chai').expect;
const uniqueFilter = require('..');

const testModule = angular.module('testModule', ['ngMock', uniqueFilter.name]);

describe('my thing', function () {
  beforeEach(ngModule(testModule.name));

  it('should return a list of unique values', inject(function (uniqueFilter) {
    const out = uniqueFilter(['a', 'b', 'c', 'b', 'b', 'c', 'd']);
    expect(out).to.have.lengthOf(4);
    expect(out).to.include.members(['a', 'b', 'c', 'd']);
  }));

  it('should return a list of unique objects given a property filter', inject(function (uniqueFilter) {
    const out = uniqueFilter([
      { firstname: 'Jane', lastname: 'Doe' },
      { firstname: 'John', lastname: 'Doe' },
      { firstname: 'John', lastname: 'Smith' },
      { firstname: 'Mary', lastname: 'Smith' }
    ], 'firstname');
    expect(out).to.have.lengthOf(3);
    expect(out.map(o => o.firstname)).to.include.members(['Jane', 'John', 'Mary']);
    out.forEach(o => {
      expect(o).to.include.all.keys('firstname', 'lastname');
    });
  }));

  it('should return a list of unique objects given a multi-level property filter', inject(function (uniqueFilter) {
    const out = uniqueFilter([
      { user: { firstname: 'Jane', lastname: 'Doe' }, product: 'Test' },
      { user: { firstname: 'John', lastname: 'Doe' }, product: 'Test' },
      { user: { firstname: 'John', lastname: 'Smith' }, product: 'Test' },
      { user: { firstname: 'Mary', lastname: 'Smith' }, product: 'Test' }
    ], 'user.firstname');
    expect(out).to.have.lengthOf(3);
    expect(out.map(o => o.user.firstname)).to.include.members(['Jane', 'John', 'Mary']);
    out.forEach(o => {
      expect(o).to.include.all.keys('user', 'product');
      expect(o.user).to.include.all.keys('firstname', 'lastname');
    });
  }));
});
