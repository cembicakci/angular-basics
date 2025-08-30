import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-built-in-pipes',
  imports: [CommonModule],
  templateUrl: './built-in-pipes.html',
  styleUrl: './built-in-pipes.scss'
})
export class BuiltInPipes {
  angularPipes: string = "use pipes to format data in an angular templates";
  personData = { name: "John Doe", age: 30, city: 'New York' };
  currentDate: Date = new Date();
}
