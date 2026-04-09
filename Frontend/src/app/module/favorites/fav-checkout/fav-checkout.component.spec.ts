import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavCheckoutComponent } from './fav-checkout.component';

describe('FavCheckoutComponent', () => {
  let component: FavCheckoutComponent;
  let fixture: ComponentFixture<FavCheckoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FavCheckoutComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FavCheckoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
