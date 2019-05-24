import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaNoExisteComponent } from './pagina-no-existe.component';

describe('PaginaNoExisteComponent', () => {
  let component: PaginaNoExisteComponent;
  let fixture: ComponentFixture<PaginaNoExisteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaginaNoExisteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaginaNoExisteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
