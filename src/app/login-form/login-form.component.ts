import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  logInUser(e) {
    let existingUsers, currentUserLogin, currentUserPassword, findUser;
    existingUsers = JSON.parse(localStorage.getItem('allUsers'));
    currentUserLogin = e.target.elements[0].value;
    currentUserPassword = e.target.elements[1].value;
    findUser = false;
    if (existingUsers == null) {
      alert('You are not registered, sign up and try again');
    }
    for (let i = 0; i < existingUsers.length; i++) {
      if (existingUsers[i].login === currentUserLogin) {
        if (existingUsers[i].password === currentUserPassword) {
          alert('Sign in successfully');
        } else {
          alert('Password entered incorrectly');
        }
        findUser = true;
      }
    }
    if (findUser === false) {
      alert('You are not registered, sign up and try again');
    }
  }

}
