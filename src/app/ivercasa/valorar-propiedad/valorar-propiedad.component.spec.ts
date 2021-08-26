import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValorarPropiedadComponent } from './valorar-propiedad.component';

describe('ValorarPropiedadComponent', () => {
  let component: ValorarPropiedadComponent;
  let fixture: ComponentFixture<ValorarPropiedadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValorarPropiedadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ValorarPropiedadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
