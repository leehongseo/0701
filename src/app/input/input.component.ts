import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {
  clickcnt:number=0;
  inputstr:string='';
  inputstr2:string='';
  result:number=0;
  strr:string='';
  constructor() { }

  ngOnInit() {
  }
  clickBtn():void{
    this.clickcnt++;
  }
  clickBtnDown():void{
    this.clickcnt--;
  }

  /*upkey(event:KeyboardEvent){
    this.inputstr=(<HTMLEven>event.target).value;
  }*/
  upkey2(inputstr){
    this.inputstr2=inputstr;
  }


  sum(n1:string,n2:string,op:string){
    if(op=='+'){
      this.result=parseInt(n1) + parseInt(n2);
    }
    else if(op=='-'){
      this.result=parseInt(n1) - parseInt(n2);
    }
    else if(op=='*'){
      this.result=parseInt(n1) * parseInt(n2);
    }
    else if(op=='/'){
      this.result=parseInt(n1) / parseInt(n2);
    }
  }
  /*checkValue(event:Event){
    let obj=<HTMLSelectElement>event.target;
    alert(obj.value);
  }*/
  checkValue(strr:string){
    //let obj=<HTMLSelectElement>event.target;
    alert(strr);
  }

  
}
