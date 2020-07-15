import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterlogComponent } from './afterlog.component';

describe('AfterlogComponent', () => {
  let component: AfterlogComponent;
  let fixture: ComponentFixture<AfterlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AfterlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
