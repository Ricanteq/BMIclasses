import { BMI } from "./bminterface";

export class Person {
  private user: BMI;

  constructor(user: BMI) {
    this.user = user;
  }

  calculateBmi(): number {
    const bmi = calculateBMI(this.user);
    return bmi;
  }
}

function calculateBMI(user: BMI): number {
    const heightInMeters = user.height / 100;
    const bmi = user.weight / (heightInMeters * heightInMeters);
    return bmi;
  }


