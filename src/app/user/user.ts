export class User {
    name:string;
    age:number;
    address:string; 
    id:string;
    pwd:string;
    email:string;
    joinDate:string;
    etc:string;
    constructor(values:Object={}){ // 안넣어도 자동으로 빈거로 써도된다.
        Object.assign(this,values); // 자동으로 맵핑을 시킨다.???
    }
}
