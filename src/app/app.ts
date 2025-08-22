import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { User } from './user/user';
import { DataBinding } from './data-binding/data-binding';
import { Directives } from './directives/directives';
import { StructuralDirective } from './structural-directive/structural-directive';
import { StructuralDirectiveNgFor } from './structural-directive-ng-for/structural-directive-ng-for';
import { StructuralDirectiveNgswitch } from './structural-directive-ngswitch/structural-directive-ngswitch';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    // User, 
    // DataBinding, 
    // Directives,
    // StructuralDirective
    // StructuralDirectiveNgFor,
    StructuralDirectiveNgswitch
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('angular-basics');
}
