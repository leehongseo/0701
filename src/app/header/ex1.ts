export class Ex1 {
    name:string;
    age:number;
    address:string;
    id:string;
    pwd:string;
    email:string;
    joinDate:string;
    etc:string;
    constructor(values:Object={}){
        Object.assign(this,values); 
    }
}
