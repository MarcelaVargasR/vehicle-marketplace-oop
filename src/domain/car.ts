import { BaseVehicle } from "./baseVehicle.ts";

export class Car extends BaseVehicle {
  private doorNumber: number;

  constructor(brand: string, model: string, price: number, doorNumber: number) {
    super(brand, model, price);
    this.doorNumber = doorNumber;
  }

   public getDescription(): string {
    console.log(`Car: ${this.brand} ${this.model} ${this.doorNumber}`)
    return ""
  }


}
