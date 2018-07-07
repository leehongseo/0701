export class Data {
    method:string = 'get';
    url:string = '';
    params = {};

    constructor(obj:Object={}){
        Object.assign(this,obj);
    }
}
