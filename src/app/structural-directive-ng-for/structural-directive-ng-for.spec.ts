import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectiveNgFor } from './structural-directive-ng-for';

describe('StructuralDirectiveNgFor', () => {
  let component: StructuralDirectiveNgFor;
  let fixture: ComponentFixture<StructuralDirectiveNgFor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralDirectiveNgFor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDirectiveNgFor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
