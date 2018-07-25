import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-of-site',
  templateUrl: './index-of-site.component.html',
  styleUrls: ['./index-of-site.component.css']
})
export class IndexOfSiteComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  SignIn() {
      this.router.navigate(['login']);
  }

  SignUp() {
    this.router.navigate(['logup']);
  }

}
