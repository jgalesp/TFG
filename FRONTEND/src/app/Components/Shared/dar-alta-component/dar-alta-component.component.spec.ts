import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DarAltaComponentComponent } from './dar-alta-component.component';

describe('DarAltaComponentComponent', () => {
  let component: DarAltaComponentComponent;
  let fixture: ComponentFixture<DarAltaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DarAltaComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DarAltaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
