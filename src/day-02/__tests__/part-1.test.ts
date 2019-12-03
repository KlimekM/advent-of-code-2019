import { executeIntcodeProgram, solve1202ProgramAlarm, getInitialInputWithNounAndVerbValues } from "../part-1";


describe('Day 2 - Part 1', () => {
  const providedExamples = [['1,0,0,0,99', '2,0,0,0,99'], ['2,3,0,3,99', '2,3,0,6,99'], ['2,4,4,5,99,0', '2,4,4,5,99,9801'], ['1,1,1,4,99,5,6,0,99', '30,1,1,4,2,5,6,0,99']];
  it.each(providedExamples)('returns the correct output for each of the provided examples', (input, output) => {
    const inputToArray = input.split(',').map(str => parseInt(str, 10));
    expect(executeIntcodeProgram(inputToArray).join(',')).toBe(output);
  });

  it('returns the correct value at position 0 when the initial broken program halts', () => {
    // pass noun/verb as the values at the time that the initial broken program halts
    const inputForInitialBrokenProgram = getInitialInputWithNounAndVerbValues(12, 2);
    expect(solve1202ProgramAlarm(inputForInitialBrokenProgram)).toBe(3516593);
  });
});
