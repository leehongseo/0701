export class Company{
    name:string;
    year:number;
    address:string;
    constructor(values:Object={}){
      Object.assign(this,values); // 자동으로 맵핑을 시킨다.???
  }
  }