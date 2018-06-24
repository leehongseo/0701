import { Component, OnInit, Input } from '@angular/core';
import { Observable,fromEvent } from 'rxjs';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss']
})
export class EventComponent implements OnInit {
  msPos:Observable<Event>
  msClick:Observable<Event>;
  posX:number;
  posY:number;
  targetInfo:string;
  @Input()subStr:string; // 컨트롤 스페이스바 하면 @input을 자동으로 가져온다.
  str:string ='저는 스크립트에서 생성된 아이입니다.';
  
  constructor() { }

  ngOnInit() {
    this.msPos=fromEvent(document,'mousemove'); // 마우스무브 이벤트를 mspos를 덮어씌운것
    this.msPos.subscribe(
      (event:MouseEvent)=>{
        this.posX=event.clientX;
        this.posY=event.clientY;
      }
    );
    this.msClick=fromEvent(document,'click');
    this.msClick.subscribe(
      (event:MouseEvent)=>{
        let obj=<HTMLElement>event.target;
        this.targetInfo =`obj tag : ${obj.tagName}<br>`;
        this.targetInfo =`obj id : ${obj.id}<br>`;
        this.targetInfo =`obj tag : ${obj.innerText}<br>`;

      }
    );
  }

}
