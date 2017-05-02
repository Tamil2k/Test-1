
//'use strict';
var opToy= require('./OperateToy.js');
objOpToy =  new opToy();

var expect  = require("chai").expect;
var ObjToy = require('./Toy.js');
var toy = new ObjToy();
objOpToy.toy = toy;

toy.setRowsnColunns(1,1,'SOUTH')



describe('Validate rows and columns return statement', function() {
  it('Validate function returns boolean', function() {
    expect(toy.validate(2,'6','SOUTH')).to.be.a('boolean');
  });
});

describe('Validate rows and columns', function() {
  it('Validate function returns false', function() {
    expect(toy.validate(2,'6','SOUTH')).to.be.false;
  });
});

describe('Validate rows and columns', function() {
  it('Validate function returns false', function() {
    expect(toy.validate(2,6,'SOUTH')).to.be.false;
  });
});

describe('Validate rows and columns giving incorrect value', function() {
  it('Validate function returns false', function() {
    expect(toy.validate(2,4,'SOUTHE')).to.be.false;
  });
});

describe('Validate rows and columns', function() {
  it('Validate function returns false', function() {
    expect(toy.validate(2,4,'SOUTH')).to.be.true;
  });
});

describe('setRowsnColunns', function() {
  it('setRowsnColunns', function() {
    expect(toy.setRowsnColunns(2,'4','SOUTH'));
  });
});

describe('Test Move Left Right fucntion', function() {
  it('Move', function() {
    expect(toy.setRowsnColunns(2,4,'SOUTH'));
    expect(toy.move());
    expect(toy.y).to.equal(3);
    expect(toy.Left());
    expect(toy.position).to.equal('EAST');
    expect(toy.Right());
    expect(toy.position).to.equal('SOUTH');
  });
});

describe('Move by giving wrong input function', function() {
  it('Move', function() {
    expect(toy.setRowsnColunns(2,'4','NORTH'));
    expect(toy.move());
    expect(toy.y).to.equal('4');
  });
});

describe('Test termination point function', function() {
  it('Move', function() {
    expect(toy.setRowsnColunns(1,1,'SOUTH'));
    expect(toy.move());
    expect(toy.move());
    expect(toy.move());
    expect(toy.move());
    expect(toy.y).to.equal(0);
  });
});

describe('Test object not empty function', function() {
  it('Object not empty', function() {
    expect(toy.setRowsnColunns(1,1,'SOUTH'));
    expect(opToy.notEmptyToy())
  });
});