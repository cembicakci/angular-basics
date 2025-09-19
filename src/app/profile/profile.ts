import { Component, OnInit } from '@angular/core';
import { SharedData } from '../Services/shared-data';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  imports: [CommonModule],
  templateUrl: './profile.html',
  styleUrl: './profile.scss'
})
export class Profile implements OnInit {

  userData: any;
  isEligible: boolean = false;
  apiData: any;

  constructor(private _sharedData: SharedData) {
    this.userData = this._sharedData.userData;
    this.isEligible = this._sharedData.isEligibleForSubscription();
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this._sharedData.getUserData().subscribe(data => {
      this.apiData = data;
      console.log(this.apiData);
    });
  }

}
