export interface IDoctor {
    _id:number;
    firstName: string;
    lastName: string;
    specialty: string;
    vezeeta: number;
    password: string;
    email: string;
    salary: number;
    age: number;
    gender: string;
    degrees:string,
    location:string,
    clinic: number;
    appointments: number[];
        schedule:{
        timeSlots:TimeSlot[]
        },
       
     image: string;
     role: string;
}

export interface TimeSlot {
    day: string;
    startTime: string;
    endTime: string;
  }