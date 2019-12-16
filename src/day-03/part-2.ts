import { StepDirection } from "./part-1";

function getAllWirePositionsWithStepsTaken(wireInstructions: string[]): Map<string, number> {
  const positions = new Map<string, number>();

  let currentXPosition = 0;;
  let currentYPosition = 0;
  let numberOfStepsTaken = 0;

  const verifyAndAddPositionKey = (key: string, stepsTaken: number): void => {
    if (!positions.has(key)) {
      positions.set(key, stepsTaken);
    }
  }

  wireInstructions.forEach(instruction => {
    const stepDirection = instruction[0];
    const numberOfStepsToTake = Number(instruction.slice(1));

    switch(stepDirection) {
      case StepDirection.Left:
        const xPositionLeft = currentXPosition - numberOfStepsToTake;
        for (let i = currentXPosition; i > xPositionLeft; i--) {
          const positionKey = `${i},${currentYPosition}`;
          verifyAndAddPositionKey(positionKey, numberOfStepsTaken);
          numberOfStepsTaken++;
        };

        currentXPosition = xPositionLeft;
        break;
      case StepDirection.Right:
        const xPositionRight = currentXPosition + numberOfStepsToTake;
        for (let i = currentXPosition; i < xPositionRight; i++) {
          const positionKey = `${i},${currentYPosition}`;
          verifyAndAddPositionKey(positionKey, numberOfStepsTaken);
          numberOfStepsTaken++;
        };

        currentXPosition = xPositionRight;
        break;
      case StepDirection.Down:
        const yPositionDown = currentYPosition - numberOfStepsToTake;
        for (let i = currentYPosition; i > yPositionDown; i--) {
          const positionKey = `${currentXPosition},${i}`;
          verifyAndAddPositionKey(positionKey, numberOfStepsTaken);
          numberOfStepsTaken++;
        };

        currentYPosition = yPositionDown;
        break;
      case StepDirection.Up:
        const yPositionUp = currentYPosition + numberOfStepsToTake;
        for (let i = currentYPosition; i < yPositionUp; i++) {
          const positionKey = `${currentXPosition},${i}`;
          verifyAndAddPositionKey(positionKey, numberOfStepsTaken);
          numberOfStepsTaken++;
        };

        currentYPosition = yPositionUp;
        break;
    }
  });

  return positions;
}

function getWireIntersectionPointsWithCombinedStepTotal(firstWirePositions: Map<string, number>, secondWirePositions: Map<string, number>): string[] {
  const intersectionPoints: string[] = [];

  Array.from(firstWirePositions.entries()).forEach(position => secondWirePositions.has(position[0]) && intersectionPoints.push(position[0]));

  // remove the first 0,0 entry
  intersectionPoints.shift();

  return intersectionPoints;
}

export function getTotalOfLowestCombinedStepsTakenAtIntersectionPoint(firstWireDirections: string[], secondWireDirections: string[]): number {
  const firstWirePositions = getAllWirePositionsWithStepsTaken(firstWireDirections);
  const secondWirePositions = getAllWirePositionsWithStepsTaken(secondWireDirections);

  const wireInterSectionPoints = getWireIntersectionPointsWithCombinedStepTotal(firstWirePositions, secondWirePositions);

  let lowestCombinedStepsAtIntersectionPoint;
  wireInterSectionPoints.forEach(intersectionPoint => {
    const totalOfStepsAtIntersectionPoint = firstWirePositions.get(intersectionPoint) + secondWirePositions.get(intersectionPoint);

    if (!lowestCombinedStepsAtIntersectionPoint || totalOfStepsAtIntersectionPoint < lowestCombinedStepsAtIntersectionPoint) {
      lowestCombinedStepsAtIntersectionPoint = totalOfStepsAtIntersectionPoint;
    }
  });

  return lowestCombinedStepsAtIntersectionPoint;
}
