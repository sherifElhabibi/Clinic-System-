export class PrescriptionPost {
  constructor(
    public clinicid: number,
    public doctorid: number,
    public medicineid: [id: number],
    public patientid: number,
    public prescriptionDate: Date
  ) {}
}
