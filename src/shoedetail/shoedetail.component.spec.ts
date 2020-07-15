import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoedetailComponent } from './shoedetail.component';

describe('ShoedetailComponent', () => {
  let component: ShoedetailComponent;
  let fixture: ComponentFixture<ShoedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShoedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
