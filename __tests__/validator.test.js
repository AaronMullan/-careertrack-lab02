const {
  nameValidator
} = require('../lib/validator.js');

const dog = {
  name: 'spot',
  age: '5',
  weight: '20'
};

describe('validator module', () => {
  it('properly returns a fields value when given an object', () => {
    expect(nameValidator(dog)).toEqual('spot');
  });
});
