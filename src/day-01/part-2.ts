import { calculateFuelRequired } from "./part-1";

export function calculateFuelRequiredForModuleAndAddedFuel(moduleOrFuelMass: number): number {
  let totalFuel = 0;
  let fuelRequiredForCurrentMass = calculateFuelRequired(moduleOrFuelMass);
  while (fuelRequiredForCurrentMass > 0) {
    totalFuel += fuelRequiredForCurrentMass;
    fuelRequiredForCurrentMass = calculateFuelRequired(fuelRequiredForCurrentMass);
  }

  return totalFuel;
}

export function sumOfFuelRequiredForAllModulesAndFuel(modules: number[]): number {
  return modules.reduce((total, module) => total + calculateFuelRequiredForModuleAndAddedFuel(module), 0);
}
