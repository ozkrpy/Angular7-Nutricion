import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevaDietaComponent } from './nueva-dieta.component';

describe('NuevaDietaComponent', () => {
  let component: NuevaDietaComponent;
  let fixture: ComponentFixture<NuevaDietaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevaDietaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevaDietaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
