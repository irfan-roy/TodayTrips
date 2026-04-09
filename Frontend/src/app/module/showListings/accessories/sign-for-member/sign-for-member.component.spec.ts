import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignForMemberComponent } from './sign-for-member.component';

describe('SignForMemberComponent', () => {
  let component: SignForMemberComponent;
  let fixture: ComponentFixture<SignForMemberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SignForMemberComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignForMemberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
