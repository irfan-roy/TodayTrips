import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceNameComponent } from './place-name.component';

describe('PlaceNameComponent', () => {
  let component: PlaceNameComponent;
  let fixture: ComponentFixture<PlaceNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PlaceNameComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlaceNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
