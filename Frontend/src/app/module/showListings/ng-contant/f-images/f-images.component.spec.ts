import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FImagesComponent } from './f-images.component';

describe('FImagesComponent', () => {
  let component: FImagesComponent;
  let fixture: ComponentFixture<FImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FImagesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
