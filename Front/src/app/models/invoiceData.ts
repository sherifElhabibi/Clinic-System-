export class invoiceData {
  constructor(
    public _id: number,
    public clinicAddress: { name: string; city: string; street: string },
    public clientAddress: { name: string; city: string; street: string },
    public invoiceNumber: number,
    public invoiceDate: Date,
    public invoiceDueDate: Date,
    public products: Array<{
      name: string;
      price: number;
      Quantity: number;
      totalPrice: number;
    }>
  ) {}
}