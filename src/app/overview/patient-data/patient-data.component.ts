import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs/internal/Observable';
import { UserService } from 'src/app/core/user.service';
import { UserModel } from 'src/app/models/user.model';


@Component({
  selector: 'app-patient-data',
  templateUrl: './patient-data.component.html',
  styleUrls: ['./patient-data.component.scss']
})
export class PatientDataComponent implements OnInit {


  public hId;
  users: UserModel[] = [];
  user: UserModel = new UserModel("","", "", 0, "", 1 , 2, 3,3);

  public visible: boolean = false;
  
  constructor( private router: Router, private route: ActivatedRoute, private userService: UserService) { 

    let hospitalId = this.route.snapshot.paramMap.get('hospitalId');
    this.hId = hospitalId;    
    this.userService.GetUsers().subscribe(res=>{
      this.users = res;})

    this.user = this.onGetUser();

  }

  ngOnInit(): void {

  }

  onGetUser(): UserModel{
    return this.users.find(x => x.hospitalId == this.hId)!;
  }

  onCalculateTreatment(hospitalId: string) : Observable<UserModel> {
    this.router.navigate(["overview-treatment", hospitalId]);
    return this.userService.GetUser(hospitalId);
  }

  onQuit(){
    this.router.navigate(['login']);
  }

  onMakeChange(hospitalId: string): void{
    this.router.navigate(['user-overview'])
  }

  isVisible() : void {
    this.visible = true;
  }
}
