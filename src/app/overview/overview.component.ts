import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { UserService } from '../core/user.service';
import { BodySize } from '../models/bodysize.model';
import { UserModel } from '../models/user.model';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  users: UserModel[] = [];

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
    this.userService.GetUsers().subscribe(res=>{
      this.users = res;
    })
  }

  /*onAddPatientClicked(): void {
    this.userService.AddUser(new UserModel("Kiss", "Bálint", "X35C722", 17, "male", BodySize.Large, 12, 17, 30));
    this.userService.GetUsers().subscribe(res=>{
      this.users = res;
    });
  }*/

  onDeletePatientClicked(hospitalId: string): void{
    this.userService.DeleteUser(hospitalId);
    this.userService.GetUsers().subscribe(res=>{
      this.users = res;});
  }


  onAddPatientClicked(): void{
      this.router.navigate(['user-overview']);
      this.userService.GetUsers().subscribe(res=>{
        this.users = res;});
  }

  onLogoutClicked(): void {
    this.router.navigate(['login'])
  }

  onEditClicked(hospitalId: string): void{
    this.router.navigate(['user-overview'])
  }

  onHospitalIdClicked(hospitalId: string) : Observable<UserModel>{
    this.router.navigate(['overview', hospitalId ]);
    return this.userService.GetUser(hospitalId);
  }
}
