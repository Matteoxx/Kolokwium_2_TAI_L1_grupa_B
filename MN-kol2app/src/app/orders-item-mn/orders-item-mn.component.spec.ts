import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersItemMNComponent } from './orders-item-mn.component';

describe('OrdersItemMNComponent', () => {
  let component: OrdersItemMNComponent;
  let fixture: ComponentFixture<OrdersItemMNComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersItemMNComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersItemMNComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
