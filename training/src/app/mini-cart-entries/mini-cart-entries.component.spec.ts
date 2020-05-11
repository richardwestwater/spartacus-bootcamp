import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniCartEntriesComponent } from './mini-cart-entries.component';

describe('MiniCartEntriesComponent', () => {
  let component: MiniCartEntriesComponent;
  let fixture: ComponentFixture<MiniCartEntriesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MiniCartEntriesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MiniCartEntriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
