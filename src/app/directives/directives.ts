import { Component } from '@angular/core';
import { NgClass, NgStyle } from '@angular/common';
import { DataBinding } from '../data-binding/data-binding';

@Component({
  selector: 'app-directives',
  standalone: true,
  imports: [
    NgClass,
    NgStyle
  ],
  templateUrl: './directives.html',
  styleUrls: ['./directives.scss']
})
export class Directives {
  isLoggedIn = true;
  items = ['Angular', 'React', 'Vue'];
  selectedFramework = 'Angular';
  isActive = true;
}
