import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginService } from './core/login.service';
import { UserService } from './core/user.service';
import { LoginComponent } from './login/login.component';
import { OverviewComponent } from './overview/overview.component';
import { UserOverviewComponent } from './overview/user-overview/user-overview.component';
import { PatientDataComponent } from './overview/patient-data/patient-data.component';
import { PatientTreatmentComponent } from './overview/patient-data/patient-treatment/patient-treatment/patient-treatment.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    OverviewComponent,
    UserOverviewComponent,
    PatientDataComponent,
    PatientTreatmentComponent,
    PatientTreatmentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    NgChartsModule
  ],
  providers: [
    LoginService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
