import { formatString } from "./";

describe('formatString', () => {
  it('should replace template variables with values', () => {
    const template = '${name} is not a valid ${type}';
    const values = { name: 'email', type: 'string' };
    const result = formatString(template, values);
    expect(result).toBe('email is not a valid string');
  });

  it('should handle multiple occurrences of same variable', () => {
    const template = '${greeting}, ${name}! ${greeting} again!';
    const values = { greeting: 'Hello', name: 'World' };
    const result = formatString(template, values);
    expect(result).toBe('Hello, World! Hello again!');
  });

  it('should preserve placeholders when values are missing', () => {
    const template = '${name} is ${age} years old';
    const values = { name: 'John' };
    const result = formatString(template, values);
    expect(result).toBe('John is ${age} years old');
  });

  it('should handle empty values object', () => {
    const template = '${name} is ${age} years old';
    const result = formatString(template);
    expect(result).toBe('${name} is ${age} years old');
  });

  it('should handle empty template string', () => {
    const result = formatString('', { name: 'John' });
    expect(result).toBe('');
  });

  it('should convert non-string values to string', () => {
    const template = 'Value: ${number}, Boolean: ${bool}, Null: ${nullValue}';
    const values = {
      number: 42,
      bool: true,
      nullValue: null,
      undefinedValue: undefined
    };
    const result = formatString(template, values);
    expect(result).toBe('Value: 42, Boolean: true, Null: null');
  });

  it('should work with complex templates', () => {
    const template = 'User ${username} has ${count} new ${message} in ${category}';
    const values = {
      username: 'alice',
      count: 5,
      message: 'messages',
      category: 'inbox'
    };
    const result = formatString(template, values);
    expect(result).toBe('User alice has 5 new messages in inbox');
  });

  it('should handle template without placeholders', () => {
    const template = 'This is a simple string';
    const values = { name: 'it' };
    const result = formatString(template, values);
    expect(result).toBe('This is a simple string');
  });
});
