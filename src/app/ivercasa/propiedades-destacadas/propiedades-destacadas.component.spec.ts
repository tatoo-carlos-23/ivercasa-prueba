import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PropiedadesDestacadasComponent } from './propiedades-destacadas.component';

describe('PropiedadesDestacadasComponent', () => {
  let component: PropiedadesDestacadasComponent;
  let fixture: ComponentFixture<PropiedadesDestacadasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PropiedadesDestacadasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PropiedadesDestacadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
