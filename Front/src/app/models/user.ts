export class User {
    constructor(
        public _id:number,
        public fname:string,
        public lname:string,
        public age:number,
        public telephone:number,
        public gender:string,
        public address:{city:string,street:string,building:number},
        public email:string,
        public role:string,
        public salary:number,
        public vezeeta:number,
        ){}
}
