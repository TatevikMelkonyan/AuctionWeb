export class Product {
  constructor(
    public name?: string,
    public description?: string,
    public imageFileName?: string,
    public bidder?: string,
    public price?:number
  ) {}
}