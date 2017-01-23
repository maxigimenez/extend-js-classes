const expect = require('expect.js');
const sinon = require('sinon');
require('../src/number');

describe('Number', () => {

  describe('.times()', () => {

    it('should iterates & call 5 times the callback', () => {
      const cb = sinon.spy();
      (5).times(cb);
      expect(cb.callCount).to.be.eql(5);
    });

    it('should iterates 2 times and return the correct value', (done) => {
      const iterates = 2;
      let incremental = 0;
      (iterates).times((n) => {
        expect(n).to.be.eql(incremental);
        incremental++;
        if (incremental === iterates) {
          done();
        }
      });
    });

  });

  describe('.upto()', () => {

    it('should iterates from 2 to 10 and call the callback 9 times', () => {
      const cb = sinon.spy();
      (2).upto(10, cb);
      expect(cb.callCount).to.be.eql(9);
    });

    it('should iterates from 1 to 5 and return the correct value', (done) => {
      const iterates = 5;
      let incremental = 1;
      (incremental).upto(iterates, (n) => {
        expect(n).to.be.eql(incremental);
        incremental++;
        if (incremental === iterates) {
          done();
        }
      });
    });

  });

  describe('.downto()', () => {

    it('should iterates from 2 to 0 and call the callback 3 times', () => {
      const cb = sinon.spy();
      (2).downto(0, cb);
      expect(cb.callCount).to.be.eql(3);
    });

    it('should iterates from 3 to 1 and return the correct value', (done) => {
      const iterates = 0;
      let incremental = 3;
      (incremental).downto(iterates, (n) => {
        expect(n).to.be.eql(incremental);
        incremental--;
        if (incremental === iterates) {
          done();
        }
      });
    });

  });

});