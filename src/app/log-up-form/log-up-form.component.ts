import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log-up-form',
  templateUrl: './log-up-form.component.html',
  styleUrls: ['./log-up-form.component.css']
})
export class LogUpFormComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  logUpUser(e) {
    e.preventDefault();
    let existingUsers = JSON.parse(localStorage.getItem('allUsers'));
    if (existingUsers == null) { existingUsers = []; }

    let user, userLogin, userEmail, userPassword, userConfirmPassword, checking;
    userLogin = e.target.elements[0].value;
    userEmail = e.target.elements[1].value;
    userPassword = e.target.elements[2].value;
    userConfirmPassword = e.target.elements[3].value;
    checking = this.logUpUser = () => {
      this.CheckingTheUserForUniqueness(existingUsers, userLogin);
    };
      if (userPassword === userConfirmPassword) {
        user = {
          'login': userLogin,
          'email': userEmail,
          'password': userPassword,
        };
        user = JSON.stringify(user);
        localStorage.setItem('user', 'user');
        // Save allEntries back to local storage
        existingUsers.push(user);
        localStorage.setItem('allUsers', JSON.stringify(existingUsers));
        alert('The user of ' + userLogin + 'has been successfully registered');

      } else {
        alert('Password and confirm password must be the same');
      }
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
