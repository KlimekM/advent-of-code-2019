import { getInitialInputWithNounAndVerbValues, solve1202ProgramAlarm } from "./part-1";

export function getCalculationForNounVerbValuesThatGetTheDesiredOutput(desiredOutput = 19690720): number {
  for (let possibleNoun = 0; possibleNoun < 99; possibleNoun++) {
    for (let possibleVerb = 0; possibleVerb < 99; possibleVerb++) {
      const currentInput = getInitialInputWithNounAndVerbValues(possibleNoun, possibleVerb);
      const valueAtIndexZeroForGivenInput = solve1202ProgramAlarm(currentInput);
      if (valueAtIndexZeroForGivenInput === desiredOutput) {
        const desiredOutputCalculation = (100 * possibleNoun) + possibleVerb;
        return desiredOutputCalculation;
      }
    }
  }
};
