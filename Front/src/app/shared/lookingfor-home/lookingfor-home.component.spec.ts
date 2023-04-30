import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LookingforHomeComponent } from './lookingfor-home.component';

describe('LookingforHomeComponent', () => {
  let component: LookingforHomeComponent;
  let fixture: ComponentFixture<LookingforHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LookingforHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LookingforHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
