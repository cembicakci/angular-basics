import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedData {

  constructor() {

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
