import {Component, OnInit} from '@angular/core';
import {UserService} from '../user.service';
import {forEach} from '@angular/router/src/utils/collection';


@Component({
  selector: 'app-home-for-dentist',
  templateUrl: './home-for-dentist.component.html',
  styleUrls: ['./home-for-dentist.component.css']
})


export class HomeForDentistComponent implements OnInit {
  public users: [{
    login: string,
    email: string,
    role: string
  }
    ];

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
      }
      ,
      {
        login: 'user3',
        email: 'tgetger',
        role: 'grtge'
      }
      ,
      {
        login: 'user4',
        email: 'wr4t3',
        role: 'ver'
      }
    ];
  }


  ngOnInit() {
  }
}
