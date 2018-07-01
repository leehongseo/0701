import { Injectable } from '@angular/core';
import { Ex1} from './ex1';

@Injectable({
    providedIn: 'root'
  })

export class ExService{
    ex:Ex1;
    exList:Array<Ex1>=[];
    constructor(){
        for(let i=0; i<=10;i++){
            this.ex= new Ex1({name:'test'+i,age:i});
            this.exList.push(this.ex);
        }
    }
    getEx():Ex1{
        return this.ex;
    }
    getExList():Array<Ex1>{
        return this.exList;
    }
}