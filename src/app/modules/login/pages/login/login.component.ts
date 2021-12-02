import { Component } from '@angular/core';
import {LoginService} from '../../../../core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  constructor(private loginService: LoginService) { }

  login(userData: any): any {
    this.loginService.getUser(userData.email, userData.password).subscribe((res) => {
      console.log(res);
    });
  }
}
