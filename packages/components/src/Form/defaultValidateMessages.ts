const typeTemplate = '${name} is not a valid ${type}';

export const defaultValidateMessages = {
  default: 'Field validation error for ${name}',
  required: 'Please enter ${name}',
  enum: '${name} must be one of [${enum}]',
  whitespace: '${name} cannot be a blank character',
  date: {
    format: '${name} date format is invalid',
    parse: '${name} cannot be converted to a date',
    invalid: '${name} is an invalid date',
  },
  types: {
    string: typeTemplate,
    method: typeTemplate,
    array: typeTemplate,
    object: typeTemplate,
    number: typeTemplate,
    date: typeTemplate,
    boolean: typeTemplate,
    integer: typeTemplate,
    float: typeTemplate,
    regexp: typeTemplate,
    email: typeTemplate,
    url: typeTemplate,
    hex: typeTemplate,
  },
  string: {
    len: '${name} must be ${len} characters',
    min: '${name} must be at least ${min} characters',
    max: '${name} must be up to ${max} characters',
    range: '${name} must be between ${min}-${max} characters',
  },
  number: {
    len: '${name} must be equal to ${len}',
    min: '${name} must be minimum ${min}',
    max: '${name} must be maximum ${max}',
    range: '${name} must be between ${min}-${max}',
  },
  array: {
    len: 'Must be ${len} ${name}',
    min: 'At least ${min} ${name}',
    max: 'At most ${max} ${name}',
    range: 'The amount of ${name} must be between ${min}-${max}',
  },
  pattern: {
    mismatch: '${name} does not match the pattern ${pattern}',
  }
};
