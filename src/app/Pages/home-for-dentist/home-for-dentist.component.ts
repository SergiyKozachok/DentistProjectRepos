import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {forEach} from '@angular/router/src/utils/collection';
import { FlashMessagesService } from 'angular2-flash-messages';



@Component({
  selector: 'app-home-for-dentist',
  templateUrl: './home-for-dentist.component.html',
  styleUrls: ['./home-for-dentist.component.css']
})


export class HomeForDentistComponent implements OnInit {
  username  = 'codedamn';

  public users: {
    login: string,
    email: string,
    role: string
  }[];

  constructor(private user: UserService) {
    this.users = [
      {
        login: 'user1',
        email: 'user1@fgf',
        role: 'fbtd'
      },
      {
        login: 'user2',
        email: 'vrvdsf',
        role: 'dgte'
      },
      {
        login: 'user3',
        email: 'tgetger',
        role: 'grtge'
      },
      {
        login: 'user4',
        email: 'wr4t3',
        role: 'ver'
      }
    ];
  }


  ngOnInit() {
  }

  addUser(e) {
    let user, userLogin, userEmail, userRole;
    userLogin = e.target.elements[0].value;
    userEmail = e.target.elements[1].value;
    userRole = e.target.elements[2].value;

    user = {
      'login': userLogin,
      'email': userEmail,
      'role': userRole
    };
    this.users.push(user);
  }
}
