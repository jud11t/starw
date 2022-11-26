import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../core/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: string = "";
  password: string = "";

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }

  onLoginClicked(): void{
    let loginSuccess = this.loginService.Login(this.username, this.password);
    if(loginSuccess){
      this.router.navigate(['overview']);
    }
  }

}
