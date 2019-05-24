import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuNavegacionLateralComponent } from './menu-navegacion-lateral.component';

describe('MenuNavegacionLateralComponent', () => {
  let component: MenuNavegacionLateralComponent;
  let fixture: ComponentFixture<MenuNavegacionLateralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuNavegacionLateralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuNavegacionLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
