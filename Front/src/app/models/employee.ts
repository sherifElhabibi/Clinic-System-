export class Employee {
  constructor(
    public _id: number,
    public firstName: string,
    public lastName: string,
    public empAge: number,
    public empGender: string,
    public email: string,
    public password: string,
    public image: string,
    public empSalary: number,
    public empPhone: string,
    public clinicId: { name: string; department: string; _id: number },
    public role: string,
    public address: { city: string; street: string; building: number }
  ) {}
}
