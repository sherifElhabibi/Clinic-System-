export class Patient {
    constructor(
        public _id:number,
        public fname:string,
        public lname:string,
        public age:number,
        public telephone:number,
        public gender:string,
        public address:{city:string,street:string,building:number},
        public appointment:Number,
        public email: string 
        ){}
}
  