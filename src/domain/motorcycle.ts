import { BaseVehicle } from "./baseVehicle.ts";

export class Motorcycle extends BaseVehicle {
  private displacement: number;

  constructor(
    brand: string,
    model: string,
    price: number,
    displacement: number
  ) {
    super(brand, model, price);
    this.displacement = displacement;
  }

  public getDescription(): string {
    console.log(`Motocycle: ${this.brand} ${this.model} ${this.displacement}cc`);
    return "";
  }
}
