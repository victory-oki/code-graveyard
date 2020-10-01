import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OtpFormStyleComponent } from './otp-form-style.component';

describe('OtpFormStyleComponent', () => {
  let component: OtpFormStyleComponent;
  let fixture: ComponentFixture<OtpFormStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OtpFormStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OtpFormStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
