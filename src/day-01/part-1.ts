export function calculateFuelRequired(mass: number): number {
  return Math.floor(mass / 3) - 2;
}

export function sumOfFuelRequiredForAllModules(modules: number[]): number {
  return modules.reduce((total, module) => total + calculateFuelRequired(module), 0);
}
