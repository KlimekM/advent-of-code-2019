import { getCalculationForNounVerbValuesThatGetTheDesiredOutput } from "../part-2";

describe('Day 2 - Part 2', () => {
  it('returns the correct value for the initial broken program state', () => {
    expect(getCalculationForNounVerbValuesThatGetTheDesiredOutput(3516593)).toBe(1202);
  });

  it('solves the puzzle and returns the correct value for the desired program output', () => {
    expect(getCalculationForNounVerbValuesThatGetTheDesiredOutput()).toBe(7749);
  });
});
