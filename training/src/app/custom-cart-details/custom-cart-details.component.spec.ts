import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomCartDetailsComponent } from './custom-cart-details.component';

describe('CustomCartDetailsComponent', () => {
  let component: CustomCartDetailsComponent;
  let fixture: ComponentFixture<CustomCartDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomCartDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomCartDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
