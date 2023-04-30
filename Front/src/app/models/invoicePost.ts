export class invoicePost{
    constructor(
      public patientId: number,
      public patientModel: string,
      public clinicId: number,
      public invoiceDate: string,
      public invoiceTime: string,
      public status: string,
      public total: number,
      public paymentMethod: string,
      public paid: number,
      public totalDue: number
    ){}
  }