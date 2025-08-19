import { BaseVehicle } from "./baseVehicle.ts";

export class Truck extends BaseVehicle {
  private loadCapacity: number;

  constructor(
    brand: string,
    model: string,
    price: number,
    loadCapacity: number
  ) {
    super(brand, model, price);
    this.loadCapacity = loadCapacity;
  }

  public getDescription(): string {
    console.log(`Car: ${this.brand} ${this.model} ${this.loadCapacity}`);
    return "";
  }
}
