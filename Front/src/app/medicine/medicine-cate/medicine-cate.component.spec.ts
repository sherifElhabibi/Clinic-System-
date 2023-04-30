import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicineCateComponent } from './medicine-cate.component';

describe('MedicineCateComponent', () => {
  let component: MedicineCateComponent;
  let fixture: ComponentFixture<MedicineCateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicineCateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedicineCateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
