import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddThesisPromoterComponent } from './add-thesis-promoter.component';

describe('AddThesisPromoterComponent', () => {
  let component: AddThesisPromoterComponent;
  let fixture: ComponentFixture<AddThesisPromoterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddThesisPromoterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddThesisPromoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
