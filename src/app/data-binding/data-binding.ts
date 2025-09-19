import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { SharedData } from '../Services/shared-data';

@Component({
  selector: 'app-data-binding',
  imports: [FormsModule],
  templateUrl: './data-binding.html',
  styleUrl: './data-binding.scss'
})
export class DataBinding {
  name: string = 'Angular Basics';
  topic: string = 'Data Binding';
  image: string = "https://picsum.photos/400/400";

  random = "";
  userData: any;

  constructor(private _sharedData: SharedData) {
    this.userData = this._sharedData.userData;
  }

  onSave() {
    console.log('Data saved successfully!');
  }

  onChange() {
    alert('Country has changed!');
  }

}
