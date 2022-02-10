import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewListStudentComponent } from './review-list-student.component';

describe('ReviewListStudentComponent', () => {
  let component: ReviewListStudentComponent;
  let fixture: ComponentFixture<ReviewListStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewListStudentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewListStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
