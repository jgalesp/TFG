import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalReservasComponent } from './total-reservas.component';

describe('TotalReservasComponent', () => {
  let component: TotalReservasComponent;
  let fixture: ComponentFixture<TotalReservasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalReservasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalReservasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
