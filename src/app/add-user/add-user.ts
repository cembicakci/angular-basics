import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Crud } from '../Services/crud';

@Component({
  selector: 'app-add-user',
  imports: [ReactiveFormsModule],
  templateUrl: './add-user.html',
  styleUrl: './add-user.scss'
})
export class AddUser {

  addUserForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private crud: Crud) {

    this.addUserForm = this.fb.group({
      name: [''],
      username: [''],
      email: ['']
    })
  }


  onSubmit() { 
    this.crud.postData(this.addUserForm.value).subscribe(response => {
      console.log('User added successfully', response);
      this.router.navigateByUrl('crud');
    }, error => {
      console.error('Error adding user', error);
    });
  }

  onCancel() {
     this.router.navigateByUrl('crud');
  }
}
