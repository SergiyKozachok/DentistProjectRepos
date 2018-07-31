import { Component, OnInit, ViewChild, ElementRef, AfterViewInit, ViewChildren, QueryList } from '@angular/core';
import { ChildComponent } from '../child/child.component';
import {HoverDirectiveDirective} from '../../Directives/hover-directive.directive';
import {Child2Component} from "../child2/child2.component";

@Component({
  selector: 'app-example',
  templateUrl: './example.component.html',
  styleUrls: ['./example.component.css']
})
export class ExampleComponent implements OnInit, AfterViewInit {
  @ViewChild(ChildComponent)
  child: ChildComponent;
  @ViewChild(HoverDirectiveDirective)
  private hoverDirective: HoverDirectiveDirective;
  @ViewChildren(Child2Component)
  private childSecond: QueryList<ChildComponent>;
  private childSecondArray: Array<ChildComponent>;
  public selectorColor: string;
  @ViewChild('fName')
  private elemFName: ElementRef;
  @ViewChild('lName')
  private elemLName: ElementRef;
  constructor() { }

  ngOnInit() {
  }

  sendMsg(): void {
    this.child.msgTitle = 'Child A title from parent';
    this.child.msg = 'Message from child to parent';
    this.hoverDirective.appHoverDirective = this.selectorColor;
  }

  ngAfterViewInit(): void {
    this.elemFName.nativeElement.style.backgroundColor = 'green';
    this.elemFName.nativeElement.style.color = 'red';

    this.elemLName.nativeElement.style.backgroundColor = 'silver';
    this.elemLName.nativeElement.style.color = 'blue';

    this.childSecondArray = this.childSecond.toArray();
  }

  sendMessageToChildSecond(): void {
    this.childSecondArray[0].msgTitle = 'Title set by parent';
    this.childSecondArray[0].msg = 'Message send by parent';
  }
}
