import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './reactive-form.html',
  styleUrl: './reactive-form.scss'
})
export class ReactiveForm {
  reactiveForm: FormGroup;

  constructor() {
    this.reactiveForm = new FormGroup({
      firstName: new FormControl("", [Validators.required, Validators.minLength(3)]),
      lastName: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.email]),
      password: new FormControl("", [Validators.required, Validators.minLength(6)]),
      isChecked: new FormControl(false),

      address: new FormGroup({
        street: new FormControl("", [Validators.required]),
        city: new FormControl("", [Validators.required]),
        code: new FormControl("", [Validators.required, Validators.pattern('^[0-9]{5}$')]),
      })
    });
  }

  onSubmit() {
    if (this.reactiveForm.valid) {
      console.log("Form Values:", this.reactiveForm.value);
    } else {
      console.log("Form is invalid");
    }
  }
}
