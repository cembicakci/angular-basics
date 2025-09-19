import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Child } from '../child/child';
import { Sibling1 } from '../sibling1/sibling1';
import { Sibling2 } from '../sibling2/sibling2';
import { Reusable } from '../reusable/reusable';

@Component({
  selector: 'app-parent',
  imports: [Child, Sibling1, Sibling2, Reusable],
  templateUrl: './parent.html',
  styleUrl: './parent.scss'
})
export class Parent implements AfterViewInit {

  parentProperty: string = 'Hello from Parent';
  receiveMessage: string = "";
  sibling1Data: any;
  sibling2Data: any;

  @ViewChild('reusable') reusableComp: Reusable = new Reusable();

  ngAfterViewInit(): void {
    this.reusableComp.childProperty = "Greeting from Parent Component."
  }

  receiveData(data: any) {
    this.receiveMessage = data;
  }

  receiveEvent1(data: any) {
    this.sibling1Data = data;
    console.log(this.sibling1Data);
  }

  receiveEvent2(data: any) {
    this.sibling2Data = data;
  }
}
