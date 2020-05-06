import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomBannerComponent } from './custom-banner.component';

describe('CustomBannerComponent', () => {
  let component: CustomBannerComponent;
  let fixture: ComponentFixture<CustomBannerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomBannerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
