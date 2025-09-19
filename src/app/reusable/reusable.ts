
import { Component, Input , HostListener} from '@angular/core';

@Component({
  selector: 'app-reusable',
  imports: [],
  templateUrl: './reusable.html',
  styleUrl: './reusable.scss'
})
export class Reusable {

  @Input() childProperty: string = "Hello All : Welcome to FED Learning."

  @HostListener('click')
  onClick(){
    console.log("Button clicked.");
  }
}
