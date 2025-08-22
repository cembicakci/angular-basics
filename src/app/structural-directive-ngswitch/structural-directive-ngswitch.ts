import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive-ngswitch',
  imports: [CommonModule],
  templateUrl: './structural-directive-ngswitch.html',
  styleUrl: './structural-directive-ngswitch.scss'
})
export class StructuralDirectiveNgswitch {
  grade: number = 0;

  set(x: number) {
    this.grade = x;
  }
}
