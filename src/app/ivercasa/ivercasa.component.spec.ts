import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IvercasaComponent } from './ivercasa.component';

describe('IvercasaComponent', () => {
  let component: IvercasaComponent;
  let fixture: ComponentFixture<IvercasaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IvercasaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IvercasaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
