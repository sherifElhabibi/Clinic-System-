export class Medicine {
  static slice(arg0: number, arg1: number) {
    throw new Error('Method not implemented.');
  }
  constructor(
    public _id: number,
    public name: string,
    public type: string,
    public expireDate: string,
    public productionDate: string,
    public companyName: string,
    public price: number,
    public image: string,
    public quantity: number,
    public offer: number
  ) {}
}
