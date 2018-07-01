import { Component, OnInit } from '@angular/core';
import {User} from './user';
import {UserService} from './user.service';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
  providers:[UserService]
})
export class UserComponent implements OnInit {
  userList:Array<User>;
  user:User = new User();
  id:string;
  pwd:string;
  isLogin:boolean = false;
  constructor(private us:UserService) { 
    console.log(us.getUser());
  }
  login():void{
    this.us.isLogin(new User({id:this.id, pwd:this.pwd})).subscribe(
      datas=>{
        this.isLogin = datas.isLogin;
        if(this.isLogin){
          alert('로그인에 성공하셨습니다.');
          this.viewUserList();
        }else{
          alert('아이디 비번을 확인해주세요.');
        }
      },
      error=>{
        console.log(error);
      }
    );
  }
  
  viewUserList():void{
    //this.userList = this.us.getUserList();
    this.us.getUsers().subscribe(
      datas=>{
        console.log(datas);
        this.userList =datas;
      },
      error=>{
        console.log(error);
      }
    )
  }
  ngOnInit() {
  }
  insertUser():void{
    this.us.setUser(this.user);
    this.user = new User(); // 이 한줄로 인해서 유저 추가시 다른 내용으로 추가가 가능하다.
  }
  changeEtc(event):void{
    console.log(event);
  }

  chSelect(event:Event):void{
    let obj:HTMLInputElement = <HTMLInputElement>event.target;
    alert(obj.value);
    this.us.getList(obj.value).subscribe(
      datas=>{
        console.log(datas);
        this.userList = datas[obj.value];
      },
      error=>{
        console.log(error);
      }
    )
  }
}




 // pakage.json 에     "ang":"ng serve --port 80"  이렇게 하면 npm run ang 라고 하면 빌드할수있다.