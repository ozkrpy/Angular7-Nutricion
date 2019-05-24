import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioDietasComponent } from './inicio-dietas.component';

describe('InicioDietasComponent', () => {
  let component: InicioDietasComponent;
  let fixture: ComponentFixture<InicioDietasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioDietasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioDietasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
