import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  msgTitle: string = 'Default title';
  msg: string = 'Default string';
  constructor() { }

  ngOnInit() {
  }

}
