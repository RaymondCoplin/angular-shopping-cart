export class Product {
  id: number;
  name: string;
  description: string;
  price: number;
  unit: string;
  image: string;

  constructor(id: number, name: string, description: string, price: number, unit: string, image: string) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.price = price;
    this.unit = unit;
    this.image = image;
  }
}
