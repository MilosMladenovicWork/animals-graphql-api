import { convertJsDateToUnix } from './convert-js-date-to-unix';

describe('Test convert-js-date-to-unix', () => {
  it('should return correct unix timestamp', () => {
    const date = new Date('2024-01-01');
    const unixDate = 1704067200;

    const value = convertJsDateToUnix({ date });

    expect(value).toEqual(unixDate);
  });
});
