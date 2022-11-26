import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { OverviewComponent } from './overview/overview.component';
import { PatientDataComponent } from './overview/patient-data/patient-data.component';
import { PatientTreatmentComponent } from './overview/patient-data/patient-treatment/patient-treatment/patient-treatment.component';
import { UserOverviewComponent } from './overview/user-overview/user-overview.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'overview', component: OverviewComponent },
  { path: 'user-overview', component: UserOverviewComponent },
  { path: 'overview/:hospitalId', component: PatientDataComponent },
  { path: 'overview-treatment/:hospitalId', component: PatientTreatmentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
