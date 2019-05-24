import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersMNComponent } from './orders-mn.component';

describe('OrdersMNComponent', () => {
  let component: OrdersMNComponent;
  let fixture: ComponentFixture<OrdersMNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersMNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersMNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
