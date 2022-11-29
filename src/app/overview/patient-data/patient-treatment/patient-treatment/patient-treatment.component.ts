import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ChartConfiguration, ChartOptions } from 'chart.js';
import { Observable } from 'rxjs/internal/Observable';
import { UserService } from 'src/app/core/user.service';
import { UserModel } from 'src/app/models/user.model';
import { graphData } from 'src/assets/graphdata/samplePatient';


@Component({
  selector: 'app-patient-treatment',
  templateUrl: './patient-treatment.component.html',
  styleUrls: ['./patient-treatment.component.scss']
})
export class PatientTreatmentComponent implements OnInit {

  public hId;
  users: UserModel[] = [];
  user: UserModel = new UserModel("","", "", 0, "", 1 , 2, 3,3);
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

  public lineChartData_1: ChartConfiguration<'line'>['data'] = {
    labels: graphData.bg.t,
    datasets: [
      {
        data: graphData.bg.bg,
        label: 'Blood glucose',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(0,0,0,0)',

        }
    ]    
  };

  public lineChartData_2: ChartConfiguration<'line'>['data'] = {
    labels: graphData.en.t,
    datasets: [
      {
        data: graphData.en.rate,
        label: 'Enteral',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba(255,0,0,0.3)'
      }
    ]
  };

  public lineChartData_3: ChartConfiguration<'line'>['data'] = {
    labels: graphData.pn.t,
    datasets: [
      {
        data: graphData.pn.rate,
        label: 'Insulin sensitivity',
        fill: true,
        tension: 0.5,
        borderColor: 'rgba( 0, 255, 255, 1 )',
        backgroundColor: 'rgba(0,0,0,0)',
        pointBackgroundColor: 'black' 

      }
    ]
  };

  public lineChartData_4: ChartConfiguration<'line'>['data'] = {
    labels: graphData.u.t,
    datasets: [
      {
        data: graphData.u.rate,
        label: 'Insulin',
        fill: true,
        tension: 0.5,
        borderColor: 'black',
        backgroundColor: 'rgba( 127, 255, 212, 1 )',
        pointBackgroundColor: 'rgba( 127, 255, 212, 1 )'
      }
    ]
  };

  public lineChartOptions: ChartOptions<'line'> = {
    responsive: false
  };
  public lineChartLegend = true;
}
