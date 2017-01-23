const expect = require('expect.js');
const arrayLib = require('../src/array');

describe('Array', () => {

  describe('#first()', () => {

    it('should return undefined if array empty', () => {
      const dummy = [];
      expect(dummy.first()).to.be(undefined);
    });
    
    it('should return the fisrt value of the array', () => {
      const dummy = ['first', 'second'];
      expect(dummy.first()).to.be.equal('first');
    });

  });

  describe('#last()', () => {

    it('should return undefined if array empty', () => {
      const dummy = [];
      expect(dummy.last()).to.be(undefined);
    });
    
    it('should return the last value of the array', () => {
      const dummy = ['first', 'second'];
      expect(dummy.last()).to.be.equal('second');
    });

  });

  describe('#emtpy()', () => {

    it('should return truthy if array empty', () => {
      const dummy = [];
      expect(dummy.empty()).to.be.ok();
    });

    it('should return falsy if array is not empty', () => {
      const dummy = ['first'];
      expect(dummy.empty()).to.not.be.ok();
    });

  });

  describe('#clear()', () => {

    it('should return an empty array', () => {
      const dummy = ['first', 'second'];
      dummy.clear();
      expect(dummy).to.be.empty();
    });

  });

  describe('#size()', () => {

    it('should return size of the array', () => {
      const dummy = ['first', 'second'];
      expect(dummy.size()).to.be.equal(2);
    });

  });

  describe('#sample()', () => {

    it('should return a random value from array', () => {
      const dummy = ['first', 'second'];
      const sample = dummy.sample();
      expect(dummy.indexOf(sample) > -1).to.be.ok();
    });

  });

  describe('#compact()', () => {

    it('should return a copy of the array with all undefined/null elements removed', () => {
      const dummy = ['first', undefined, 'third', null];
      expect(dummy.compact()).to.be.eql(['first', 'third']);
    });

  });

  describe('#include()', () => {

    it('should return true if the given string is present', () => {
      const dummy = ['first', 'second'];
      expect(dummy.include('second')).to.be.ok();
    });

    it('should return true if the given object is present', () => {
      const dummyObject = {
        test: 'dummy test'
      };
      const dummy = ['first', dummyObject];
      expect(dummy.include(dummyObject)).to.be.ok();
    });

    it('should return false if the given object is not present', () => {
      const dummy = ['first'];
      expect(dummy.include('second')).to.not.be.ok();
    });

  });

});