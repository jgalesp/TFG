import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewPistaComponent } from './new-pista.component';

describe('NewPistaComponent', () => {
  let component: NewPistaComponent;
  let fixture: ComponentFixture<NewPistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewPistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewPistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
