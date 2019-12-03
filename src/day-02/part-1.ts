import { convertSingleLineTxtFileToArray } from './../util/convert-input';
function add(a: number, b: number) {
  return a + b;
}

function multiply(a: number, b: number) {
  return a * b;
}

export function executeIntcodeProgram(
  input: number[],
  currentPosition = 0
): number[] {
  if (input[currentPosition] === 99) {
    return input;
  }

  let firstIndexToCheck = input[currentPosition + 1];
  let secondIndexToCheck = input[currentPosition + 2];
  let indexToUpdate = input[currentPosition + 3];
  let updatedValue =
    input[currentPosition] === 1
      ? add(input[firstIndexToCheck], input[secondIndexToCheck])
      : multiply(input[firstIndexToCheck], input[secondIndexToCheck]);
  input[indexToUpdate] = updatedValue;
  currentPosition += 4;
  return executeIntcodeProgram(input, currentPosition);
}

export function getInitialInputWithNounAndVerbValues(noun: number, verb: number): number[] {
  const initialInput = [...convertSingleLineTxtFileToArray('day-02')];

  // replace 1st and 2nd position of input to desired noun/verb values
  initialInput[1] = noun;
  initialInput[2] = verb;

  return initialInput;
}

export function solve1202ProgramAlarm(input: number[]): number {
  // return value at position 0 when program halts
  return executeIntcodeProgram(input)[0];
}
