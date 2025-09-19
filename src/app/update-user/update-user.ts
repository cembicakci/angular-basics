import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Crud } from '../Services/crud';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-update-user',
  imports: [ReactiveFormsModule],
  templateUrl: './update-user.html',
  styleUrl: './update-user.scss'
})
export class UpdateUser implements OnInit {
  parentProperty: string = "Update-user : Kindly update the user details.";

  updateUserForm: FormGroup;

  constructor(private crud: Crud, private activeRoute: ActivatedRoute, private router: Router, private fb: FormBuilder) {
    this.updateUserForm = this.fb.group({
      id: [''],
      name: [''],
      username: [''],
      email: ['']
    })
  }

  userData: any;
  userId: { uid: number } = { uid: 0 }

  ngOnInit(): void {
    this.userId = {
      uid: this.activeRoute.snapshot.params['id']
    }

    this.crud.getDataById(this.userId.uid).subscribe(data => {
      this.userData = data;
      this.updateUserForm.setValue({ id: this.userData.id, name: this.userData.name, username: this.userData.username, email: this.userData.email });
    });
  }

  onSubmit() {
    this.crud.putDataById(this.userId.uid, this.updateUserForm.value).subscribe(res => {
      this.router.navigateByUrl('crud');
    })
  }

  onCancel() {
    this.router.navigateByUrl('crud');
  }

}
