import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-structural-directive-ng-for',
  imports: [CommonModule],
  templateUrl: './structural-directive-ng-for.html',
  styleUrl: './structural-directive-ng-for.scss'
})
export class StructuralDirectiveNgFor {
  employees: any[] = [
    { empName: 'John', empNumber: 100, empEmail: 'john@gmail.com', empDept: 'IT' },
    { empName: 'Bob', empNumber: 101, empEmail: 'bob@gmail.com', empDept: 'HR' },
    { empName: 'Smith', empNumber: 102, empEmail: 'smith@gmail.com', empDept: 'Finance' },
  ];

  companyList: string[] = ['Google', 'Microsoft', 'Apple', 'Amazon', 'Facebook'];
}
