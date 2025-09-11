import { Component, OnInit } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { User } from '../user';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-template-driven-form',
  imports: [FormsModule, JsonPipe],
  templateUrl: './template-driven-form.html',
  styleUrl: './template-driven-form.scss'
})
export class TemplateDrivenForm implements OnInit {
  user: User = {};
  onSubmit(form: NgForm) {
    console.log(form.value);
  };
  ngOnInit(): void {
    this.user = {
      firstName: 'Cem',
      lastName: 'Bicakci',
      email: 'test@gmail.com',
      password: '12345',
      isCheck: true
    };
  };
  setValue(userForm: NgForm) {
    let obj = {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@doe.com',
      password: '12345',
      isCheck: false,
    }
    userForm.setValue(obj);
  }
}
