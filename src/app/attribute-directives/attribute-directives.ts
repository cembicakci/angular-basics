import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-attribute-directives',
  imports: [CommonModule, FormsModule],
  templateUrl: './attribute-directives.html',
  styleUrl: './attribute-directives.scss'
})
export class AttributeDirectives {
  textColor: string = 'text-success';
  isTextGreen: boolean = false;
  userClass: string = '';
  styleColor: string = 'orange';

  updateColor(ngStyleColor: string) {
    this.styleColor = ngStyleColor;
  }

  customClass: any = {
    'color': 'pink',
    'font-size': '20px',
    'font-weight': 'bold',
    'height': '150px',
    'width': '400px',
    'border': '2px solid black',
  }
}