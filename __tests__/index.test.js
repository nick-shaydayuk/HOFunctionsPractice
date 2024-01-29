import { describe, expect, it } from '@jest/globals';
import * as funcs from '../index.js';

describe('task1', () => {
  it('should return undefined', () => {
    expect(funcs.convertToLowerOrUpperCase()).toBeUndefined();
  });
  it('should work', () => {
    expect(
      funcs.convertToLowerOrUpperCase(['lower', 'upper'], 'upper'),
    ).toEqual(['LOWER', 'UPPER']);
  });
  it('should work', () => {
    expect(
      funcs.convertToLowerOrUpperCase(['LOWER', 'UPPER'], 'lower'),
    ).toEqual(['lower', 'upper']);
  });
});

describe('task2', () => {
  it('should return undefined', () => {
    expect(funcs.convertToFilteredLowerOrUpperCase()).toBeUndefined();
  });
  it('should work', () => {
    expect(
      funcs.convertToFilteredLowerOrUpperCase(['lower', 'upper'], 'upper'),
    ).toEqual(['LOWER', 'UPPER']);
  });
  it('should work', () => {
    expect(
      funcs.convertToFilteredLowerOrUpperCase(['LOWER', 'UPPER'], 'lower'),
    ).toEqual(['lower', 'upper']);
  });
  it('should work', () => {
    expect(
      funcs.convertToFilteredLowerOrUpperCase(
        ['LOWER', { a: 123 }, 'UPPER'],
        'lower',
      ),
    ).toEqual(['lower', 'upper']);
  });
  it('should work', () => {
    expect(
      funcs.convertToFilteredLowerOrUpperCase(
        ['yankee', { a: 123 }, 'go', { b: 456 }, 'home'],
        'UPPER',
      ),
    ).toEqual(['YANKEE', 'GO', 'HOME']);
  });
});

describe('task3', () => {
  const users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 17 },
    { name: 'Charlie', age: 30 },
    { name: 'David', age: 16 },
  ];
  const result = [
    { name: 'Alice', age: 25 },
    { name: 'Charlie', age: 30 },
  ];
  const users2 = [
    { name: 'Victor', age: 15 },
    { name: 'Gus', age: 17 },
    { name: 'Lalo', age: 30 },
    { name: 'Walter', age: 52 },
  ];
  const result2 = [
    { name: 'Lalo', age: 30 },
    { name: 'Walter', age: 52 },
  ];
  it('should return undefined', () => {
    expect(funcs.filterUsersByAge()).toBeUndefined();
  });
  it('should work', () => {
    expect(funcs.filterUsersByAge(users)).toEqual(result);
  });
  it('should work', () => {
    expect(funcs.filterUsersByAge(users2)).toEqual(result2);
  });
});

describe('task4', () => {
  const users = [
    { name: 'Alice', age: 25, capableOfMarathon: true },
    { name: 'Bob', age: 17, capableOfMarathon: false },
    { name: 'Charlie', age: 30, capableOfMarathon: false },
    { name: 'David', age: 16, capableOfMarathon: true },
  ];
  const result = [
    { name: 'Alice', age: 25, capableOfMarathon: true },
    { name: 'Charlie', age: 30, capableOfMarathon: false },
  ];
  const result2 = [
    { name: 'Alice', age: 25, capableOfMarathon: true },
    { name: 'David', age: 16, capableOfMarathon: true },
  ];
  it('should return undefined', () => {
    expect(funcs.filterUsersByParam()).toBeUndefined();
  });
  it('should work', () => {
    expect(funcs.filterUsersByParam(users, 'age', 18, '>')).toEqual(result);
  });
  it('should work', () => {
    expect(funcs.filterUsersByParam(users, 'capableOfMarathon', true)).toEqual(result2);
  });
});

describe('task5', () => {
  it('should count', () => {
    expect(funcs.divisibleAverage([0, -1, 10, 20, 30, 40, 50], 3)).toEqual(15);
  });
  it('should count', () => {
    expect(funcs.divisibleAverage([0, -1, 10, 20, 30, 40, 50], 2)).toEqual(25);
  });
  it('should count', () => {
    expect(
      funcs.divisibleAverage([0, -1, 10, 20, 30, 40, 52, 104, 416], 26),
    ).toEqual(143);
  });
  it('should count', () => {
    expect(funcs.divisibleAverage([3, 6, 9, 12, 15], 3)).toEqual(9);
  });
  it('should not count', () => {
    expect(funcs.divisibleAverage()).toBeUndefined();
  });
});
