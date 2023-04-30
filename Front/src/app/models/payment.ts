export class Payment{
  constructor(public invoice_id: number,public amount:number, public card_number:number, public exp_month: number, public exp_year: number, cvc:number, public email: string, public createdAt: Date ){}
}