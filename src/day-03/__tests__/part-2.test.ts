import { convertSeveralLineTxtFileToArrayOfArraysContainingStrings } from './../../util/convert-input';
import { getTotalOfLowestCombinedStepsTakenAtIntersectionPoint } from '../part-2';

describe('Day 3 - Part 2', () => {
  const providedExamples = [
    [['R8','U5','L5','D3'], ['U7','R6','D4','L4'], 30],
    [['R75','D30','R83','U83','L12','D49','R71','U7','L72'], ['U62','R66','U55','R34','D71','R55','D58','R83'], 610],
    [['R98','U47','R26','D63','R33','U87','L62','D20','R33','U53','R51'], ['U98','R91','D20','R16','D67','R40','U7','R15','U6','R7'], 410]
  ];

  it.each(providedExamples)('returns the correct output for each of the provided examples', (firstWireInput: string[], secondWireInput: string[], output: number) => {
    expect(getTotalOfLowestCombinedStepsTakenAtIntersectionPoint(firstWireInput, secondWireInput)).toBe(output);
  });
  it('returns the correct answer for the two wire values in the input file', () => {
    const [firstWireInput, secondWireInput] = convertSeveralLineTxtFileToArrayOfArraysContainingStrings('day-03');
    expect(getTotalOfLowestCombinedStepsTakenAtIntersectionPoint(firstWireInput, secondWireInput)).toBe(35194);
  });
});

