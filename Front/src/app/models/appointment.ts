export interface Appointment {
    _id:number,
    doctor:{  
        firstName: string;
        lastName: string;
        specialty: string;
        vezeeta: number;
    },//doc id
    patient: {_id:number},// patient id
    date:string ,
    time: string,
        
}
