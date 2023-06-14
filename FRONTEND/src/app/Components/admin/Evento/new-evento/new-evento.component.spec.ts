import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewEventoComponent } from './new-evento.component';

describe('NewEventoComponent', () => {
  let component: NewEventoComponent;
  let fixture: ComponentFixture<NewEventoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewEventoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
