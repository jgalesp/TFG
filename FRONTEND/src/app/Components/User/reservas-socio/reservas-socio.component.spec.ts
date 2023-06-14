import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservasSocioComponent } from './reservas-socio.component';

describe('ReservasSocioComponent', () => {
  let component: ReservasSocioComponent;
  let fixture: ComponentFixture<ReservasSocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservasSocioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservasSocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
