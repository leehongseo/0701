import { Injectable } from '@angular/core';
import { User } from './user';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CommonService } from '../common/common.service';
import { getDefaultService } from 'selenium-webdriver/chrome';
 //Injectable는 의존성줄기 남들이 이 친구한테 의존할수있도록 문만 열어놓은것 
  //다른 애들은 얘가 없으면 안되지만 얘는 혼자 있어도 상관없다.
@Injectable(/*{
  providedIn: 'root'
}*/)
export class UserService extends CommonService{
  url:string = 'api/users';
  constructor(protected _http:HttpClient){
    super(_http);
  }
  getUsers(searchUser:User,pUrl:string=''):Observable<User[]>{
    pUrl = this.url + pUrl;
    console.log(`pUrl=${pUrl}`);
    return super.getJson(pUrl);
  }
  isLogin(user:User,pUrl:string=''):Observable<any>{
    pUrl = this.url + pUrl;
    return super.postJson(pUrl,user);
  }
}
/*export class UserService {
  user:User;
  userList:Array<User> =[];
  private url:string='http://localhost:3000';

  constructor(protected httpC:HttpClient) { */
    /*for(let i=0;i<=10;i++){
      this.user = new User({name:'test'+i,age:i});
      this.userList.push(this.user);
    }*/
 /* }
  getUsers():Observable<any>{  // Observable는 연결고리 역할 look up이라고 찾아와주는 역할
    return this.httpC.get(this.url + '/api/users');
  }
  getUser():User{
    return this.user;
  }
  isLogin(user:User):Observable<any>{
    let params = "?id="+ user.id;
    params += "&pwd=" + user.pwd;
    console.log(params);
    return this.httpC.get(this.url + '/api/login' + params);
  }
  getUserList():Array<User>{
    return this.userList;
  }
  setUser(user:User){
    this.userList.push(user);
  }
  getList(type:string):Observable<any>{
    return this.httpC.get(this.url +'/api/list?type=' + type);

  }
}*/
