import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayAdComponent } from './display-ad.component';

describe('DisplayAdComponent', () => {
  let component: DisplayAdComponent;
  let fixture: ComponentFixture<DisplayAdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplayAdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayAdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
