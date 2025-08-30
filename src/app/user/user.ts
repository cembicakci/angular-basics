import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user',
  imports: [RouterLink],
  templateUrl: './user.html',
  styleUrl: './user.scss'
})
export class User {

  constructor(private router: Router) {

  }

  loginData() {
    this.router.navigate(['/structural-directive']);
  }
}

