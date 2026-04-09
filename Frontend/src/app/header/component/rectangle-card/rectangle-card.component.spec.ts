import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RectangleCardComponent } from './rectangle-card.component';

describe('RectangleCardComponent', () => {
  let component: RectangleCardComponent;
  let fixture: ComponentFixture<RectangleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RectangleCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RectangleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
