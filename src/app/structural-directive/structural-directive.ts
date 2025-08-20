import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-structural-directive',
  imports: [CommonModule, FormsModule],
  templateUrl: './structural-directive.html',
  styleUrl: './structural-directive.scss'
})
export class StructuralDirective {
  isChecked: boolean = false;
  isInputBox: boolean = true;
  input1: string = '';
  input2: string = '';

  onClick() {
    this.isChecked = !this.isChecked;
  }

  showField() {
    this.isInputBox = true;
  }

  hideField() {
    this.isInputBox = false;
  }
}
