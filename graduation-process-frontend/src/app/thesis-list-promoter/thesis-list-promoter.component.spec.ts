import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThesisListPromoterComponent } from './thesis-list-promoter.component';

describe('ThesisListPromoterComponent', () => {
  let component: ThesisListPromoterComponent;
  let fixture: ComponentFixture<ThesisListPromoterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThesisListPromoterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThesisListPromoterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
