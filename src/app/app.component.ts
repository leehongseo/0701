import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '나는 AppComponent에서 생성';
  footContent:string='나는 footer이다';
  headerTitle:string ='Angular 6 width Bootstrap 4';
}
