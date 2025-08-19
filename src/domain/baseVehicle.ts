export class BaseVehicle {
  protected brand: string;
  protected model: string;
  protected price: number;

  constructor(brand: string, model: string, price: number) {
    this.brand = brand;
    this.model = model;
    this.price = price;
  }

  public getDescription(): string {
    return "";
  }

  public showPrice(): string {
    return "";
  }

  public getDiscount(percentage: number): void {
    if (percentage === 0 || percentage === 100) {
      throw new Error();
    }
    const discount = this.price * percentage;
    this.price = this.price - discount;

    console.log(`New price ${this.price}`);
  }
}
