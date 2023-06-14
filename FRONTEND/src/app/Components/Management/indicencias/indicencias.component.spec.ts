import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndicenciasComponent } from './indicencias.component';

describe('IndicenciasComponent', () => {
  let component: IndicenciasComponent;
  let fixture: ComponentFixture<IndicenciasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndicenciasComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IndicenciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
