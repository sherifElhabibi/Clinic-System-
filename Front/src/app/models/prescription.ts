export class Prescription {
  constructor(
    public prescriptionDate: Date,
    public _id: number,
    public doctorId: {
      firstName: string;
      lastName: string;
      clinic: { _id: number; name: string; department: string };
    },
    public clinicId: {
      _id: number;
      name: string;
      department: string;
      address: { city: string; street: string; buildingNumber: number };
      doctors: { _id: number; firstName: string; lastName: string };
    },
    public medicineId: [{ name: string }],
    public patientId: {fname: string, lname: string, age: number}
  ) {}
}
