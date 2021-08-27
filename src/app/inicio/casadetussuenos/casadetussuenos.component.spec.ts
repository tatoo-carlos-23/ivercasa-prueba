import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CasadetussuenosComponent } from './casadetussuenos.component';

describe('CasadetussuenosComponent', () => {
  let component: CasadetussuenosComponent;
  let fixture: ComponentFixture<CasadetussuenosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CasadetussuenosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CasadetussuenosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
