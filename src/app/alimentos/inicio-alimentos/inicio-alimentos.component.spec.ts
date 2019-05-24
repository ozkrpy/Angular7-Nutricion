import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioAlimentosComponent } from './inicio-alimentos.component';

describe('InicioAlimentosComponent', () => {
  let component: InicioAlimentosComponent;
  let fixture: ComponentFixture<InicioAlimentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioAlimentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioAlimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
