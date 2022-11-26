import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { UserModel } from '../models/user.model';
import { DataProvider } from './dataprovider';

@Injectable()
export class UserService {

  constructor() { }

  GetUsers(): Observable<UserModel[]> {
    return of(DataProvider.UserList);
  }

  GetUser(hospitalId: string): Observable<UserModel> {
    return of(DataProvider.UserList.find(x => x.hospitalId == hospitalId)!);
  }



  AddUser(userModel: UserModel): void {
    DataProvider.UserList.push(userModel);
  }

  DeleteUser(hospitalId: string): void {
    DataProvider.UserList.forEach((user, index)=>{
      if( user.hospitalId == hospitalId) 
      DataProvider.UserList.splice(index,1);
    })
  }
}
