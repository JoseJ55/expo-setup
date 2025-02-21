import { testFunction } from '../testing';

describe('testFunction', () => {
  it('Text renders', () => {
    const text = testFunction('function');

    expect(text).toBe('function returns this function');
  });
});
