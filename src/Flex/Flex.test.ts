import { getGaps } from './NonnativeFlex';

describe('Flex suite', () => {
  it('generates gaps for single rows successfully', () => {
    const gaps = getGaps({ 1: [1, 2, 3, 4] }, 1);
    expect(gaps).toEqual({
      '1': { marginRight: 1 },
      '2': { marginRight: 1 },
      '3': { marginRight: 1 },
      '4': { marginRight: 0 },
    });
  });

  it('generates gaps for multiple rows successfully', () => {
    const gaps = getGaps({ 1: [1, 2, 3, 4], 2: [5, 6] }, 1);
    expect(gaps).toEqual({
      '1': { marginRight: 1, marginBottom: 1 },
      '2': { marginRight: 1, marginBottom: 1 },
      '3': { marginRight: 1, marginBottom: 1 },
      '4': { marginRight: 0, marginBottom: 1 },
      '5': { marginRight: 1, marginBottom: 0 },
      '6': { marginRight: 0, marginBottom: 0 },
    });
  });

  it('generates gaps for flex column successfully', () => {
    const gaps = getGaps({ 1: [1], 2: [2], 3: [3], 4: [4] }, 1);
    expect(gaps).toEqual({
      '1': { marginRight: 0, marginBottom: 1 },
      '2': { marginRight: 0, marginBottom: 1 },
      '3': { marginRight: 0, marginBottom: 1 },
      '4': { marginRight: 0, marginBottom: 0 },
    });
  });
});
