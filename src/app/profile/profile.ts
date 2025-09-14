import { Component } from '@angular/core';
import { SharedData } from '../shared-data';

@Component({
  selector: 'app-profile',
  imports: [],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile {

  userData: any;
  isEligible: boolean = false;

  constructor(private _sharedData: SharedData) {
    this.userData = this._sharedData.userData;
    this.isEligible = this._sharedData.isEligibleForSubscription();
  }

}
