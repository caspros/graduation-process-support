import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThesisConfirmationComponent } from './thesis-confirmation.component';

describe('ThesisConfirmationComponent', () => {
  let component: ThesisConfirmationComponent;
  let fixture: ComponentFixture<ThesisConfirmationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThesisConfirmationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThesisConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
