import { Injectable } from '@angular/core';
import { User } from '../user/user';

@Injectable({
  providedIn: 'root'
})
export class JoinService {
  private user:User = new User();
  constructor() { }
  join(user:User){
    this.user = user;
  }
  login(user:User){
    if(this.user.id==user.id){
      if(this.user.pwd==user.pwd){
        return true;
      }
    }
    return false;
  }
  getUser():User{
    return this.user;
  }
}
