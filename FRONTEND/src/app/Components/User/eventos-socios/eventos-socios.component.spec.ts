import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventosSociosComponent } from './eventos-socios.component';

describe('EventosSociosComponent', () => {
  let component: EventosSociosComponent;
  let fixture: ComponentFixture<EventosSociosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EventosSociosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventosSociosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
