import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {UserService} from '../user.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-log-up-form',
  templateUrl: './log-up-form.component.html',
  styleUrls: ['./log-up-form.component.css']
})
export class LogUpFormComponent implements OnInit {
  private userLogin;

  constructor(private router: Router,
              private user: UserService,
              public flashMessageService: FlashMessagesService) { }

  ngOnInit() {
  }

  logUpUser(login: string, email: string, role: string, password: string, confirmPassword: string) {
    console.log(login);
    let existingUsers = JSON.parse(localStorage.getItem('allUsers'));
    if (existingUsers == null) { existingUsers = []; }

    let user;
    // userLogin = e.target.elements[0].value;
    // userEmail = e.target.elements[1].value;
    // userRole = e.target.elements[2].value;
    // userPassword = e.target.elements[3].value;
    // userConfirmPassword = e.target.elements[4].value;
    //if (this.CheckingTheUserForUniqueness(existingUsers, userLogin)) {
      if (password === confirmPassword) {
        user = {
          'login': login,
          'email': email,
          'role': role,
          'password': password,
        };
        user = JSON.stringify(user);
        localStorage.setItem('user', 'user');
        // Save allEntries back to local storage
        existingUsers.push(user);
        localStorage.setItem('allUsers', JSON.stringify(existingUsers));
        // this.flashMessageService.show('We are in about component!', { cssClass: 'alert-success', timeout: 1000 });
        this.flashMessageService.show('The user of ' + login + 'has been successfully registered',
          { cssClass: 'alert-success', timeout: 3000 });
        switch (role) {
          case 'Dentist': {
            this.router.navigate(['home-for-dentist']);
            break;
          }
          case 'Patient': {
            this.router.navigate(['home-for-patient']);
            break;
          }
          case 'Nurse': {
            this.router.navigate(['home-for-norse']);
            break;
          }
          case 'Intern': {
            this.router.navigate(['home-for-intern']);
            break;
          }
        }
      } else {
        this.flashMessageService.show('Password and confirm password must be the same', { cssClass: 'alert-success', timeout: 3000 });
      }
    //}
  }

  CheckingTheUserForUniqueness (existingUsers, userLogin) {
    for (let i = 0; i < existingUsers.length; i++) {
      if (existingUsers[i].login === userLogin) {
        alert('A user with this name already exists');
        return false;
      }
    }
    return true;
  }
}
