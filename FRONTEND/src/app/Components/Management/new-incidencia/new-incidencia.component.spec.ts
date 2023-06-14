import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewIncidenciaComponent } from './new-incidencia.component';

describe('NewIncidenciaComponent', () => {
  let component: NewIncidenciaComponent;
  let fixture: ComponentFixture<NewIncidenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewIncidenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewIncidenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
