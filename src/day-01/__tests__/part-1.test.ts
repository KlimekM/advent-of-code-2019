import { convertTxtFileToArray } from './../../util/convert-input';
import { calculateFuelRequiredToLaunchModule, sumOfFuelRequiredForAllModules } from "../part-1"


describe('Day 1 - Part 1', () => {
  const providedExamples = [[12, 2], [14, 2], [1969, 654], [100756, 33583]];
  it.each(providedExamples)('returns the correct output for each of the provided examples', (input, output) => {
    expect(calculateFuelRequiredToLaunchModule(input)).toBe(output);
  });

  it('returns the correct value for the sum of all of the example output values', () => {
    const providedExampleInputValues = providedExamples.map(example => example[0]);
    const providedExampleOutputValues = providedExamples.map(example => example[1]);
    const sumOfProvidedExampleOutputValues = providedExampleOutputValues.reduce((total, currentValue) => total + currentValue);
    expect(sumOfFuelRequiredForAllModules(providedExampleInputValues)).toBe(sumOfProvidedExampleOutputValues);
  });

  it('returns the correct value for the sum of all of the values in the input file', () => {
    const dayOnePartOneInputArray = convertTxtFileToArray('day-01');
    expect(sumOfFuelRequiredForAllModules(dayOnePartOneInputArray)).toBe(3318195);
  });
});
