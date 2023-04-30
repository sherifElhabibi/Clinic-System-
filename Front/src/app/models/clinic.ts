import { IDoctor } from "./idoctor";

export class Clinic {
  constructor(
    public _id: number,
    public name: string,
    public department: string,
    public address: { city: string; street: string; buildingNumber: number },
    public doctor: Array<IDoctor>,
    public telephoneNumber: number,
    public image?: string
  ) {}
}
