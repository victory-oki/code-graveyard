import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicPricingFormComponent } from './dynamic-pricing-form.component';

describe('DynamicPricingFormComponent', () => {
  let component: DynamicPricingFormComponent;
  let fixture: ComponentFixture<DynamicPricingFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicPricingFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicPricingFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
