import { BaseVehicle } from "./domain/baseVehicle.ts";
import { Truck } from "./domain/truck.ts";

const newVehicle = new Truck("Toyota", "Hino", 27000, 9520);
newVehicle.getDescription();
newVehicle.getDiscount(0.25);
