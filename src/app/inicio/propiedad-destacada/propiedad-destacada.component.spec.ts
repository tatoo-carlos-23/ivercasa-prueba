import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropiedadDestacadaComponent } from './propiedad-destacada.component';

describe('PropiedadDestacadaComponent', () => {
  let component: PropiedadDestacadaComponent;
  let fixture: ComponentFixture<PropiedadDestacadaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropiedadDestacadaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropiedadDestacadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
