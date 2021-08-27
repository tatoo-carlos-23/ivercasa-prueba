import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropiedadDestacadasComponent } from './propiedad-destacadas.component';

describe('PropiedadDestacadasComponent', () => {
  let component: PropiedadDestacadasComponent;
  let fixture: ComponentFixture<PropiedadDestacadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropiedadDestacadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropiedadDestacadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
