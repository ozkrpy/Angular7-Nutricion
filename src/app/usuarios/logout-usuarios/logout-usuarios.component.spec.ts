import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoutUsuariosComponent } from './logout-usuarios.component';

describe('LogoutUsuariosComponent', () => {
  let component: LogoutUsuariosComponent;
  let fixture: ComponentFixture<LogoutUsuariosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogoutUsuariosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoutUsuariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
