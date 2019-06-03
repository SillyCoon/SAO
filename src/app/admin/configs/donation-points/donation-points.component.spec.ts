import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationPointsComponent } from './donation-points.component';

describe('DonationPointsComponent', () => {
  let component: DonationPointsComponent;
  let fixture: ComponentFixture<DonationPointsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DonationPointsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationPointsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
