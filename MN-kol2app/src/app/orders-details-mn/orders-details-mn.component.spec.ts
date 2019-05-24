import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersDetailsMNComponent } from './orders-details-mn.component';

describe('OrdersDetailsMNComponent', () => {
  let component: OrdersDetailsMNComponent;
  let fixture: ComponentFixture<OrdersDetailsMNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersDetailsMNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersDetailsMNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
