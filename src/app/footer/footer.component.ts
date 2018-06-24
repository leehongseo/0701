import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  @Input()footerstr:string; // 컨트롤 스페이스바 하면 @input을 자동으로 가져온다.
  constructor() { }

  ngOnInit() {
  }

}
