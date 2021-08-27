import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarXComponent } from './navbar-x.component';

describe('NavbarXComponent', () => {
  let component: NavbarXComponent;
  let fixture: ComponentFixture<NavbarXComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarXComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarXComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
