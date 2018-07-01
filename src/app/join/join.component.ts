import { Component, OnInit } from '@angular/core';
import { User } from '../user/user';
import { JoinService } from './join.service';

@Component({
  selector: 'app-join',
  templateUrl: './join.component.html',
  styleUrls: ['./join.component.scss']
})
export class JoinComponent implements OnInit {
  user:User = new User();
  userInfo:User = new User();
  infoView:boolean =true;
  loginView:boolean =true;
  constructor(private js:JoinService) { }

  ngOnInit() {
  }
  join():void{
    this.js.join(this.user);
    this.user = new User();
    alert('회원가입에 성공하셨습니다.');
    this.loginView=false;
  }
  login():void{
    if(this.js.login(this.user)){
      alert("로그인 성공");
      this.userInfo = this.js.getUser();
      this.infoView=false;
    }else{
      alert("로그인 실패");
    }
  }
  logout():void{
    alert('로그아웃되었씁니다.');
    this.userInfo=new User();
    this.infoView = true;
  }
}
