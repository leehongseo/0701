import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()title:string; // 컨트롤 스페이스바 하면 @input을 자동으로 가져온다.
  constructor() { }

  ngOnInit() {
  }

}
