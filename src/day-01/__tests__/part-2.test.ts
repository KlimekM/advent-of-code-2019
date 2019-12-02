import { convertTxtFileToArray } from './../../util/convert-input';
import { calculateFuelRequiredForModuleAndAddedFuel, sumOfFuelRequiredForAllModulesAndFuel } from "../part-2";

describe('Day 1 - Part 2', () => {
  const providedExamples = [[14, 2], [1969, 966], [100756, 50346]];
  it.each(providedExamples)('returns the correct output for each of the provided examples', (input, output) => {
    expect(calculateFuelRequiredForModuleAndAddedFuel(input)).toBe(output);
  });

    it('returns the correct value for the sum of all of the example output values', () => {
    const providedExampleInputValues = providedExamples.map(example => example[0]);
    const providedExampleOutputValues = providedExamples.map(example => example[1]);
    const sumOfProvidedExampleOutputValues = providedExampleOutputValues.reduce((total, currentValue) => total + currentValue);
    expect(sumOfFuelRequiredForAllModulesAndFuel(providedExampleInputValues)).toBe(sumOfProvidedExampleOutputValues);
  });

  it('returns the correct value for the sum of all of the values in the input file', () => {
    const dayOnePartOneInputArray = convertTxtFileToArray('day-01');
    expect(sumOfFuelRequiredForAllModulesAndFuel(dayOnePartOneInputArray)).toBe(4974428);
  });
});
