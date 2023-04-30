export class Invoice {
  constructor(
    public _id: number,
    public patientId: { _id: number; fname: string; lname: string },
    public patientModel: string,
    public clinicId: number,
    public invoiceDate: Date,
    public invoiceTime: string,
    public status: string,
    public total: number,
    public paymentMethod: string,
    public paid: number,
    public totalDue: number
  ) {}
}
