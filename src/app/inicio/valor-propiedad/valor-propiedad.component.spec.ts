import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorPropiedadComponent } from './valor-propiedad.component';

describe('ValorPropiedadComponent', () => {
  let component: ValorPropiedadComponent;
  let fixture: ComponentFixture<ValorPropiedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValorPropiedadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValorPropiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
