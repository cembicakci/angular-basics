import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StructuralDirectiveNgswitch } from './structural-directive-ngswitch';

describe('StructuralDirectiveNgswitch', () => {
  let component: StructuralDirectiveNgswitch;
  let fixture: ComponentFixture<StructuralDirectiveNgswitch>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StructuralDirectiveNgswitch]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StructuralDirectiveNgswitch);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
