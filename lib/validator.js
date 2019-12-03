const { getCaster } = require('../lib.types.js');
const {
  isNumber,
  castToNumber,
  isString,
  castToString,
  isBoolean,
  castToBoolean,
  isObject,
  isArray,
  isFunction,
  castToArray,
  getCaster
} = require('../lib/types.js');

class Validator {
  constructor(field, { type, required }) {
    this.field = field;
    this.type = type;
    this.required = required;
    this.caster = getCaster(type);
  }
  validate(obj){
    const val = obj[this.field];
    if(this.required && !val) throw new Error(`${field} is a required field.`);
    if(!this.required && !val) return null;
    return this.caster;
  }

}
