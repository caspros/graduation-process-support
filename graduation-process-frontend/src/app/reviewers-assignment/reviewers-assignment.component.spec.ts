import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviewersAssignmentComponent } from './reviewers-assignment.component';

describe('ReviewersAssignmentComponent', () => {
  let component: ReviewersAssignmentComponent;
  let fixture: ComponentFixture<ReviewersAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReviewersAssignmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviewersAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
