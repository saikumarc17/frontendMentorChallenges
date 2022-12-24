import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingtabComponent } from './ratingtab.component';

describe('RatingtabComponent', () => {
  let component: RatingtabComponent;
  let fixture: ComponentFixture<RatingtabComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingtabComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RatingtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
