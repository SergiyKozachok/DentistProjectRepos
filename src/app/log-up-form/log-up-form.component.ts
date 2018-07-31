import {Component, OnInit, Inject } from '@angular/core';
import {Router} from '@angular/router';
import {UserService} from '../services/user.service';
import {FlashMessagesService} from 'angular2-flash-messages';


@Component({
  selector: 'app-log-up-form',
  templateUrl: './log-up-form.component.html',
  styleUrls: ['./log-up-form.component.css']
})
export class LogUpFormComponent implements OnInit {
  login: string;
  email: string;
  role: string;
  password: string;
  confirmPassword: string;

  constructor(private router: Router,
              private userService: UserService,
              public flashMessageService: FlashMessagesService) {
  }

  ngOnInit() {
  }

  logUpUser() {
    let existingUsers = JSON.parse(localStorage.getItem('allUsers'));
    if (existingUsers == null) {
      existingUsers = [];
    }

    let currentUser;
    if (this.password === this.confirmPassword) {
      currentUser = {
        'login': this.login,
        'email': this.email,
        'role': this.role,
        'password': this.password,
      };

      const User = JSON.stringify(currentUser);
      localStorage.setItem('user', User);
      // Save allEntries back to local storage
      existingUsers.push(currentUser);
      localStorage.setItem('allUsers', JSON.stringify(existingUsers));
      // this.flashMessageService.show('We are in about component!', { cssClass: 'alert-success', timeout: 1000 });
      this.flashMessageService.show('The user of ' + this.login + 'has been successfully registered',
        {cssClass: 'alert-success', timeout: 3000});
      this.router.navigate(['login']);
    } else {
      this.flashMessageService.show('Password and confirm password must be the same', {
        cssClass: 'alert-success',
        timeout: 3000
      });
    }
  }

  CheckingTheUserForUniqueness(existingUsers) {
    for (let i = 0; i < existingUsers.length; i++) {
      if (existingUsers[i].login === this.login) {
        alert('A user with this name already exists');
        return false;
      }
    }
    return true;
  }
}
