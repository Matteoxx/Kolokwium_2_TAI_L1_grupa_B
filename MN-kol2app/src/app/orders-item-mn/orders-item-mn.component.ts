import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-orders-item-mn",
  templateUrl: "./orders-item-mn.component.html",
  styleUrls: ["./orders-item-mn.component.css"]
})
export class OrdersItemMNComponent implements OnInit {
  @Input() orderItem: any;

  constructor(private router: Router) {}

  ngOnInit() {}

  goToOrderDetails(id) {
    this.router.navigate(["/product-details", id]);
  }
}
