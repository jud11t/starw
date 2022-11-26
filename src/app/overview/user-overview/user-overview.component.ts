import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/core/user.service';
import { BodySize } from 'src/app/models/bodysize.model';
import { UserModel } from 'src/app/models/user.model';
import { OverviewComponent } from '../overview.component';


@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.scss']
})
export class UserOverviewComponent implements OnInit {

  user: UserModel = new UserModel("", "", "", 34, "male", BodySize.Medium, 10, 15, 20);
  

  constructor(private userService: UserService, private router: Router ) {}

  ngOnInit(): void {
  }

  onCancelClicked(): void {
    this.router.navigate(['overview']);
  }

  onSaveClicked(): void {
    this.userService.AddUser(new UserModel(this.user.firstname, this.user.lastname, this.user.hospitalId, this.user.age, this.user.gender, this.user.bodysize, this.user.bloodGlucose, this.user.insulinInfusion, this.user.insulinConcentration));
    this.router.navigate(['overview']);
  }

  isDisabled(): boolean {
    if(this.user.firstname.length != 0 && this.user.lastname.length != 0 && this.user.hospitalId.length !=0){
      return false;
    }
    return true;
  }

}
