import { Component, OnInit } from '@angular/core';
import { Crud } from '../crud';
import { IUser } from '../iuser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crud-operations',
  imports: [CommonModule],
  templateUrl: './crud-operations.html',
  styleUrl: './crud-operations.scss'
})
export class CrudOperations implements OnInit {

  apiData: IUser[] = [];

  constructor(private crud: Crud) { }

  ngOnInit(): void {
    this.getAllData();
  }

  getAllData() {
    this.crud.getData().subscribe(data => {
      this.apiData = data;
      console.log(this.apiData);
    });
  }

}
