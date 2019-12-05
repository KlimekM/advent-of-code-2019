enum StepDirection {
  Left = 'L',
  Right = 'R',
  Down = 'D',
  Up = 'U'
}

function getAllWirePositions(wireInstructions: string[]): Set<string> {
  const positions = new Set<string>();

  let currentXPosition = 0;;
  let currentYPosition = 0;
  wireInstructions.forEach(instruction => {
    const stepDirection = instruction[0];
    const numberOfSteps = Number(instruction.slice(1));

    switch(stepDirection) {
      case StepDirection.Left:
        const xPositionLeft = currentXPosition - numberOfSteps;
        for (let i = currentXPosition; i >= xPositionLeft; i--) {
          positions.add(`${i},${currentYPosition}`);
        };

        currentXPosition = xPositionLeft;
        break;
      case StepDirection.Right:
        const xPositionRight = currentXPosition + numberOfSteps;
        for (let i = currentXPosition; i <= xPositionRight; i++) {
          positions.add(`${i},${currentYPosition}`);
        };

        currentXPosition = xPositionRight;
        break;
      case StepDirection.Down:
        const yPositionDown = currentYPosition - numberOfSteps;
        for (let i = currentYPosition; i >= yPositionDown; i--) {
          positions.add(`${currentXPosition},${i}`);
        };

        currentYPosition = yPositionDown;
        break;
      case StepDirection.Up:
        const yPositionUp = currentYPosition + numberOfSteps;
        for (let i = currentYPosition; i <= yPositionUp; i++) {
          positions.add(`${currentXPosition},${i}`);
        };

        currentYPosition = yPositionUp;
        break;
    }
  });

  return positions;
}

function getWireIntersectionPoints(firstWirePositions: Set<string>, secondWirePositions: Set<string>): string[] {
  const intersectionPoints: string[] = [];

  firstWirePositions.forEach(position => secondWirePositions.has(position) && intersectionPoints.push(position));

  // remove the first 0,0 entry
  intersectionPoints.shift();

  return intersectionPoints;
}

function getShortestIntersectionPointDistance(intersectionPoints: string[]): number {

  const intersectionPointsAsNumberCoordinates = intersectionPoints.map(point => point.split(',').map(Number));

  const intersectionPointDistances = intersectionPointsAsNumberCoordinates.map(coordinates => Math.abs(coordinates[0]) + Math.abs(coordinates[1]));

  const shortestIntersectionPointDistance = intersectionPointDistances.sort((a, b) => a - b)[0];

  return shortestIntersectionPointDistance;
}

export function getDistanceOfClosestIntersectionPointBetweenTwoWires(firstWireDirections: string[], secondWireDirections: string[]): number {
  const firstWirePositions = getAllWirePositions(firstWireDirections);
  const secondWirePositions = getAllWirePositions(secondWireDirections);

  const wireInterSectionPoints = getWireIntersectionPoints(firstWirePositions, secondWirePositions);

  return getShortestIntersectionPointDistance(wireInterSectionPoints);
}
