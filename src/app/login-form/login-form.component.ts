import {Component, OnInit} from '@angular/core';
import {FlashMessagesService} from 'angular2-flash-messages';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';


@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  userLogin: string;
  userPassword: string;
  public existingUsers: { login: string, password: string, email: string, role: string } [];


  constructor(private router: Router,
              private userService: UserService,
              public flashMessageService: FlashMessagesService) {
  }

  ngOnInit() {
  }

  logInUser() {
    this.existingUsers = JSON.parse(localStorage.getItem('allUsers'));
    let findUser = false;
    console.log(this.userLogin, this.userPassword);
    console.log(this.existingUsers[0].login);
    console.log(JSON.parse(localStorage.getItem('allUsers')));
    if (this.existingUsers == null) {
      this.flashMessageService.show('You are not registered, sign up and try again',
        {cssClass: 'alert-success', timeout: 3000});
    }
    for (let i = 0; i < this.existingUsers.length; i++) {
      console.log(this.existingUsers[i].login);
      if (this.existingUsers[i].login === this.userLogin) {
        if (this.existingUsers[i].password === this.userPassword) {
          switch (this.existingUsers[i].role) {
            case 'Admin': {
              this.userService.setUserLoggedIn();
              this.router.navigate(['home']);
              break;
            }
            case 'Dentist': {
              this.userService.setUserLoggedIn();
              this.router.navigate(['home-for-dentist']);
              break;
            }
            case 'Patient': {
              this.userService.setUserLoggedIn();
              this.router.navigate(['home-for-patient']);
              break;
            }
            case 'Nurse': {
              this.userService.setUserLoggedIn();
              this.router.navigate(['home-for-norse']);
              break;
            }
            case 'Intern': {
              this.userService.setUserLoggedIn();
              this.router.navigate(['home-for-intern']);
              break;
            }
          }
          this.flashMessageService.show('Sign in successfully',
            {cssClass: 'alert-success', timeout: 3000});
        } else {
          this.flashMessageService.show('Password entered incorrectly',
            {cssClass: 'alert-success', timeout: 3000});
        }
        findUser = true;
      }
    }
    if (findUser === false) {
      this.flashMessageService.show('You are not registered, sign up and try again',
        {cssClass: 'alert-success', timeout: 3000});
    }
  }

}
