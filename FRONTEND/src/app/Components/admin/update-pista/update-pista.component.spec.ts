import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePistaComponent } from './update-pista.component';

describe('UpdatePistaComponent', () => {
  let component: UpdatePistaComponent;
  let fixture: ComponentFixture<UpdatePistaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePistaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdatePistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
