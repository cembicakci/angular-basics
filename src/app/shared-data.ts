import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedData {

  API_URL = 'https://jsonplaceholder.typicode.com/users';

  constructor(private _http: HttpClient) {

  }

  getUserData() {
    return this._http.get(this.API_URL);
  }

  userData: {
    id: number;
    name: string;
    username?: string;
    email: string;
    subscriptions?: string;
  } = {
      id: 1,
      name: "John Doeeman",
      username: "johndoe",
      email: "johndoe@gmail.com",
      subscriptions: "Basic"
    }

  isEligibleForSubscription() {
    return this.userData.subscriptions === 'Basic' && this.userData.email.endsWith('@gmail.com')
  }

}
