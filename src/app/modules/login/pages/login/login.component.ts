import { Component } from '@angular/core';
import {LoginService} from '../../../../core/services/login.service';
import {Router} from '@angular/router';
import { CustomToastService } from 'src/app/core/services/custom-toast.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent{

  constructor(private loginService: LoginService, private route: Router, private customToast: CustomToastService) { }

  login(userData: any): any {
    this.loginService.getUser(userData.user, userData.password).subscribe((res) => {
      if(res.length > 0) {
        this.route.navigate(['home']);
      } else {
        this.customToast.error();
      }
    });
  }
}
