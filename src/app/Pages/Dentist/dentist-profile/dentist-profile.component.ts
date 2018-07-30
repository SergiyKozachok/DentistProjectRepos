import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dentist-profile',
  templateUrl: './dentist-profile.component.html',
  styleUrls: ['./dentist-profile.component.css']
})
export class DentistProfileComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() dentist;
}
