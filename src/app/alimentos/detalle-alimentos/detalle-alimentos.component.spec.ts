import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleAlimentosComponent } from './detalle-alimentos.component';

describe('DetalleAlimentosComponent', () => {
  let component: DetalleAlimentosComponent;
  let fixture: ComponentFixture<DetalleAlimentosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetalleAlimentosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalleAlimentosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
