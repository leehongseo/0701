import { Component, OnInit, Input } from '@angular/core';
import {Ex1} from './ex1';
import {ExService} from './ex1.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  providers:[ExService]
})
export class HeaderComponent implements OnInit {
  @Input()title:string; // 컨트롤 스페이스바 하면 @input을 자동으로 가져온다.
  exList:Array<Ex1>;
  constructor(private ex:ExService) { 
    console.log(ex.getEx());
  }
  viewExList():void{
    this.exList = this.ex.getExList();
  }
  ngOnInit() {
  }

}
