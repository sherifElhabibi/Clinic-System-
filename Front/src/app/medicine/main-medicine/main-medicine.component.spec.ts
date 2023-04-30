import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMedicineComponent } from './main-medicine.component';

describe('MainMedicineComponent', () => {
  let component: MainMedicineComponent;
  let fixture: ComponentFixture<MainMedicineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainMedicineComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainMedicineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
