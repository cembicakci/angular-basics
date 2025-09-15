import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Crud } from '../crud';
import { IUser } from '../iuser';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crud-operations',
  imports: [CommonModule],
  templateUrl: './crud-operations.html',
  styleUrls: ['./crud-operations.scss']   
})
export class CrudOperations implements OnInit {

  apiData: IUser[] = [];

  constructor(
    private crud: Crud, 
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.crud.getData().subscribe(res => {
      this.apiData = res;
      this.cdr.detectChanges();
    })
  }

  addNewUser() {
    this.router.navigateByUrl('adduser');
  }

  onUpdate(id: number) {
    this.router.navigate(['updateuser', id]);
  }

  onView(id: number) {
    this.router.navigate(['viewuser', id]);
  }
  onDelete(id: number) {
    this.crud.deleteDataById(id).subscribe(res => {
      this.getAllData();
      alert('User deleted successfully.');
    })
  }
}
