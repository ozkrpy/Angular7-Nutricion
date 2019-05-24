import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioPacientesComponent } from './inicio-pacientes.component';

describe('InicioPacientesComponent', () => {
  let component: InicioPacientesComponent;
  let fixture: ComponentFixture<InicioPacientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioPacientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioPacientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
